import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ExternalLink, Code } from 'lucide-react';

const projects = [
  {
    title: 'CokieCollege',
    description: 'Plataforma educativa en desarrollo. Integra múltiples tecnologías para ofrecer una experiencia amigable y eficiente.',
    tech: ['Java', 'React', 'Node.js', 'SQL'],
    github: 'https://github.com/jl-diaz/Cokie_college.git',
    demo: '#',
    video: '/VideoCokieCollege.mp4',
    logo: '/logoCokieCollege.jpg',
    status: 'En desarrollo',
    featured: true
  },
  {
    title: 'Braincare',
    description: 'Plataforma enfocada en el cuidado de la salud mental, proporcionando recursos y un foro.',
    tech: ['Node.js', 'Express', 'EJS'],
    github: 'https://github.com/jl-diaz/Braincare.git',
    demo: 'https://braincare-plum.vercel.app/',
    logo: '/logoBraincare.png',
  },
  {
    title: 'Espasmos Sollozo',
    description: 'Sitio web informativo sobre espasmos del sollozo, recursos para padres y especialistas.',
    tech: ['HTML', 'CSS', 'Netlify'],
    github: 'https://github.com/jl-diaz/EspasmosSollozo.git',
    demo: 'https://espasmosdelsollozo.netlify.app/',
    logo: '/logoEspasmosSollozo.png',
  },
  {
    title: 'Lessa Learns',
    description: 'Sitio web informativo para el aprendizaje de Lenguaje de Señas Salvadoreño.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    github: 'https://github.com/jl-diaz/Lessa-Learns.git',
    demo: 'https://lessa-learns.vercel.app/',
    logo: '/logoLessaLearns.png',
  },
  {
    title: 'Bloomrise',
    description: 'Sitio web informativo sobre la depresion postparto, recursos para meditación y bienestar.',
    tech: ['HTML', 'CSS', 'UI/UX'],
    github: 'https://github.com/jl-diaz/Bloomrise.git',
    demo: '#',
    status: 'En desarrollo',
    logo: '/logoBloomrise.png',
  }
];

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      const cards = el.querySelectorAll('.project-card');
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.1,
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
            }
          }
        );
      });
    }
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-24 px-6 md:px-20 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Proyectos Destacados</h2>
        <p className="text-gray-400 max-w-2xl text-lg">
          Una selección de mis trabajos más recientes, abarcando desde desarrollo frontend hasta soluciones full-stack e informativas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.title} 
            className={`project-card flex flex-col group relative bg-secondary/10 rounded-2xl overflow-hidden border border-gray-800 hover:border-accent transition-all duration-500 ${
              project.featured ? 'md:col-span-2 lg:col-span-2' : ''
            }`}
          >
            {project.featured && project.video ? (
              <div className="w-full h-64 bg-black relative overflow-hidden">
                <video 
                  src={project.video} 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none" />
                <img src={project.logo} alt={`Logo ${project.title}`} className="absolute bottom-4 left-6 w-16 h-16 rounded-lg shadow-lg border border-gray-800 bg-white object-contain p-1" />
              </div>
            ) : (
              <div className="h-48 w-full bg-gradient-to-br from-gray-900 to-black relative flex flex-col justify-end border-b border-gray-800 overflow-hidden group-hover:scale-105 transition-transform duration-500">
                 <img src={project.logo} alt={`Logo ${project.title}`} className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-500" />
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent pointer-events-none" />
                 <h3 className="text-2xl font-bold text-gray-700 opacity-20 absolute bottom-4 right-4 z-0">{project.title.toUpperCase()}</h3>
                 <img src={project.logo} alt={`Icono ${project.title}`} className="absolute top-4 left-4 w-12 h-12 rounded-md shadow-lg border border-gray-700 bg-white object-contain p-1 z-10" />
              </div>
            )}
            
            <div className={`p-6 flex flex-col flex-1`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold z-10">{project.title}</h3>
                {project.status && (
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-semibold rounded-full uppercase tracking-wider">
                    {project.status}
                  </span>
                )}
              </div>
              
              <p className="text-gray-400 mb-6 flex-1">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs text-gray-300 bg-gray-800 px-2 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-4 mt-auto">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                >
                  <Code className="w-4 h-4" />
                  Código
                </a>
                {project.demo !== '#' && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Visitar
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
