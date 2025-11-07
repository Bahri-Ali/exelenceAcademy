import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"
import { Progress } from "@/components/ui/progress"

export function StudentReviews() {
  const ratings = [
    { stars: 5, percent: 75 },
    { stars: 4, percent: 15 },
    { stars: 3, percent: 5 },
    { stars: 2, percent: 3 },
    { stars: 1, percent: 2 },
  ]

  const reviews = [
    {
      name: "محمد علي",
      rating: 5,
      time: "منذ أسبوعين",
      comment: "دورة ممتازة جداً! المعلم شرحه واضح ومفصل. استفدت كثيراً من هذه الدورة وأنصح بها بشدة.",
    },
    {
      name: "فاطمة أحمد",
      rating: 5,
      time: "منذ شهر",
      comment: "أفضل دورة لتعلم التجويد. المحتوى منظم بشكل ممتاز والتمارين مفيدة جداً.",
    },
  ]

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">تقييمات الطلاب</h2>

      <div className="flex gap-8 mb-6">
        <div className="flex flex-col items-center">
          <div className="text-6xl font-bold text-amber-600 mb-2">4.5</div>
          <div className="flex mb-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-4 h-4 fill-amber-500 text-amber-500" />
            ))}
          </div>
          <div className="text-xs text-gray-600">تقييم الدورة</div>
        </div>

        <div className="flex-1 space-y-2">
          {ratings.map((rating) => (
            <div key={rating.stars} className="flex items-center gap-2">
              <Progress value={rating.percent} className="flex-1 h-2" />
              <div className="flex items-center gap-1 text-xs text-gray-600 w-16">
                <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                <span>{rating.stars}</span>
              </div>
              <span className="text-xs text-gray-600 w-8">{rating.percent}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="border-t pt-4">
            <div className="flex items-start gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/student-.jpg" />
                <AvatarFallback>{review.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="font-bold text-sm">{review.name}</div>
                <div className="flex items-center gap-2 mb-1">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star
                        key={star}
                        className={`w-3 h-3 ${
                          star <= review.rating ? "fill-amber-500 text-amber-500" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">{review.time}</span>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">{review.comment}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
