// Inport interno
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import { useState } from 'react';
import { NewLog } from '@/components/NewLog';



export function Registro() {

    const [BD, setBd] = useState([
        {
            nome: "Felipe Pereira dos Santos",
            tipo: "Saida Pausa",
            regime: "Presencial",
            horario: "11:20 PM",
            key: "aaaa",
        }
    ])


    return (
        <div className="flex min-h-screen  p-8">

            <Nav />

            <main className="flex-1 px-8 py-4">
                <Header
                    titulo="Registros"
                    descricao="Registo de pontos da equipe"
                />

                <div className='border-2 p-4 h-auto min-h-96 mt-7 rounded-md'>
                    <div className="flex justify-end gap-3">

                        <NewLog
                        BD={BD}
                        setBd= {setBd}
                        />

                    </div>
                    <Table className='mt-3'>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nome</TableHead>
                                <TableHead>Tipo</TableHead>
                                <TableHead>Regime</TableHead>
                                <TableHead className="text-right">Horario</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {BD.map(user => (
                                <TableRow key={user.key}>
                                    <TableCell className="font-medium flex items-center gap-3">
                                        <Avatar className='w-8 h-8'>
                                            <AvatarImage src="https://github.com/Tiodevs.png" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>

                                        <p>{user.nome}</p>
                                    </TableCell>
                                    <TableCell>{user.tipo}</TableCell>
                                    <TableCell>{user.regime}</TableCell>
                                    <TableCell className="text-right">{user.horario}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </main>
        </div>
    )
}