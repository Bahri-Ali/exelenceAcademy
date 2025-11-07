import { Card } from '@/components/ui/card';
import { useTranslation } from 'react-i18next';

export function Description() {
  const { t } = useTranslation();

  return (
    <Card className="p-6 border-none">
      <h2 className="text-2xl font-bold mb-4">{t('Description')}</h2>
      <div className="prose prose-sm max-w-none space-y-4 text-gray-700">
        <p>
          مرحباً بك في دورة إتقان القرآن الكريم، الدورة الشاملة التي ستأخذك من المستوى المبتدئ إلى المستوى المتقدم في
          تلاوة القرآن الكريم بالتجويد الصحيح.
        </p>
        <p>
          في هذه الدورة، ستتعلم جميع أحكام التجويد الأساسية والمتقدمة، بدءاً من مخارج الحروف وصفاتها، مروراً بأحكام
          النون الساكنة والتنوين، وأحكام الميم الساكنة، وأحكام المد، وصولاً إلى الوقف والابتداء.
        </p>
        <p>
          الدورة مصممة بطريقة تفاعلية تجمع بين الشرح النظري والتطبيق العملي، مع تمارين وتدريبات مكثفة لضمان إتقانك
          للمهارات المطلوبة.
        </p>
      </div>
    </Card>
  );
}
