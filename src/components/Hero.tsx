const Hero = () => {
  return (
    <section className="relative w-full h-screen flex flex-col lg:flex-row items-center justify-between px-6 lg:px-20 overflow-hidden">
      {/* Left side: Large Image (Desktop only) */}
      <div className="hidden lg:flex z-10 w-full lg:w-1/2 justify-center items-center mt-16 lg:mt-0 order-1 lg:order-1">
        <div className="lg:w-[420px] lg:h-[420px] rounded-full overflow-hidden border-4 border-blue-600 shadow-[0_0_50px_rgba(37,99,235,0.2)] hover:shadow-[0_0_60px_rgba(37,99,235,0.4)] transition-shadow duration-500">
          <img src="/Profile.jpg" alt="Jonathan Diaz" className="w-full h-full object-cover" />
        </div>
      </div>

      {/* Right side: Content */}
      <div className="z-10 w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start h-full order-2 lg:order-2 mt-8 lg:mt-0 text-center lg:text-left">
        
        {/* Mobile/Tablet Header (Inline image like before) */}
        <div className="flex lg:hidden items-center gap-4 mb-6">
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-blue-600 shadow-lg shadow-blue-500/20 shrink-0">
            <img src="/Profile.jpg" alt="Jonathan Diaz" className="w-full h-full object-cover" />
          </div>
          <div className="text-left">
            <p className="text-blue-500 font-semibold tracking-wider text-sm uppercase">Hola, soy</p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">Jonathan Diaz</h1>
          </div>
        </div>

        {/* Desktop Header */}
        <div className="hidden lg:block mb-4">
          <p className="text-blue-500 font-semibold tracking-wider text-sm uppercase mb-2">Hola, soy</p>
          <h1 className="text-7xl font-bold tracking-tight text-white">Jonathan Diaz</h1>
        </div>
        
        <h2 className="text-2xl md:text-3xl text-gray-400 font-light mb-6">
          Desarrollador de Software
        </h2>
        
        <p className="max-w-md text-gray-400 mb-8 leading-relaxed text-base mx-auto lg:mx-0">
          Estudiante y apasionado por la programación, enfocado en aprender y crear soluciones a problematicas del entorno.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-6">
          <a href="#about" className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-3.5 rounded-full transition-all duration-300 font-medium shadow-lg shadow-blue-600/30 hover:scale-105 pointer-events-auto">
            Conóceme más
          </a>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com/jl-diaz" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/5 hover:bg-blue-600/20 text-gray-300 hover:text-blue-400 rounded-full transition-all duration-300 pointer-events-auto border border-white/10 hover:border-blue-500/30" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
          </div>
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
