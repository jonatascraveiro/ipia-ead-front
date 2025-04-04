import { useForm } from "react-hook-form"
import { getColumns } from "./columns"

export const useDocumento = () => {

const form=useForm<{nome:string}>({
  defaultValues:{
    nome:''
  }
})

  const data={data:[{
    id: 1,
    fisica: 1,
    juridica: 1,
    nome: "teste",
   
  },{
    id: 12,
    fisica: 1,
    juridica: 1,
    nome: "teste 222",
   
  }]}




  const columns= getColumns();
  return{
    columns,
    data,
    form,
  }
}