import Link from 'next/link';
import { 
  Monitor, Tv, Smartphone, Zap, Cpu, Megaphone, Plus 
} from 'lucide-react';

const categories = [
  { name: "Monitors", count: "12 Products", icon: Monitor },
  { name: "iFP", count: "8 Products", icon: Tv },
  { name: "Mobile Cases", count: "45 Products", icon: Smartphone },
  { name: "Chargers", count: "20 Products", icon: Zap },
  { name: "PSUs", count: "15 Products", icon: Cpu },
  { name: "Digital Signage", count: "10 Products", icon: Megaphone },
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
          <p className="hidden md:block text-gray-400 text-[10px] font-mono uppercase tracking-widest">
            Total Categories: 06 / 2026_Update
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
  {categories.map((cat, i) => {
    const IconComponent = cat.icon;
    return (
      <Link key={i} href={`/catalog`} className="group h-full"> {/* 1. Added h-full */}
        <div className="relative border-[0.5px] border-gray-100 p-12 transition-all duration-500 hover:bg-gray-50/50 flex flex-col h-full"> {/* 2. Added flex flex-col h-full */}
          
          {/* Subtle Corner Accents */}
          <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#18aed1] transition-all duration-500 group-hover:w-full" />
          <div className="absolute top-0 left-0 w-[1px] h-0 bg-[#18aed1] transition-all duration-500 group-hover:h-full" />
          
          {/* Category Number */}
          <span className="absolute top-4 right-6 font-mono text-[10px] text-gray-300 group-hover:text-[#18aed1] transition-colors">
            0{i + 1}
          </span>

          {/* 3. Wrap content in a div that grows (flex-1) */}
          <div className="flex flex-col items-start flex-1"> 
            <div className="mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <IconComponent 
                className="text-black group-hover:text-[#18aed1] transition-colors" 
                size={38} 
                strokeWidth={1}
              />
            </div>
            
            <h3 className="text-xl font-bold text-black tracking-tight mb-2">
              {cat.name}
            </h3>
            
            {/* The spacer below ensures the category count is always at the very bottom if you want, 
                or just leave it to grow naturally */}
            <div className="mt-auto flex items-center gap-3">
              <p className="text-gray-400 text-xs font-medium uppercase tracking-widest">
                {cat.count}
              </p>
              <Plus className="text-[#18aed1] opacity-0 group-hover:opacity-100 transition-all duration-300" size={14} />
            </div>
          </div>

          {/* Aesthetic Background Grid Pattern */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-[0.03] pointer-events-none transition-opacity duration-700" 
               style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
          />
        </div>
      </Link>
    );
  })}
</div>
      </div>
    </section>
  );
}