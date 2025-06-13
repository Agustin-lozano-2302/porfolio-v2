import './index.css'
import LanguageSelector from './components/languageSelector/LanguageSelector';

function App() {
  return (
    <main className='bg-black flex flex-col gap-4 justify-center items-center h-dvh px-4'>
      <p className='text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl relative bottom-4 animate-fade animate-duration-[2000ms] text-center'>WELCOME</p>
      <LanguageSelector />
    </main>
  )
}

export default App
