import { Link, Outlet, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, LogIn, Menu } from "lucide-react";
import { CrisisButton } from "@/components/CrisisButton";

export function AppLayout() {
  const [language, setLanguage] = useState("es");
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  return (
    <>
      <CrisisButton />
      <div className="min-h-screen flex flex-col bg-neutral-50">
        {/* HEADER AFIRMATIVO */}
        <header className="bg-white border-b border-neutral-100 py-8">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <Link to="/" className="text-5xl font-extrabold text-primary tracking-wider">
              EMUTSUGI
            </Link>
            <nav className="hidden md:flex items-center gap-8">
              <NavLink to="/">Inicio</NavLink>
              <NavLink to="/principles">Principios</NavLink>
              <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
              {user ? (
                <Button variant="ghost" size="icon" onClick={async () => { await signOut(); navigate('/'); }}>
                  <LogOut className="h-5 w-5" />
                </Button>
              ) : (
                <Button variant="ghost" size="icon" onClick={() => navigate('/auth')}>
                  <LogIn className="h-5 w-5" />
                </Button>
              )}
            </nav>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </header>

        {/* CONTENIDO CON AIRE */}
        <main className="flex-grow py-16">
          <Outlet />
        </main>

        {/* FOOTER CONSTRUCTIVO */}
        <footer className="bg-neutral-900 text-neutral-400 py-16">
          <div className="container mx-auto px-6 text-center space-y-8">
            <div className="flex justify-center gap-8 text-sm">
              <Link to="/about" className="hover:text-primary transition-colors">Acerca de</Link>
              <Link to="/privacy" className="hover:text-primary transition-colors">Privacidad</Link>
              <Link to="/terms" className="hover:text-primary transition-colors">Términos</Link>
            </div>
            <p className="text-xs">© {new Date().getFullYear()} EMUTSUGI</p>
          </div>
        </footer>
      </div>
    </>
  );
}

const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link to={to} className="text-neutral-600 hover:text-primary transition-colors font-medium">
    {children}
  </Link>
);