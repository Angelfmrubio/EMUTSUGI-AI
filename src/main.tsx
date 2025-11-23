import { createRoot } from 'react-dom/client';
import App from './App.tsx';

/* 1. Estilos por defecto (Las pijamas) */
import './index.css';
import './estilos.css';

/* 2. TU ESTILO REY (Al final para que gane y cubra todo de Azul) */
import './styles/nexus-global.css'; 

createRoot(document.getElementById("root")!).render(<App />);