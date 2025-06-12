import { useState } from "react";
import Header from "../components/layouts/header/Header";
import { useTranslation } from 'react-i18next';

function Experience() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { t } = useTranslation();

  const experiences = [
    {
      logo: "/logos/itrock.svg",
      alt: "IT Rock",
      title: t('experience.itrock.title'),
      period: t('experience.itrock.period'),
      description: t('experience.itrock.description'),
    },
    {
      logo: "/logos/dp.svg",
      alt: "Dev.Pro",
      title: t('experience.devpro.title'),
      period: t('experience.devpro.period'),
      description: t('experience.devpro.description'),
    },
    {
      logo: "/logos/al-free.svg",
      alt: "Freelance",
      title: t('experience.freelance.title'),
      period: t('experience.freelance.period'),
      description: t('experience.freelance.description'),
    },
  ];

  return (
    <section className='px-4 sm:px-8 md:px-[60px] bg-black min-h-screen overflow-hidden'>
      <div className='animate-fade animate-duration-[2000ms]'>
        <Header />
        <div className="bg-black min-h-screen px-4 sm:px-8 md:px-16 py-8 md:py-20 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-10 md:mb-20">{t('experience.title')}</h1>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10">
            {experiences.map((exp, idx) => {
              const isSelected = selectedIndex === idx;
              const isHovered = hoveredIndex === idx;
              const hide = hoveredIndex !== null && hoveredIndex !== idx;

              return (
                <div
                  key={idx}
                  onClick={() => window.innerWidth < 768 && setSelectedIndex(isSelected ? null : idx)}
                  onMouseEnter={() => window.innerWidth >= 768 && setHoveredIndex(idx)}
                  onMouseLeave={() => window.innerWidth >= 768 && setHoveredIndex(null)}
                  className={`
                    transition-all duration-300
                    w-full md:w-[300px]
                    ${isHovered ? 'md:w-[900px]' : ''}
                    ${hide ? 'md:w-0' : ''}
                    h-[300px] md:h-[300px]
                    ${window.innerWidth < 768 ? 'cursor-pointer' : ''}
                  `}
                >
                  <div
                    className={`
                      border border-white rounded-md p-4 bg-black h-full
                      flex flex-col 
                      transition-all duration-300
                      gap-6
                      ${isSelected || isHovered ? 'items-start justify-center' : 'items-center justify-center'}
                    `}
                  >
                    <img
                      src={exp.logo}
                      alt={exp.alt}
                      className="w-24 md:w-35 max-h-16 md:max-h-20 object-contain mb-4"
                    />
                    <div className={`
                      flex flex-col gap-2 
                      ${isSelected || isHovered ? 'items-start justify-center' : 'items-center justify-center'}
                    `}>
                      <h2 className={`text-lg md:text-xl font-semibold ${isHovered ? "text-start" : "text-center"}  `}>{exp.title}</h2>
                      <p className="text-sm text-gray-400">{exp.period}</p>
                    </div>
                    {(isSelected || isHovered) && (
                      <p className="mt-2 text-sm md:text-base">{exp.description}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
