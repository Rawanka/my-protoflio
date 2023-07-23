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

  const optionHoverStyle = {
    backgroundColor: 'red',
    color: 'white',
  };


  
  return (
    <div className="bg-[#0000]">
      <select
        className="bg-[#0000] text-white cursor-pointer border-transparent hover:  "
        value={selectedLanguage}
        onChange={handleLanguageChange}
      >
        <option className={optionHoverStyle} value="en" style={{ background: '#323232' }}>English</option>
        <option className="bg-[#0000] text-white cursor-pointer " value="zh" style={{ background: '#323232' }}>Chinese</option>
        <option className="bg-[#0000] text-white cursor-pointer" value="fr" style={{ background: '#323232' }}>French</option>
        <option className="bg-[#0000] text-white cursor-pointer" value="ar" style={{ background: '#323232' }}>Arbic</option>

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

