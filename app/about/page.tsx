import React from 'react';

export default function AboutPage() {
  const values = [
    { title: "Innovation", desc: "Pushing the boundaries of hardware technology." },
    { title: "Reliability", desc: "Hardware you can count on for 24/7 operations." },
    { title: "Support", desc: "Dedicated technical assistance for every client." }
  ];

  return (
    <main className="bg-white min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[#18aed1] font-bold tracking-[0.3em] uppercase text-xs mb-4">Establishing Excellence</p>
          <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tighter mb-8">
            Powering the Future of <br />
            <span className="text-[#18aed1]">Digital Infrastructure</span>
          </h1>
          <p className="text-gray-500 text-lg max-w-3xl mx-auto leading-relaxed">
            AXYONTECH is a premier distributor of high-end hardware solutions. From immersive 4K displays to industrial-grade power units, we bridge the gap between world-class manufacturers and your business needs.
          </p>
        </div>
      </section>
       {/* 4. Stats Section */}
      <section className="py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-4xl font-bold text-black">500+</p>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-2">Products</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-black">15+</p>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-2">Brand Partners</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-black">2k+</p>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-2">Clients Served</p>
          </div>
          <div>
            <p className="text-4xl font-bold text-black">24/7</p>
            <p className="text-gray-500 text-sm uppercase tracking-widest mt-2">Tech Support</p>
          </div>
        </div>
      </section>

      {/* 2. Our Story / Mission */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
             {/* Decorative Blue Box */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-[#18aed1]" />
            <div className="bg-gray-100 aspect-video rounded-3xl flex items-center justify-center text-gray-400 italic">
              [Office/Warehouse Image]
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-black mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Founded with a vision to streamline tech procurement, AXYONTECH specializes in sourcing and supplying high-performance components. We don't just sell products; we provide the backbone for digital signage, interactive learning, and high-performance computing.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Every item in our catalogue is hand-picked for its durability and technical specifications, ensuring that our clients receive nothing but the best.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid - Aesthetic White Edition */}
      <section className="py-32 bg-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#18aed1]/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-50 blur-[100px] rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col items-center mb-20">
            <span className="text-[#18aed1] font-mono text-sm tracking-[0.4em] uppercase mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight text-center">
              The values that <span className="italic">drive</span> us.
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {values.map((val, i) => (
              <div 
                key={i} 
                className="group relative p-10 rounded-3xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Subtle Card Background with Glass Effect */}
                <div className="absolute inset-0 bg-gray-50/50 backdrop-blur-sm rounded-3xl border border-gray-100 transition-colors group-hover:bg-white group-hover:border-[#18aed1]/20 group-hover:shadow-[0_20px_50px_rgba(24,174,209,0.1)]" />
                
                <div className="relative z-10">
                  {/* Icon/Number Accent */}
                  <div className="mb-8 flex items-center justify-between">
                    <span className="text-4xl font-bold text-[#18aed1]/10 group-hover:text-[#18aed1]/20 transition-colors">
                      0{i + 1}
                    </span>
                    <div className="w-12 h-[2px] bg-gray-100 group-hover:bg-[#18aed1]/30 transition-colors" />
                  </div>

                  <h3 className="text-2xl font-bold text-black mb-4 tracking-tight">
                    {val.title}
                  </h3>
                  
                  <p className="text-gray-500 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {val.desc}
                  </p>
                  
                  {/* Decorative corner accent that appears on hover */}
                  <div className="absolute -bottom-2 -right-2 w-0 h-0 border-b-2 border-r-2 border-[#18aed1] opacity-0 group-hover:w-6 group-hover:h-6 group-hover:opacity-100 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      {/* 5. Core Capabilities */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
            <h2 className="text-4xl font-bold text-black tracking-tighter">
              Our Strategic <br />
              <span className="text-[#18aed1]">Infrastructure Services</span>
            </h2>
            <p className="text-gray-500 max-w-md">
              We provide more than just hardware; we offer the technical expertise to ensure your deployment is successful from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Bulk Procurement", desc: "Volume-based hardware sourcing for large-scale enterprise deployments." },
              { title: "Custom Specs", desc: "Tailored hardware configurations to meet specific technical requirements." },
              { title: "Global Logistics", desc: "Specialized handling and shipping for sensitive electronic equipment." },
              { title: "OEM Partnerships", desc: "Direct access to original equipment manufacturers for better pricing." }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="w-10 h-10 bg-[#18aed1]/10 rounded-lg flex items-center justify-center text-[#18aed1] font-bold mb-6">
                  0{i + 1}
                </div>
                <h3 className="text-lg font-bold text-black mb-3">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      

    </main>
  );
}