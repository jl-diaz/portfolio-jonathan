const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-20 overflow-hidden">
      {/* Content */}
      <div className="z-10 w-full md:w-1/2 flex flex-col justify-center h-full mt-16 md:mt-0">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-600 shadow-lg shadow-blue-500/20">
            <img src="/Profile.jpg" alt="Jonathan Diaz" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="text-blue-500 font-semibold tracking-wider text-sm uppercase">Hola, soy</p>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Jonathan Diaz</h1>
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl text-gray-400 font-light mb-6">
          Desarrollador de Software
        </h2>
        
        <p className="max-w-md text-gray-400 mb-8 leading-relaxed text-base">
          Estudiante y apasionado por la programación, enfocado en aprender y crear soluciones a problematicas del entorno.
        </p>

        <div>
          <a href="#about" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full transition-all duration-300 font-medium shadow-lg shadow-blue-600/30 hover:scale-105 pointer-events-auto">
            Conóceme más
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce pointer-events-none">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-2.5 bg-blue-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
