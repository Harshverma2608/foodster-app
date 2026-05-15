import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Visit = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "Standard Daily Tiffin",
      icon: "🍱",
      desc: "Perfect for daily office goers. Includes 4 rotis, seasonal veg, dal, rice, and salad. Homestyle cooking that keeps you light and energetic.",
      price: "₹2,500/mo",
      color: "from-blue-400 to-cyan-300"
    },
    {
      title: "Premium Executive",
      icon: "👑",
      desc: "A rich culinary experience. Includes special paneer/chicken gravy, premium dal makhani, flavoured rice, dessert, and papad.",
      price: "₹3,500/mo",
      color: "from-orange-400 to-red-400"
    },
    {
      title: "Health & Diet Plan",
      icon: "🥗",
      desc: "Tailored for fitness enthusiasts. High protein, low carb meals featuring grilled chicken, quinoa, boiled veggies, and healthy salads.",
      price: "₹4,000/mo",
      color: "from-green-400 to-emerald-400"
    }
  ];

  const steps = [
    { num: "01", title: "Discover", desc: "Browse top-rated home chefs and professional tiffin centers in your locality using our smart map." },
    { num: "02", title: "Subscribe", desc: "Choose a service tier (Standard, Premium, Diet) and set your delivery schedule with a single click." },
    { num: "03", title: "Enjoy", desc: "Get hot, fresh, and hygienic meals delivered straight to your desk or doorstep, exactly on time." }
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] font-geist selection:bg-orange-200">
      {/* Navbar */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'} px-6 md:px-16`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center text-white font-oswald text-xl shadow-lg shadow-orange-500/30">F</div>
            <span className="font-oswald text-2xl font-bold tracking-wide text-gray-900">
              Foodster
            </span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="text-sm font-semibold text-gray-600 hover:text-gray-900 transition-colors">
              Log in
            </Link>
            <Link to="/signup" className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Start Free
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-16 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-orange-100 to-red-50 rounded-full blur-3xl -mr-40 -mt-40 opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-50 to-emerald-50 rounded-full blur-3xl -ml-20 -mb-20 opacity-70"></div>

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 relative z-10">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 rounded-full bg-orange-100/50 border border-orange-200 text-orange-600 font-semibold text-xs tracking-wide uppercase mb-6 animate-fade-in">
              🚀 #1 Tiffin Network in India
            </div>
            <h1 className="font-oswald text-5xl lg:text-7xl text-gray-900 leading-[1.1] tracking-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Say goodbye to <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500">cooking stress.</span>
            </h1>
            <p className="font-unna text-xl text-gray-600 mb-10 leading-relaxed max-w-lg mx-auto lg:mx-0 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Discover local home chefs, subscribe to healthy daily meals, and get hot food delivered straight to your desk or home.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Link to="/signup" className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-red-500 text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 transform hover:-translate-y-1 transition-all">
                Find Tiffins Near Me
              </Link>
              <Link to="/login" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white text-gray-800 border border-gray-200 font-semibold text-lg px-8 py-4 rounded-xl hover:bg-gray-50 transition-all">
                <span className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center text-xs">▶</span>
                See how it works
              </Link>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden`}>
                     <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-500 font-medium">Trusted by 10,000+ professionals</p>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative rounded-2xl overflow-hidden shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)] border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <img src="/premium_tiffin.png" alt="Premium Tiffin Meal" className="w-full h-auto object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm p-4 rounded-xl shadow-lg flex items-center gap-4">
                   <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-xl">✅</div>
                   <div>
                     <p className="font-bold text-gray-900">Maa Ki Rasoi delivered!</p>
                     <p className="text-sm text-gray-500">Your Premium Veg meal just arrived.</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-oswald text-4xl text-gray-900 mb-4 tracking-wide">OUR MEAL SERVICES</h2>
            <p className="text-gray-600 text-lg">We offer flexible plans tailored to your lifestyle, diet, and budget. Cancel or pause anytime.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all group relative overflow-hidden flex flex-col h-full">
                <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${service.color}`}></div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center text-3xl mb-6 shadow-md transform group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="font-oswald text-2xl text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-8 flex-grow">{service.desc}</p>
                <div className="pt-6 border-t border-gray-100 flex items-center justify-between mt-auto">
                  <div>
                    <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Starting from</p>
                    <p className="font-bold text-gray-900 text-xl">{service.price}</p>
                  </div>
                  <Link to="/signup" className="text-gray-900 font-semibold hover:text-orange-500 transition-colors flex items-center gap-1">
                    Select <span className="text-xl leading-none">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero2.jpg')] bg-cover bg-center opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-oswald text-4xl mb-4 tracking-wide">HOW FOODSTER WORKS</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">Three simple steps to automate your daily meals.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 bg-gray-700"></div>
            
            {steps.map((step, idx) => (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-gray-800 border-4 border-gray-900 flex items-center justify-center mb-6 shadow-xl relative">
                   <div className="absolute inset-0 rounded-full border-2 border-orange-500/50 animate-[spin_4s_linear_infinite]"></div>
                   <span className="font-oswald text-3xl text-orange-400">{step.num}</span>
                </div>
                <h3 className="font-oswald text-2xl mb-3">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 md:px-16 relative">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          <div className="relative z-10">
            <h2 className="font-oswald text-4xl md:text-5xl text-white mb-6">HUNGRY FOR BETTER FOOD?</h2>
            <p className="text-orange-100 text-xl mb-10 max-w-2xl mx-auto">
              Join thousands of bachelors and professionals who have already upgraded their daily dining experience.
            </p>
            <Link to="/signup" className="bg-white text-orange-600 font-bold text-lg px-10 py-4 rounded-xl shadow-lg hover:bg-gray-50 transform hover:-translate-y-1 transition-all inline-block">
              Create Your Free Account
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center text-white font-oswald shadow-sm">F</div>
            <span className="font-oswald text-xl font-bold tracking-wide text-gray-900">Foodster</span>
          </div>
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Foodster Technologies. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/login" className="text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors">Log In</Link>
            <Link to="/signup" className="text-gray-500 hover:text-orange-500 font-medium text-sm transition-colors">Sign Up</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Visit;
