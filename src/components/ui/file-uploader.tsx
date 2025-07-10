import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import {
  AlertCircle,
  Check,
  File,
  FileAudio,
  FileText,
  FileVideo,
  Image as ImageIcon,
  Upload,
} from 'lucide-react'
import React, { useState, useRef, useCallback, useEffect } from 'react'

import { FormLabel } from './form'

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: number }
>(({ className, value = 0, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative w-full overflow-hidden rounded-full bg-secondary',
      className,
    )}
    {...props}
  >
    <div
      className="h-full w-full flex-1 bg-primary transition-all duration-300 ease-in-out"
      style={{ width: `${value}%` }}
    />
  </div>
))
Progress.displayName = 'Progress'

export interface FileWithPreview {
  id: string
  file: File
  name: string
  size: number
  type: string
  progress: number
  status: 'uploading' | 'complete' | 'error'
  error?: string | null
  preview?: string | null
  croppedPreview?: string | null
  originalFile?: File
}

export interface FileUploaderProps {
  onFilesReady?: (files: File[]) => void
  maxFiles?: number
  maxSize?: number
  accept?: string[]
  className?: string
  enableCropping?: boolean
  cropAspectRatio?: number
  cropMinWidth?: number
  cropMinHeight?: number
  label?: string
  description?: string
  multiple?: boolean
}

export function FileUploader({
  onFilesReady,
  maxFiles = 10,
  maxSize = 10 * 1024 * 1024,
  accept = ['image/*', 'application/pdf', 'text/*'],
  className,

  label,
  description,
  multiple = false,
}: FileUploaderProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([])
  const [dragActive, setDragActive] = useState(false)

  const fileInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    return () => {
      // biome-ignore lint/complexity/noForEach: <explanation>
      files.forEach((file) => {
        if (file.preview) URL.revokeObjectURL(file.preview)
        if (file.croppedPreview) URL.revokeObjectURL(file.croppedPreview)
      })
    }
  }, [files])

  const getFileIcon = useCallback((file: File) => {
    if (file.type.startsWith('image/'))
      return <ImageIcon className="w-4 h-4" aria-hidden="true" />
    if (file.type.startsWith('video/'))
      return <FileVideo className="w-4 h-4" aria-hidden="true" />
    if (file.type.startsWith('audio/'))
      return <FileAudio className="w-4 h-4" aria-hidden="true" />
    if (file.type === 'application/pdf')
      return <FileText className="w-4 h-4" aria-hidden="true" />
    return <File className="w-4 h-4" aria-hidden="true" />
  }, [])

  const formatFileSize = useCallback((bytes: number) => {
    if (bytes === 0) return '0 Bytes'
    const k = 1024
    const sizes = ['Bytes', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return (
      // biome-ignore lint/style/useExponentiationOperator: <explanation>
      // biome-ignore lint/style/useTemplate: <explanation>
      Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
    )
  }, [])

  const validateFile = useCallback(
    (file: File) => {
      if (file.size > maxSize) {
        return `File size exceeds ${formatFileSize(maxSize)}`
      }

      const fileType = file.type
      const isAccepted = accept.some((type) => {
        if (type.endsWith('/*')) {
          return fileType.startsWith(type.slice(0, -1))
        }
        return fileType === type
      })

      if (!isAccepted) {
        return 'File type not supported'
      }

      return null
    },
    [maxSize, accept, formatFileSize],
  )

  const addFiles = useCallback(
    (newFiles: FileList) => {
      if (files.length >= maxFiles) return

      const filesToAdd = Array.from(newFiles).slice(0, maxFiles - files.length)

      const processedFiles = filesToAdd.map((file) => {
        const error = validateFile(file)
        const isImage = file.type.startsWith('image/')

        return {
          id: Math.random().toString(36).substring(2, 11),
          file,
          name: file.name,
          size: file.size,
          type: file.type,
          progress: error ? 0 : 100,
          status: error ? 'error' : 'complete',
          error,
          preview: isImage ? URL.createObjectURL(file) : null,
        } as FileWithPreview
      })

      const newFileList = [...files, ...processedFiles]
      setFiles(newFileList)

      const validFiles = newFileList.filter((f) => !f.error).map((f) => f.file)
      if (onFilesReady) {
        onFilesReady(validFiles)
      }
    },
    [files, maxFiles, validateFile, onFilesReady],
  )

  const handleDrag = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }, [])

  const handleDrop = useCallback(
    (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault()
      e.stopPropagation()
      setDragActive(false)

      if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
        addFiles(e.dataTransfer.files)
      }
    },
    [addFiles],
  )

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        addFiles(e.target.files)
      }
    },
    [addFiles],
  )

  const clearAllFiles = useCallback(() => {
    // biome-ignore lint/complexity/noForEach: <explanation>
    files.forEach((file) => {
      if (file.preview) URL.revokeObjectURL(file.preview)
      if (file.croppedPreview) URL.revokeObjectURL(file.croppedPreview)
    })
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
    setFiles([])
    if (onFilesReady) {
      onFilesReady([])
    }
  }, [files, onFilesReady])

  const openFileDialog = () => {
    fileInputRef.current?.click()
  }

  return (
    <div className={cn('w-full space-y-4', className)}>
      <FormLabel>{label}</FormLabel>
      <Card
        className={cn(
          'relative border-2 border-dashed transition-colors duration-200 py-1',
          dragActive ? 'border-primary bg-primary/5' : 'border-muted',
          files.length >= maxFiles && 'opacity-50 pointer-events-none',
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <CardContent className="flex flex-col items-center justify-center p-2 text-center">
          <Button
            onClick={openFileDialog}
            variant="outline"
            className="transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
            disabled={files.length >= maxFiles}
            type="button"
          >
            <Upload className="w-8 h-8" /> Selecionar arquivo
          </Button>

          <p className="text-xs text-muted-foreground mt-2">
            Max. {maxFiles} arquivo, tamano máximo de {formatFileSize(maxSize)}
          </p>
        </CardContent>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        <input
          ref={fileInputRef}
          type="file"
          multiple={multiple}
          accept={accept.join(',')}
          onChange={handleInputChange}
          className="hidden"
        />
      </Card>

      {files.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-medium">
              Arquivos selecionados ({files.length}/{maxFiles})
            </h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFiles}
              className="text-xs hover:bg-destructive/10 hover:text-destructive"
            >
              Limpar
            </Button>
          </div>

          {files.map((fileData) => (
            <Card key={fileData.id} className="relative overflow-hidden group">
              <div
                className={cn(
                  'absolute inset-0 opacity-0 transition-opacity duration-200',
                  fileData.error ? 'bg-destructive/5' : 'bg-primary/5',
                )}
              />
              <CardContent className="p-4 relative">
                <div className="flex items-start gap-3">
                  {fileData.preview ? (
                    <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0 border">
                      <img
                        src={fileData.croppedPreview || fileData.preview}
                        alt={fileData.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 bg-muted rounded-md flex items-center justify-center flex-shrink-0 border">
                      {fileData.error ? (
                        <AlertCircle className="w-6 h-6 text-destructive" />
                      ) : (
                        getFileIcon(fileData.file)
                      )}
                    </div>
                  )}

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium truncate">
                        {fileData.name}
                      </p>
                      {fileData.status === 'complete' && !fileData.error && (
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                      )}
                    </div>

                    <p className="text-xs text-muted-foreground mb-2">
                      {formatFileSize(fileData.size)} • {fileData.type}
                    </p>

                    {fileData.error ? (
                      <p className="text-xs text-destructive flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {fileData.error}
                      </p>
                    ) : (
                      <Progress value={fileData.progress} className="h-2" />
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
