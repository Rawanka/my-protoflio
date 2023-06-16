import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
  const languageListRef = useRef(null);

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  const scrollToLanguage = (language) => {
    const languageElement = languageListRef.current.querySelector(`[data-lang="${language}"]`);
    if (languageElement) {
      languageElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLanguageClick = (language) => {
    changeLanguage(language);
    scrollToLanguage(language);
  };

  return (
    <div>
      <p>Choose a language:</p>
      <div className="language-list" ref={languageListRef}>
        <button
          onClick={() => handleLanguageClick('en')}
          className={selectedLanguage === 'en' ? 'active' : ''}
          data-lang="en"
        >
          English
        </button>
        <button
          onClick={() => handleLanguageClick('zh')}
          className={selectedLanguage === 'zh' ? 'active' : ''}
          data-lang="zh"
        >
          Chinese
        </button>
        <button
          onClick={() => handleLanguageClick('fr')}
          className={selectedLanguage === 'fr' ? 'active' : ''}
          data-lang="fr"
        >
          French
        </button>
      </div>
    </div>
  );
}
