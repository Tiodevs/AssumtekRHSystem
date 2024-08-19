
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'

import { Separator } from "@/components/ui/separator"
import { InfoUser } from '@/components/InfoUser'
import { Button } from '@/components/ui/button'

import { FileDown } from 'lucide-react'

export function User() {
    return (
        <div className="flex min-h-screen  p-8">

            <Nav />

            <main className="flex-1 px-8 py-4 max-w-full">
                <Header
                    titulo="User"
                    descricao="Suas informações e documentos."
                />

                <div className='border-2 p-4 h-auto min-h-96 mt-7 rounded-md max-md:w-screen '>
                    <div className='flex gap-5 items-center mb-5'>
                        <Avatar className='w-32 h-32 rounded-xl'>
                            <AvatarImage src="https://github.com/Tiodevs.png" />
                            <AvatarFallback>FE</AvatarFallback>
                        </Avatar>
                        <div>
                            <h1 className='font-medium text-3xl'>Felipe P. dos Santos</h1>
                            <p className='text-lg'>Programador</p>
                        </div>
                    </div>
                    <Separator />
                    <div className='flex gap-10 mt-4 flex-wrap'>
                        <InfoUser
                        titulo= "Nome"
                        info= "Felipe"
                        />
                        <InfoUser
                        titulo= "Sobrenome"
                        info= "Pereira dos Santos"
                        />
                        <InfoUser
                        titulo= "Equipe"
                        info= "Tech"
                        />
                        <InfoUser
                        titulo= "Email"
                        info= "Santospefelipe@gmail.com"
                        />
                        <InfoUser
                        titulo= "Telefone"
                        info= "(41) 987208843"
                        />
                        <InfoUser
                        titulo= "Cidade"
                        info= "Curitiba"
                        />
                        <InfoUser
                        titulo= "Data de nascimento"
                        info= "08/10/2002"
                        />
                        <InfoUser
                        titulo= "Data de inicio"
                        info= "20/02/2024"
                        />
                        <InfoUser
                        titulo= "CPF"
                        info= "132.725.709-20"
                        />
                        <InfoUser
                        titulo= "RG"
                        info= "13.620.231-5"
                        />
                        <InfoUser
                        titulo= "First Name"
                        info= "Brooklyn"
                        />
                        <InfoUser
                        titulo= "First Name"
                        info= "Brooklyn"
                        />
                    </div>

                    <div className='flex gap-10 mt-6 flex-wra'>
                        <Button variant="outline" className='w-80 h-12 text-start flex justify-between'>
                            RG.png
                            <FileDown className='w-5'/>
                        </Button>
                        <Button variant="outline" className='w-80 h-12 text-start flex justify-between'>
                            CPF.png
                            <FileDown className='w-5'/>
                        </Button>
                        <Button variant="outline" className='w-80 h-12 text-start flex justify-between'>
                            Foto.png
                            <FileDown className='w-5'/>
                        </Button>
                        <Button variant="outline" className='w-80 h-12 text-start flex justify-between'>
                            CV.png
                            <FileDown className='w-5'/>
                        </Button>
                    </div>

                </div>
            </main>
        </div>
    )
}