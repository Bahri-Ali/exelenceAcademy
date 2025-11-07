export function WhatYouLearn() {
  const learningPoints = [
    'إتقان أحكام التجويد الأساسية',
    'تلاوة القرآن بطريقة صحيحة',
    'فهم مخارج الحروف',
    'تطبيق أحكام النون الساكنة والتنوين',
    'معرفة أحكام المد والقصر',
    'التدرب على التلاوة مع المعلم',
  ];

  return (
    <div className="border border-gray-300 p-6">
      <h2 className="text-xl font-bold mb-4">ما ستتعلمه</h2>
      <div className="grid md:grid-cols-2 gap-x-8 gap-y-3">
        {learningPoints.map((item, index) => (
          <div key={index} className="flex items-start gap-2">
            <span className="text-gray-700">✓</span>
            <span className="text-sm">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
