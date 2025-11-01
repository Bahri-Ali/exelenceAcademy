'use client';

import { useTranslation } from 'react-i18next';
import i18n from '../../in18/i18n';
export default function Spot() {
  const { t } = useTranslation();
  return (
    <div
      className={` flex ${i18n.language === 'ar' ? "sm:bg-[url('/backGround2.png')]" : "sm:bg-[url('/background.png')]"}  bg-cover bg-center bg-repeat flex-col md:flex-row items-start justify-evenly w-[100%] h-[95vh] mt-0  mx-auto`}
    >
      <div className="w-full sm:h-[80%] h-[50%] md:w-[50%] space-y-4  flex flex-col  sm:justify-evenly  justify-evenly    md:text-start mt-8 md:mt-0 leading-relaxed">
        <div className="w-[100%] -auto flex sm:justify-start  justify-center">
          <p className="text-white rounded-[10px]  w-fit text-[12px] sm:text-[13px] sm:px-[15px] p-[8px] bg-(--primary)  ">
            {t('Join')}
          </p>
        </div>
        <h1 className={` mx-[20px] sm:mx-0 font-bold  `}>
          <span className={`block sm:text-start text-center text-[19px] sm:text-white text-(--primary) sm:text-[30px]`}>{t('spot1')}</span>
          <span className={`block sm:text-start text-center text-[19px]  sm:text-white text-(--primary) sm:text-[30px]`}>{t('spot2')}</span>
          <span className={`block sm:text-start text-center text-[19px]  sm:text-white text-(--primary) sm:text-[30px]`}>{t('spot3')}</span>
        </h1>

        <p className="text-(--tages) mx-[20px] text-center sm:text-start sm:mx-0 text-[10px] sm:text-[18px]">{t('spot4')}</p>

        <div
          className={`flex  justify-center w-[90%] m-auto sm:m-0  gap-4 ${i18n.language === 'ar' ? 'sm:flex-row-reverse sm:justify-end' : 'sm:flex-row sm:justify-start  '}`}
        >
          <button
            className={`sm:px-6 sm:py-3 px-3 py-1 bg-(--primary) cursor-pointer text-white sm:rounded-xl rounded-[5px] text-[12px] `}
          >
            {t('Join-now')}
          </button>
          <button
            className={`sm:px-5 sm:py-3 px-3 py-1 border text-white bg-(--primary) sm:bg-transparent cursor-pointer ${i18n.language === 'ar' ? 'text-(--primary)' : 'sm:text-white'} text-[12px] sm:rounded-xl rounded-[5px] `}
          >
            {t('find-out')}
          </button>
        </div>
      </div>
      <div className="   sm:w-[354px] w-[90%] sm:m-0  m-auto items-center mb-[30%] sm:mb-0  md:w-[40%] h-[311px] flex flex-col justify-center   sm:items-center sm:mt-[70px] ">
        <div className=" absolute z-[2] sm:h-[440px] sm:w-[321px] h-[300px] w-[230px] sm:mt-0 bg-button  rounded-full bg-[url('/spot.png')] bg-cover bg-no-repeat "></div>

        <div className="absolute mt-25 z-[1] sm:h-[340px] sm:w-[340px] h-[230px]  w-[230px] rounded-full bg-(--primary)"></div>
      </div>
    </div>
  );
}
