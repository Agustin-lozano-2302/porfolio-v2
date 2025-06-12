import './index.css'
import LanguageSelector from './components/languageSelector/LanguageSelector';

function App() {



  return (
    <main className='bg-black flex flex-col gap-4 justify-center items-center h-dvh '>
    <p className='text-white text-6xl relative bottom-4 animate-fade animate-duration-[2000ms]'>WELCOME</p>
            <LanguageSelector />
    </main>
  )
}

export default App
