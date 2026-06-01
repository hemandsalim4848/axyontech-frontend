// "use client"; // This is required for interactivity and useState
// import { useState } from 'react';

// export default function ProductGallery({ images, STRAPI_URL, productName }: any) {
//   // 1. Initialize state with the first image
//   const [activeImage, setActiveImage] = useState(images?.[0]?.url);

//   return (
//     <div className="flex flex-col gap-6 lg:col-span-7">
//       {/* MAIN FEATURED IMAGE */}
//       <div className="rounded-2xl border border-gray-100 overflow-hidden aspect-square flex items-center justify-center p-10 lg:p-16 bg-white shadow-sm">
//         {activeImage ? (
//           <img
//             src={`${STRAPI_URL}${activeImage}`}
//             alt={productName}
//             className="w-full h-full object-contain transition-all duration-500 hover:scale-105"
//           />
//         ) : (
//           <div className="text-gray-200 text-sm font-medium italic text-center">
//             System Preview<br/>Unavailable
//           </div>
//         )}
//       </div>

//       {/* ALL IMAGES GALLERY (Thumbnails) */}
//       {images && images.length > 1 && (
//         <div className="grid grid-cols-4 gap-4">
//           {images.map((img: any, index: number) => (
//             <button
//               key={img.id || index}
//               // 2. On click, update the main image display
//               onClick={() => setActiveImage(img.url)}
//               className={`rounded-xl border-2 overflow-hidden aspect-square bg-white p-2 transition-all duration-300 ${
//                 activeImage === img.url 
//                   ? "border-[#18aed1] shadow-md scale-95" 
//                   : "border-gray-100 hover:border-gray-300 opacity-70 hover:opacity-100"
//               }`}
//             >
//               <img
//                 src={`${STRAPI_URL}${img.url}`}
//                 alt={`${productName} view ${index + 1}`}
//                 className="w-full h-full object-contain"
//               />
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }