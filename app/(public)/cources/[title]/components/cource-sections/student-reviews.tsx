import { Star } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { useTranslation } from 'react-i18next';

export function StudentReviews() {
  const { t } = useTranslation();

  return (
    <Card className="p-6 border-none">
      <h2 className="text-2xl font-bold mb-4">{t('Student-evaluations')}</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="text-5xl font-bold text-yellow-600 mb-2">4.5</div>
          <div className="flex mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="text-sm text-gray-600">تقييم الدورة</div>
        </div>

        <div className="space-y-2">
          {[
            { stars: 5, percent: 75 },
            { stars: 4, percent: 15 },
            { stars: 3, percent: 5 },
            { stars: 2, percent: 3 },
            { stars: 1, percent: 2 },
          ].map((rating) => (
            <div key={rating.stars} className="flex items-center gap-2">
              <Progress value={rating.percent} className="flex-1 h-2" />
              <div className="flex items-center gap-1 w-20">
                <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                <span className="text-sm">{rating.stars}</span>
                <span className="text-sm text-gray-600">{rating.percent}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {[
          {
            name: 'محمد علي',
            rating: 5,
            time: 'منذ أسبوعين',
            comment: 'دورة ممتازة جداً! المعلم شرحه واضح ومفصل. استفدت كثيراً من هذه الدورة وأنصح بها بشدة.',
          },
          {
            name: 'فاطمة أحمد',
            rating: 5,
            time: 'منذ شهر',
            comment: 'أفضل دورة لتعلم التجويد. المحتوى منظم بشكل ممتاز والتمارين مفيدة جداً.',
          },
        ].map((review, index) => (
          <div key={index} className="b pt-4">
            <div className="flex items-start gap-3">
              <Avatar>
                <AvatarImage src={`/student-.jpg?height=40&width=40&query=student-${index}`} />
                <AvatarFallback>{review.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-semibold">{review.name}</div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3 h-3 ${
                          star <= review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">{review.time}</span>
                </div>
                <p className="text-sm text-gray-700">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
