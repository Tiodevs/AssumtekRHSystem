import { useState } from 'react';
import fotoFelipe from '../assets/fotoFelipe.png'

import { Bell } from 'lucide-react'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link } from 'react-router-dom';

type HeaderI = {
    titulo: string,
    descricao: string
}

export function Header({ titulo, descricao }: HeaderI) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className='flex justify-end xl:flex xl:justify-between '>
            {/* Titulos */}
            <div className='hidden xl:block'>
                <h2 className="text-2xl font-bold mb-1">{titulo}</h2>
                <p className='text-sm'>{descricao}</p>
            </div>
            {/* Perfil */}
            <div className='flex space-x-3 items-center'>
                <div
                    className="p-4 h-16 w-16 flex items-center justify-center rounded-xl cursor-pointer border-2 group hover:bg-azulNav hover:border-azul"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <Bell color={isHovered === false ? '#FFFF' : '#0F62FE'} />
                </div>



                <DropdownMenu>
                    <DropdownMenuTrigger>
                        <div className='cursor-pointer flex p-2 pr-3 border-2 h-16 rounded-xl items-center justify-center space-x-2'>
                            <img src={fotoFelipe} className='w-11 h-11' alt="Foto perfil" />
                            <div className='text-start overflow-x-hidden'>
                                <h1 className='font-bold text-base text-nowrap'>Felipe Santos</h1>
                                <p className='font-light text-xs'>Programador</p>
                            </div>
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent>
                        <DropdownMenuLabel>Sua conta</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        
                        <Link to={"/user"}>
                            <DropdownMenuItem>
                                Perfil
                            </DropdownMenuItem>
                        </Link>
                        <Link to={"/"}>
                            <DropdownMenuItem>
                                Sair
                            </DropdownMenuItem>
                        </Link>

                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}