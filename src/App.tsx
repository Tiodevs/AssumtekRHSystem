import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login } from './pages/Login';
import { Registro } from './pages/Registro';
import { Dashboard } from './pages/Dashboard';
import { Calendario } from './pages/Calendario';
import { Configuracao } from './pages/Configuracao';

export function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calendario" element={<Calendario />} />
          <Route path="/configuracao" element={<Configuracao />} />
        </Routes>
      </Router>
    </ThemeProvider>
  )
}

