import { useState } from "react";
import Header from "../components/layouts/header/Header";
import { useTranslation } from 'react-i18next';

function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
  const { t } = useTranslation();

  const projects = [
    {
      title: t('projects.pomodoro.title'),
      image: "/projects/pomo.png", 
      description: t('projects.pomodoro.description'),
      url: "https://pomodoro-timer-nine-jet.vercel.app/",
    },
    {
      title: t('projects.todo.title'),
      image: "/projects/todo.png",       
      description: t('projects.todo.description'),
      url: "https://mate-do.vercel.app/",
    },
    {
      title: t('projects.swap.title'),
      image: "/projects/tractor.png",       
      description: t('projects.swap.description'),
      url: "https://lacasadeltractor.vercel.app/",
    },
  ];

  return (
    <section className="px-4 sm:px-8 md:px-[60px] bg-black text-white min-h-screen">
      <div className="animate-fade animate-duration-[2000ms]">
        <Header />
        <div className="py-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10">
            {t('projects.title')}
          </h1>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
            {/* Lista de proyectos */}
            <div className="flex flex-row md:flex-col gap-4 md:gap-8 w-full md:w-[300px] overflow-x-auto md:overflow-x-visible">
              {projects.map((project, idx) => (
                <button
                  key={idx}
                  onClick={() => setHoveredIndex(idx)}
                  className={`text-lg md:text-xl cursor-pointer transition-all duration-300 whitespace-nowrap text-left ${
                    hoveredIndex === idx ? "font-bold text-white" : "text-gray-400"
                  }`}
                >
                  {project.title}
                </button>
              ))}
            </div>

            {/* Vista previa del proyecto */}
            <div className="transition-all duration-500 w-full md:max-w-[800px] relative">
              {hoveredIndex !== null && (
                <div className="flex items-center justify-center flex-col gap-6 animate-fade animate-duration-[1000ms]">
                  <img
                    src={projects[hoveredIndex].image}
                    alt={projects[hoveredIndex].title}
                    className="w-full md:w-[500px] h-[200px] md:h-[250px] object-cover rounded-md border border-white"
                  />
                  <p className="text-sm md:text-md text-gray-300 text-center md:text-left">
                    {projects[hoveredIndex].description}
                  </p>
                  <a
                    href={projects[hoveredIndex].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-black font-semibold py-2 px-6 rounded-md transition-all duration-300 hover:bg-gray-200 hover:scale-105 text-center mt-4"
                  >
                    Ver proyecto
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
