import React, { useState } from 'react';
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShopPage from './components/ShopPage';

const HomePageContent = () => (
  <>
    {/* Sección 1: Hero Principal */}
    <div id="top" className="hero min-h-screen" style={{ backgroundImage: `url(${heroImg})` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold uppercase tracking-widest">Orbital Band</h1>
          <p className="mb-5">Experimentando el sonido del universo a través de nuestra música.</p>
          <button className="btn btn-primary">Escuchar Ahora</button>
        </div>
      </div>
    </div>

    {/* Sección 2: Bio */}
    <div className="hero bg-base-200 min-h-[50vh] py-20">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Música Orbital" />
        <div>
          <h1 className="text-5xl font-bold">Música como energía.</h1>
          <p className="py-6">Girando en trayectorias impredecibles. Somos una banda de alternative metal & punk crossover con un fuerte tinte de heavy-pop-punk y rock alternativo.</p>
          <button className="btn btn-secondary">Conócenos</button>
        </div>
      </div>
    </div>

    {/* Sección 3: Conciertos */}
    <div className="hero bg-base-100 min-h-[50vh] py-20">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10">
        <img
          src="https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp"
          className="max-w-sm rounded-lg shadow-2xl"
          alt="Gira Orbital" />
        <div>
          <h1 className="text-5xl font-bold">Próximos Conciertos</h1>
          <p className="py-6">No te pierdas nuestra próxima gira interestelar. Estaremos recorriendo las principales ciudades este verano.</p>
          <button className="btn btn-accent">Ver Fechas</button>
        </div>
      </div>
    </div>
  </>
);

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return <HomePageContent />;
      case 'shop':
        return <ShopPage />;
      default:
        return null; // Puedes añadir una página 404 aquí
    }
  };

  return (
    <div data-theme="orbitheme" className="min-h-screen relative pb-32">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPageContent()}
      <Footer />
    </div>
  )
}
export default App
