export function Requirements() {
  const requirements = [
    'لا يوجد متطلبات مسبقة',
    'الرغبة في تعلم القرآن الكريم',
    'جهاز كمبيوتر أو هاتف ذكي مع اتصال بالإنترنت',
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">المتطلبات</h2>
      <ul className="space-y-2">
        {requirements.map((req, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <span className="text-gray-600">•</span>
            <span>{req}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
