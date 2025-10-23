import type { Course } from './types';


// this is a static data of cource and will remove this data 
export const coursesData: Course[] = [
  {
    id: '1',
    title: 'ros and gazebo',
    instructor: 'الشيخ أحمد محمود',
    category: 'coding',
    price: 1000,
    originalPrice: 1500,
    image: '/ros.png',
    rating: 4.8,
    studentsCount: 2543,
    duration: '8 أسابيع',
    level: 'مبتدئ',
    enrolledStudents: [
      { name: 'محمد', avatar: '/male-avatar.png' },
      { name: 'فاطمة', avatar: '/diverse-female-avatar.png' },
      { name: 'علي', avatar: '/male-avatar-2.png' },
    ],
    description: 'تعلم أحكام التجويد والترتيل الصحيح للقرآن الكريم مع معلمين متخصصين',
    startDate: '01 يناير 2025',
  },
  {
    id: '2',
    title: 'دورة التفسير الموضوعي',
    instructor: 'الدكتور خالد السعيد',
    category: 'التفسير',
    price: 1200,
    image: '/k.jpeg',
    rating: 4.9,
    studentsCount: 1876,
    duration: '10 أسابيع',
    level: 'متوسط',
    enrolledStudents: [
      { name: 'عمر', avatar: '/male-avatar-3.png' },
      { name: 'عائشة', avatar: '/female-avatar-2.png' },
    ],
    description: 'دراسة معمقة للتفسير الموضوعي للقرآن الكريم',
    startDate: '15 يناير 2025',
  },
  {
    id: '3',
    title: 'دورة الحديث النبوي الشريف',
    instructor: 'الشيخ يوسف العمري',
    category: 'القرآن الكريم',
    price: 950,
    originalPrice: 1300,
    image: '/q.avif',
    rating: 4.7,
    studentsCount: 3210,
    duration: '6 أسابيع',
    level: 'مبتدئ',
    enrolledStudents: [
      { name: 'حسن', avatar: '/male-avatar-4.png' },
      { name: 'مريم', avatar: '/female-avatar-3.png' },
      { name: 'زيد', avatar: '/male-avatar-5.png' },
    ],
    description: 'تعلم أحاديث النبي صلى الله عليه وسلم وشرحها',
    startDate: '20 يناير 2025',
  },
  
];


// also we need to add all categories priceRanges levels certificateTypes
export const categories = [
  'الكل',
  'القرآن الكريم',
  'coding'

];

export const priceRanges = [
  { label: 'الكل', value: 'all' },
  { label: 'أقل من 5 ساعات', value: '0-5' },
  { label: '5-10 ساعات', value: '5-10' },
  { label: 'أكثر من 10 ساعات', value: '10+' },
];

export const levels = [
  { label: 'الكل', value: 'all' },
  { label: 'مبتدئ', value: 'مبتدئ' },
  { label: 'متوسط', value: 'متوسط' },
  { label: 'متقدم', value: 'متقدم' },
];

export const certificateTypes = [
  { label: 'الكل', value: 'all' },
  { label: 'شهادة معتمدة', value: 'certified' },
  { label: 'شهادة مشاركة', value: 'participation' },
];
