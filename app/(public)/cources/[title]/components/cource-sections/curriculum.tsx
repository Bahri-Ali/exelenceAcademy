import { PlayCircle } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useTranslation } from "react-i18next"

export function Curriculum() {
  const { t } = useTranslation()

  return (
    <Card className="p-6 border-none">
      <h2 className="text-2xl font-bold mb-4">{t("Course-content")}</h2>
      <div className="mb-4 text-sm text-gray-600">8 أقسام • 64 محاضرة • 12 ساعة إجمالي</div>

      <div className="space-y-2">
        {[
          { title: "مقدمة في علم التجويد", lectures: 5, duration: "45 دقيقة" },
          { title: "مخارج الحروف وصفاتها", lectures: 8, duration: "1 ساعة 30 دقيقة" },
          { title: "أحكام النون الساكنة والتنوين", lectures: 10, duration: "2 ساعة" },
          { title: "أحكام الميم الساكنة", lectures: 6, duration: "1 ساعة" },
          { title: "أحكام المد", lectures: 12, duration: "2 ساعة 30 دقيقة" },
        ].map((section, index) => (
          <details key={index} className="rounded-[20px]">
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
                <div key={i} className="flex items-center justify-between py-2 text-sm hover:bg-gray-50 px-2 rounded">
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
  )
}
