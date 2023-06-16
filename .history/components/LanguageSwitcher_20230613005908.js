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
  const optionStyle = {
    backgroundColor: '#0000',
  };

  return (
    <div className="bg-[#0000]">
      <select
        className="text-white"
        style={selectStyle}
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option value="en" style={optionStyle}>English</option>
        <option value="zh" style={optionStyle}>Chinese</option>
        <option value="fr" style={optionStyle}>French</option>
      </select>
    </div>
  );
}

