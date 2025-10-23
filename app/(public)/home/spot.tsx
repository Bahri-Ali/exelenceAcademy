'use client';

import { useTranslation } from 'react-i18next';
import i18n from '../../in18/i18n';
export default function Spot() {
  const { t } = useTranslation();
  return (
    <div className=" flex bg flex-col md:flex-row items-start justify-between w-[85%] h-[100vh - 110px] mt-30 mx-auto">
      <div className="w-full md:w-[50%] space-y-4 text-center  md:text-right mt-8 md:mt-0 leading-relaxed">
        <p className="text-gray-600 text-lg md:text-xl  mt-[10px]">{t('Join')}</p>
        <h1 className={`text-3xl md:text-4xl font-bold   text-blue-900`}>
          <span className={`block ${i18n.language === 'ar' ? 'text-start' : 'text-end'}`}>{t('spot1')}</span>
          <span className={`block ${i18n.language === 'ar' ? 'text-start' : 'text-end'}`}>{t('spot2')}</span>
          <span className={`block ${i18n.language === 'ar' ? 'text-start' : 'text-end'}`}>{t('spot3')}</span>
        </h1>

        <p className="text-gray-600 text-lg md:text-xl">{t('spot4')}</p>

        <div
          className={`flex justify-center  md:justify-end gap-4 ${i18n.language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}
        >
          <button className={`px-8 py-3 bg-blue-700 text-white rounded-xl hover:bg-blue-800 transition `}>
            استكشف الآن
          </button>
          <button className="px-8 py-3 border border-blue-700 text-blue-700 rounded-xl hover:bg-blue-50 transition">
            test
          </button>
        </div>
      </div>
      <div className=" w-[354px] md:w-[40%] h-[311px] flex flex-col justify-center  items-center relative">
        <div className=" absolute z-[2] h-[440px] w-[321px] bg-button  rounded-full bg-[url('/spot.png')] bg-cover bg-no-repeat "></div>

        <div className="absolute mt-25 z-[1] h-[340px] w-[340px]  rounded-full bg-[hsla(219,51%,42%,1)]"></div>
      </div>
    </div>
  );
}
