import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthNavbar from '../components/AuthNavbar';

const Home = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const getUsername = (email) => {
    if (!email) return 'User';
    return email.split('@')[0];
  };

  const dashboardCards = [
    {
      title: 'Discover Tiffins',
      icon: '🔍',
      desc: 'Find the best home-cooked meals near you with our real-time search.',
      link: '/discover',
      btnText: 'Search Providers',
      bg: 'bg-blue-50/50',
      border: 'border-blue-100',
      text: 'text-blue-600',
      hover: 'hover:border-blue-300 hover:shadow-blue-100'
    },
    {
      title: 'My Subscriptions',
      icon: '📅',
      desc: 'Manage your active tiffin plans, track deliveries, and pause anytime.',
      link: '/my-plans',
      btnText: 'View Plans',
      bg: 'bg-green-50/50',
      border: 'border-green-100',
      text: 'text-green-600',
      hover: 'hover:border-green-300 hover:shadow-green-100'
    },
    {
      title: 'Favorites',
      icon: '❤️',
      desc: 'You have 3 saved tiffin providers. Re-order your favorites instantly.',
      link: '/discover',
      btnText: 'View Favorites',
      bg: 'bg-pink-50/50',
      border: 'border-pink-100',
      text: 'text-pink-600',
      hover: 'hover:border-pink-300 hover:shadow-pink-100'
    },
  ];

  return (
    <div className="min-h-screen bg-[#fafafa] font-geist pb-20">
      <AuthNavbar />
      
      <main className="pt-28 px-6 md:px-16 max-w-7xl mx-auto">
        {/* Stunning Premium Welcome Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-16 group">
          {/* Animated Mesh Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500 opacity-90 transition-transform duration-1000 group-hover:scale-105"></div>
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
          
          <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="text-white">
              <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold uppercase tracking-wider mb-4 border border-white/30">
                Dashboard Overview
              </span>
              <h1 className="font-oswald text-4xl md:text-6xl mb-4 tracking-wide drop-shadow-md">
                Welcome back, {getUsername(email)}!
              </h1>
              <p className="font-unna text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed">
                Your culinary hub. Track today's delivery, discover new home chefs, and manage your healthy lifestyle.
              </p>
            </div>
            
            {/* Glassmorphism Quick Status Card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/30 rounded-2xl p-6 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] w-full md:w-80 flex-shrink-0 transform transition-transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-2xl shadow-inner">
                  🚚
                </div>
                <div>
                  <p className="text-white/70 text-xs font-bold uppercase tracking-wider mb-0.5">Next Delivery</p>
                  <p className="text-white font-bold text-lg">Today, 1:00 PM</p>
                </div>
              </div>
              <div className="bg-black/20 rounded-xl p-4 border border-white/10">
                <p className="text-white/90 text-sm font-medium mb-1">Maa Ki Rasoi - Premium Veg</p>
                <div className="w-full bg-black/30 rounded-full h-1.5 mt-2 overflow-hidden">
                   <div className="bg-green-400 h-1.5 rounded-full w-3/4 animate-[pulse_2s_ease-in-out_infinite]"></div>
                </div>
                <p className="text-xs text-white/60 mt-2 text-right">Out for delivery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-oswald text-3xl text-gray-900 tracking-wide">QUICK ACTIONS</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dashboardCards.map((card, idx) => (
            <div key={idx} className={`bg-white rounded-3xl p-8 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group ${card.hover}`}>
              <div className={`w-20 h-20 rounded-2xl ${card.bg} ${card.border} border flex items-center justify-center text-4xl mb-8 transform transition-transform duration-500 group-hover:rotate-12`}>
                {card.icon}
              </div>
              <h3 className="font-oswald text-2xl text-gray-900 mb-3">{card.title}</h3>
              <p className="text-gray-500 leading-relaxed mb-8 h-16">{card.desc}</p>
              <Link 
                to={card.link}
                className={`inline-flex items-center gap-2 font-bold ${card.text} hover:gap-4 transition-all`}
              >
                {card.btnText} <span className="text-xl">→</span>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;