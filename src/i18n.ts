import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          home: {
            greeting: "Hi, My name is",
            role: {
              frontend: "Frontend developer",
              designer: "Web designer"
            }
          },
          about: {
            title: "About me",
            description: "I'm a front-end developer with +2 years of experience building modern, responsive, and user-centered web interfaces. I specialize in React and have also worked with Webflow to design and launch custom websites. I'm always eager to learn new technologies, and in my free time, I enjoy music and cinema."
          },
          experience: {
            title: "Experience",
            itrock: {
              title: "Frontend Developer",
              period: "Mar 2023 to Feb 2025",
              description: "Developed and maintained landing pages and backoffice systems using React, Next.js, and Angular. Styled components with SCSS and Tailwind. Worked in Scrum teams with Jira."
            },
            devpro: {
              title: "Netsuite Developer",
              period: "Aug 2024 to Feb 2025",
              description: "Built internal applications in React and SuiteScript for NetSuite. Worked with TypeScript, REST APIs, and state management tools."
            },
            freelance: {
              title: "Freelance Developer",
              period: "2024 to Present",
              description: "Developed custom websites and apps. Focused on UI, responsiveness, and performance. Worked with React and third-party APIs."
            }
          },
          projects: {
            title: "Projects",
            pomodoro: {
              title: "Pomodoro timer",
              description: "A productivity web app built with Next.js and React using the Pomodoro technique. Features customizable timers, session tracking."
            },
            todo: {
              title: "To do app",
              description: "A full-featured task manager built with Next.js and Supabase. Includes auth, task creation, deletion, and filtering."
            },
            fastchat: {
              title: "Fast Chat",
              description: "A weather app using OpenWeatherMap API. Users can search cities and view real-time weather info with a clean UI."
            },
            swap: {
              title: "Swap part landing page",
              description: "Landing page for a parts company. Built with performance and SEO in mind. Includes responsive design and smooth animations."
            }
          },
          contact: {
            title: "Contact",
            copyright: "Copyright © {{year}} Agustín Lozano. All Rights Reserved."
          },
          nav: {
            home: "Home",
            about: "About me",
            experience: "Experience",
            projects: "Projects",
            contact: "Contact"
          }
        }
      },
      es: {
        translation: {
          home: {
            greeting: "Hola, mi nombre es",
            role: {
              frontend: "Desarrollador Frontend",
              designer: "Diseñador Web"
            }
          },
          about: {
            title: "Sobre mí",
            description: "Soy un desarrollador front-end con más de 2 años de experiencia construyendo interfaces web modernas, responsivas y centradas en el usuario. Me especializo en React y también he trabajado con Webflow para diseñar y lanzar sitios web personalizados. Siempre estoy ansioso por aprender nuevas tecnologías, y en mi tiempo libre disfruto de la música y el cine."
          },
          experience: {
            title: "Experiencia",
            itrock: {
              title: "Desarrollador Frontend",
              period: "Mar 2023 a Feb 2025",
              description: "Desarrollé y mantuve landing pages y sistemas de backoffice usando React, Next.js y Angular. Estilicé componentes con SCSS y Tailwind. Trabajé en equipos Scrum con Jira."
            },
            devpro: {
              title: "Desarrollador Netsuite",
              period: "Ago 2024 a Feb 2025",
              description: "Construí aplicaciones internas en React y SuiteScript para NetSuite. Trabajé con TypeScript, APIs REST y herramientas de gestión de estado."
            },
            freelance: {
              title: "Desarrollador Freelance",
              period: "2024 al Presente",
              description: "Desarrollé sitios web y aplicaciones personalizadas. Enfocado en UI, responsividad y rendimiento. Trabajé con React y APIs de terceros."
            }
          },
          projects: {
            title: "Proyectos",
            pomodoro: {
              title: "Temporizador Pomodoro",
              description: "Una aplicación web de productividad construida con Next.js y React usando la técnica Pomodoro. Incluye temporizadores personalizables y seguimiento de sesiones."
            },
            todo: {
              title: "Aplicación de tareas",
              description: "Un gestor de tareas completo construido con Next.js y Supabase. Incluye autenticación, creación, eliminación y filtrado de tareas."
            },
            fastchat: {
              title: "Fast Chat",
              description: "Una aplicación del clima usando la API de OpenWeatherMap. Los usuarios pueden buscar ciudades y ver información del clima en tiempo real con una interfaz limpia."
            },
            swap: {
              title: "Landing page de Swap part",
              description: "Landing page para una empresa de repuestos. Construida pensando en rendimiento y SEO. Incluye diseño responsivo y animaciones suaves."
            }
          },
          contact: {
            title: "Contacto",
            copyright: "Derechos de autor © {{year}} Agustín Lozano. Todos los derechos reservados."
          },
          nav: {
            home: "Inicio",
            about: "Sobre mí",
            experience: "Experiencia",
            projects: "Proyectos",
            contact: "Contacto"
          }
        }
      }
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n; 