"use client"

import type { ChangeEvent } from "react"

interface AttachmentsData {
  professionalPhoto: File | null
  cvDocument: File | null
}

interface AttachmentsSectionProps {
  data: AttachmentsData
  errors: Record<string, string>
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export function AttachmentsSection({ data, errors, onChange }: AttachmentsSectionProps) {
  return (
    <section className="pt-6 w-[90%] border-t-2 border-slate-200">
      <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-6 flex items-center gap-2">
        <span>المرفقات</span>
        <span className="text-2xl">📎</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Professional Photo Upload */}
        <div>
          <label htmlFor="professionalPhoto" className="block text-sm font-medium text-slate-700 mb-2">
            رفع صورة شخصية (اختياري)
          </label>
          <input
            type="file"
            id="professionalPhoto"
            name="professionalPhoto"
            onChange={onChange}
            accept="image/jpeg,image/png"
            className="w-full px-4 py-2 border-2 border-slate-300 rounded-md focus:outline-none focus:border-blue-400 transition"
            aria-label="رفع صورة شخصية"
          />
          {data.professionalPhoto && (
            <p className="text-green-600 text-sm mt-2">✓ تم اختيار الملف: {data.professionalPhoto.name}</p>
          )}
          {errors.professionalPhoto && <p className="text-red-500 text-sm mt-1">{errors.professionalPhoto}</p>}
          <p className="text-slate-500 text-xs mt-2">يرجى رفع صور PDF/صور (الحد الأقصى 5MB)</p>
        </div>

        {/* CV Document Upload */}
        <div>
          <label htmlFor="cvDocument" className="block text-sm font-medium text-slate-700 mb-2">
            رفع السيرة الذاتية (CV) (اختياري)
          </label>
          <input
            type="file"
            id="cvDocument"
            name="cvDocument"
            onChange={onChange}
            accept="application/pdf,image/jpeg,image/png"
            className="w-full px-4 py-2 border-2 border-slate-300 rounded-md focus:outline-none focus:border-blue-400 transition"
            aria-label="رفع السيرة الذاتية"
          />
          {data.cvDocument && <p className="text-green-600 text-sm mt-2">✓ تم اختيار الملف: {data.cvDocument.name}</p>}
          {errors.cvDocument && <p className="text-red-500 text-sm mt-1">{errors.cvDocument}</p>}
          <p className="text-slate-500 text-xs mt-2">يرجى رفع صور PDF/صور (الحد الأقصى 5MB)</p>
        </div>
      </div>
    </section>
  )
}
