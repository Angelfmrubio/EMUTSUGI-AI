
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-yellow-500/20 py-8 text-center text-gray-500 text-sm">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} EMUTSUGI. Todos los derechos reservados.</p>
        <p className="mt-2">Forjado con resiliencia y amor por José Alirio Angel Corredor.</p>
      </div>
    </footer>
  );
};

export default Footer;
