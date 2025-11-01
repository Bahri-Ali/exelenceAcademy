// // lib/metadata/courseDynamicMetadata.ts
// import type { Metadata } from "next";



// export function getCourseMetadata(slug: string): Metadata {
//   const course={}
//   return {
//     title: course.title,
//     description: course.description,
//     openGraph: {
//       title: course.title,
//       description: course.description,
//       url: `${baseUrl}/courses/${slug}`,
//       images: [
//         {
//           url: `${baseUrl}${course.image}`,
//           width: 1200,
//           height: 630,
//           alt: course.title,
//         },
//       ],
//       siteName: "Excellence Academy",
//       locale: "ar",
//       type: "article",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: course.title,
//       description: course.description,
//       images: [`${baseUrl}${course.image}`],
//     },
//   };
// }

// this metadata will change when i get the api because there is a data for each cource 