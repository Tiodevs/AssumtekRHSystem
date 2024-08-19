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

// API
import { useEffect, useState } from 'react';
import api from '../api'; // Importe a instância do Axios


const FormSchema = z.object({
  email: z.string().email({ message: "Email invalido" }),
  senha: z.string().min(5, { message: "Sua senha tem menos de 5 caracteres" })
  ,
})

export function Login() {

  // API
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("")

  useEffect(() => {
    // Faz a requisição GET para buscar os usuários
    api.get('/user')
      .then(response => {
        setUsers(response.data); // Atualiza o estado com os dados recebidos
      })
      .catch(error => {
        console.error("Houve um erro ao buscar os usuários!", error);
      });
  }, []);

  console.log("segundo print", users)

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  })

  const navigate = useNavigate();

  async function onSubmit (data: z.infer<typeof FormSchema>) {
    console.log(data.senha)

    const email = data.email
    const senha = data.senha

    try {
      const response = await api.post('/user/login', { "email":email, "senha":senha });

      if (response.data.userId) {
        console.log('Login bem-sucedido!', response.data.userId);
        navigate('/registro');
      }
    } catch (error) {
      console.log('Email ou senha incorretos', error);
      setError("Email ou senha incorretos")
    }
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

                  <Input placeholder="Seu email" {...field} />
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

                  <Input type='password' placeholder="Senha" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {error ? <p>{error}</p>: <></>}
          <Button type="submit" className='w-full bg-azul text-branco hover:bg-[#0849C2]'>Entrar</Button>
        </form>
      </Form>
    </div>
  )
}