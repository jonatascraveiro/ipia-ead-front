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
}

export const SelectField = ({
	name,
	label,
	options,
	placeholder,
	description,
	disabled = false,
}: SelectFieldProps) => {
	const { control } = useFormContext()
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => {
				console.log(field.value)
				return (
					<FormItem>
						<FormLabel>{label}</FormLabel>

						<Select
							{...field}
							disabled={disabled}
							onValueChange={(value) => field.onChange(value)}
							value={field.value}
						>
							<FormControl>
								<SelectTrigger>
									<SelectValue placeholder={placeholder} />
								</SelectTrigger>
							</FormControl>
							<SelectContent>
								{options.map((option) => (
									<SelectItem
										key={String(option.value)}
										value={String(option.value)}
									>
										{option.label}
									</SelectItem>
								))}
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
