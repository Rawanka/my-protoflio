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
    <div className="bg-[#0000]">
      <select
        className="bg-[#0000] text-white cursor-pointer"
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option className="bg-[#0000] text-white cursor-pointer" value="en" style={{ background: '#000' }}>English</option>
        <option className="bg-[#0000] text-white cursor-pointer" value="zh" style={{ background: '#000' }}>Chinese</option>
        <option className="bg-[#0000] text-white cursor-pointer" value="fr" style={{ background: '#000' }}>French</option>
      </select>
    </div>
  );
}

