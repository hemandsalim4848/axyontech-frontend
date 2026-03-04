export default function WhyUs() {
    const features = [
    { 
      title: "Direct Sourcing", 
      desc: "We work directly with manufacturers to ensure you get the latest hardware without the middleman markup." 
    },
    { 
      title: "Quality Tested", 
      desc: "From PSUs to Interactive Panels, every unit undergoes rigorous QC testing before reaching your doorstep." 
    },
    { 
      title: "Global Shipping", 
      desc: "Reliable logistics and secure packaging to ensure your tech arrives in perfect condition, anywhere." 
    },
  ];
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        {features.map((f, i) => (
          <div key={i} className="flex gap-6 items-start">
            <span className="text-[#18aed1] text-3xl font-bold opacity-30">0{i + 1}</span>
            <div>
              <h3 className="text-xl font-bold text-black mb-2">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}