import '../../../index.css'
import NavLink from '../../link/Link'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { t } = useTranslation()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='h-[156px] bg-transparent items-center flex justify-between relative'>
      <img src="/logos/logov1.svg" alt="logo" className="w-32 md:w-auto" />
      
      {/* Menú hamburguesa para móvil */}
      <button 
        onClick={toggleMenu}
        className="md:hidden text-white p-2"
        aria-label="Toggle menu"
      >
        <div className="w-6 h-5 flex flex-col justify-between">
          <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-full h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Menú de navegación */}
      <div className={`
  fixed md:relative top-[156px] md:top-0 right-0 w-full md:w-auto
  bg-black md:bg-transparent
  transition-all duration-300 ease-in-out
  ${isMenuOpen ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}
  md:translate-x-0
  z-50
`}>

        <div className='text-end md:text-start text-white flex flex-col md:flex-row gap-4 md:gap-3 font-light text-xl md:text-2xl p-4 md:p-0'>
          <NavLink name={t('nav.home')} path='/home' onClick={() => setIsMenuOpen(false)} />
          <p className='hidden md:block text-3xl'>|</p>
          <NavLink name={t('nav.about')} path='/about' onClick={() => setIsMenuOpen(false)} />
          <p className='hidden md:block text-3xl'>|</p>
          <NavLink name={t('nav.experience')} path='/experience' onClick={() => setIsMenuOpen(false)} />
          <p className='hidden md:block text-3xl'>|</p>
          <NavLink name={t('nav.projects')} path='/projects' onClick={() => setIsMenuOpen(false)} />
          <p className='hidden md:block text-3xl'>|</p>
          <NavLink name={t('nav.contact')} path='/contact' onClick={() => setIsMenuOpen(false)} />
        </div>
      </div>
    </nav>
  )
}

export default Header
