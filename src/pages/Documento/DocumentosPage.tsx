import DataTable from "@/components/DataTable"
import { useDocumento } from "./useDocumento"
import { InputField } from "@/components/form/InputField"
import { Form } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Search, Trash2Icon } from "lucide-react"





export function DocumentosPage() {

	const { data, columns, form } = useDocumento()

	return (
		<div className=" gap-4 md:gap-6">
			<h1 className="mb-2">Documento</h1>



			<Form {...form}>
				<form
					onSubmit={form.handleSubmit(console.log)}
					className="grid grid-cols-12 gap-4 md:gap-6 mb-2 mx-2"
				>
					<div className=" xl:col-span-3 col-span-12 md:col-span-6 ">
						<InputField
							label="Nome"
							placeholder="nome do documento"
							name="nome"

						/>
					</div>
					<div className=" xl:col-span-3 col-span-12 md:col-span-6 flex  items-end gap-3">
						<Button type="submit">
							<Search />
						</Button>
						<Button
							variant={'outline'}
							onClick={() => form.reset()}
							type="reset"
						>
							<Trash2Icon />
						</Button>
					</div>
				</form>
			</Form>

			<DataTable data={data.data} columns={columns} />

		</div>
	)
}
