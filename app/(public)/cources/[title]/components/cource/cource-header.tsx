import { Star, Clock, Globe, Users } from "lucide-react"

export function CourseHeader() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold mb-3 text-balance">دورة إتقان القرآن الكريم</h1>

          <div className="flex items-center gap-2 mb-3 text-sm">
            <span className="font-bold text-yellow-400">4.5</span>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-blue-300 underline cursor-pointer">(2,547 تقييم)</span>
            <span className="text-gray-400">
              <Users className="w-4 h-4 inline mr-1" />
              12,458 طالب
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm mb-3">
            <span className="text-gray-300">أنشئت بواسطة</span>
            <a href="#" className="text-blue-300 underline">
              أحمد محمد
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>آخر تحديث 3/2024</span>
            </div>
            <div className="flex items-center gap-1">
              <Globe className="w-4 h-4" />
              <span>العربية</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
