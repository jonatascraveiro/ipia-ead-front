import { UploadAdapterPlugin } from '@/plugins/UploadAdapterPlugin'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import {
  Alignment,
  Autoformat,
  BlockQuote,
  Bold,
  ClassicEditor,
  CloudServices,
  Essentials,
  FileRepository,
  FontBackgroundColor,
  FontColor,
  FontSize,
  Heading,
  Image,
  ImageCaption,
  ImageInsert,
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
          // UploadAdapterPlugin,
          Autoformat,
          BlockQuote,
          Bold,
          CloudServices,
          Essentials,
          Heading,
          Image,
          FileRepository,
          ImageCaption,
          ImageResize,
          ImageStyle,
          ImageToolbar,
          ImageUpload,
          // Base64UploadAdapter,
          Indent,
          IndentBlock,
          ImageInsert,
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
          FontColor,
          FontBackgroundColor,
          FontSize,
          Underline,
          Alignment,
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
          'textTransformation',
          'fontColor',
          'fontBackgroundColor',
          'fontSize',
          'alignment',
          '|',
          'link',

          'insertImageViaUrl',
          '|',

          'uploadImage',
          'imageCaption',
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
        fontSize: {
          options: [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30],
        },
        heading: {
          options: [
            {
              model: 'paragraph',
              title: 'Parágrafo',
              class: 'ck-heading_paragraph',
            },
            {
              model: 'heading1',
              view: 'h1',
              title: 'Titulo 1',
              class: 'ck-heading_heading1',
            },
            {
              model: 'heading2',
              view: 'h2',
              title: 'Titulo 2',
              class: 'ck-heading_heading2',
            },
            {
              model: 'heading3',
              view: 'h3',
              title: 'Titulo 3',
              class: 'ck-heading_heading3',
            },
            {
              model: 'heading4',
              view: 'h4',
              title: 'Titulo 4',
              class: 'ck-heading_heading4',
            },
          ],
        },
        extraPlugins: [UploadAdapterPlugin],
        simpleUpload: {
          uploadUrl: 'http://localhost:3000/graphql', // pode ser um REST ou GraphQL multipart
          withCredentials: false,
          headers: {
            // Authorization: `Bearer ${token}`, // ou qualquer header que você precise
          },
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
