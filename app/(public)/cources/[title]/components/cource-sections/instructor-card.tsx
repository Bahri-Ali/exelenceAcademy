import { Star, Users, PlayCircle } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useTranslation } from 'react-i18next';

export function InstructorCard() {
  const { t } = useTranslation();

  return (
    <Card className="p-6 border-none">
      <h2 className="text-2xl font-bold mb-4">{t('The-coach')}</h2>
      <div className="flex items-start gap-4">
        <Avatar className="w-20 h-20">
          <AvatarImage src="/instructor-teaching.png" />
          <AvatarFallback>أم</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">أحمد محمد</h3>
          <p className="text-sm text-gray-600 mb-3">معلم قرآن معتمد</p>
          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4" />
              <span>تقييم 4.6</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>45,234 طالب</span>
            </div>
            <div className="flex items-center gap-1">
              <PlayCircle className="w-4 h-4" />
              <span>12 دورة</span>
            </div>
          </div>
          <p className="text-sm text-gray-700">
            معلم قرآن كريم معتمد مع أكثر من 15 عاماً من الخبرة في تعليم التجويد والقراءات. حاصل على إجازة في القراءات
            العشر.
          </p>
        </div>
      </div>
    </Card>
  );
}
