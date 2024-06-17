import { useState } from 'react'
import logo from '../assets/LogoAssumtek.png'
import { useNavigate } from 'react-router-dom';

export function Login(){

    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
  
    function handleRegister(e: any){
      e.preventDefault()
      console.log('Verificando no BD o seguinte login:\n Email', email, "\nSenha:", senha)
      if (email== "santospefelipe@gmail.com" && senha === "123") {
        navigate('/registro');
      }else{
        alert("Usuario incorreto D:")
      }
    }

    return(
        <div className="container h-screen w-screen mx-auto flex items-center justify-center flex-col gap-8 max-w-sm p-3">
        <div className="flex flex-col items-center justify-center mx-2">
          <img src={logo} alt="Logo Assumtek" className='w-60' />
        </div>
  
        <form 
        className='flex flex-col gap-3.5 w-full'
        onSubmit={handleRegister}
        >
          <input
            placeholder='Email Address'
            type="email"
            value={email}
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            className='text-sm leading-6 text-branco bg-preto forced-none p-2 px-3.5 placeholder:text-cinza focus:pointer-events-none border-solid border-1 border rounded-lg'
          />
          <input
            placeholder='Password'
            type='password'
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            className='text-sm leading-6 text-branco bg-preto forced-none p-2 px-3.5 placeholder:text-cinza focus:ring-offset-branco border-solid border-1 border rounded-lg'
          />
  
          <button 
          type="submit"
          className='bg-azul text-sm p-3 rounded-lg mt-2'
          >Login</button>
        </form>
      </div>
    )
}