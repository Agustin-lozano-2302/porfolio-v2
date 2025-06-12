import Header from '../components/layouts/header/Header'
import '../index.css'
import { useTranslation } from 'react-i18next'

function AboutMe() {
  const { t } = useTranslation()

  return (
    <section className='px-4 sm:px-8 md:px-[60px] bg-black min-h-screen overflow-hidden'>
      <div className='animate-fade animate-duration-[2000ms]'>
        <Header />
        <section className='bg-black flex flex-col md:flex-row items-center min-h-[80vh] justify-between gap-8 py-8'>
            <div className='text-white font-light flex flex-col w-full md:w-1/2 gap-4 md:mb-[200px]'>
                <p className='text-4xl sm:text-5xl md:text-7xl font-semibold'>
                    {t('about.title')}
                </p>
                <p className='text-lg sm:text-xl md:text-2xl'>
                    {t('about.description')}
                </p>
            </div>
            <div className='relative w-full md:w-[500px] h-[400px] md:h-[640px] flex items-center justify-center z-0'>
                <img 
                    className='absolute h-full w-full object-cover' 
                    src="/me/about-me.png" 
                    alt="me" 
                />
                <div className="w-44 h-full bg-gradient-to-l from-black/0 to-black absolute left-[-5px]" />
                <div className="w-44 h-full bg-gradient-to-r from-black/0 to-black absolute right-[-5px]" />
                <div className="w-full h-[350px] bg-gradient-to-t from-black/0 to-black absolute top-[-5px]" />
                <div className="w-full h-[350px] bg-gradient-to-b from-black/0 to-black absolute bottom-[-5px]" />
            </div>
        </section>
      </div>
    </section>
  )
}

export default AboutMe
