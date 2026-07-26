import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

// ============================================================================
// CONFIGURACIÓN DE VIDEOS DE LA GALERÍA
// ============================================================================
// Puedes modificar, agregar o quitar videos de esta lista fácilmente.
// Cada elemento requiere:
// - id: Identificador único.
// - title: Título del video.
// - url: URL del video (compatible con YouTube, Vimeo, MP4, Twitch, etc.).
// - thumbnail: (Opcional) Imagen de miniatura. Si se deja en blanco para videos de YouTube, 
//              se generará la miniatura automáticamente.
// - category: Categoría o tipo de video ("Video Oficial", "En Vivo", "Ensayo", etc.).
// - description: Breve descripción de la presentación o contenido.
// ============================================================================

export const INITIAL_VIDEOS = [
  {
    id: 1,
    title: "Orbital - Presentación en Vivo (Texcoco 2024)",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    thumbnail: "https://images.unsplash.com/photo-1465847899084-d164df4dedc6?auto=format&fit=crop&w=1200&q=80",
    category: "En Vivo",
    description: "Trayectoria en vivo recorriendo la energía del punk y metal alternativo."
  },
  {
    id: 2,
    title: "Orbital - Sesión de Ensayo & Proceso Creativo",
    url: "https://www.youtube.com/watch?v=kXYiU_JCYtU",
    thumbnail: "",
    category: "Backstage",
    description: "Detrás de cámaras de la composición de nuestros temas originales."
  },
  {
    id: 3,
    title: "Orbital - Concierto con Causa Apoyo Animal",
    url: "https://www.youtube.com/watch?v=WM8bTdBnpsU",
    thumbnail: "",
    category: "Concierto",
    description: "La música como punto de encuentro para el bienestar comunitario."
  },
  {
    id: 4,
    title: "Orbital - Highlights & Solo de Guitarra",
    url: "https://www.youtube.com/watch?v=1w7OgIMMRc4",
    thumbnail: "",
    category: "Destacado",
    description: "Momentos culminantes de nuestros últimos shows en escenarios locales."
  },
  {
    id: 5,
    title: "Orbital - Jamming Acoustic Session",
    url: "https://www.youtube.com/watch?v=v2AC41dglnM",
    thumbnail: "",
    category: "Acústico",
    description: "Reinterpretación melódica y matices acústicos de nuestro repertorio."
  },
  {
    id: 6,
    title: "Orbital - Live Teaser & Próximas Fechas",
    url: "https://www.youtube.com/watch?v=fJ9rUzIMcZQ",
    thumbnail: "",
    category: "Teaser",
    description: "Un adelanto de la energía interestelar que verás en nuestros próximos conciertos."
  }
];

// Helper para extraer ID de YouTube si se desea obtener la miniatura automática de YouTube
const getYouTubeThumbnail = (url) => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  if (match && match[2].length === 11) {
    return `https://img.youtube.com/vi/${match[2]}/hqdefault.jpg`;
  }
  return null;
};

const Gallery = () => {
  // Lista de videos activa (fácilmente modificable o expandible)
  const [videos] = useState(INITIAL_VIDEOS);
  // Video actualmente seleccionado para reproducción en el modal flotante
  const [selectedVideo, setSelectedVideo] = useState(null);

  // Cerrar el modal al presionar la tecla Escape
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' || event.key === 'Esc') {
        setSelectedVideo(null);
      }
    };

    if (selectedVideo) {
      window.addEventListener('keydown', handleKeyDown);
      // Evitar scroll del body mientras el modal está abierto
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [selectedVideo]);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-white">
      {/* Encabezado de la página de Galería */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FF8921] to-white">
          Galería
        </h1>
        <p className="max-w-3xl text-center text-lg md:text-xl text-gray-300  mx-auto">
          Revive la energía, las presentaciones en vivo y el movimiento constante de Orbital.
          Haz click en cualquier video para iniciar la reproducción.
        </p>
        <div className="w-24 h-1 bg-[#FF8921] mx-auto mt-6 rounded-full shadow-[0_0_12px_#FF8921]"></div>
      </div>

      {/* Grid de Videos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {videos.map((video) => {
          const thumbSrc = video.thumbnail || getYouTubeThumbnail(video.url) || "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?auto=format&fit=crop&w=800&q=80";

          return (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group cursor-pointer bg-[#1A1A1A]/80 border border-white/10 hover:border-[#FF8921]/60 rounded-2xl overflow-hidden shadow-xl hover:shadow-[0_0_25px_rgba(255,137,33,0.3)] transition-all duration-300 transform hover:-translate-y-2 flex flex-col"
            >
              {/* Contenedor de la Miniatura */}
              <div className="relative aspect-video w-full overflow-hidden bg-black">
                <img
                  src={thumbSrc}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />

                {/* Badge de Categoría */}
                {video.category && (
                  <span className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-white/20 text-[#FF8921] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {video.category}
                  </span>
                )}

                {/* Overlay flotante con botón de reproducción */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 backdrop-blur-[2px] group-hover:backdrop-blur-none transition-all duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#FF8921] text-white flex items-center justify-center shadow-[0_0_20px_#FF8921] group-hover:scale-110 transition-transform duration-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-8 h-8 ml-1"
                    >
                      <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Información del video */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-[#FF8921] transition-colors duration-200 line-clamp-2">
                    {video.title}
                  </h3>
                  {video.description && (
                    <p className="text-sm text-gray-400 mt-2 line-clamp-2">
                      {video.description}
                    </p>
                  )}
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-xs text-gray-400 font-medium">
                  <span className="flex items-center gap-1 text-[#FF8921]">
                    Ver video
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Reproductor Flotante (Modal) */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-[100] bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in"
          onClick={() => setSelectedVideo(null)} // Cierra al hacer click fuera
        >
          <div
            className="relative w-full max-w-4xl bg-[#141414] border border-[#FF8921]/40 rounded-2xl overflow-hidden shadow-2xl shadow-[#FF8921]/20 flex flex-col"
            onClick={(e) => e.stopPropagation()} // Evita que se cierre al hacer click dentro del reproductor
          >
            {/* Barra superior del Modal */}
            <div className="flex items-center justify-between px-6 py-4 bg-[#1A1A1A] border-b border-white/10">
              <h2 className="text-lg md:text-xl font-bold text-white truncate pr-4">
                {selectedVideo.title}
              </h2>
              {/* Botón de cerrar */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="btn btn-sm btn-circle btn-ghost text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Cerrar reproductor"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Contenedor del Player de ReactPlayer */}
            <div className="relative aspect-video w-full bg-black">
              <ReactPlayer
                src={selectedVideo.url}
                url={selectedVideo.url}
                playing={true}
                autoPlay={true}
                controls={true}
                width="100%"
                height="100%"
                aria-label={`Reproductor para ${selectedVideo.title}`}
                config={{
                  youtube: {
                    playerVars: { autoplay: 1, controls: 1, rel: 0 }
                  }
                }}
              />
            </div>

            {/* Detalles inferiores del Modal */}
            {selectedVideo.description && (
              <div className="p-4 bg-[#141414] border-t border-white/5 text-sm text-gray-300">
                <p>{selectedVideo.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
