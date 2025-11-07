import { Star, Clock, Globe, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {Course} from '../../../lib/types'
export function CourseHeader({ course }: { course: Course  }) {
  const { t } = useTranslation();

  return (
    <div className="bg-(--primary) text-white">
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="flex gap-8">
          <div className="flex flex-col w-[100%]">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
              {course ? course?.title : 'we dent now'}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <span className="font-bold text-yellow-400">4.5</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-gray-300">(2,547 تقييم)</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                <span>12,458 طالب</span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 text-sm">
              <span>{t('createdBy')}</span>
              <a href="#" className="text-blue-400 hover:underline">
                أحمد محمد
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{t('lastUpdated')} 3/2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4" />
                <span>{t('language')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
