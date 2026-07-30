import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { GraduationCap, Trophy, Users, Lightbulb } from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    const content = contentRef.current;
    
    if (el && content) {
      gsap.fromTo(
        content.children,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <div ref={contentRef} className="flex flex-col md:flex-row gap-16 items-center">
        
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold border-l-4 border-accent pl-6">
            Sobre Mí
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Tengo 18 años y soy de San Salvador, El Salvador. Actualmente curso mi último año de bachillerato técnico en Desarrollo de Software en el Colegio Don Bosco. 
          </p>
          <p className="text-gray-400 leading-relaxed">
            Más allá de mis capacidades técnicas, cuento con un fuerte pensamiento crítico que me permite analizar problemas complejos. Valoro el trabajo en equipo y la colaboración para alcanzar metas comunes. Tengo facilidad para comunicar mis ideas y exponer proyectos con claridad y seguridad.
          </p>
          <div className="pt-4 flex flex-wrap gap-3">
            {['Programación', 'Matemáticas', 'Debate', 'Videojuegos'].map((hobby) => (
              <span key={hobby} className="px-4 py-2 bg-secondary/50 rounded-full text-sm font-medium border border-gray-700">
                {hobby}
              </span>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
          <div className="bg-secondary/50 p-6 rounded-2xl border border-gray-800 hover:border-accent transition-colors duration-300">
            <Trophy className="text-accent w-10 h-10 mb-4" />
            <h3 className="font-bold text-xl mb-2">Concurso del Saber</h3>
            <p className="text-gray-400 text-sm">Primer lugar en noveno grado. Competencia académica destacada.</p>
          </div>
          
          <div className="bg-secondary/50 p-6 rounded-2xl border border-gray-800 hover:border-accent transition-colors duration-300">
            <GraduationCap className="text-accent w-10 h-10 mb-4" />
            <h3 className="font-bold text-xl mb-2">Rally Matemático</h3>
            <p className="text-gray-400 text-sm">Segundo lugar en el Colegio Santa Cecilia, 2023.</p>
          </div>

          <div className="bg-secondary/50 p-6 rounded-2xl border border-gray-800 hover:border-accent transition-colors duration-300">
            <Lightbulb className="text-accent w-10 h-10 mb-4" />
            <h3 className="font-bold text-xl mb-2">Pensamiento Crítico</h3>
            <p className="text-gray-400 text-sm">Análisis y resolución de problemas complejos.</p>
          </div>

          <div className="bg-secondary/50 p-6 rounded-2xl border border-gray-800 hover:border-accent transition-colors duration-300">
            <Users className="text-accent w-10 h-10 mb-4" />
            <h3 className="font-bold text-xl mb-2">Consejo Estudiantil</h3>
            <p className="text-gray-400 text-sm">Tesorero del Consejo Estudiantil 2026, aportando organización y trabajo en equipo.</p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
