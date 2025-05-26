import { Button } from '@/components/ui/button'
// src/components/global-dialog.tsx
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { useDialogStore } from '@/store/dialog-store'

export function GlobalDialog() {
  const {
    open,
    title,
    description,
    content,
    onConfirm,
    onCancel,
    closeDialog,
  } = useDialogStore()

  return (
    <Dialog open={open} onOpenChange={closeDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        {content}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline" onClick={onCancel}>
              Cancelar
            </Button>
          </DialogClose>
          <Button
            onClick={() => {
              onConfirm?.()
            }}
          >
            Confirmar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
