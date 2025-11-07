import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

export function Requirements() {
  const { t } = useTranslation();

  return (
    <Card className="p-6 border-none">
      <h2 className="text-2xl font-bold mb-4">{t('Requirements')}</h2>
      <ul className="space-y-2">
        {['لا يوجد متطلبات مسبقة', 'الرغبة في تعلم القرآن الكريم', 'جهاز كمبيوتر أو هاتف ذكي مع اتصال بالإنترنت'].map(
          (req, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-gray-400">•</span>
              <span className="text-sm">{req}</span>
            </li>
          ),
        )}
      </ul>
    </Card>
  );
}
