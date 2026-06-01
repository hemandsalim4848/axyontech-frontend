// "use client";
// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { ArrowUpRight, Box } from 'lucide-react';
// import Link from 'next/link';

// export default function FeaturedProducts() {
//   const [products, setProducts] = useState([]);
//   const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

//   useEffect(() => {
//     const loadProducts = async () => {
//       try {
//         const res = await fetch(`${STRAPI_URL}/api/products?populate=*`);
//         const { data } = await res.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Error fetching products:", error);
//       }
//     };
//     loadProducts();
//   }, [STRAPI_URL]);

//   return (
//     <section className="py-32 bg-[#fafafa] relative overflow-hidden">
//       {/* Background Decorative Element */}
//       <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#18aed1]/5 rounded-full blur-[120px] -z-10" />

//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
//           <div className="space-y-4">
//             <div className="flex items-center gap-2 text-[#18aed1] font-black text-[10px] uppercase tracking-[0.4em]">
//               <Box size={14} /> Available Inventory
//             </div>
//             <h2 className="text-5xl font-black tracking-tighter text-black uppercase">
//               Trending <span className="text-transparent" style={{ WebkitTextStroke: '1.5px black' }}>Products</span>
//             </h2>
//           </div>
//           <Link href="/products" className="text-xs font-bold uppercase text-black tracking-widest border-b-2 border-black pb-1 hover:text-[#18aed1] hover:border-[#18aed1] transition-all">
//             View Full Catalog
//           </Link>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
//   {products.map((product: any, i) => (
//     <motion.div
//       key={product.id}
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       transition={{ delay: i * 0.1 }}
//       viewport={{ once: true }}
//       className="flex" // Force the motion div to allow children to fill height
//     >
//       <Link href={`/products/${product.Slug}`} className="group relative flex flex-col w-full">
//         {/* GLASS CARD CONTAINER - Added flex and h-full */}
//         <div className="relative z-10 flex flex-col h-full bg-white/40 backdrop-blur-xl border border-white/60 rounded-3xl overflow-hidden p-6 transition-all duration-500 group-hover:shadow-[0_20px_50px_rgba(24,174,209,0.15)] group-hover:-translate-y-2">
          
//           {/* Image Space */}
//           <div className="relative aspect-square mb-8 bg-white/50 rounded-2xl overflow-hidden flex-shrink-0 flex items-center justify-center border border-white/20">
//             {product.Image?.[0] ? (
//               <img 
//                 src={`${STRAPI_URL}${product.Image[0].url}`} 
//                 alt={product.Name}
//                 className="w-full h-full object-contain p-8 transition-transform duration-700 group-hover:scale-110"
//               />
//             ) : (
//               <span className="text-6xl opacity-10">📦</span>
//             )}
            
//             <div className="absolute top-4 right-4 p-2 bg-black rounded-full text-white scale-0 group-hover:scale-100 transition-transform duration-300">
//               <ArrowUpRight size={16} />
//             </div>
//           </div>

//           {/* Content Space - Added flex-1 to grow and fill remaining space */}
//           <div className="space-y-4 flex flex-col flex-1">
//             <div className="flex justify-between items-start gap-4">
//               <div className="flex-1">
//                 <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400">
//                   {product.category?.Name || "Standard Unit"}
//                 </span>
//                 {/* Title with min-height or standard leading to prevent jumping */}
//                 <h3 className="text-xl font-black text-black uppercase tracking-tight mt-1 line-clamp-2">
//                   {product.Name}
//                 </h3>
//               </div>
//               <div className="bg-black text-white font-mono text-xs px-3 py-1 rounded-full whitespace-nowrap">
//                 ${product.Price}
//               </div>
//             </div>

//             {/* Description - Added flex-1 so the divider always stays at the bottom */}
//             <p className="text-gray-500 text-sm line-clamp-3 leading-relaxed flex-1">
//               {product.Description}
//             </p>
            
//             {/* Visual Divider - Pushed to the very bottom */}
//             <div className="mt-auto h-[1px] w-full bg-gradient-to-r from-gray-100 via-gray-200 to-transparent pt-2" />
//           </div>
//         </div>

//         {/* Glow Effect */}
//         <div className="absolute inset-0 bg-[#18aed1]/0 group-hover:bg-[#18aed1]/5 blur-2xl rounded-3xl transition-all duration-500 -z-10" />
//       </Link>
//     </motion.div>
//   ))}
// </div>
//       </div>
//     </section>
//   );
// }