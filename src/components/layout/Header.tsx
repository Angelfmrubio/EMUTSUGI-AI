import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const navItems = [
    { name: "INICIO", path: "/" },
    { name: "HISTORIA", path: "/historia" },
    { name: "PRINCIPIOS", path: "/principios" },
    { name: "CONTACTO", path: "/contacto" },
  ];
  
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gold-600/30 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <nav className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center min-h-[5rem] px-6 py-4 md:py-0">
        {/* Logo Emutsugi */}
        <Link 
          to="/"
          className="text-2xl md:text-3xl font-bold tracking-[0.2em] hover:text-gold-300 transition-all duration-300 mb-4 md:mb-0"
          style={{ fontFamily: 'Cinzel, serif', color: '#eebc2f' }}
        >
          EMUTSUGI
        </Link>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-xs md:text-sm font-bold uppercase tracking-widest transition-all duration-300 py-2 px-2 md:px-4 rounded hover:bg-white/5
                ${location.pathname === item.path 
                  ? 'text-gold-400 border-b-2 border-gold-500 shadow-[0_0_10px_rgba(238,188,47,0.2)]' 
                  : 'text-gray-400 hover:text-gold-200'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;