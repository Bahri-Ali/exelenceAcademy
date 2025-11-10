export interface Course {
  id: string;
  title: string;
  titleArabic: string;
  titleEnglish: string;
  titleSmall: string;
  instructor: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  studentsCount: number;
  duration: string;
  level: string;
  enrolledStudents: { name: string; avatar: string }[];
  description: string;
  startDate: string;
  whatYouLearn: string[];
  requirements: string[];
  isSuggest:Boolean;
}

export interface FilterState {
  category: string;
  priceRange: string;
  certificateType: string;
  duration: string;
  level: string;
}
