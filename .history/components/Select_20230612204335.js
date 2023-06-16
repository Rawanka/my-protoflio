import React from 'react';
import { useTranslation } from 'react-i18next';

export default function AboutMe() {
  const { t, i18n } = useTranslation();

  // Load the appropriate translation resource based on the current language
  i18n.addResourceBundle('en', 'translation', enTranslation, true);
  i18n.addResourceBundle('zh', 'translation', zhTranslation, true);

  return (
    <div>
      <div className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[18px] text-gray-500 text-2xl'>
          {t('about')}
        </h3>
        <span className='text-center text-xs space-y-4 md:text-center md:space-y-6 md:px-8 md:text-lg'>
          <p>{t('intro')}</p>
        </span>
      </div>
    </div>
  );
}
