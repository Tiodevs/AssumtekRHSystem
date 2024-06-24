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

import { Share } from 'lucide-react'
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import { Button } from '@/components/ui/button';

// import { any } from 'zod';

interface Event {
    nome: string;
    tipo: string;
    regime: string;
    momento: string;
    momentoMark: Date;
}



export function Registro() {

    const [today, setToday] = useState<Date>(new Date())

    const [BD, setBd] = useState([
        {
            nome: "teste",
            tipo: "Saida Pausa",
            regime: "Presencial",
            momento: "21/06/24 | 9:38 PM",
            momentoMark: new Date("2020-06-10T04:26:05.717Z")
        }
    ])

    const [BDFilter, setBDFilter] = useState<Event[]>([])

    const [dataFilter, setDataFilter] = useState(today)

    function handleExport() {
        const doc = new jsPDF();
        
        doc.text("Seus registros do mês atual", 12, 10);
        // Or use javascript directly:

        // Obter a data atual
        const currentDate = new Date();
        const currentMonth = currentDate.getMonth(); // Mês atual (0-11)
        const currentYear = currentDate.getFullYear(); // Ano atual

        // Filtrar eventos do mês e ano atuais
        const filteredBD = BD.filter(event => {
            const eventDate = new Date(event.momentoMark);
            return eventDate.getMonth() === currentMonth && eventDate.getFullYear() === currentYear;
        });

        // Cabeçalhos da tabela
        const tableColumn = ["Nome", "Tipo", "Regime", "Momento"];
        // Dados da tabela a partir dos eventos filtrados
        const tableRows = filteredBD.map(event => [
            event.nome,
            event.tipo,
            event.regime,
            event.momento,
            
        ]);

        // Adicionar tabela ao PDF usando autoTable
        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 20, // Posição da tabela no eixo Y
            margin: { top: 10 },
        });

        // Salvar o documento como um arquivo PDF
        doc.save('eventos.pdf');
    }

    useEffect(() => {
        // Pegas as informaçoes salvas no localStorage e tranforma em lista denovo
        const LogStorage = localStorage.getItem('@BD')

        if (LogStorage) {
            // Converter a string de volta para um array de objetos
            const parsedData = JSON.parse(LogStorage);

            // Processar os dados para garantir que momentoMark seja um objeto Date
            const processedData = parsedData.map((item: any) => ({
                ...item,
                momentoMark: new Date(item.momentoMark),
            }));

            // Atualizar o estado com os dados processados
            setBd(processedData);
        }
        console.log("todo o BD", BD)

        setToday(new Date())
    }, [])


    useEffect(() => {
        // Tranforma a lista em uma string usando JSON e salva os itens da lista no localStorage toda vez que a const tarefas for alterado
        localStorage.setItem('@BD', JSON.stringify(BD))
    }, [BD]);

    useEffect(() => {

        console.log("Filtro", dataFilter)

        const todayDateOnly = new Date(dataFilter.getFullYear(), dataFilter.getMonth(), dataFilter.getDate());

        const parseDate = (date: any) => {
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

                        <Button onClick={handleExport} variant={'outline'} className=' py-4'>
                            <Share className="h-5 w-5 mr-4 text-muted-foreground" />
                            Exportar registros do mês
                        </Button>

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
                                <TableRow>
                                    <TableCell>
                                        Não temos nenhum registo nesta data
                                    </TableCell>
                                </TableRow>
                            ) : (
                                BDFilter.map((user, index) => (
                                    <TableRow key={index}>
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