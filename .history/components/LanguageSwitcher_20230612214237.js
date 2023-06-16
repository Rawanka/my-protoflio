import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);

  const changeLanguage = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language);

    // Scroll to the selected language button
    const element = document.getElementById(language);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLanguageChange = (event) => {
    const selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
  };

  useEffect(() => {
    // Scroll to the initially selected language button on component mount
    const element = document.getElementById(selectedLanguage);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selectedLanguage]);

  return (
    <div className= 'text-black'>
        
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <h3>choce</h3>
        <option value="en">English</option>
        <option value="zh">Chinese</option>
        <option value="fr">French</option>
      </select>

      {/* Scroll targets for each language */}
      <div id="en" />
      <div id="zh" />
      <div id="fr" />
    </div>
  );
}
