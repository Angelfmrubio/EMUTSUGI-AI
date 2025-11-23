import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
// RUTA FINAL CORRECTA: Busca el único archivo que existe en esa carpeta.
import './styles/estilos.css'; 

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);