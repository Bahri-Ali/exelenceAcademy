import type { Metadata } from 'next';
export const homeMetadata: Metadata = {
  title: 'EXCELLENCE ACADEMY',
  description: 'التميز شعارنا و خدمتكم راحة لنا و إرضاءكم غايتنا',
  keywords: [' EXCELLENCE ACADEMY', 'تعلم البرمجة', 'دورات تعليمية', '', '', '', 'ذكاء اصطناعي'],
  openGraph: {
    title: ' EXCELLENCE ACADEMY | تعلم البرمجة والتكنولوجيا الحديثة',
    description: 'تعلم البرمجة من الصفر حتى الاحتراف مع أكاديمية المستقبل. دورات عملية، تفاعلية، وشهادات معتمدة',
    url: 'http://localhost:3000',
    siteName: 'EXCELLENCE ACADEMY ',
    images: [
      {
        url: "./mainLogo.png",
        width: 1200,
        height: 630,
        alt: 'Excellence Academy',
      },
    ],
    locale: 'ar',
    type: 'website',
  },
};
