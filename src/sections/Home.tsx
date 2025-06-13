import Header from '../components/layouts/header/Header'
import '../index.css'
import SkillSection from '../components/skillSection/skillSection'
import { useTranslation } from 'react-i18next'

function Home() {
  const { t } = useTranslation()

  return (
    <section className='px-4 sm:px-8 md:px-[60px] bg-black min-h-screen overflow-hidden'>
      <div className='animate-fade animate-duration-[2000ms]'>
        <Header />
        <section className='bg-black flex justify-center items-center min-h-[68vh] md:min-h-[80vh] py-8'>
          <div className='text-white font-light flex-col flex gap-8 md:gap-18 justify-center items-center'>
            <div className='flex flex-col justify-center items-center text-center'>
              <p className='text-2xl sm:text-3xl md:text-4xl'>{t('home.greeting')}</p>
              <p className='text-5xl sm:text-6xl md:text-8xl'>Lozano Agustin</p>
            </div>
            <SkillSection />
          </div>
        </section>
      </div>
    </section>
  )
}

export default Home
