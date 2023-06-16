import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  return (
    <div>
      <p>Choose a language:</p>
      <button
        onClick={() => changeLanguage('en')}
        className={selectedLanguage === 'en' ? 'active' : ''}
      >
        English
      </button>
      <button
        onClick={() => changeLanguage('zh')}
        className={selectedLanguage === 'zh' ? 'active' : ''}
      >
        Chinese
      </button>
      <button
        onClick={() => changeLanguage('fr')}
        className={selectedLanguage === 'fr' ? 'active' : ''}
      >
        French
      </button>
    </div>
  );
}
