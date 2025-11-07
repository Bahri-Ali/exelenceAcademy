import { ChevronDown } from 'lucide-react';

export function Curriculum() {
  const sections = [
    { title: 'مقدمة في علم التجويد', lectures: 5, duration: '45 دقيقة' },
    { title: 'مخارج الحروف وصفاتها', lectures: 8, duration: '1 ساعة 30 دقيقة' },
    { title: 'أحكام النون الساكنة والتنوين', lectures: 10, duration: '2 ساعة' },
    { title: 'أحكام الميم الساكنة', lectures: 6, duration: '1 ساعة' },
    { title: 'أحكام المد', lectures: 12, duration: '2 ساعة 30 دقيقة' },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">محتوى الدورة</h2>
      <div className="mb-3 text-sm text-gray-600">8 أقسام • 64 محاضرة • 12 ساعة 30 دقيقة إجمالي</div>

      <div className="border border-gray-300">
        {sections.map((section, index) => (
          <details key={index} className="border-b border-gray-300 last:border-b-0">
            <summary className="p-4 cursor-pointer hover:bg-gray-50 flex items-center justify-between">
              <div className="flex items-center gap-3 flex-1">
                <ChevronDown className="w-5 h-5" />
                <div className="flex-1">
                  <div className="font-bold text-sm">{section.title}</div>
                  <div className="text-xs text-gray-600 mt-1">
                    {section.lectures} محاضرات • {section.duration}
                  </div>
                </div>
              </div>
            </summary>
          </details>
        ))}
      </div>
    </div>
  );
}
