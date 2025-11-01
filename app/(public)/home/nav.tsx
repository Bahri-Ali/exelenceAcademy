'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import i18n from '../../in18/i18n';

export default function NavBar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/services', label: t('services') },
    { href: '/cources', label: t('cources') },
    { href: '/Packages', label: t('Packages') },
    { href: '/Trainers', label: t('Trainers') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <nav dir={i18n.language} className={` flex items-center border-b-[2px] sm:border-b-0  h-[82px] w-[100%] sm:w-[90%] m-auto justify-between  `}>
      <div className={`w-[172px] h-[40] sm:m-0 ${i18n.language === 'ar'?'ml-[5%]':'mr-[5%]'} `}>
        <Image src="/mainLogo.png" width={172} height={40} alt="Logo" />
      </div>

      <div className={`hidden md:flex ${i18n.language=='ar'?'flex-row' : 'flex-row-reverse'} items-center gap-6 `}>
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{ fontSize: '15px', fontStyle: 'bold', lineHeight: '24px' }}
              className={`pb-1 border-b-[1px]  text-[15px] font-bold leading-[24px] ${
                isActive ? 'text-(--primary) border-(--primary)' : 'text-(--tages) border-none hover:text-(--primary) hover:border-gray-400'
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>

      <div className="hidden md:flex items-center gap-3 flex-row ">
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="flex items-center gap-2 px-3 py-1 cursor-pointer rounded-md hover:bg-gray-100"
          >
            🌐 {i18n.language === 'ar' ? 'العربية' : 'English'}
          </button>

          {langOpen && (
            <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-md border z-30">
              <button
                className="w-full text-left px-3 cursor-pointer py-2 hover:text-(--primary)"
                onClick={() => {
                  i18n.changeLanguage('en');
                  setLangOpen(false);
                }}
              >
                English
              </button>
              <button
                className="w-full text-left px-3 cursor-pointer py-2 hover:text-(--primary) "
                onClick={() => {
                  i18n.changeLanguage('ar');
                  setLangOpen(false);
                }}
              >
                العربية
              </button>
            </div>
          )}
        </div>

        <Link
          href="/login"
          style={{ backgroundColor: 'var(--primary)' }}
          className="px-4 py-2  text-white rounded-md hover:opacity-80"
        >
          {t('login')}
        </Link>
        <Link
          href="/register"
          style={{
            backgroundColor: 'var(--background)',
            color: 'var(--primary)',
            borderColor: 'var(--primary)',
            border: '1.5px solid',
          }}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:opacity-80"
        >
          {t('register')}
        </Link>
      </div>

      <button className="md:hidden p-2  rounded-md" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {menuOpen && <div className="fixed inset-0 bg-black/40 z-10" onClick={() => setMenuOpen(false)} />}

      {menuOpen && (
        <div
          className={`absolute top-14 ${
            i18n.language === 'ar' ? 'left-4' : 'right-4'
          } w-56 bg-white shadow-md rounded-md border p-4 flex flex-col gap-3 md:hidden z-20`}
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`pb-1 border-b-[1px] ${
                  isActive ? 'text-(--primary) border-(--primary)' : 'text-(--tages) hover:text-(--primary) border-transparent hover:border-(--primary)'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}

          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="px-3 py-1 border rounded-md hover:bg-gray-100 w-full text-left"
            >
              🌐 {t('chooseLang')}
            </button>
            {langOpen && (
              <div className="mt-2 w-full bg-white shadow-md rounded-md border">
                <button
                  className="w-full text-left px-3 py-2 hover:bg-gray-100"
                  onClick={() => {
                    i18n.changeLanguage('en');
                    setLangOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  English
                </button>
                <button
                  className="w-full text-left px-3 py-2 hover:bg-gray-100"
                  onClick={() => {
                    i18n.changeLanguage('ar');
                    setLangOpen(false);
                    setMenuOpen(false);
                  }}
                >
                  العربية
                </button>
              </div>
            )}
          </div>

          <Link
            href="/login"
            className="px-4 py-2 bg-white border border-(--primary) text-(--primary) rounded-md hover:opacity-80 text-center"
            onClick={() => setMenuOpen(false)}
          >
            {t('login')}
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 bg-(--primary) text-white rounded-md hover:opacity-80 text-center"
            onClick={() => setMenuOpen(false)}
          >
            {t('register')}
          </Link>
        </div>
      )}
    </nav>
  );
}
