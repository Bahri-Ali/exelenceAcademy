import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Users, PlayCircle } from "lucide-react"

export function InstructorCard() {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">المدرب</h2>
      <div className="flex items-start gap-4">
        <Avatar className="w-16 h-16">
          <AvatarImage src="/instructor-teaching.png" />
          <AvatarFallback>أم</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-blue-600 mb-1">أحمد محمد</h3>
          <p className="text-sm text-gray-600 mb-2">معلم قرآن معتمد</p>
          <div className="flex flex-wrap gap-3 text-xs text-gray-600 mb-2">
            <div className="flex items-center gap-1">
              <Star className="w-3 h-3" />
              <span>تقييم 4.6</span>
            </div>
            <div className="flex items-center gap-1">
              <Users className="w-3 h-3" />
              <span>45,234 طالب</span>
            </div>
            <div className="flex items-center gap-1">
              <PlayCircle className="w-3 h-3" />
              <span>12 دورة</span>
            </div>
          </div>
          <p className="text-sm text-gray-700 leading-relaxed">
            معلم قرآن كريم معتمد مع أكثر من 15 عاماً من الخبرة في تعليم التجويد والقراءات.
          </p>
        </div>
      </div>
    </div>
  )
}
