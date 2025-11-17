
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, LogIn } from "lucide-react";

export function AppLayout() {
  const [language, setLanguage] = useState("es");
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <header className="bg-white border-b border-neutral-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-semibold text-primary">
            EMUTSUGI
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="/about">Acerca de</NavLink>
            <NavLink to="/principles">Principios</NavLink>
            <Button 
              asChild
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/5"
            >
              <Link to="/">Comenzar Transformación</Link>
            </Button>
            
            <LanguageSelector 
              currentLanguage={language}
              onLanguageChange={setLanguage}
            />
            
            {user ? (
              <Button
                variant="outline"
                size="sm"
                onClick={async () => {
                  await signOut();
                  navigate('/');
                }}
                className="gap-2"
              >
                <LogOut className="h-4 w-4" />
                Salir
              </Button>
            ) : (
              <Button
                variant="outline"
                size="sm"
                onClick={() => navigate('/auth')}
                className="gap-2"
              >
                <LogIn className="h-4 w-4" />
                Ingresar
              </Button>
            )}
          </nav>
          <div className="md:hidden flex items-center gap-2">
            <LanguageSelector 
              currentLanguage={language}
              onLanguageChange={setLanguage}
            />
            <Button 
              variant="ghost" 
              size="sm"
              className="text-neutral-700"
            >
              <MenuIcon />
            </Button>
          </div>
        </div>
      </header>
      
      <main className="flex-grow">
        <Outlet />
      </main>
      
      <footer className="bg-neutral-800 text-neutral-300 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-lg font-semibold mb-2 text-primary">EMUTSUGI</h3>
              <p className="text-sm max-w-md">
                Plataforma de Evaluación Multimodal con enfoque en análisis semántico profundo 
                para intervenciones psicológicas profesionales.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-sm font-semibold mb-3 text-neutral-100">Plataforma</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="hover:text-primary transition-colors">Inicio</Link></li>
                  <li><Link to="/about" className="hover:text-primary transition-colors">Acerca de</Link></li>
                  <li><Link to="/principles" className="hover:text-primary transition-colors">Principios</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold mb-3 text-neutral-100">Legal</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/privacy" className="hover:text-primary transition-colors">Privacidad</Link></li>
                  <li><Link to="/terms" className="hover:text-primary transition-colors">Términos</Link></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-neutral-700 mt-8 pt-6 text-center text-sm">
            <p>© {new Date().getFullYear()} EMUTSUGI. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

function NavLink({ to, children }: NavLinkProps) {
  return (
    <Link 
      to={to} 
      className="text-neutral-700 hover:text-primary transition-colors"
    >
      {children}
    </Link>
  );
}

function MenuIcon() {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
