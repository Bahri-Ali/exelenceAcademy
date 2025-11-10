"use client"

import type { ChangeEvent } from "react"

interface PersonalInfoData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}

interface PersonalInfoSectionProps {
  data: PersonalInfoData
  errors: Record<string, string>
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export function PersonalInfoSection({ data, errors, onChange }: PersonalInfoSectionProps) {
  return (
    <section className="w-[90%] border-1 p-10 rounded-[10px] border-(--sidebar-border) ">
      <h2 className="text-xl sm:text-2xl  font-semibold text-(--chart-1) mb-6 flex items-center gap-2">
        <span>المعلومات الشخصية</span>
        <span className="text-2xl">👔</span>
        <span className="text-2xl">😊</span>
      </h2>

      {/* Name Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-(--tages) mb-2">
            اسم العائلة
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={data.lastName}
            onChange={onChange}
            placeholder="أدخل اسمك"
            maxLength={100}
            className="w-full px-4 py-2 border-2 border-(--card) rounded-md focus:outline-none focus:border-(--primary) transition"
            aria-label="اسم العائلة"
            required
          />
          {errors.lastName && <p className="text-(--destructive) text-sm mt-1">{errors.lastName}</p>}
        </div>

        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-slate-700 mb-2">
            الاسم
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={data.firstName}
            onChange={onChange}
            placeholder="أدخل اسمك"
            maxLength={100}
            className="w-full px-4 py-2 border-2 border-(--card) rounded-md focus:outline-none focus:border-(--primary) transition"
            aria-label="الاسم الأول"
            required
          />
          {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
        </div>
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            رقم الهاتف
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={data.phone}
            onChange={onChange}
            placeholder="+213 XXX XX XX"
            maxLength={20}
            className="w-full px-4 py-2 border-2 border-slate-300 rounded-md focus:outline-none focus:border-(--primary) transition"
            aria-label="رقم الهاتف"
            required
          />
          {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            البريد الإلكتروني
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={data.email}
            onChange={onChange}
            placeholder="example@email.com"
            maxLength={255}
            className="w-full px-4 py-2 border-2 border-slate-300 rounded-md focus:outline-none focus:border-(--primary) transition"
            aria-label="البريد الإلكتروني"
            required
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>
      </div>

      {/* Subject */}
      <div className="mb-6">
        <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
          الموضوع
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={data.subject}
          onChange={onChange}
          placeholder="أدخل موضوع الرسالة"
          maxLength={200}
          className="w-full px-4 py-2 border-2 border-slate-300 rounded-md focus:outline-none focus:border-(--primary) transition"
          aria-label="موضوع الرسالة"
          required
        />
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
          الرسالة
        </label>
        <textarea
          id="message"
          name="message"
          value={data.message}
          onChange={onChange}
          placeholder="اكتب رسالتك هنا"
          maxLength={5000}
          rows={5}
          className="w-full px-4 py-2 border-2 border-slate-300 rounded-md focus:outline-none focus:border-(--primary) transition resize-none"
          aria-label="نص الرسالة"
          required
        />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
        <p className="text-slate-500 text-xs mt-1">{data.message.length} / 5000 أحرف</p>
      </div>
    </section>
  )
}
