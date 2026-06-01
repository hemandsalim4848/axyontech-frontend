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
      <div className="lg:col-span-7">

        <p className="text-gray-600 text-lg leading-relaxed mb-10 max-w-3xl">
          AXYONTECH delivers innovative technology solutions across
          interactive displays, digital signage, mounting systems,
          mobile accessories, gaming components, and enterprise
          hardware. We bridge the gap between leading manufacturers
          and businesses seeking reliable, high-performance technology
          for modern environments.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          <div>
            <h3 className="text-3xl font-bold text-black mb-2">15+</h3>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Brand Partners
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-black mb-2">500+</h3>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Products
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-black mb-2">2K+</h3>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Clients Served
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-black mb-2">24/7</h3>
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400">
              Support
            </p>
          </div>

        </div>

      </div>

    </div>
  </div>
</section>

);
}
