import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

import { useFormContext } from 'react-hook-form'

type InputFieldProps = {
  name: string
  label: string
  placeholder?: string
  description?: string
  disabled?: boolean
  autoFocus?: boolean
  type?: 'text' | 'email' | 'password' | 'number' | 'file'
}

export const InputField = ({
  name,
  label,
  placeholder,
  description,
  disabled = false,
  autoFocus = false,
  type = 'text',
}: InputFieldProps) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              {...field}
              disabled={disabled}
              type={type}
              placeholder={placeholder}
              autoFocus={autoFocus}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
