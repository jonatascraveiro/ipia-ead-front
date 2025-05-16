// src/store/dialog-store.ts
import { create } from 'zustand'

interface DialogState {
  open: boolean
  title?: string
  description?: string
  content?: React.ReactNode
  onConfirm?: () => void
  onCancel?: () => void
  openDialog: (
    props: Omit<DialogState, 'open' | 'openDialog' | 'closeDialog'>,
  ) => void
  closeDialog: () => void
}

export const useDialogStore = create<DialogState>((set) => ({
  open: false,
  openDialog: (props) => set({ ...props, open: true }),
  closeDialog: () => set({ open: false }),
  onCancel: () => set({ open: false }),
}))
