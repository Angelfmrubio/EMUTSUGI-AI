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

  return (
    <>
      <CrisisButton />
      <div className="min-h-screen flex flex-col bg-white">
        <header className="bg-white border-b border-neutral-100 py-4">
          <div className="container mx-auto px-4 flex justify-between items-center">
            <Link to="/" className="text-xl font-semibold text-black">
              EMUTSUGI
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <NavLink to="/">Inicio</NavLink>
              <NavLink to="/principles">Principios</NavLink>
              <LanguageSelector currentLanguage={language} onLanguageChange={setLanguage} />
              {user ? (
                <Button variant="ghost" size="sm" onClick={async () => { await signOut(); navigate('/'); }} className="gap-2">
                  <LogOut className="h-4 w-4" /> Salir
                </Button>
              ) : (
                <Button variant="ghost" size="sm" onClick={() => navigate('/auth')} className="gap-2">
                  <LogIn className="h-4 w-4" /> Ingresar
                </Button>
              )}
            </nav>
          </div>
        </header>
        <main className="flex-grow"><Outlet /></main>
        <footer className="bg-white border-t border-neutral-100 py-6">
          <div className="container mx-auto px-4 text-center text-xs text-neutral-600">
            © {new Date().getFullYear()} EMUTSUGI
          </div>
        </footer>
      </div>
    </>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return <Link to={to} className="text-neutral-700 hover:text-black transition-colors">{children}</Link>;
}