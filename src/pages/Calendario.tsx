
import { useState } from 'react'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'

import { Calendar } from "@/components/ui/calendar"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'

import { NewEvent } from '@/components/NewEvent'
// import { array } from 'zod'


export function Calendario() {


    const today = new Date()
    const testday = new Date(2024, 5, 20)

    const [date, setDate] = useState<Date | undefined>(new Date())
    const [dbevent, setDbevent] = useState([
        {
            titulo: "Reunião geral MKT",
            descricao: "14:50 PM - Presencial",
            date: today.toLocaleDateString(),
            dateMark: testday
        }
    ])

    var strikeThroughDates = dbevent.map(item => item.dateMark);

    const handleDayClick = (day:any) => {
        alert(`Day ${day.toLocaleDateString()}`);
      };


    return (
        <div className="flex min-h-screen  p-8">

            <Nav />

            <main className="flex-1 px-8 py-4">
                <Header
                    titulo="Calendario"
                    descricao="Feriados, escala e etc."
                />

                <div className='flex border-2 border-cinzaNav p-4 h-auto max-md:w-screen min-h-96 mt-7 rounded-md'>

                    <Calendar
                        modifiers={{
                            strikeThrough: strikeThroughDates,
                        }}
                        modifiersClassNames={{
                            strikeThrough: "border border-x-azul border-y-azul",
                        }}
                        onDayClick={handleDayClick}
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md border h-max"
                    />

                    <div className='w-full px-7 flex flex-col gap-4'>
                        <div className='flex justify-between'>

                            <h1 className='text-3xl font-medium'>
                                Calendario
                            </h1>

                            <NewEvent
                                BD={dbevent}
                                setBd={setDbevent}
                            />


                        </div>

                        {dbevent.map(event => (
                            <Card className={today.toLocaleDateString() === event.date ? 'border-x-zinc-200 border-y-zinc-200' : ''}>
                                <CardHeader>
                                    <CardTitle>{event.titulo}</CardTitle>
                                    <CardDescription>{event.date}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>{event.descricao}</p>
                                </CardContent>
                            </Card>
                        ))}

                    </div>


                </div>
            </main>
        </div>
    )
}