import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { useFormContext } from 'react-hook-form'

type SelectOption = {
  label: string
  value: string | number
}

type SelectFieldProps = {
  name: string
  label: string
  options: SelectOption[]
  placeholder?: string
  description?: string
  disabled?: boolean
  onChange?: (value: number | string) => void
}

export const SelectField = ({
  name,
  label,
  options,
  placeholder,
  description,
  disabled = false,
  onChange,
}: SelectFieldProps) => {
  const { control } = useFormContext()
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem>
            <FormLabel>{label}</FormLabel>

            <Select
              {...field}
              disabled={disabled}
              onValueChange={(value) => {
                field.onChange(+value)
                onChange?.(value)
              }}
              value={String(field.value || '')}
            >
              <FormControl className="w-full overflow-hidden">
                <SelectTrigger>
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <>
                  {options.map((option) => (
                    <SelectItem
                      key={String(option.value)}
                      value={String(option.value)}
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                  {options.length === 0 && (
                    <SelectItem value="disabled" disabled>
                      Nenhum valor encontrado
                    </SelectItem>
                  )}
                </>
              </SelectContent>
            </Select>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
