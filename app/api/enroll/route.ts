import { type NextRequest, NextResponse } from "next/server"

// Type definition for enrollment data
interface EnrollmentData {
  firstName: string
  lastName: string
  email: string
  phone: string
  subject: string
  message: string
}

// Validation function for server-side security
function validateEnrollmentData(data: unknown): data is EnrollmentData {
  if (typeof data !== "object" || data === null) return false

  const obj = data as Record<string, unknown>

  return (
    typeof obj.firstName === "string" &&
    obj.firstName.length > 0 &&
    obj.firstName.length <= 100 &&
    typeof obj.lastName === "string" &&
    obj.lastName.length > 0 &&
    obj.lastName.length <= 100 &&
    typeof obj.email === "string" &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(obj.email) &&
    obj.email.length <= 255 &&
    typeof obj.phone === "string" &&
    obj.phone.length >= 7 &&
    obj.phone.length <= 20 &&
    typeof obj.subject === "string" &&
    obj.subject.length > 0 &&
    obj.subject.length <= 200 &&
    typeof obj.message === "string" &&
    obj.message.length >= 10 &&
    obj.message.length <= 5000
  )
}

export async function POST(request: NextRequest) {
  try {
    // Verify content type
    const contentType = request.headers.get("content-type")
    if (!contentType?.includes("application/json")) {
      return NextResponse.json({ error: "Content-Type must be application/json" }, { status: 400 })
    }

    // Parse request body
    const body = await request.json()

    // Validate data
    if (!validateEnrollmentData(body)) {
      return NextResponse.json({ error: "البيانات المرسلة غير صحيحة" }, { status: 400 })
    }

    // Here you would typically save to database or send email
    // Example: await db.enrollments.create(body)
    // Example: await sendEmail(body.email, body)

    console.log("New enrollment:", body)

    return NextResponse.json({ message: "تم استقبال طلبك بنجاح" }, { status: 201 })
  } catch (error) {
    console.error("Enrollment error:", error)
    return NextResponse.json({ error: "حدث خطأ في معالجة الطلب" }, { status: 500 })
  }
}

// Enable CORS headers for security
export function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      "Access-Control-Allow-Origin": process.env.NEXT_PUBLIC_APP_URL || "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  })
}
