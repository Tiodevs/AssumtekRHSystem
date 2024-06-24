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

import { useState, useEffect } from 'react';
import { NewLog } from '@/components/NewLog';
import { FilterLog } from '@/components/FilterLog';
// import { any } from 'zod';

interface Event {
    nome: string;
    tipo: string;
    regime: string;
    momento: string;
    momentoMark: Date;
    key: string;
  }



export function Registro() {

    const [BD, setBd] = useState([
        {
            nome: "Felipe Pereira dos Santos",
            tipo: "Saida Pausa",
            regime: "Presencial",
            momento: "21/06/24 | 9:38 PM",
            momentoMark: new Date(),
            key: "aaaa",
        }
    ])

    const [BDFilter, setBDFilter] = useState<Event[]>([])

    const [dataFilter, setDataFilter] = useState(new Date())



    useEffect(() => {
        // Pegas as informaçoes salvas no localStorage e tranforma em lista denovo
        const LogStorage = localStorage.getItem('@BD')
        if (LogStorage) {
            setBd(JSON.parse(LogStorage))
        }
        console.log("todo o BD", BD)
    }, [])

    useEffect(() => {
        // Tranforma a lista em uma string usando JSON e salva os itens da lista no localStorage toda vez que a const tarefas for alterado
        localStorage.setItem('@BD', JSON.stringify(BD))
    }, [BD]);

    useEffect(() => {

        console.log("Filtro", dataFilter)

        const todayDateOnly = new Date(dataFilter.getFullYear(), dataFilter.getMonth(), dataFilter.getDate());

        const parseDate = (date:any) => {
            return typeof date === 'string' ? new Date(date) : date;
          };
        
        const filteredEvents = BD.filter(event => {

            const eventDate = parseDate(event.momentoMark);
            if (eventDate instanceof Date) {
                const eventDateOnly = new Date(eventDate.getFullYear(), eventDate.getMonth(), eventDate.getDate());
                return eventDateOnly.getTime() === todayDateOnly.getTime();
              }
              return false;
        });

        setBDFilter(filteredEvents)

        console.log("BD filtrado", BDFilter)

    }, [dataFilter]);



    return (
        <div className="flex min-h-screen  p-8">

            <Nav />

            <main className="flex-1 px-8 py-4">
                <Header
                    titulo="Registros"
                    descricao="Registo de pontos da equipe"
                />

                <div className='border-2 p-4 h-auto min-h-96 mt-7 rounded-md max-md:w-screen '>
                    <div className="flex justify-end gap-3">

                        <NewLog
                            BD={BD}
                            setBd={setBd}
                        />

                        <FilterLog
                            BD={BD}
                            setDataFilter={setDataFilter}
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
                            {BDFilter.length === 0 ? (
                                <p>Esta vazio</p>
                            ) : (
                                BDFilter.map(user => (
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
                                        <TableCell className="text-right">{user.momento}</TableCell>
                                    </TableRow>
                                )))}
                        </TableBody>
                    </Table>
                </div>
            </main>
        </div>
    )
}