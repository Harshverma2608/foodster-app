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
    },
    {
      title: 'My Subscriptions',
      icon: '📅',
      desc: 'Manage your active tiffin plans, track deliveries, and pause anytime.',
      link: '/my-plans',
      btnText: 'View Plans',
    },
    {
      title: 'Favorites',
      icon: '❤️',
      desc: 'You have 3 saved tiffin providers. Re-order your favorites instantly.',
      link: '/discover',
      btnText: 'View Favorites',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-geist">
      <AuthNavbar />
      
      <main className="pt-28 pb-16 px-6 md:px-16 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-3xl -mr-20 -mt-20 opacity-50 pointer-events-none"></div>
          <div className="relative z-10">
            <h1 className="font-oswald text-3xl md:text-5xl text-gray-800 mb-4 tracking-wide capitalize">
              Welcome back, {getUsername(email)}! 👋
            </h1>
            <p className="font-unna text-lg text-gray-600 max-w-2xl">
              Craving a home-cooked meal? Your next delicious tiffin is just a few clicks away. 
            </p>
          </div>
          <div className="hidden md:flex flex-col gap-2 relative z-10">
             <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-xl shadow-sm">
                  🚚
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Next Delivery</p>
                  <p className="font-medium text-gray-800">Today, 1:00 PM</p>
                  <p className="text-sm text-orange-600 font-medium">Maa Ki Rasoi</p>
                </div>
             </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <h2 className="font-oswald text-2xl text-gray-800 mb-6 tracking-wide">QUICK ACTIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {dashboardCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all flex flex-col h-full group">
              <div className="text-4xl mb-4 bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                {card.icon}
              </div>
              <h3 className="font-oswald text-xl text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{card.desc}</p>
              <Link 
                to={card.link}
                className="inline-block text-center border-2 border-orange-400 text-orange-500 hover:bg-orange-400 hover:text-white font-medium px-4 py-2 rounded transition-colors"
              >
                {card.btnText}
              </Link>
            </div>
          ))}
        </div>

        {/* Featured / Highlight */}
        <div className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
           <div className="absolute inset-0 bg-[url('/hero2.jpg')] bg-cover bg-center opacity-20"></div>
           <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
           
           <div className="relative z-10 max-w-xl">
              <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded mb-4 inline-block uppercase tracking-wider">New</span>
              <h2 className="font-oswald text-3xl md:text-4xl text-white mb-3">Tired of cooking?</h2>
              <p className="text-gray-300 mb-6 text-lg">
                Explore our curated list of highly-rated home chefs in your area. Healthy, hygienic, and authentic meals delivered straight to your door.
              </p>
              <Link to="/discover" className="orangeButton text-sm px-8 py-3 inline-block">
                  <span className="relative z-10">Discover Providers</span>
                  <div className="seconddiv" />
                  <div className="thirddiv" />
                  <div className="fourthdiv" />
              </Link>
           </div>
        </div>
      </main>
    </div>
  );
};

export default Home;