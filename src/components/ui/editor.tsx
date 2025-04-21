import { CKEditor } from '@ckeditor/ckeditor5-react'
import {
  Autoformat,
  Base64UploadAdapter,
  BlockQuote,
  Bold,
  ClassicEditor,
  CloudServices,
  Essentials,
  Heading,
  Image,
  ImageCaption,
  ImageResize,
  ImageStyle,
  ImageToolbar,
  ImageUpload,
  Indent,
  IndentBlock,
  Italic,
  Link,
  List,
  MediaEmbed,
  Mention,
  Paragraph,
  PasteFromOffice,
  PictureEditing,
  Table,
  TableColumnResize,
  TableToolbar,
  TextTransformation,
  Underline,
} from 'ckeditor5'
type Props = {
  data: string
  setData: (data: string) => void
  minHeight?: string
}

import 'ckeditor5/ckeditor5.css'

function EditorFormularioHtml({ data, setData, minHeight = '300px' }: Props) {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      config={{
        licenseKey: 'GPL',
        plugins: [
          Autoformat,
          BlockQuote,
          Bold,
          CloudServices,
          Essentials,
          Heading,
          Image,
          ImageCaption,
          ImageResize,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          Base64UploadAdapter,
          Indent,
          IndentBlock,
          Italic,
          Link,
          List,
          MediaEmbed,
          Mention,
          Paragraph,
          PasteFromOffice,
          PictureEditing,
          Table,
          TableColumnResize,
          TableToolbar,
          TextTransformation,
          Underline,
        ],
        toolbar: [
          'undo',
          'redo',
          '|',
          'heading',
          '|',
          'bold',
          'italic',
          'underline',
          '|',
          'link',
          'uploadImage',
          'ckbox',
          'insertTable',
          'blockQuote',
          'mediaEmbed',
          '|',
          'bulletedList',
          'numberedList',
          '|',
          'outdent',
          'indent',
        ],
        heading: {
          options: [
            {
              model: 'paragraph',
              title: 'Paragraph',
              class: 'ck-heading_paragraph',
            },
            {
              model: 'heading1',
              view: 'h1',
              title: 'Heading 1',
              class: 'ck-heading_heading1',
            },
            {
              model: 'heading2',
              view: 'h2',
              title: 'Heading 2',
              class: 'ck-heading_heading2',
            },
            {
              model: 'heading3',
              view: 'h3',
              title: 'Heading 3',
              class: 'ck-heading_heading3',
            },
            {
              model: 'heading4',
              view: 'h4',
              title: 'Heading 4',
              class: 'ck-heading_heading4',
            },
          ],
        },
        image: {
          resizeOptions: [
            {
              name: 'resizeImage:original',
              label: 'Default image width',
              value: null,
            },
            {
              name: 'resizeImage:50',
              label: '50% page width',
              value: '50',
            },
            {
              name: 'resizeImage:75',
              label: '75% page width',
              value: '75',
            },
          ],
          toolbar: [
            'imageTextAlternative',
            'toggleImageCaption',
            '|',
            'imageStyle:inline',
            'imageStyle:wrapText',
            'imageStyle:breakText',
            '|',
            'resizeImage',
          ],
        },
        link: {
          addTargetToExternalLinks: true,
          defaultProtocol: 'https://',
        },
        table: {
          contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells'],
        },
        initialData: data,
      }}
      onReady={(editor) => {
        editor.editing.view.change((writer) => {
          const rootElement = editor.editing.view.document.getRoot()
          if (rootElement) {
            writer.setStyle('min-height', minHeight, rootElement)
            writer.setStyle('max-height', '600px', rootElement)
            writer.setStyle('overflow-y', 'auto', rootElement)
          }
        })
      }}
      onChange={(_, editor) => {
        setData(editor.getData())
      }}
    />
  )
}

export { EditorFormularioHtml }
