import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  return (
    <div className='bg-black text-black'>
        
      <select value={selectedLanguage} onChange={handleLanguageChange}>
      
        <option value="en">English</option>
        <option value="zh">Chinese</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
}
