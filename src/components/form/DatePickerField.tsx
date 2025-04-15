import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { cn } from '@/lib/utils'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarIcon, XIcon } from 'lucide-react'
import { useFormContext } from 'react-hook-form'
import { Button } from '../ui/button'
import { Calendar } from '../ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'

type DatePickerProps = {
  name: string
  label: string
  placeholder?: string
  description?: string
  isClearable?: boolean
  disabled?: boolean
}

export const DatePickerField = ({
  name,
  label,
  placeholder,
  description,
  isClearable = false,
  disabled = false,
}: DatePickerProps) => {
  const { control } = useFormContext()

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>

          <div
            className={cn(
              disabled && 'cursor-not-allowed',
              'w-full flex items-center gap-2  grid grid-cols-[1fr,auto]',
            )}
          >
            <Popover>
              <FormControl>
                <PopoverTrigger
                  asChild
                  disabled={disabled}
                  className="cursor-not-allowed"
                >
                  <Button
                    disabled={disabled}
                    variant={'outline'}
                    className="w-full justify-start text-left font-normal  "
                    ref={field.ref}
                  >
                    <CalendarIcon />
                    {field.value ? (
                      format(field.value, 'dd/MM/yyyy')
                    ) : (
                      <span className="text-muted-foreground">
                        {placeholder || 'Selecione uma data'}
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
              </FormControl>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  defaultMonth={field.value}
                  selected={field.value}
                  onSelect={(selectedDate) => {
                    field.onChange(selectedDate)
                  }}
                  locale={ptBR}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            {isClearable && field.value && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => field.onChange(null)}
                className=" inline-flex text-muted-foreground hover:text-red-500  h-10 w-10 items-center justify-center rounded-md"
              >
                <XIcon className="w-6 h-6" />
              </Button>
            )}
          </div>

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
