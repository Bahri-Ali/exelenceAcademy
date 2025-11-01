'use client';
import { Star, Clock, Globe, Award, PlayCircle, FileText, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { coursesData } from '../lib/cources-data';

import Image from 'next/image';
// this page have a static data so will remove the data and make same change whene the API is ready to use
export default function Cource() {
  const { t } = useTranslation();
  const courceSelected: string = usePathname();
  const id = courceSelected.split('/').pop();
  const courceFind = coursesData.find((c) => c.id === id);
  return (
    <div className="min-h-screen ">
      <div className="bg-(--primary) text-white">
        <div className="container mx-auto px-4 py-8 lg:py-12 ">
          <div className="flex  gap-8   ">
            <div className="flex flex-col w-[100%] ">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-balance">
                {' '}
                {courceFind ? courceFind?.title : 'we dent now'}
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
                <span>أنشئت بواسطة</span>
                <a href="#" className="text-blue-400 hover:underline">
                  أحمد محمد
                </a>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-gray-300">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>آخر تحديث 3/2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>العربية</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
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

            <Card className="p-6 border-none">
              <h2 className="text-2xl font-bold mb-4">{t('Description')}</h2>
              <div className="prose prose-sm max-w-none space-y-4 text-gray-700">
                <p>
                  مرحباً بك في دورة إتقان القرآن الكريم، الدورة الشاملة التي ستأخذك من المستوى المبتدئ إلى المستوى
                  المتقدم في تلاوة القرآن الكريم بالتجويد الصحيح.
                </p>
                <p>
                  في هذه الدورة، ستتعلم جميع أحكام التجويد الأساسية والمتقدمة، بدءاً من مخارج الحروف وصفاتها، مروراً
                  بأحكام النون الساكنة والتنوين، وأحكام الميم الساكنة، وأحكام المد، وصولاً إلى الوقف والابتداء.
                </p>
                <p>
                  الدورة مصممة بطريقة تفاعلية تجمع بين الشرح النظري والتطبيق العملي، مع تمارين وتدريبات مكثفة لضمان
                  إتقانك للمهارات المطلوبة.
                </p>
              </div>
            </Card>

            <Card className="p-6 border-none ">
              <h2 className="text-2xl font-bold mb-4">{t('Course-content')}</h2>
              <div className="mb-4 text-sm text-gray-600">8 أقسام • 64 محاضرة • 12 ساعة إجمالي</div>

              <div className="space-y-2">
                {[
                  { title: 'مقدمة في علم التجويد', lectures: 5, duration: '45 دقيقة' },
                  { title: 'مخارج الحروف وصفاتها', lectures: 8, duration: '1 ساعة 30 دقيقة' },
                  { title: 'أحكام النون الساكنة والتنوين', lectures: 10, duration: '2 ساعة' },
                  { title: 'أحكام الميم الساكنة', lectures: 6, duration: '1 ساعة' },
                  { title: 'أحكام المد', lectures: 12, duration: '2 ساعة 30 دقيقة' },
                ].map((section, index) => (
                  <details key={index} className=" rounded-[20px]">
                    <summary className="p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <PlayCircle className="w-5 h-5 col-(--primary)" />
                        <div>
                          <div className="font-semibold">{section.title}</div>
                          <div className="text-sm text-gray-600">
                            {section.lectures} محاضرات • {section.duration}
                          </div>
                        </div>
                      </div>
                    </summary>
                    <div className="px-4 pb-4 space-y-2">
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between py-2 text-sm hover:bg-gray-50 px-2 rounded"
                        >
                          <div className="flex items-center gap-2">
                            <PlayCircle className="w-4 h-4" />
                            <span>محاضرة {i + 1}: مقدمة</span>
                          </div>
                          <span className="text-gray-600">10:30</span>
                        </div>
                      ))}
                    </div>
                  </details>
                ))}
              </div>
            </Card>

            <Card className="p-6 border-none">
              <h2 className="text-2xl font-bold mb-4">{t('Requirements')}</h2>
              <ul className="space-y-2">
                {[
                  'لا يوجد متطلبات مسبقة',
                  'الرغبة في تعلم القرآن الكريم',
                  'جهاز كمبيوتر أو هاتف ذكي مع اتصال بالإنترنت',
                ].map((req, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-gray-400">•</span>
                    <span className="text-sm">{req}</span>
                  </li>
                ))}
              </ul>
            </Card>

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
                    معلم قرآن كريم معتمد مع أكثر من 15 عاماً من الخبرة في تعليم التجويد والقراءات. حاصل على إجازة في
                    القراءات العشر.
                  </p>
                </div>
              </div>
            </Card>

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
                  <div key={index} className=" b pt-4">
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
          </div>

          <div className="lg:col-span-1 ">
            <Card className="sticky top-4 overflow-hidden border-none ">
              <div className="relative aspect-video">
                <Image
                  width={100}
                  height={100}
                  src={courceFind ? courceFind.image : 'we dont now'}
                  alt="Course preview"
                  className="w-full h-full object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
                    <PlayCircle className="w-8 h-8 text-gray-900" />
                  </div>
                </button>
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold">299 ر.س</span>
                  <span className="text-lg text-gray-500 line-through">599 ر.س</span>
                  <Badge variant="destructive" className="bg-(--primary)">
                    خصم 50%
                  </Badge>
                </div>

                <Button className="w-full bg-(--primary) text-white text-lg py-6">اشترك في الدورة</Button>

                <div className="text-center text-sm text-gray-600">ضمان استرجاع المال خلال 30 يوم</div>

                <div className="border-t pt-4 space-y-3">
                  <div className="font-semibold mb-2">تتضمن هذه الدورة:</div>
                  {[
                    { icon: PlayCircle, text: '12 ساعة فيديو حسب الطلب' },
                    { icon: FileText, text: '15 مقالة' },
                    { icon: Award, text: 'شهادة إتمام' },
                    { icon: Clock, text: 'وصول كامل مدى الحياة' },
                    { icon: Globe, text: 'الوصول على الجوال والتلفاز' },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm">
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
