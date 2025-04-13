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

type InputNumberFieldProps = {
  name: string
  label: string
  placeholder?: string
  description?: string
  disabled?: boolean
}

export const InputNumberField = ({
  name,
  label,
  placeholder,
  description,
  disabled = false,
}: InputNumberFieldProps) => {
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
              onChange={(event) =>
                field.onChange?.(Number.parseInt(event.target.value, 10))
              }
              type="number"
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
