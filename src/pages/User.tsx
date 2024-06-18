
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'

export function User() {
    return (
        <div className="flex min-h-screen  p-8">

            <Nav/>

            <main className="flex-1 px-8 py-4 max-md:w-screen">
                <Header
                titulo="Configuração"
                descricao="Thema, infos e etc."
                />

                <div className='border-2 border-cinzaNav p-4 h-auto min-h-96 mt-7 rounded-md'>

                </div>
            </main>
        </div>
    )
}