
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'

import { Timer, CalendarClock, Calendar } from 'lucide-react'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export function Dashboard() {
    return (
        <div className="flex min-h-screen  p-8">

            <Nav />

            <main className="flex-1 px-8 py-4">
                <Header
                    titulo="Dashboard"
                    descricao="Panorama geral sobre seu progresso"
                />

                <div className='border-2 flex items-start justify-start flex-wrap border-cinzaNav p-4 h-auto min-h-96 max-md:w-screen mt-7 rounded-md'>

                    <Card x-chunk="dashboard-01-chunk-0" className='max-w-screen-xl h-1/5 m-2'>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-lg font-medium">
                                Banco de horas
                            </CardTitle>
                            <CalendarClock className="h-5 w-5 ml-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-700">+ 30 Horas</div>
                            <p className="text-xs pt-2 text-muted-foreground">
                                Caso duvidas falar copm RH
                            </p>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-0" className='max-w-screen-xl h-1/5 m-2'>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-lg font-medium">
                                Escala presencial
                            </CardTitle>
                            <Calendar className="h-5 w-5 ml-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-cinza">Ter, qua e sab</div>
                            <p className="text-xs pt-2 text-muted-foreground">
                                Dias referentes a sua equipe
                            </p>
                        </CardContent>
                    </Card>
                    <Card x-chunk="dashboard-01-chunk-0" className='max-w-screen-xl h-1/5 m-2'>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-lg font-medium">
                                Tempo trabalhado
                            </CardTitle>
                            <Timer className="h-5 w-5 ml-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-cinza">10 Horas</div>
                            <p className="text-xs pt-2 text-muted-foreground">
                                Valor referente ao mês
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}