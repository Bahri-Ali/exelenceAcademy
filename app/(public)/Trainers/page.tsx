import { EnrollmentFormWrapper } from './components/enrollment-form-wrapper';


export const metadata = {
  title: 'فقم الآن لتصبح مديراً معتمداً | برنامج التطوير المهني',
  description: 'انضم إلى برنامج التطوير المهني المعتمد. سجل الآن لتصبح مديراً معتمداً من خلال دورات تدريبية متخصصة.',
  keywords: 'برنامج تدريب, مدير معتمد, تطوير مهني, دورات تدريبية',
  openGraph: {
    title: 'فقم الآن لتصبح مديراً معتمداً',
    description: 'برنامج التطوير المهني المعتمد',
    locale: 'ar_SA',
  },
};

export default function Trainers() {
  return (
    <div className="min-h-screen w-[100%] bg-(--mainBackground) space-y-12">
      <EnrollmentFormWrapper />
    </div>
  );
}
