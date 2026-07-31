import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Mail, Phone, Code } from 'lucide-react';

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const techStack = [
    { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
    { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
    { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
    { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
    { name: 'React Native', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
    { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg' },
    { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
    { name: 'Arduino', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg' }
  ];

  useEffect(() => {
    const el = sectionRef.current;
    if (el) {
      gsap.fromTo(
        el.querySelectorAll('.skill-item'),
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
          }
        }
      );
    }
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 md:px-20 bg-black/40 border-y border-gray-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        
        <div className="md:w-1/2 space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Habilidades</h2>
            <p className="text-gray-400">Tecnologías y herramientas que manejo para construir soluciones.</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {techStack.map((tech) => (
              <div 
                key={tech.name} 
                className="skill-item flex flex-col items-center justify-center p-4 bg-secondary/30 rounded-xl border border-gray-800 text-gray-400 hover:border-blue-500 hover:text-blue-500 transition-all duration-300 gap-3 min-w-[100px]"
              >
                <img src={tech.icon} alt={tech.name} className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300 drop-shadow-md" />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:w-1/2 space-y-8">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Contacto</h2>
          </div>
          
          <div className="space-y-6">
            <a href="mailto:jonathan.larreynaga4bm@gmail.com" className="flex items-center gap-4 group p-4 rounded-xl hover:bg-secondary/20 border border-transparent hover:border-gray-800 transition-all">
              <div className="bg-accent/20 p-3 rounded-full text-accent group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Correo</p>
                <p className="text-lg font-medium break-all">jonathan.larreynaga4bm@gmail.com</p>
              </div>
            </a>

            <a href="tel:+50374906245" className="flex items-center gap-4 group p-4 rounded-xl hover:bg-secondary/20 border border-transparent hover:border-gray-800 transition-all">
              <div className="bg-accent/20 p-3 rounded-full text-accent group-hover:scale-110 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">Teléfono</p>
                <p className="text-lg font-medium">+503 7490 6245</p>
              </div>
            </a>

            <a href="https://github.com/jl-diaz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group p-4 rounded-xl hover:bg-secondary/20 border border-transparent hover:border-gray-800 transition-all">
              <div className="bg-accent/20 p-3 rounded-full text-accent group-hover:scale-110 transition-transform">
                <Code className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-wider">GitHub</p>
                <p className="text-lg font-medium">github.com/jl-diaz</p>
              </div>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;
