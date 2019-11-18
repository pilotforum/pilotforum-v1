import { useRef, useState, useEffect } from 'react'

export default function useCKEditor() {
  const editorRef = useRef()
  const [isEditorLoaded, setIsEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      CKEditor: require('@ckeditor/ckeditor5-react'),
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic')
    }
    setIsEditorLoaded(true)
  }, [])

  return Object.freeze({
    isEditorLoaded,
    CKEditor,
    ClassicEditor
  })
}
