import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { useFormContext } from 'react-hook-form'
import { Textarea } from '../ui/textarea'

type TextareaFieldProps = {
  name: string
  label: string
  placeholder?: string
  description?: string
  disabled?: boolean
}

export const TextareaField = ({
  name,
  label,
  placeholder,
  description,
  disabled = false,
}: TextareaFieldProps) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Textarea
              {...field}
              disabled={disabled}
              placeholder={placeholder}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
