"use client"

import type { ChangeEvent } from "react"

interface QualificationsData {
  specialty: string
  academicDegree: string
  previousExperience: string
}

interface QualificationsSectionProps {
  data: QualificationsData
  errors: Record<string, string>
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export function QualificationsSection({ data, errors, onChange }: QualificationsSectionProps) {
  return (
    <section className="pt-6 border-t-2 border-slate-200">
      <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-6 flex items-center gap-2">
        <span>المؤهلات  </span>
        <span className="text-2xl">🎓</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="specialty" className="block text-sm font-medium text-slate-700 mb-2">
            التخصص / المجال التدريسي
          </label>
          <input
            type="text"
            id="specialty"
            name="specialty"
            value={data.specialty}
            onChange={onChange}
            placeholder="أدخل تخصصك"
            maxLength={200}
            className="w-full px-4 py-2 border-2 border-slate-300 rounded-md focus:outline-none focus:border-blue-400 transition"
            aria-label="التخصص"
            required
          />
          {errors.specialty && <p className="text-red-500 text-sm mt-1">{errors.specialty}</p>}
        </div>

        <div>
          <label htmlFor="academicDegree" className="block text-sm font-medium text-slate-700 mb-2">
            الدرجة العلمية
          </label>
          <input
            type="text"
            id="academicDegree"
            name="academicDegree"
            value={data.academicDegree}
            onChange={onChange}
            placeholder="أدخل درجتك العلمية"
            maxLength={200}
            className="w-full px-4 py-2 border-2 border-slate-300 rounded-md focus:outline-none focus:border-blue-400 transition"
            aria-label="الدرجة العلمية"
            required
          />
          {errors.academicDegree && <p className="text-red-500 text-sm mt-1">{errors.academicDegree}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="previousExperience" className="block text-sm font-medium text-slate-700 mb-2">
          الخبرات السابقة (حقل نصي)
        </label>
        <textarea
          id="previousExperience"
          name="previousExperience"
          value={data.previousExperience}
          onChange={onChange}
          placeholder="أدخل خبراتك السابقة"
          maxLength={2000}
          rows={4}
          className="w-full px-4 py-2 border-2 border-slate-300 rounded-md focus:outline-none focus:border-blue-400 transition resize-none"
          aria-label="الخبرات السابقة"
          required
        />
        {errors.previousExperience && <p className="text-red-500 text-sm mt-1">{errors.previousExperience}</p>}
        <p className="text-slate-500 text-xs mt-1">{data.previousExperience.length} / 2000 أحرف</p>
      </div>
    </section>
  )
}
