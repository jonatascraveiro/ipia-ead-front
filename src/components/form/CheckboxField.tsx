import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'

import { useFormContext } from 'react-hook-form'
import { Checkbox } from '../ui/checkbox'

type CheckboxFieldProps = {
  name: string
  label: string
  placeholder?: string
  description?: string
  disabled?: boolean
  type?: 'text' | 'email' | 'password' | 'number'
}

export const CheckboxField = ({
  name,
  label,
  description,
  disabled = false,
}: CheckboxFieldProps) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
          <FormControl>
            <Checkbox
              disabled={disabled}
              checked={field.value}
              onCheckedChange={field.onChange}
            />
          </FormControl>
          <div className="space-y-1 leading-none">
            <FormLabel>{label}</FormLabel>
            {description && <FormDescription>{description}</FormDescription>}
          </div>

          <FormMessage />
        </FormItem>
      )}
    />
  )
}
