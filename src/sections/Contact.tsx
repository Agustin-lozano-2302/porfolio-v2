import Header from "../components/layouts/header/Header";

function Contact() {
  return (
    <section className='px-4 sm:px-8 md:px-[60px] bg-black min-h-screen overflow-hidden'>
      <div className='animate-fade animate-duration-[2000ms]'>
        <Header />
        <div className="bg-black min-h-screen px-4 sm:px-8 md:px-16 py-8 md:py-20 text-white">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12 animate-fade animate-duration-[1500ms]">
            Contact
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-12 md:mb-20">
            <a
              href="https://www.linkedin.com/in/agustinlozano/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:bg-gray-200 hover:scale-105 text-center"
            >
              Linkedin
            </a>
            <a
              href="mailto:agustinlozano@example.com"
              className="bg-white text-black font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:bg-gray-200 hover:scale-105 text-center"
            >
              E-mail
            </a>
          </div>

          <footer className="text-gray-400 text-xs sm:text-sm absolute bottom-6 text-center w-full left-0">
            Copyright © {new Date().getFullYear()} Agustín Lozano. All Rights Reserved.
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Contact;
