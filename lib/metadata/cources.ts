// lib/metadata/baseMetadata.ts
import type { Metadata } from 'next';

export const coursecMeta: Metadata = {
  title: 'Excellence Academy Course',
  description:
    'Excellence Academy هي منصة تعليمية متكاملة تقدم دورات احترافية في مجالات البرمجة، التقنية، التعليم، وحفظ القرآن الكريم، لمساعدتك على بناء مستقبل مهني متميز.',
  keywords: [
    'Excellence Academy',
    'دورات البرمجة',
    'تعلم البرمجة',
    'Next.js',
    'React',
    'Python',
    'ذكاء اصطناعي',
    'تعليم أونلاين',
    'حفظ القرآن',
  ],
  openGraph: {
    title: 'Excellence Academy | منصة تعليمية متكاملة',
    description: 'انضم إلى Excellence Academy وتعلم أحدث المهارات التقنية والتعليمية مع أفضل المدربين.',
    url: 'http://localhost:3000',
    siteName: 'Excellence Academy',
    images: [
      {
        url: './mainLogo.png',
        width: 1200,
        height: 630,
        alt: 'Excellence Academy ',
      },
    ],
    locale: 'ar',
    type: 'website',
  },
};
