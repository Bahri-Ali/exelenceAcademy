'use client';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Image from 'next/image';
export default function Footer() {
  return (
    <footer className="bg-[#0B63CE]  text-white py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-4">
        <div className="flex flex-col items-start space-y-3">
          <div className="w-[100%] h-[100px]  rounded-md flex items-center justify-center">
            <Image src="/secondLogo.png" width={200} height={100} alt="logo" />
          </div>
          <p className="text-sm leading-relaxed sm:text[2px] text-white/80">
            التميز أكاديمي للتدريب والتعليم — الارتقاء بإمكاناتك وتنمية مهاراتك.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">روابط سريعة</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li>
              <a href="#" className="hover:text-white transition">
                الرئيسية
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                من نحن
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                خدماتنا
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition">
                اتصل بنا
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
          <ul className="space-y-3 text-sm text-white/90">
            <li className="flex items-center gap-2">
              <Phone size={16} /> <span>+213 555 123 456</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> <span>info@exat.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> <span>الرياض، السعودية</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">تابعنا</h3>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-white transition">
              <Linkedin size={20} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-white transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 pt-6 border-t border-white/20 text-center text-xs text-white/70">
        © {new Date().getFullYear()} Excellence Academy. All rights reserved.
      </div>
    </footer>
  );
}
