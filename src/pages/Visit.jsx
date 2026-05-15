import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Visit = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#f8f9ff] text-[#0b1c30] min-h-screen">

      {/* ── Navbar ── */}
      <header className={`w-full top-0 sticky z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/90 backdrop-blur-md border-b border-gray-100'}`}>
        <div className="flex justify-between items-center h-16 px-5 md:px-16 max-w-[1280px] mx-auto">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <img src="/FoodsterLogo3.png" alt="Foodster" className="h-9 w-auto" />
            <span className="font-bold text-xl tracking-wide text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>Foodster</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 items-center">
            <a className="text-sm font-semibold text-[#b61722] border-b-2 border-[#b61722] pb-0.5" href="#">Services</a>
            <a className="text-sm font-medium text-[#5b403e] hover:text-[#b61722] transition-colors" href="#">How It Works</a>
            <a className="text-sm font-medium text-[#5b403e] hover:text-[#b61722] transition-colors" href="#">Plans</a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link to="/login" className="text-sm font-semibold text-[#111827] border border-[#111827] px-5 py-2 rounded-lg hover:bg-gray-50 transition-all">Log In</Link>
            <Link to="/signup" className="text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-600 px-5 py-2 rounded-lg shadow-md hover:scale-95 transition-transform">Sign Up</Link>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden flex flex-col gap-1.5 p-2 rounded-lg hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile drawer */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-72 border-t border-gray-100 bg-white' : 'max-h-0'}`}>
          <div className="px-5 py-4 space-y-1">
            <span className="block px-4 py-2 text-sm font-semibold text-[#b61722]">Services</span>
            <span className="block px-4 py-2 text-sm font-medium text-gray-700">How It Works</span>
            <span className="block px-4 py-2 text-sm font-medium text-gray-700">Plans</span>
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <Link to="/login" onClick={() => setMenuOpen(false)} className="block text-center text-sm font-semibold text-[#111827] border border-[#111827] px-5 py-2 rounded-lg">Log In</Link>
              <Link to="/signup" onClick={() => setMenuOpen(false)} className="block text-center text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-600 px-5 py-2 rounded-lg">Sign Up</Link>
            </div>
          </div>
        </div>
      </header>

      <main>

        {/* ── Hero ── */}
        <section className="relative pt-12 pb-20 px-5 md:px-16 max-w-[1280px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

            {/* Left copy */}
            <div className="z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#ffdad7] rounded-full text-[#930013] text-xs font-semibold mb-6">
                <span className="material-symbols-outlined" style={{ fontSize: 16 }}>rocket_launch</span>
                #1 TIFFIN NETWORK IN INDIA
              </div>
              <h1 className="font-extrabold text-[42px] md:text-[58px] text-[#0b1c30] mb-5 leading-[1.08]" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.02em' }}>
                Say goodbye to<br />
                <span className="text-[#b61722]">cooking stress.</span>
              </h1>
              <p className="text-lg text-[#5b403e] mb-8 max-w-md leading-relaxed">
                Discover local home chefs, subscribe to healthy daily meals, and get hot food delivered straight to your desk or home.
              </p>
              <div className="flex flex-wrap gap-4 mb-10">
                <Link to="/signup">
                  <button className="flex items-center gap-2 text-sm font-semibold text-white bg-gradient-to-r from-orange-500 to-red-600 px-7 py-3.5 rounded-xl shadow-lg hover:scale-95 transition-transform">
                    Find Tiffins Near Me
                  </button>
                </Link>
                <button className="flex items-center gap-2 text-sm font-semibold text-[#111827] bg-white border border-[#e4beba] px-7 py-3.5 rounded-xl shadow-sm hover:bg-gray-50 transition-all">
                  <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  Watch Video
                </button>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  <img className="w-9 h-9 rounded-full border-2 border-white object-cover" src="/hero1.jpg" alt="User" />
                  <img className="w-9 h-9 rounded-full border-2 border-white object-cover" src="/hero2.jpg" alt="User" />
                  <img className="w-9 h-9 rounded-full border-2 border-white object-cover" src="/hero3.jpg" alt="User" />
                </div>
                <p className="text-xs font-medium text-[#5b403e]">Trusted by 10,000+ busy professionals</p>
              </div>
            </div>

            {/* Right image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-[0_20px_60px_-10px_rgba(182,23,34,0.2)] md:rotate-1">
                <img className="w-full h-[420px] object-cover" src="/premium_tiffin.png" alt="Premium Tiffin" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 left-4 md:-left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-[#e4beba] max-w-[240px]">
                <div className="w-9 h-9 bg-[#6cf8bb] rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[#00714d] text-[20px]">verified</span>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0b1c30]">Maa Ki Rasoi delivered!</p>
                  <p className="text-xs text-[#5b403e]">Your Premium Veg meal just arrived.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Services ── */}
        <section className="py-20 bg-[#F8FAFC] px-5 md:px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-14">
              <h2 className="text-3xl font-bold text-[#0b1c30] mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>OUR MEAL SERVICES</h2>
              <p className="text-base text-[#5b403e] max-w-2xl mx-auto">Flexible plans tailored to your lifestyle, diet, and budget. Cancel or pause anytime.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Card 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all group flex flex-row items-stretch">
                <div className="w-28 flex-shrink-0 overflow-hidden">
                  <img src="/hero4.jpg" alt="Standard Tiffin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-[#0b1c30] text-[18px]">lunch_dining</span>
                      <h3 className="text-sm font-bold text-[#0b1c30]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Standard Daily Tiffin</h3>
                    </div>
                    <p className="text-xs text-[#5b403e] leading-relaxed">4 rotis, seasonal veg, dal, rice &amp; salad. Light and energetic.</p>
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#e4beba]/40">
                    <p className="text-base font-bold text-[#0b1c30]">₹2,500<span className="text-xs font-normal text-[#5b403e]">/mo</span></p>
                    <span className="material-symbols-outlined text-[#b61722] text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all group flex flex-row items-stretch border-2 border-[#F97316]/30">
                <div className="w-28 flex-shrink-0 overflow-hidden relative">
                  <img src="/hero5.jpg" alt="Premium Tiffin" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-2 left-0 bg-[#F97316] text-white text-[9px] font-bold px-2 py-0.5">POPULAR</span>
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-[#b61722] text-[18px]">restaurant</span>
                      <h3 className="text-sm font-bold text-[#0b1c30]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Premium Executive</h3>
                    </div>
                    <p className="text-xs text-[#5b403e] leading-relaxed">Paneer/chicken gravy, dal makhani, flavoured rice &amp; dessert.</p>
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#e4beba]/40">
                    <p className="text-base font-bold text-[#0b1c30]">₹3,500<span className="text-xs font-normal text-[#5b403e]">/mo</span></p>
                    <span className="material-symbols-outlined text-[#b61722] text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.06)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all group flex flex-row items-stretch sm:col-span-2 lg:col-span-1">
                <div className="w-28 flex-shrink-0 overflow-hidden">
                  <img src="/hero6.jpg" alt="Diet Plan" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="material-symbols-outlined text-[#006c49] text-[18px]">skillet</span>
                      <h3 className="text-sm font-bold text-[#0b1c30]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Health &amp; Diet Plan</h3>
                    </div>
                    <p className="text-xs text-[#5b403e] leading-relaxed">High protein, low carb — grilled chicken, quinoa &amp; veggies.</p>
                  </div>
                  <div className="flex justify-between items-center mt-3 pt-3 border-t border-[#e4beba]/40">
                    <p className="text-base font-bold text-[#0b1c30]">₹4,000<span className="text-xs font-normal text-[#5b403e]">/mo</span></p>
                    <span className="material-symbols-outlined text-[#b61722] text-[18px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-20 bg-[#111827] text-white px-5 md:px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>HOW FOODSTER WORKS</h2>
              <p className="text-base text-gray-400">Three simple steps to automate your daily meals.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { n: '01', border: 'border-[#b61722]', glow: 'shadow-[0_0_30px_rgba(182,23,34,0.3)]', img: '/hero1.jpg', title: 'Discover', desc: 'Browse top-rated home chefs and tiffin centers in your locality using our smart filters.' },
                { n: '02', border: 'border-[#F97316]', glow: 'shadow-[0_0_30px_rgba(249,115,22,0.3)]', img: '/hero2.jpg', title: 'Subscribe', desc: 'Choose a service tier and set your delivery schedule with a single tap.' },
                { n: '03', border: 'border-[#006c49]', glow: 'shadow-[0_0_30px_rgba(0,108,73,0.3)]', img: '/hero3.jpg', title: 'Enjoy', desc: 'Get hot, fresh, hygienic meals delivered to your desk or doorstep, exactly on time.' },
              ].map(step => (
                <div key={step.n} className="flex flex-col items-center text-center">
                  <div className={`w-20 h-20 rounded-full border-2 ${step.border} overflow-hidden mb-6 ${step.glow}`}>
                    <img src={step.img} alt={step.title} className="w-full h-full object-cover opacity-80" />
                  </div>
                  <span className={`text-xs font-bold border ${step.border} px-3 py-0.5 rounded-full mb-3 text-gray-300`}>{step.n}</span>
                  <h4 className="text-xl font-bold mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>{step.title}</h4>
                  <p className="text-sm text-gray-400 max-w-xs">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Tiffin Showcase ── */}
        <section className="py-20 px-5 md:px-16 bg-[#f8f9ff]">
          <div className="max-w-[1280px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <span className="inline-block bg-[#ffdad7] text-[#930013] text-xs font-semibold px-3 py-1 rounded-full mb-4">FRESH DAILY</span>
                <h2 className="text-3xl font-bold text-[#0b1c30] mb-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>Real food, real flavour,<br />delivered fresh.</h2>
                <p className="text-base text-[#5b403e] mb-8 leading-relaxed">Every meal is prepared fresh by verified home chefs using quality ingredients. No preservatives, no compromise.</p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { icon: 'verified', color: 'text-[#006c49]', bg: 'bg-[#6cf8bb]/20', label: 'Verified Chefs' },
                    { icon: 'eco', color: 'text-[#006c49]', bg: 'bg-[#6cf8bb]/20', label: 'Eco Packaging' },
                    { icon: 'schedule', color: 'text-[#b61722]', bg: 'bg-[#ffdad7]', label: 'On-Time Delivery' },
                    { icon: 'thumb_up', color: 'text-[#F97316]', bg: 'bg-orange-100', label: '4.8★ Avg Rating' },
                  ].map(f => (
                    <div key={f.label} className="flex items-center gap-3 p-3 bg-white rounded-xl shadow-sm border border-[#e4beba]/30">
                      <div className={`w-9 h-9 ${f.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <span className={`material-symbols-outlined text-[20px] ${f.color}`}>{f.icon}</span>
                      </div>
                      <span className="text-sm font-semibold text-[#0b1c30]">{f.label}</span>
                    </div>
                  ))}
                </div>
                <Link to="/signup">
                  <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold text-sm px-8 py-3.5 rounded-xl shadow-lg hover:scale-95 transition-transform">
                    Get Started Today
                  </button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img src="/foodster1.jpeg" alt="Food 1" className="rounded-2xl w-full h-48 object-cover shadow-lg" />
                <img src="/hero6.jpg" alt="Food 2" className="rounded-2xl w-full h-48 object-cover shadow-lg mt-6" />
                <img src="/food-image.jpeg" alt="Food 3" className="rounded-2xl w-full h-48 object-cover shadow-lg -mt-6" />
                <img src="/secondfood.png" alt="Food 4" className="rounded-2xl w-full h-48 object-cover shadow-lg" />
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 px-5 md:px-16">
          <div className="max-w-[1280px] mx-auto">
            <div className="relative bg-gradient-to-r from-orange-500 to-red-600 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_2px_2px,_rgba(255,255,255,0.2)_1px,_transparent_0)] bg-[length:24px_24px]"></div>
              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-10 md:p-16">
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>HUNGRY FOR BETTER FOOD?</h2>
                  <p className="text-white/90 text-base max-w-lg">Join thousands of bachelors and professionals who have already upgraded their daily dining experience.</p>
                </div>
                <div className="flex-shrink-0">
                  <Link to="/signup">
                    <button className="bg-white text-[#b61722] font-bold text-sm px-10 py-4 rounded-2xl shadow-xl hover:bg-gray-50 transition-all hover:scale-105 active:scale-95">
                      Create Free Account
                    </button>
                  </Link>
                </div>
              </div>
              {/* Decorative food image */}
              <img src="/orangeBg.jpeg" alt="" className="absolute right-0 top-0 h-full w-1/3 object-cover opacity-20 mix-blend-overlay hidden md:block" />
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="bg-[#111827] text-white">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 pt-14 pb-8">
          <div className="flex flex-col md:flex-row justify-between gap-10 pb-10 border-b border-white/10">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/FoodsterLogo3.png" alt="Foodster" className="h-8 w-auto brightness-0 invert" />
                <span className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Foodster</span>
              </div>
              <p className="text-xs text-gray-400 max-w-xs">Premium daily tiffin subscriptions. Fresh, healthy, and delivered on time.</p>
            </div>
            {/* Links */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {['Contact Us', 'Privacy Policy', 'Terms of Service', 'FAQ'].map(l => (
                <a key={l} className="text-xs text-gray-400 hover:text-white transition-colors" href="#">{l}</a>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 text-gray-600">
            <p className="text-xs">© 2024 Foodster Technologies. All rights reserved.</p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-[18px]">verified_user</span>
              <span className="material-symbols-outlined text-[18px]">payments</span>
              <span className="material-symbols-outlined text-[18px]">local_shipping</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Visit;
