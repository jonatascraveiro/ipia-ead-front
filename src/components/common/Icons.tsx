import { cn } from '@/lib/utils'
import {
  BookPlus,
  CalendarPlus,
  CalendarSync,
  ClockAlert,
  DiamondPlus,
  Eye,
  FileQuestion,
  Group,
  Home,
  ListTodo,
  NotebookText,
  Pencil,
  SpellCheck,
  Trash2,
  Users2,
} from 'lucide-react'

export const Icone = {
  cursos: ({ className, color }: { className?: string; color?: string }) => (
    <DiamondPlus className={cn('size-6', className)} color={color} />
  ),
  alunos: ({ className, color }: { className?: string; color?: string }) => (
    <Users2 className={cn('size-6', className)} color={color} />
  ),
  aulas: ({ className, color }: { className?: string; color?: string }) => (
    <ClockAlert className={cn('size-6', className)} color={color} />
  ),
  turmas: ({ className, color }: { className?: string; color?: string }) => (
    <SpellCheck className={cn('size-6', className)} color={color} />
  ),
  biblioteca: ({
    className,
    color,
  }: { className?: string; color?: string }) => (
    <BookPlus className={cn('size-6', className)} color={color} />
  ),
  formulario: ({
    className,
    color,
  }: { className?: string; color?: string }) => (
    <FileQuestion className={cn('size-6', className)} color={color} />
  ),
  modulo: ({ className, color }: { className?: string; color?: string }) => (
    <Group className={cn('size-6', className)} color={color} />
  ),
  inscricoes: ({
    className,
    color,
  }: { className?: string; color?: string }) => (
    <NotebookText className={cn('size-6', className)} color={color} />
  ),
  home: ({ className, color }: { className?: string; color?: string }) => (
    <Home className={cn('size-6', className)} color={color} />
  ),
  perguntas: ({ className, color }: { className?: string; color?: string }) => (
    <ListTodo className={cn('size-6', className)} color={color} />
  ),
  editar: ({ className, color }: { className?: string; color?: string }) => (
    <Pencil className={cn('size-6', className)} color={color} />
  ),
  calendario: ({
    className,
    color,
  }: { className?: string; color?: string }) => (
    <CalendarPlus className={cn('size-6', className)} color={color} />
  ),
  calendarioEditar: ({
    className,
    color,
  }: { className?: string; color?: string }) => (
    <CalendarSync className={cn('size-6', className)} color={color} />
  ),
  deletar: ({ className, color }: { className?: string; color?: string }) => (
    <Trash2 className={cn('size-6 ', className)} color={color || 'red'} />
  ),
  visualizar: ({
    className,
    color,
  }: { className?: string; color?: string }) => (
    <Eye className={cn('size-6', className)} color={color} />
  ),
} as const
