'use client';

import { type FormEvent, useState, type ChangeEvent } from 'react';
import { Button } from '@/components/ui/button';
import { PersonalInfoSection } from './personal-info-section';
import { QualificationsSection } from './qualifications-section';
import { AttachmentsSection } from './attachments-section';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  specialty: string;
  academicDegree: string;
  previousExperience: string;
  professionalPhoto: File | null;
  cvDocument: File | null;
}

interface FormErrors {
  [key: string]: string;
}

export function EnrollmentFormWrapper() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    specialty: '',
    academicDegree: '',
    previousExperience: '',
    professionalPhoto: null,
    cvDocument: null,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Validation function
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'الاسم الأول مطلوب';
    if (!formData.lastName.trim()) newErrors.lastName = 'اسم العائلة مطلوب';

    if (!formData.email.trim()) {
      newErrors.email = 'البريد الإلكتروني مطلوب';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'البريد الإلكتروني غير صحيح';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'رقم الهاتف مطلوب';
    } else if (!/^[\d+\-\s()]{7,}$/.test(formData.phone)) {
      newErrors.phone = 'رقم الهاتف غير صحيح';
    }

    if (!formData.subject.trim()) newErrors.subject = 'الموضوع مطلوب';
    if (!formData.message.trim()) newErrors.message = 'الرسالة مطلوبة';
    else if (formData.message.trim().length < 10) newErrors.message = 'الرسالة يجب أن تكون أطول من 10 أحرف';

    if (!formData.specialty.trim()) newErrors.specialty = 'التخصص مطلوب';
    if (!formData.academicDegree.trim()) newErrors.academicDegree = 'الدرجة العلمية مطلوبة';
    if (!formData.previousExperience.trim()) newErrors.previousExperience = 'الخبرات السابقة مطلوبة';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Handle file changes
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    const file = files?.[0] || null;

    if (file) {
      const maxSize = 5 * 1024 * 1024;
      const allowedPhotoTypes = ['image/jpeg', 'image/png'];
      const allowedCVTypes = ['application/pdf'];

      const allowedTypes = name === 'professionalPhoto' ? allowedPhotoTypes : allowedCVTypes;

      if (file.size > maxSize) {
        setErrors((prev) => ({
          ...prev,
          [name]: 'حجم الملف يجب أن لا يتجاوز 5MB',
        }));
        return;
      }

      if (!allowedTypes.includes(file.type)) {
        const fileTypeHint = name === 'professionalPhoto' ? 'JPEG أو PNG' : 'PDF';
        setErrors((prev) => ({
          ...prev,
          [name]: `نوع الملف غير مسموح. استخدم ${fileTypeHint}`,
        }));
        return;
      }

      setFormData((prev) => ({
        ...prev,
        [name]: file,
      }));

      if (errors[name]) {
        setErrors((prev) => ({
          ...prev,
          [name]: '',
        }));
      }
    }
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitSuccess(false);

    try {
      const sanitizedData = {
        firstName: formData.firstName.trim().slice(0, 100),
        lastName: formData.lastName.trim().slice(0, 100),
        email: formData.email.trim().toLowerCase().slice(0, 255),
        phone: formData.phone.trim().slice(0, 20),
        subject: formData.subject.trim().slice(0, 200),
        message: formData.message.trim().slice(0, 5000),
        specialty: formData.specialty.trim().slice(0, 200),
        academicDegree: formData.academicDegree.trim().slice(0, 200),
        previousExperience: formData.previousExperience.trim().slice(0, 2000),
      };

      const response = await fetch('/api/enroll', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedData),
      });

      if (!response.ok) throw new Error('فشل في إرسال النموذج');

      setSubmitSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        specialty: '',
        academicDegree: '',
        previousExperience: '',
        professionalPhoto: null,
        cvDocument: null,
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({
        submit: 'حدث خطأ أثناء إرسال النموذج. حاول مرة أخرى.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-(--background) from-slate-50 to-slate-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="w-[100%] m-auto">
        {/* Header */}
        <div className="text-center  mb-8 bg-(--primary) sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 rtl">فقم الآن لتصبح مديراً معتمداً</h1>
          <p className="text-base sm:text-lg text-slate-600 rtl">
            املأ النموذج أدناه واستواصل معك فريق الأخصائيين لتقييم طلبك والانضمام إلى نخبة المديرين
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg w-[90%] p-6 sm:p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-8" dir="rtl">


            {/* Personal Info Section */}
            <PersonalInfoSection
              data={{
                firstName: formData.firstName,
                lastName: formData.lastName,
                email: formData.email,
                phone: formData.phone,
                subject: formData.subject,
                message: formData.message,
              }}
              errors={errors}
              onChange={handleChange}
            />

            {/* <div className="border-b-2 border-blue-400 pb-4">
              <h2 className="text-2xl font-bold text-blue-600">المؤهلات 🎓</h2>
            </div> */}

            {/* Qualifications Section */}
            <QualificationsSection
              data={{
                specialty: formData.specialty,
                academicDegree: formData.academicDegree,
                previousExperience: formData.previousExperience,
              }}
              errors={errors}
              onChange={handleChange}
            />

            {/* <div className="border-b-2 border-blue-400 pb-4">
              <h2 className="text-2xl font-bold text-blue-600">المرفقات 📎</h2>
            </div> */}

            {/* Attachments Section */}
            <AttachmentsSection
              data={{
                professionalPhoto: formData.professionalPhoto,
                cvDocument: formData.cvDocument,
              }}
              errors={errors}
              onChange={handleFileChange}
            />

            {/* Messages */}
            {submitSuccess && (
              <div className="p-4 bg-green-50 border-2 border-green-400 rounded-md text-green-700 text-sm">
                ✓ تم استقبال طلبك بنجاح. سيتواصل معك فريقنا قريباً!
              </div>
            )}

            {errors.submit && (
              <div className="p-4 bg-red-50 border-2 border-red-400 rounded-md text-red-700 text-sm">
                ✗ {errors.submit}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition disabled:opacity-50"
              >
                {isSubmitting ? 'جاري الإرسال...' : 'إرسال الطلب'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
