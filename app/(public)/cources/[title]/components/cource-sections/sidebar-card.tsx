'use client';
import { PlayCircle, FileText, Award, Clock, Globe } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

export function SidebarCard({ course }: { course: any }) {
  return (
    <div className="lg:col-span-1">
      <Card className="sticky top-4 overflow-hidden border-none">
        <div className="relative aspect-video">
          <Image
            width={100}
            height={100}
            src={course ? course.image : 'we dont now'}
            alt="Course preview"
            className="w-full h-full object-cover"
          />
          <button className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
            <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center">
              <PlayCircle className="w-8 h-8 text-(--tages)" />
            </div>
          </button>
        </div>

        <div className="p-6 space-y-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">299 DA</span>
            <span className="text-lg text-gray-500 line-through">599 DA</span>
            <Badge variant="destructive" className="bg-(--primary)">
              خصم 50%
            </Badge>
          </div>

          <Button className="w-full bg-(--primary) cursor-poiter text-white text-lg py-6">اشترك في الدورة</Button>

          <div className="text-center text-sm text-(--tages)">ضمان استرجاع المال خلال 30 يوم</div>

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
  );
}
