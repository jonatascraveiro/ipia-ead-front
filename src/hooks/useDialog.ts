// src/hooks/use-dialog.ts
import { useDialogStore } from '@/store/dialog-store'

export const useDialog = () => {
  const { openDialog, closeDialog } = useDialogStore()

  const showDialog = (props: {
    title: string
    description?: string
    content?: React.ReactNode
    onConfirm?: () => void
    onCancel?: () => void
  }) => {
    openDialog(props)
  }

  return {
    showDialog,
    closeDialog,
  }
}
