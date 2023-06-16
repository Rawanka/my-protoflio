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
    <div>
        
      <select className=' bg-[#0000] ' value={selectedLanguage} onChange={handleLanguageChange}>
      
        <option className=' bg-[#0000] ' value="en">English</option>
        <option className=' bg-[#0000] ' value="zh">Chinese</option>
        <option className=' bg-[#0000] ' value="fr">French</option>
      </select>
    </div>
  );
}
