import Link from 'next/link';
import {
  Monitor,
  Tv,
  Smartphone,
  Gamepad2,
  Cpu,
  Megaphone,
} from 'lucide-react';

const categories = [
  {
    name: "Display Solutions",
    icon: Monitor,
    subcategories: [
      "Interactive Displays",
      "Digital Signage",
      "Portable Display",
      "Monitor",
    ],
  },
  {
    name: "Mounts",
    icon: Tv,
    subcategories: [
      "Trolley and Stands",
      "Monitor Mounts",
      "Wall Brackets",
    ],
  },
  {
    name: "Mobile Accessories",
    icon: Smartphone,
    subcategories: [
      "Mobile Cases",
      "Screen Protectors",
      "Chargers",
      "Mobile Stands",
    ],
  },
  {
    name: "Gaming",
    icon: Gamepad2,
    subcategories: [
      "Power Supply Units",
      "Liquid Coolers",
    ],
  },
];

export default function CategoryGrid() {
  return (
    <section className="py-24 px-6 bg-white overflow-hidden">
        
      <div className="max-w-7xl mx-auto">
        
        {/* Header with a 'Technical' feel */}
        <div className="flex items-end justify-between mb-16 border-b border-gray-100 pb-8">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-[#18aed1]" />
              <p className="text-[#18aed1] font-mono text-[10px] uppercase tracking-[0.5em]">Inventory</p>
            </div>
            <h2 className="text-5xl font-black tracking-tighter text-black uppercase">
              Product <span className="text-transparent" style={{ WebkitTextStroke: '1.5px black' }}>Categories</span>
            </h2>
          </div>
          
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
  {categories.map((cat, i) => {
    const IconComponent = cat.icon;
    return (
      <Link key={i} href={`/catalog`} className="group h-full"> {/* 1. Added h-full */}
        <div className="relative border-[0.5px] border-gray-100 p-12 transition-all duration-500 hover:bg-gray-50/50 flex flex-col h-full overflow-hidden">

  {/* Main Content */}
  <div className="transition-all duration-500 group-hover:-translate-y-2">
    <div className="mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
      <IconComponent
        className="text-black group-hover:text-[#18aed1] transition-colors"
        size={38}
        strokeWidth={1}
      />
    </div>

    <h3 className="text-xl font-bold text-black tracking-tight">
      {cat.name}
    </h3>
  </div>

  {/* Subcategories */}
  <div className="mt-6 opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-64">
    <ul className="space-y-2 border-t border-gray-100 pt-4">
      {cat.subcategories.map((sub, idx) => (
        <li
          key={idx}
          className="text-sm text-gray-500 hover:text-[#18aed1] transition-colors"
        >
          {sub}
        </li>
      ))}
    </ul>
  </div>

</div>
      </Link>
    );
  })}
</div>
      </div>
    </section>
  );
}