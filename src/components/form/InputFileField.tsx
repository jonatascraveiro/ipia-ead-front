import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useRef, useState } from 'react'

import { useFormContext } from 'react-hook-form'

type InputFileFieldProps = {
  name: string
  label: string
  placeholder?: string
  description?: string
  disabled?: boolean
  urlPreview?: string
}

export const InputFileField = ({
  name,
  label,
  placeholder,
  description,
  disabled = false,
  urlPreview,
}: InputFileFieldProps) => {
  const { control } = useFormContext()

  const inputRef = useRef<HTMLInputElement | null>(null)
  const [preview, setPreview] = useState<string | undefined>(urlPreview)

  return (
    <div className="flex flex-col gap-2 justify-center">
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            <FormLabel>{label}</FormLabel>
            {!disabled && (
              <FormControl>
                <Input
                  {...field}
                  value={''}
                  onChange={(e) => {
                    const files = e.target.files
                    if (files && files.length > 0) {
                      field.onChange(files[0])
                      const fileUrl = URL.createObjectURL(files[0])
                      setPreview(fileUrl)
                    }
                  }}
                  disabled={disabled}
                  name={name}
                  ref={inputRef}
                  type={'file'}
                  placeholder={placeholder}
                />
              </FormControl>
            )}
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )}
      />
      {preview && (
        <img
          src={preview}
          alt="Pré-visualização"
          className="w-40  rounded border"
        />
      )}
    </div>
  )
}
