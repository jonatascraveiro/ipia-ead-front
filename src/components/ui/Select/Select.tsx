import {
  SelectContent,
  SelectItem,
  Select as SelectPrimitive,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Label } from '../label'

type SelectOption =
  | {
      label: string
      value: string | number
    }
  | string
  | number

type SelectProps = {
  name: string
  label: string
  options: SelectOption[]
  placeholder?: string
  description?: string
  disabled?: boolean
  onChange: (value: number | string) => void
  value?: number | string
}

export const Select = ({
  name,
  label,
  options,
  placeholder,
  description,
  disabled = false,
  onChange,
  value,
}: SelectProps) => {
  const getOptionValue = (option: SelectOption) => {
    if (typeof option === 'object') {
      return String(option.value)
    }
    return String(option)
  }
  const getOptionLabel = (option: SelectOption) => {
    if (typeof option === 'object') {
      return option.label
    }
    return option
  }

  return (
    <div>
      {label && <Label>{label}</Label>}

      <SelectPrimitive
        disabled={disabled}
        name={name || undefined}
        onValueChange={(value) => onChange(value)}
        value={String(value || '')}
      >
        <div className="w-full">
          <SelectTrigger>
            <SelectValue placeholder={placeholder} />
          </SelectTrigger>
        </div>
        <SelectContent>
          {options.map((option) => (
            <SelectItem
              key={getOptionValue(option)}
              value={getOptionValue(option).toString()}
            >
              {getOptionLabel(option)}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectPrimitive>
      {description && (
        <p
          data-slot="form-description"
          className={'text-muted-foreground text-sm'}
        >
          {description}
        </p>
      )}
    </div>
  )
}
