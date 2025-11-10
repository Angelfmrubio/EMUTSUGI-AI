
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Principles from './components/Principles';
import PoeticScalpel from './components/PoeticScalpel';
import SoulAnatomist from './components/SoulAnatomist';
import Crucible from './components/Crucible';
import Community from './components/Community';
import Author from './components/Author';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200">
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-gradient-to-br from-yellow-500/20 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-yellow-700/20 to-transparent blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-8 md:py-16">
          <Hero />
          <Principles />
          <PoeticScalpel />
          <SoulAnatomist />
          <Crucible />
          <Community />
          <Author />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;
