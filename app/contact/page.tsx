"use client";
import React from 'react';

export default function ContactPage() {
  return (
    <main className="bg-white min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Header Section */}
        <div className="mb-20">
          <span className="text-[#18aed1] font-mono text-sm tracking-[0.4em] uppercase mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-bold text-black tracking-tighter uppercase italic">
            Let's build your <br />
            <span className="text-[#18aed1] not-italic">Infrastructure.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Side: Contact Information */}
          <div className="space-y-12">
            <div>
              <h3 className="text-xl font-bold text-black mb-6 border-l-4 border-[#18aed1] pl-4">Contact Details</h3>
              <div className="space-y-6">
                <div className="group">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-xl text-black font-semibold group-hover:text-[#18aed1] transition-colors cursor-pointer">
                    sales@axyontech.com
                  </p>
                </div>
                <div className="group">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-xl text-black font-semibold group-hover:text-[#18aed1] transition-colors cursor-pointer">
                    +971 521440379
                  </p>
                </div>
                <div className="group">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Headquarters</p>
                  <p className="text-xl text-black font-semibold">
                    Hyderabad, India
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Support Card */}
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#18aed1]/5 blur-3xl rounded-full" />
              <h4 className="text-lg font-bold text-black mb-2">Technical Support</h4>
              <p className="text-gray-500 text-sm mb-6">Need immediate technical specs or installation guides for your hardware?</p>
              <button className="text-[#18aed1] font-bold text-sm uppercase tracking-widest hover:underline">
                Open Support Ticket →
              </button>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)]">
  <form className="space-y-6">
    <div className="grid md:grid-cols-2 gap-6">
      {/* 1. Your Name */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Name</label>
        <input 
          type="text" 
          placeholder="John Doe"
          className="w-full p-4 text-black bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#18aed1] transition-colors placeholder:text-gray-300" 
        />
      </div>

      {/* 2. Your Email */}
      <div className="space-y-2">
        <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Email</label>
        <input 
          type="email" 
          placeholder="john@company.com"
          className="w-full text-black p-4 bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#18aed1] transition-colors placeholder:text-gray-300" 
        />
      </div>
    </div>

    {/* 3. Subject */}
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Subject</label>
      <input 
        type="text" 
        placeholder="How can we help?"
        className="w-full p-4 text-black bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#18aed1] transition-colors placeholder:text-gray-300" 
      />
    </div>

    {/* 4. Your Message */}
    <div className="space-y-2">
      <label className="text-xs font-bold uppercase tracking-widest text-gray-400">Your Message</label>
      <textarea 
        rows={4} 
        placeholder="Provide details about your inquiry..." 
        className="w-full p-4 text-black bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:border-[#18aed1] transition-colors placeholder:text-gray-300"
      ></textarea>
    </div>

    <button className="w-full bg-black text-white font-bold py-5 rounded-xl hover:bg-[#18aed1] hover:text-black transition-all duration-300 uppercase tracking-[0.2em] text-sm group flex items-center justify-center gap-3">
      Send Inquiry
      
    </button>
  </form>
</div>

        </div>
      </div>
    </main>
  );
}