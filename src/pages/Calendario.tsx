
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'

export function Calendario() {
    return (
        <div className="flex min-h-screen  p-8">

            <Nav/>

            <main className="flex-1 px-8 py-4">
                <Header
                titulo="Calendario"
                descricao="Feriados, escala e etc."
                />

                <div className='border-2 border-cinzaNav p-4 h-auto max-md:w-screen min-h-96 mt-7 rounded-md'>

                </div>
            </main>
        </div>
    )
}