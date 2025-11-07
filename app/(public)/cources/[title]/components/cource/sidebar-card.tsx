import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle, FileText, Clock, Globe, Award } from "lucide-react"

export function SidebarCard() {
  const features = [
    { icon: PlayCircle, text: "12 ساعة فيديو حسب الطلب" },
    { icon: FileText, text: "15 مقالة" },
    { icon: FileText, text: "مصادر قابلة للتحميل" },
    { icon: Clock, text: "وصول كامل مدى الحياة" },
    { icon: Globe, text: "الوصول على الجوال والتلفاز" },
    { icon: Award, text: "شهادة إتمام" },
  ]

  return (
    <div className="lg:w-80 xl:w-96">
      <div className="sticky top-4">
        <Card className="overflow-hidden shadow-lg">
          <div className="relative aspect-video">
            <img src="/quran-course.jpg" alt="Course preview" className="w-full h-full object-cover" />
            <button className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-colors">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                <PlayCircle className="w-8 h-8 text-gray-900 fill-gray-900" />
              </div>
            </button>
          </div>

          <div className="p-5 space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold">299 ر.س</span>
              <span className="text-base text-gray-500 line-through">599 ر.س</span>
            </div>

            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3">
              اشترك في الدورة
            </Button>

            <div className="text-center text-xs text-gray-600">ضمان استرجاع المال خلال 30 يوم</div>

            <div className="border-t pt-4 space-y-2">
              <div className="font-bold text-sm mb-3">تتضمن هذه الدورة:</div>
              {features.map((item, index) => (
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
  )
}
