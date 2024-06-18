import logo from '../assets/LogoAssumtek.png'

import { Button } from '@/components/ui/button';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

import { useForm } from 'react-hook-form'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';


const FormSchema = z.object({
  email: z.string().email({ message: "Email invalido" }),
  senha: z.string().min(5, { message: "Sua senha tem menos de 5 caracteres" })
  ,
})

export function Login() {

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const navigate = useNavigate();

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data)
    navigate('/registro');
  }



  return (
    <div className="container h-screen w-screen mx-auto flex items-center justify-center flex-col gap-8 max-w-lg p-3">
      <div className="flex flex-col items-center justify-center mx-2">
        <img src={logo} alt="Logo Assumtek" className='w-60' />
      </div>


      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>

                <Input  placeholder="Seu email" {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="senha"
            render={({ field }) => (
              <FormItem>
                <FormControl>

                <Input type='password' placeholder="Senha" {...field}/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button type="submit" className='w-full bg-azul text-branco hover:bg-[#0849C2]'>Entrar</Button>
        </form>
      </Form>
    </div>
  )
}