'use client';

import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="relative w-full">
      <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 " />
      <Input
        type="text"
        placeholder="ابحث عن دورة..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pr-10 bg-card border-(--primary)  focus:border-(--primary)"
      />
    </div>
  );
}
