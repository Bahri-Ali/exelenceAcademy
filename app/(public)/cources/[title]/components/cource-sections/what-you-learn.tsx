import { Award } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

export function WhatYouLearn() {
  const { t } = useTranslation();

  return (
    <Card className="p-6 border-none">
      <h2 className="text-2xl font-bold mb-4">{t('What-you-will-learn')}</h2>
      <div className="grid border-none md:grid-cols-2 gap-3">
        {[
          'إتقان أحكام التجويد الأساسية',
          'تلاوة القرآن بطريقة صحيحة',
          'فهم مخارج الحروف',
          'تطبيق أحكام النون الساكنة والتنوين',
          'معرفة أحكام المد والقصر',
          'التدرب على التلاوة مع المعلم',
        ].map((item, index) => (
          <div key={index} className="flex border-none items-start gap-2">
            <Award className="w-5 h-5 text-(--chart-4) flex-shrink-0 mt-0.5" />
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
