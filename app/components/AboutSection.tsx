import React from "react";

export default function AboutSection() {
return ( <section className="py-24 px-6 bg-white border-y border-gray-100 overflow-hidden"> <div className="max-w-7xl mx-auto">

    <div className="grid lg:grid-cols-12 gap-16 items-center">

      {/* Left Side */}
      <div className="lg:col-span-5">

        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-[#18aed1]" />
          <p className="text-[#18aed1] font-mono text-[10px] uppercase tracking-[0.5em]">
            About AXYONTECH
          </p>
        </div>

        <h2 className="text-5xl font-black tracking-tighter text-black uppercase leading-none">
          BUILT FOR
          <br />
          <span
            className="text-transparent"
            style={{ WebkitTextStroke: "1.5px black" }}
          >
            MODERN
          </span>
          <br />
          DEPLOYMENTS
        </h2>

      </div>

      {/* Right Side */}
      <div className="lg:col-span-7 space-y-8">

        <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
          AXYONTECH bridges the gap between leading global manufacturers and businesses that need reliable, high-performance technology — built for the demands of modern environments.
        </p>

<ul className="space-y-3">
          {[
            "Interactive displays & digital signage",
            "Mounting systems & mobile accessories",
            "Gaming components & enterprise hardware",
            "Scalable solutions tailored to evolving business needs",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
              <span className="mt-[3px] w-4 h-4 flex-shrink-0 flex items-center justify-center bg-[#18aed1]/10 text-[#18aed1]">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 4l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              {item}
            </li>
          ))}
        </ul>

      </div>

    </div>
  </div>
</section>

);
}
