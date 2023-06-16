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
      <select value={selectedLanguage} onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="zh">Chinese</option>
        <option value="fr">French</option>
      </select>
    </div>
  );
}
In this updated version, the language switcher component renders a <select> element with <option> elements for each language. The selectedLanguage state keeps track of the currently selected language. When the user selects a different language from the dropdown, the handleLanguageChange function is triggered, which calls the changeLanguage function and updates both the selected language in the component state and the language in the i18n instance.

Make sure to replace the previous version of the LanguageSwitcher component with this updated version in your AboutMe component.

With this modification, the user will be able to choose the desired language from the dropdown menu, and the selected language will be reflected in both the language switcher component and the translations displayed on the website.






