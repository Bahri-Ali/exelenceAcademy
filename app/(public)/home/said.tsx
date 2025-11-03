'use client';
import Image from 'next/image';
import { Star } from 'lucide-react';
import i18n from '../../in18/i18n';
import { useTranslation } from 'react-i18next';
export default function Said() {
  const { t } = useTranslation();
  return (
    <div className="min-h-[50vh] flex flex-col justify-evenly w-[90%] md:w-[80%] m-auto py-6">
      <div
        className={`flex flex-col  h-[10%] text-center gap-10 ${i18n.language === 'ar' ? 'items-end' : 'items-start'} `}
      >
        <h1 className="font-cairo font-bold text-[24px] sm:text-[28px] md:text-[36px] leading-[120%] text-(--primary)">
          {t('They-said')}
        </h1>
        <h3 className="font-cairo font-medium text-[14px] sm:text-[16px] md:text-[18px] text-(--tages) leading-[140%] tracking-[0.3px]">
          {t('success-stories')}
        </h3>
      </div>

      <div className="flex flex-wrap justify-center  gap-4 md:gap-6 lg:gap-8 w-full mt-6">
        {Array(5)
          .fill(0)
          .map((_, i) => (
            <div
              key={i}
              className="bg-(--background) w-[90%] sm:w-[80%] md:w-[250px] lg:w-[266px] flex flex-col justify-evenly gap-[8px] rounded-[8px] p-[14px] shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="flex justify-between items-center w-[90%] m-auto mt-[6px]">
                <p className="flex items-center gap-[8px] font-cairo text-[14px] sm:text-[15px] text-(--tages)">
                  4.8 <Star className="text-(--chart-3)" size={18} />
                </p>
                <div className="flex items-center gap-[10px]">
                  <Image
                    src="/person.png"
                    className="rounded-full bg-(--sidebar-accent-foreground)"
                    width={36}
                    height={36}
                    alt=""
                  />
                  <h1 className="font-poppins font-semibold text-[13px] sm:text-[14px]">Bouhafs Rim</h1>
                </div>
              </div>

              <p className="font-cairo font-normal w-[90%] m-auto text-(--tages) text-[12px] sm:text-[13px] leading-[150%] text-center">
                تعلمت ترتيل القرآن بشكل صحيح مع أساتذة EAET. الدورة كانت مرنة وسهلة المتابعة
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}
