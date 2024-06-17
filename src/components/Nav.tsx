import { ClipboardPlusIcon, LayoutDashboard, CalendarDays, Bolt } from 'lucide-react'
import { Link } from 'react-router-dom'
import logoAssumtek from '../assets/LogoAssumtek.png'
// import { ModeToggle } from './mode-toggle'

export function Nav() {
    return (
        <div className="h-full rounded-2xl p-8 border-2 border-y-border">
            <img src={logoAssumtek} alt="Logo assuntek" className='w-52' />
            <ul className="text-white space-y-2 mt-10">
                
                <Link to="/dashboard">
                <li className={`flex space-x-4 p-3 ${location.pathname === "/dashboard" ? 'bg-azulNav rounded-r-lg text-azul text-bold border-0 border-l-4 border-l-azul' : ''
                    }`}>
                    <LayoutDashboard color={location.pathname === "/dashboard" ? '#0F62FE' : "#FFFF"}/>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                </Link>
                <Link to="/registro">
                <li className={`flex space-x-4 p-3 ${location.pathname === "/registro" ? 'bg-azulNav rounded-r-lg text-azul text-bold border-0 border-l-4 border-l-azul' : ''
                    }`}>
                    <ClipboardPlusIcon color={location.pathname === "/registro" ? '#0F62FE' : '#FFFF'} />
                    <Link to="/registro">Registro</Link>
                </li>
                </Link>
                <Link to="/calendario">
                <li className={`flex space-x-4 p-3 ${location.pathname === "/calendario" ? 'bg-azulNav rounded-r-lg text-azul text-bold border-0 border-l-4 border-l-azul' : ''
                    }`}>
                    <CalendarDays color={location.pathname === "/calendario" ? '#0F62FE' : "#FFFF"}/>
                    <Link to="/calendario">Calendario</Link>
                </li>
                </Link>
                <Link to="/configuracao">
                <li className={`flex space-x-4 p-3 ${location.pathname === "/configuracao" ? 'bg-azulNav rounded-r-lg text-azul text-bold border-0 border-l-4 border-l-azul' : ''
                    }`}>
                    <Bolt color={location.pathname === "/configuracao" ? '#0F62FE' : "#FFFF"}/>
                    <Link to="/configuracao">Configurações</Link>
                </li>
                </Link>
                
                
                
                

                {/* <li>
                    <ModeToggle/>
                </li> */}
            </ul>
        </div>
    )
}