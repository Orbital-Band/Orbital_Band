import React, { useState, useEffect, useRef } from 'react';
import { animate, createScope, spring, svg } from 'animejs';
import './App.css'
import logoImg from './assets/Orbital_Logo.png';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ShopPage from './components/ShopPage';

const HomePageContent = () => {
  const root = useRef(null);

  // Configuración de las órbitas para fácil gestión y expansión
  const orbitConfigs = [
    { 
      id: '1', 
      inclination: '15deg', 
      x: '2', y: '2', 
      w0: '0.65', w50: '0.5', 
      pMax: '2.5', pMin: '0.4', 
      delay: 0 
    },
    { 
      id: '2', 
      inclination: '-15deg', 
      x: '1.5', y: '1.6', 
      w0: '0.65', w50: '0.5', 
      pMax: '2.5', pMin: '0.4', 
      delay: 1000 
    },
    { 
      id: '3', 
      inclination: '-95deg', 
      x: '1', y: '1', 
      w0: '0.65', w50: '0.5', 
      pMax: '2.5', pMin: '0.4', 
      delay: 2000 
    }
  ];

  useEffect(() => {
    // Iniciamos el scope de animejs v4 vinculado al ref del contenedor
    const scope = createScope({ root }).add(() => {
      animate('.hero-title', {
        scale: [
          { to: 1.25, ease: 'inOut(3)', duration: 200 },
          { to: 1, ease: spring({ bounce: .7 }) }
        ],
        loop: true,
        loopDelay: 250,
      });

      // Animación de las partículas siguiendo sus respectivos caminos
      const orbitContainers = root.current.querySelectorAll('.Orbit_element');
      orbitContainers.forEach((container) => {
        const path = container.querySelector('.orbit-path');
        const particle = container.querySelector('.orbit-particle');
        const styles = getComputedStyle(container);
        
        const pMax = parseFloat(styles.getPropertyValue('--particle-size-max')) || 2.5;
        const pMin = parseFloat(styles.getPropertyValue('--particle-size-min')) || 0.4;
        const delay = parseFloat(styles.getPropertyValue('--orbit-delay')) || 0;

        animate(particle, {
          ease: 'linear',
          duration: 3000,
          loop: true,
          ...svg.createMotionPath(path),
          // Variación de tamaño sincronizada con el recorrido (0% -> max, 50% -> min, 100% -> max)
          scale: [
            { to: pMax, duration: 0 },
            { to: pMin, duration: 1500 },
            { to: pMax, duration: 1500 }
          ],
          delay: delay
        });
      });

    });
    return () => scope.revert(); // Limpieza al desmontar
  }, []);

  return (
    <div ref={root}>
    {/* Sección 1: Hero Principal */}
    <div id="top" className="hero min-h-screen relative overflow-hidden">
      <div className="stars-container">
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <div></div>
      </div>
      {/* Sección de Órbitas: Elipses y Partículas */}
      {orbitConfigs.map((orbit) => (
        <div key={orbit.id} className="Orbit_element absolute inset-0 pointer-events-none flex items-center justify-center z-0 opacity-100" 
             style={{ 
               '--orbit-inclination': orbit.inclination,
               '--orbit-x': orbit.x, 
               '--orbit-y': orbit.y,
               '--orbit-w0': orbit.w0,
               '--orbit-w50': orbit.w50,
               '--particle-size-max': orbit.pMax,
               '--particle-size-min': orbit.pMin,
               '--orbit-delay': orbit.delay
             }}>
          <div className="relative w-full max-w-5xl aspect-[3/1] flex items-center justify-center max-h-full">
            <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
              <defs>
                <linearGradient id={`orbitGradient${orbit.id}`} x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 'var(--orbit-w0)' }} />
                  <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 'var(--orbit-w50)' }} />
                </linearGradient>
                <filter id={`variableWidth${orbit.id}`}>
                  <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8" result="contrast" />
                </filter>
              </defs>
              <path 
                className="orbit-path" 
                d="M 10, 50 a 140,40 0 1,0 280,0 a 140,40 0 1,0 -280,0" 
                fill="none" 
                style={{ stroke: `url(#orbitGradient${orbit.id})`, filter: `url(#variableWidth${orbit.id})` }}
              />
            </svg>
            <div className="orbit-particle absolute bg-white rounded-full" style={{ left: 0, top: 0 }}></div>
          </div>
        </div>
      ))}
      <div className="hero-content text-neutral-content text-center z-10">
        <div className="max-w-md">
          <img src={logoImg} alt="Orbital Band Logo" className="hero-title mb-5 mx-auto w-64 md:w-120 h-auto logo-shadow" />
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
    </div>
  );
};

function App() {
  // Determinar la página inicial basada en la URL actual
  const getPageFromLocation = () => {
    const path = window.location.hash;
    return path.endsWith('/Tienda') ? 'shop' : 'home';
  };

  const [currentPage, setCurrentPage] = useState(getPageFromLocation);

  // Escuchar cambios en la navegación del navegador (botón atrás/adelante)
  useEffect(() => {
    // Forzar scroll al inicio al cargar la página
    window.scrollTo(0, 0);
    
    // Desactivar la restauración automática del scroll del navegador
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handlePopState = () => {
      setCurrentPage(getPageFromLocation());
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Función para cambiar de página y actualizar la URL
  const handleNavigation = (page) => {
    const baseUrl = '/Orbital_Band'; // Base de tu repo en GitHub Pages
    const newPath = page === 'shop' ? '#/Tienda' : '#/';    
    window.history.pushState({}, '', newPath);
    setCurrentPage(page);
    window.scrollTo(0, 0); // Opcional: volver arriba al cambiar de vista
  };

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
      <Navbar currentPage={currentPage} setCurrentPage={handleNavigation} />
      {renderPageContent()}
      <Footer />
    </div>
  )
}
export default App
