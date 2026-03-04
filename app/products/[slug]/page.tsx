import { ArrowLeft, Package, Shield, Zap } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import ProductGallery from '@/app/components/ProductGallery';

async function getProduct(slug: string) {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

  try {
    const res = await fetch(
      `${STRAPI_URL}/api/products?filters[Slug][$eq]=${slug}&populate=*`,
      { next: { revalidate: 0 } }
    );

    if (!res.ok) return null;

    const { data } = await res.json();
    return data?.[0] || null;
  } catch (error) {
    console.error("Fetch error:", error);
    return null;
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = await getProduct(slug);
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || "http://127.0.0.1:1337";

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">

      {/* Top Nav Bar */}
      <nav className="border-b border-gray-100 px-6 lg:px-12 py-4 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-sm z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-gray-900 transition-colors"
        >
          <ArrowLeft size={16} />
          <span>Catalogue</span>
        </Link>
        <span className="text-xs font-medium text-gray-400 tracking-widest uppercase">
          {product.category?.Name || "Hardware"}
        </span>
      </nav>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT: Image */}
          <div className="lg:sticky lg:top-24">

            {/* Availability Badge */}
            <div className="flex items-center gap-2 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#18aed1] inline-block animate-pulse" />
              <span className="text-xs font-medium text-[#18aed1] tracking-wide">In Stock · Ships in 24h</span>
            </div>

            {/* Image Container */}
            
  {/* Main Featured Image */}
    {product.Image?.[0] ? (
      <ProductGallery 
  images={product.Image} 
  STRAPI_URL={STRAPI_URL} 
  productName={product.Name} 
/>
    ) : (
      <div className="text-gray-200 text-sm font-medium">No image available</div>
    )}

            {/* Trust Signals */}
            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { icon: Package, label: "Free Shipping" },
                { icon: Shield, label: "2-Year Warranty" },
                { icon: Zap, label: "Deployment Ready" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center gap-1.5 rounded-xl bg-gray-50 py-3 px-2 border border-gray-100 text-center">
                  <Icon size={16} className="text-[#18aed1]" />
                  <span className="text-[11px] text-gray-500 font-medium leading-tight">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Details */}
          <div className="space-y-10 pt-2">

            {/* Title + Price */}
            <div className="space-y-4">
              <p className="text-xs text-gray-400 tracking-widest uppercase font-medium">
                #{product.id?.toString().padStart(4, '0')} · {product.category?.Name || "Hardware"}
              </p>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                {product.Name}
              </h1>
              <p className="text-3xl font-semibold text-gray-900">
                ${product.Price}
                <span className="ml-2 text-base font-normal text-gray-400">USD</span>
              </p>
            </div>

            {/* Short Description */}
             <div className="text-sm text-gray-500 leading-relaxed whitespace-pre-line border-l-2 border-[#18aed1] pl-5">
                <ReactMarkdown>
    {product.SmallDescription}
  </ReactMarkdown>
              </div>

            {/* Divider */}
            <hr className="border-gray-100" />

            {/* Technical Overview */}
            <div className="space-y-3">
              <h3 className="text-sm font-semibold text-gray-900 tracking-wide">Technical Overview</h3>
              <p className="text-sm text-gray-500 leading-loose whitespace-pre-line">
                {product.Description}
              </p>
            </div>

            {/* CTA */}
            <div className="space-y-3 pt-2">
              <button className="w-full bg-[#18aed1] hover:bg-[#149bbf] text-white font-semibold py-4 rounded-xl transition-colors duration-200 text-sm tracking-wide">
                Initiate Deployment
              </button>
              <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-700 font-medium py-4 rounded-xl transition-colors duration-200 text-sm border border-gray-200">
                Request a Quote
              </button>
              <p className="text-center text-xs text-gray-400">
                Guaranteed delivery within 24 hours of confirmation
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}