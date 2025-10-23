import i18n from '@/app/in18/i18n';
import { Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
export default function Features() {
  const { t } = useTranslation();
  interface Feature {
    title: string;
    description: string;
    icon?: React.ReactNode;
  }
  const features: Feature[] = [
    {
      title: `${t('featuresT1')}`,
      description: 'مضمون تدريبي وفقًا لأعلى المعايير العالمية في التعليم والتدريب',
    },
    {
      title: `${t('featuresT2')}`,
      description: 'مدربون معتمدون بخبرة كبيرة في التعليم والتدريب العملي',
    },
    {
      title: `${t('featuresT3')}`,
      description: 'تعلم في أي وقت ومن أي مكان بسهولة تامة عبر المنصة',
    },
    {
      title: `${t('featuresT4')}`,
      description: 'شهادات معترف بها دوليًا بعد إتمام الدورات التدريبية',
    },
  ];
  return (
    <div className="min-h-[30vh] mt-20 flex flex-col justify-between w-[90%] sm:w-[85%] m-auto py-10">
      <h1 className="mb-12 font-cairo text-(--primary) font-bold text-[26px] sm:text-[30px] md:text-[36px] leading-[120%] tracking-[-0.02em] text-center">
        {t('features')}
      </h1>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 w-full">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col justify-between items-center bg-(--background) text-center shadow-md hover:shadow-xl rounded-[12px] p-6 w-[90%] sm:w-[45%] md:w-[40%] lg:w-[22%] border border-gray-100 transition-all duration-300 hover:-translate-y-[4px]"
          >
            <div className="flex items-center justify-center gap-2 mb-3">
              <h3 className={`font-cairo text-(--primary) font-semibold sm:text-[18px] ${i18n.language==='ar'?'md:text-[20px]':'md:text-[15px]'}`}>
                {feature.title}
              </h3>
              <Star size={26} className="text-(--chart-3)" />
            </div>

            <p className="font-cairo text-(--tages) font-normal text-[12px] sm:text-[13px] md:text-[14px] leading-[150%] tracking-[0px] text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
