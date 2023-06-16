import React from 'react';
import { useTranslation } from 'react-i18next';
import i18n from './i18n.js';

export default function AboutMe() {
  const { t } = useTranslation();

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