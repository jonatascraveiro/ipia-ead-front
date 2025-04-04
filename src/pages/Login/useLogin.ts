import { useAuth } from "@/context/AuthContext"
import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { FormData, loginSchema } from "./schema"
import { zodResolver } from '@hookform/resolvers/zod'

const useLogin = () => {

	const { login } = useAuth();

  const navigate = useNavigate();
	const form = useForm<FormData>({
		resolver: zodResolver(loginSchema),
		defaultValues: {
			password: '',
			email: '',
		},
	});

	const  onSubmit = (values: FormData)=> {
    		
        login(values.email, () => {
          navigate('/', { replace: true });
        })
			
		};
	
  return (
    {
      form,
      onSubmit,
    }
  )
};

export  {useLogin}