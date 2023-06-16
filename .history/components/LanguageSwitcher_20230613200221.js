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

  const selectStyle = {
    backgroundColor: '#0000',
    color: 'white',
    cursor: 'pointer',
  };

  const optionStyle = {
    backgroundColor: '#0000',
  };

  const optionHoverStyle = {
    backgroundColor: 'red',
    color: 'white',
  };

  return (
    <div className="bg-[#0000]">
      <select
        className="text-white"
        style={selectStyle}
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option
          value="en"
          style={optionStyle}
          className="option-hover"
        >
          English
        </option>
        <option
          value="zh"
          style={optionStyle}
          className="option-hover"
        >
          Chinese
        </option>
        <option
          value="fr"
          style={optionStyle}
          className="option-hover"
        >
          French
        </option>
      </select>
      <style>
        {`
        .option-hover:hover {
          background-color: ${optionHoverStyle.backgroundColor};
          color: ${optionHoverStyle.color};
        }
        `}
      </style>
    </div>
  );
}