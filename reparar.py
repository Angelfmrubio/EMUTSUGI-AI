import os

print("💎 INICIANDO SINCRONIZACIÓN FINAL DE EMUTSUGI...")

# 1. LA PIEZA PERDIDA: CONFIGURACIÓN DE POSTCSS (Esto arregla los estilos rotos)
postcss_config = """export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}"""

with open("postcss.config.js", "w", encoding="utf-8") as f:
    f.write(postcss_config)
print("✅ Conexión de estilos reparada (postcss.config.js creado).")

# 2. EL MOTOR DE ESTILOS (Aseguramos que index.css tenga las directivas correctas)
index_css = """@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
  
  body {
    @apply bg-slate-950 text-slate-100 antialiased;
    background-image: radial-gradient(circle at 50% 0%, #1e1b4b 0%, #020617 100%);
    min-height: 100vh;
  }
}

/* Efectos de texto dorado */
.text-gold-gradient {
  background: linear-gradient(to bottom, #fde68a, #d97706);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
"""

with open("src/index.css", "w", encoding="utf-8") as f:
    f.write(index_css)
print("✅ Motor CSS calibrado (src/index.css actualizado).")

# 3. REINICIAR EL CEREBRO DE LA APP (Aseguramos que App.tsx tenga las rutas correctas)
app_tsx = """import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Brain, Sparkles, ArrowRight } from 'lucide-react';

// COMPONENTE HOME (El Templo Dorado)
const HomePage = () => (
  <div className="flex flex-col items-center justify-center min-h-[90vh] text-center px-4 animate-in fade-in duration-1000">
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
       <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[120px]"></div>
    </div>
    
    <div className="z-10 space-y-8 max-w-4xl">
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-sm font-medium mb-4">
        <Sparkles size={16} /> <span>Metodología Kintsugi Digital</span>
      </div>
      
      <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-amber-400 to-amber-700 drop-shadow-2xl">
        EMUTSUGI
      </h1>
      
      <p className="text-xl md:text-2xl text-slate-400 font-light max-w-2xl mx-auto leading-relaxed">
        "Donde tus grietas se convierten en ríos de oro."<br/>
        <span className="text-base text-slate-500 mt-2 block">Transformación Neuro-Poética en 3 minutos.</span>
      </p>

      <div className="flex flex-col md:flex-row gap-6 justify-center mt-12">
        <Link 
          to="/herramienta"
          className="group relative px-8 py-4 bg-amber-500 hover:bg-amber-400 text-black font-bold text-lg rounded-full transition-all hover:scale-105 shadow-[0_0_40px_rgba(245,158,11,0.3)] flex items-center justify-center gap-3"
        >
          <Brain className="w-5 h-5" />
          INICIAR TRANSFORMACIÓN
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>
        
        <button className="px-8 py-4 bg-slate-900/50 border border-slate-700 text-slate-300 font-medium rounded-full hover:bg-slate-800 transition-all hover:border-amber-500/30">
          Leer los Principios
        </button>
      </div>
    </div>
  </div>
);

// COMPONENTE HEADER (Navegación)
const Header = () => (
  <header className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <Link to="/" className="text-2xl font-serif font-bold text-amber-500 tracking-widest flex items-center gap-2">
        <div className="w-8 h-8 border border-amber-500 rounded-full flex items-center justify-center">E</div>
        EMUTSUGI
      </Link>
      <nav className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
        <Link to="/" className="hover:text-amber-400 transition-colors">INICIO</Link>
        <Link to="/historia" className="hover:text-amber-400 transition-colors">HISTORIA</Link>
        <Link to="/herramienta" className="text-amber-400">HERRAMIENTA</Link>
      </nav>
    </div>
  </header>
);

// COMPONENTE HERRAMIENTA (El Dashboard Funcional)
import { useState } from 'react';
const ToolPage = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div className="pt-32 px-4 max-w-3xl mx-auto text-center">
      <div className="p-10 rounded-3xl bg-slate-900/50 border border-slate-800 backdrop-blur-md">
        <h2 className="text-3xl text-white font-serif mb-6">Área de Decodificación</h2>
        <p className="text-slate-400 mb-8">El sistema está listo. Aquí iría tu dashboard neuro-poético.</p>
        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full w-[75%] bg-amber-500"></div>
        </div>
        <p className="text-right text-xs text-amber-500 mt-2">S.N. Entérico: 75%</p>
      </div>
    </div>
  );
};

// APP PRINCIPAL
const App = () => (
  <BrowserRouter>
    <div className="min-h-screen font-sans selection:bg-amber-500/30 text-white">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/herramienta" element={<ToolPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
"""

with open("src/App.tsx", "w", encoding="utf-8") as f:
    f.write(app_tsx)
print("✅ Diseño Dorado inyectado (src/App.tsx reconstruido).")

print("\n✨ ¡TODO LISTO! Sigue estos pasos exactos:")
print("1. Ve a tu terminal.")
print("2. Presiona 'Ctrl + C' para detener el servidor actual.")
print("3. Escribe: npm run dev")
print("4. Abre el nuevo link que aparecerá (probablemente localhost:5173).")
print("   ¡Deberías ver el diseño negro y dorado ahora!")