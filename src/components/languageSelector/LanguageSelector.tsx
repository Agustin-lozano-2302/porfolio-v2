import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

function LanguageSelector() {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng).then(() => {
      // Solo después de cambiar el idioma, redirige a /home
      navigate('/home');
    });
  };

  return (
    <div className="flex items-center gap-2 animate-fade animate-duration-[2000ms]">
      <button
        onClick={() => changeLanguage('en')}
        className={`px-2 py-1 rounded-md transition-all duration-300 text-white hover:bg-white hover:text-black
        }`}
      >
        ENGLISH
      </button>
      <button
        onClick={() => changeLanguage('es')}
        className={`px-2 py-1 rounded-md transition-all duration-300 text-white hover:bg-white hover:text-black
        }`}
      >
        SPANISH
      </button>
    </div>
  );
}

export default LanguageSelector;
