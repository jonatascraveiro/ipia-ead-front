import { CKEditor } from '@ckeditor/ckeditor5-react'
import {
  Alignment,
  Bold,
  DecoupledEditor,
  Essentials,
  Image,
  Italic,
  List,
  Paragraph,
  Underline,
} from 'ckeditor5'
import { useEffect, useRef, useState } from 'react'

import 'ckeditor5/ckeditor5.css'
import { Label } from '../label'

type Props = {
  data: string
  errorMessage?: string
  setData: (data: string) => void
  minHeight?: string
  label?: string
}

function EditorHtml({
  data,
  setData,
  errorMessage,
  minHeight = '200px',
  label,
}: Props) {
  const editorToolbarRef = useRef<HTMLDivElement | null>(null)
  const [isMounted, setMounted] = useState<boolean>(false)

  const style = errorMessage ? { border: '1px solid var(--bs-danger)' } : {}
  useEffect(() => {
    setMounted(true)

    return () => {
      setMounted(false)
    }
  }, [])

  return (
    <div>
      {label && (
        <Label
          htmlFor={`input-editor-${label}`}
          className="ps-4 pt-2 fw-bold me-2"
        >
          {label}
        </Label>
      )}
      <div style={style}>
        <div ref={editorToolbarRef}></div>
        <div>
          {isMounted && (
            <CKEditor
              editor={DecoupledEditor}
              data={data}
              onChange={(_, editor) => {
                setData(editor.getData())
              }}
              config={{
                plugins: [
                  Bold,
                  Italic,
                  Paragraph,
                  Essentials,
                  Underline,
                  List,
                  Alignment,
                  Image,
                ],
                toolbar: [
                  'undo',
                  'redo',
                  '|',
                  'bold',
                  'italic',
                  'underline',
                  '|',
                  'alignment',
                  '|',
                  'bulletedList',
                  'numberedList',
                  '|',
                  'image',
                ],
              }}
              // config={{
              //   toolbar: {
              //     items: [
              //       'undo',
              //       'redo',
              //       '|',
              //       'heading',
              //       '|',
              //       'bold',
              //       'italic',

              //       '|',
              //       'link',
              //       'uploadImage',
              //       'insertTable',
              //       'blockQuote',
              //       'mediaEmbed',
              //       '|',
              //       'bulletedList',
              //       'numberedList',
              //       'outdent',
              //       'indent',
              //     ],
              //   },
              //   image: {
              //     toolbar: [
              //       'imageStyle:inline',
              //       'imageStyle:block',
              //       'imageStyle:side',
              //       '|',
              //       'toggleImageCaption',
              //       'imageTextAlternative',
              //     ],
              //   },
              //   table: {
              //     contentToolbar: [
              //       'tableColumn',
              //       'tableRow',
              //       'mergeTableCells',
              //     ],
              //   },
              // }}
              onReady={(editor) => {
                if (editorToolbarRef.current) {
                  editorToolbarRef.current.appendChild(
                    editor.ui.view.toolbar.element as HTMLElement,
                  )
                }
                editor.editing.view.change((writer) => {
                  const rootElement = editor.editing.view.document.getRoot()
                  if (rootElement) {
                    writer.setStyle('min-height', minHeight, rootElement)
                  }
                })
              }}
              onAfterDestroy={() => {
                if (editorToolbarRef.current) {
                  // biome-ignore lint/complexity/noForEach: <explanation>
                  Array.from(editorToolbarRef.current.children).forEach(
                    (child) => child.remove(),
                  )
                }
              }}
            />
          )}
        </div>
        {errorMessage && (
          <div style={{ fontSize: '0.875em' }} className="text-danger mt-2">
            {errorMessage}
          </div>
        )}
      </div>
    </div>
  )
}

export default EditorHtml
