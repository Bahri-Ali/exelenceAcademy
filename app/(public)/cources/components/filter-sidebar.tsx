"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import type { FilterState } from "../lib/types"
import { categories, levels, certificateTypes } from "../lib/cources-data"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { SlidersHorizontal, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface FiltersSidebarProps {
  filters: FilterState
  onFilterChange: (key: keyof FilterState, value: string) => void
}

export function FiltersSidebar({ filters, onFilterChange }: FiltersSidebarProps) {
  const [isOpen, setIsOpen] = useState(false)

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-foreground">الفئة</h3>
        <div className="space-y-3">
          {categories.map((category) => (
            <div key={category} className="flex items-center gap-2">
              <Checkbox
                id={category}
                checked={filters.category === category || filters.category === "الكل"}
                onCheckedChange={() => onFilterChange("category", category)}
                className="border-(--primary)"
              />
              <Label htmlFor={category} className="text-sm  font-normal cursor-pointer text-foreground">
                {category}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">المستوى</h3>
        <RadioGroup value={filters.level} onValueChange={(value) => onFilterChange("level", value)}>
          {levels.map((level) => (
            <div key={level.value} className="flex items-center  gap-2">
              <RadioGroupItem value={level.value} className="border-(--primary)" id={level.value} />
              <Label htmlFor={level.value} className="text-sm font-normal cursor-pointer text-foreground">
                {level.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">نوع الشهادة</h3>
        <RadioGroup value={filters.certificateType} onValueChange={(value) => onFilterChange("certificateType", value)}>
          {certificateTypes.map((cert) => (
            <div key={cert.value} className="flex items-center gap-2">
              <RadioGroupItem className="border-(--primary)" value={cert.value} id={cert.value} />
              <Label htmlFor={cert.value} className="text-sm font-normal cursor-pointer text-foreground">
                {cert.label}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="text-lg font-semibold mb-4 text-foreground">السعر</h3>
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Checkbox id="free" className="border-(--primary)" />
            <Label htmlFor="free" className="text-sm font-normal cursor-pointer text-foreground">
              مجاني
            </Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="paid" className="border-(--primary)" />
            <Label htmlFor="paid"  className="text-sm font-normal cursor-pointer text-foreground">
              مدفوع
            </Label>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <>
      <aside className="hidden lg:block w-64 space-y-6 bg-card border border-border rounded-lg p-6">
        <FilterContent />
      </aside>

      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 lg:hidden rounded-full shadow-lg px-6 py-6 gap-2"
        size="lg"
      >
        <SlidersHorizontal className="w-5 h-5" />
        <span className="font-semibold">الفلاتر</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden"
            />

            {/* Filter panel sliding from bottom */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed bottom-0 left-0 right-0 bg-background rounded-t-3xl z-50 lg:hidden max-h-[85vh] overflow-y-auto"
            >
              <div className="sticky top-0 bg-background border-b border-border p-4 flex items-center justify-between rounded-t-3xl">
                <h2 className="text-xl font-bold text-foreground">الفلاتر</h2>
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)} className="rounded-full">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="p-6">
                <FilterContent />
              </div>

              <div className="sticky bottom-0 bg-background border-t border-border p-4">
                <Button onClick={() => setIsOpen(false)} className="w-full rounded-full" size="lg">
                  تطبيق الفلاتر
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
