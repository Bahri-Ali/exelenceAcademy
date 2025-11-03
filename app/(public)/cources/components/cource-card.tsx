"use client"

import type { Course } from "../lib/types"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star, Clock, Users } from "lucide-react"
import { motion } from "framer-motion"
import Link  from "next/link"
import Image from "next/image"
interface CourseCardProps {
  course: Course
  index: number
}

export function CourseCard({ course, index }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
    >
      <Link href={`/cources/${course.id}`}>
        <Card className="overflow-hidden h-full w-[80%] sm:w-full md:w-full mx-auto hover:shadow-xl transition-all duration-300 border-border bg-card group cursor-pointer">
          <div className="relative overflow-hidden">
            <Image
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover  transition-transform duration-300 group-hover:scale-110"
              width={100}
              height={100}
            />
            {course.originalPrice && (
              <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-3 py-1 rounded-full text-xs font-semibold">
                خصم {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}%
              </div>
            )}
            <div className="absolute bottom-3 right-3 flex -space-x-2">
              {course.enrolledStudents.slice(0, 3).map((student, idx) => (
                <Avatar key={idx} className="border-1 border-white w-6 h-6 bg-(--primary)">
                  <AvatarImage src='/person.png' alt={student.name} />
                  {/* <AvatarFallback>{student.name[0]}</AvatarFallback> */}
                </Avatar>
              ))}
              {course.enrolledStudents.length > 3 && (
                <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-semibold border-2 border-card">
                  +{course.enrolledStudents.length - 3}
                </div>
              )}
            </div>
          </div>

          <CardContent className="p-5 space-y-3">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span className="bg-accent text-accent-foreground px-2 py-1 rounded">{course.category}</span>
              <span className="flex items-center gap-1">
                <Star className="w-3 h-3 fill-(--chart-3) text-(--chart-3)" />
                {course.rating}
              </span>
            </div>

            <h3 className="font-bold text-lg text-foreground line-clamp-2 group-hover:text-primary transition-colors">
              {course.title}
            </h3>

            <p className="text-sm text-muted-foreground">{course.instructor}</p>

            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {course.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users className="w-3 h-3" />
                {course.studentsCount.toLocaleString("ar-EG")} طالب
              </span>
            </div>

            <div className="flex items-center gap-2 pt-2">
              <span className="text-2xl font-bold text-primary">{course.price}</span>
              <span className="text-sm text-muted-foreground">ريال</span>
              {course.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
              )}
            </div>
          </CardContent>

          <CardFooter className="p-5 pt-0">
            <Button className="w-full bg-(--primary) text-primary-foreground hover:bg-primary/90 transition-colors">
              سجل الآن
            </Button>
          </CardFooter>
        </Card>
      </Link>
    </motion.div>
  )
}
