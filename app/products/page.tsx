// // This is a Server Component by default
// export default async function ProductCatalogue() {
//   const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

//   // 1. Fetch data from Strapi
//   // We use 'populate=*' to make sure images are included
//   const response = await fetch(`${STRAPI_URL}/api/products?populate=*`, {
//     next: { revalidate: 60 } // Tells Next.js to check for new products every 60 seconds
//   });
  
//   const { data } = await response.json();

//   return (
//     <div style={{ padding: '40px', fontFamily: 'sans-serif' }}>
//       <h1>My Product Catalogue</h1>
      
//       <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
//         {data.map((product: any) => (
//           <div key={product.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px' }}>
//             {/* 2. Display the Image */}
//             {product.Image && (
//               <img 
//                 src={`${STRAPI_URL}${product.Image.url}`} 
//                 alt={product.Name}
//                 style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
//               />
//             )}

//             {/* 3. Display Details */}
//             <h2 style={{ fontSize: '1.2rem', marginTop: '10px' }}>{product.Name}</h2>
//             <p style={{ color: '#666' }}>${product.Price}</p>
//             <button style={{ background: '#0070f3', color: '#fff', border: 'none', padding: '8px 16px', borderRadius: '4px', cursor: 'pointer' }}>
//               View Details
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }