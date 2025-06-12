import { useState } from 'react'
import '../../index.css'
import { useTranslation } from 'react-i18next'

function SkillSection() {
  const { t } = useTranslation()
  const [skillSelected, setSkillSelected] = useState({
    react: true,
    design: false
  })

  const handleSkillHover = (skill: 'react' |  'design') => {
    setSkillSelected({
      react: skill === 'react',
      design: skill === 'design'
    })
  }

  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-8 md:gap-32'>
      <div className='flex flex-col gap-4 md:gap-7 text-xl md:text-[26px] text-center'>
        <p 
          onMouseEnter={() => handleSkillHover('react')}
          className={`cursor-pointer transition-opacity duration-300 ${skillSelected.react ? 'opacity-100' : 'opacity-40'}`}
        >
          {t('home.role.frontend')}
        </p>
        <p 
          onMouseEnter={() => handleSkillHover('design')}
          className={`cursor-pointer transition-opacity duration-300 ${skillSelected.design ? 'opacity-100' : 'opacity-40'}`}
        >
          {t('home.role.designer')}
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-4 md:gap-8'>
        {skillSelected.react && (
          <>
            <img className='w-20 h-20 md:w-32 md:h-32 animate-wiggle animate-infinite' src="/marcas/react.svg" alt="react" />
            <img className='w-20 h-20 md:w-32 md:h-32 animate-wiggle animate-infinite' src="/marcas/next.svg" alt="next" />
            <img className='w-20 h-20 md:w-32 md:h-32 animate-wiggle animate-infinite' src="/marcas/vite.svg" alt="next" />
          </>
        )}
        {skillSelected.design && (
          <>
            <img className='w-20 h-20 md:w-32 md:h-32 animate-wiggle animate-infinite' src="/marcas/canva.svg" alt="canva" />
            <img className='w-20 h-20 md:w-32 md:h-32 animate-wiggle animate-infinite' src="/marcas/figma.svg" alt="figma" />
          </>
        )}
      </div>
    </div>
  )
}

export default SkillSection
