import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, LogIn } from "lucide-react";
import { CrisisButton } from "@/components/CrisisButton";

export function AppLayout() {
  const [language, setLanguage] = useState("es");
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  /* CAMBIOS DEL MAESTRO:
     1. Quité "bg-white" para que se vea tu fondo Azul Cósmico.
     2. Quité "text-black" para que se vean tus letras Doradas.
     3. Agregué el botón "Historia".
  */

  return (
    <>
      <CrisisButton />
      {/* Quitamos bg-white aquí abajo para dejar ver el fondo global */}
      <div className="min-h-screen flex flex-col bg-transparent text-inherit">
        
        {/* Cabecera transparente para que se integre con el diseño */}
        <header className="border-b border-white/10 py-4 backdrop-blur-sm">
          <div className="container mx-auto px-4 flex justify-between items-center">
            
            {/* Título principal */}
            <Link to="/" className="text-2xl font-bold tracking-wider hover:opacity-80 transition-opacity">
              EMUTSUGI
            </Link>

            {/* MENÚ DE NAVEGACIÓN */}
            <nav className="hidden md:flex items-center space-x-6">
              <NavLink to="/">Inicio</NavLink>
              
              {/* ¡AQUÍ ESTABA EL ESLABÓN PERDIDO! */}
              <NavLink to="/about">Historia</NavLink>
              
              <NavLink to="/principles">Principios</NavLink>
              
              <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
              
              {user ? (
                <Button variant="ghost" size="sm" onClick={async () => { await signOut(); navigate('/'); }} className="gap-2 border border-white/20 hover:bg-white/10">
                  <LogOut className="h-4 w-4" /> Salir
                </Button>
              ) : (
                <Button variant="ghost" size="sm" onClick={() => navigate('/auth')} className="gap-2 border border-white/20 hover:bg-white/10">
                  <LogIn className="h-4 w-4" /> Ingresar
                </Button>
              )}
            </nav>
          </div>
        </header>

        <main className="flex-grow">
            <Outlet />
        </main>

        <footer className="border-t border-white/10 py-6 mt-10">
          <div className="container mx-auto px-4 text-center text-xs opacity-70">
            © {new Date().getFullYear()} EMUTSUGI - Honor y Resiliencia
          </div>
        </footer>
      </div>
    </>
  );
}

/* Componente de enlace ajustado para heredar el color dorado/blanco global */
function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="hover:text-yellow-400 hover:scale-105 transition-all font-medium text-lg">
      {children}
    </Link>
  );
}