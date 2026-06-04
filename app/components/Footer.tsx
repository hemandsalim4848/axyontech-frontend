import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-[#18aed1] text-2xl font-bold tracking-tighter">
              AXYON<span className="text-white">TECH</span>
            </Link>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Leading provider of high-performance hardware, digital signage, and interactive solutions for modern enterprises.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-[#18aed1] font-bold mb-6 uppercase text-xs tracking-widest">Navigation</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link href="/" className="hover:text-[#18aed1] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#18aed1] transition-colors">About Us</Link></li>
              <li><Link href="/catalog" className="hover:text-[#18aed1] transition-colors">Product Catalog</Link></li>
              <li><Link href="/contact" className="hover:text-[#18aed1] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Categories */}
          <div>
            <h4 className="text-[#18aed1] font-bold mb-6 uppercase text-xs tracking-widest">Products</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="hover:text-[#18aed1] cursor-pointer">Monitors & Displays</li>
              <li className="hover:text-[#18aed1] cursor-pointer">Interactive Flat Panels</li>
              <li className="hover:text-[#18aed1] cursor-pointer">Power Supply Units</li>
              <li className="hover:text-[#18aed1] cursor-pointer">Digital Signage</li>
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h4 className="text-[#18aed1] font-bold mb-6 uppercase text-xs tracking-widest">Get In Touch</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li>Email: sales@axyontech.com</li>
              <li>Phone: +971 521440379</li>
              <li>Address: Hyderabad, India</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {currentYear} AXYONTECH. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs text-gray-500">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
}