import React, { useState } from 'react';
import AuthNavbar from '../components/AuthNavbar';

const Discover = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('All');

  const providers = [
    { id: 1, name: "Maa Ki Rasoi", type: "Veg", rating: 4.8, price: "₹2500/mo", distance: "1.2 km", image: "/hero3.jpg", tags: ["North Indian", "Homestyle"] },
    { id: 2, name: "Spice Route Tiffins", type: "Non-Veg", rating: 4.5, price: "₹3000/mo", distance: "2.5 km", image: "/hero4.jpg", tags: ["South Indian", "Spicy"] },
    { id: 3, name: "Healthy Bites", type: "Veg", rating: 4.9, price: "₹2800/mo", distance: "0.8 km", image: "/hero5.jpg", tags: ["Keto", "Low Calorie"] },
    { id: 4, name: "The Punjabi Dhaba", type: "Both", rating: 4.6, price: "₹2600/mo", distance: "3.1 km", image: "/hero2.jpg", tags: ["Rich", "Authentic"] },
    { id: 5, name: "Student Specials", type: "Veg", rating: 4.2, price: "₹1800/mo", distance: "1.5 km", image: "/hero1.jpg", tags: ["Budget", "Filling"] },
  ];

  const filteredProviders = providers.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'All' || p.type === filter || p.type === 'Both';
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-geist overflow-hidden">
      <AuthNavbar />
      
      {/* Split Screen Container */}
      <main className="flex-grow pt-[72px] flex flex-col md:flex-row h-[calc(100vh)]">
        
        {/* LEFT PANEL: Search and List */}
        <div className="w-full md:w-1/2 lg:w-5/12 bg-white flex flex-col h-full border-r border-gray-200 shadow-[2px_0_15px_-3px_rgba(0,0,0,0.05)] z-10">
          
          {/* Sticky Header inside Left Panel */}
          <div className="p-6 border-b border-gray-100 bg-white sticky top-0 z-20">
            <h1 className="font-oswald text-3xl text-gray-800 tracking-wide mb-1">DISCOVER TIFFINS</h1>
            <p className="text-gray-500 text-sm mb-6">Find home-cooked meals near you.</p>
            
            <div className="relative mb-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </span>
              <input 
                type="text" 
                placeholder="Search providers, cuisines..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-colors"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {['All', 'Veg', 'Non-Veg'].map(f => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                    filter === f 
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20' 
                      : 'bg-white text-gray-600 border border-gray-200 hover:bg-orange-50'
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          {/* Scrollable List */}
          <div className="flex-grow overflow-y-auto p-6 space-y-5 bg-gray-50/50">
            {filteredProviders.length > 0 ? (
              filteredProviders.map(provider => (
                <div key={provider.id} className="bg-white rounded-xl p-4 flex gap-4 border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all cursor-pointer group">
                  <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                    <img 
                      src={provider.image} 
                      alt={provider.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60"; }}
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex justify-between items-start mb-1">
                        <h3 className="font-oswald text-lg text-gray-800 leading-tight">{provider.name}</h3>
                        <span className="flex items-center text-xs font-bold text-gray-700 bg-gray-100 px-2 py-1 rounded">
                          <span className="text-orange-500 mr-1">★</span>{provider.rating}
                        </span>
                      </div>
                      <p className="text-gray-500 text-xs mb-2 flex items-center gap-1">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        {provider.distance}
                      </p>
                      <div className="flex gap-1 flex-wrap">
                        <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${provider.type === 'Veg' || provider.type === 'Both' ? 'text-green-600 border-green-200 bg-green-50' : 'text-red-600 border-red-200 bg-red-50'}`}>
                          {provider.type}
                        </span>
                        {provider.tags.map(tag => (
                          <span key={tag} className="text-[10px] text-gray-500 bg-gray-100 px-2 py-0.5 rounded">{tag}</span>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-between items-end mt-2">
                      <span className="font-bold text-gray-800">{provider.price}</span>
                      <button className="text-orange-500 text-sm font-medium hover:underline">View Menu</button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500">No tiffin services found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>

        {/* RIGHT PANEL: Map Interface Mockup */}
        <div className="hidden md:block md:w-1/2 lg:w-7/12 relative bg-gray-200">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center opacity-40 mix-blend-luminosity"></div>
          
          {/* Map Overlay Elements */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Fake map pins */}
            {providers.map((p, idx) => (
              <div 
                key={p.id} 
                className={`absolute w-10 h-10 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center animate-fade-in`}
                style={{ 
                  top: `${30 + (idx * 15)}%`, 
                  left: `${20 + (idx % 2 === 0 ? 40 : 10)}%`,
                  animationDelay: `${idx * 0.1}s`
                }}
              >
                <div className="w-8 h-8 bg-white rounded-full shadow-lg border-2 border-orange-500 flex items-center justify-center overflow-hidden z-10">
                  <img src={p.image} className="w-full h-full object-cover opacity-80" alt="" />
                </div>
                <div className="absolute w-full h-full bg-orange-500 rounded-full animate-ping opacity-20"></div>
                <div className="absolute top-full mt-1 bg-white px-2 py-1 rounded shadow text-xs font-bold text-gray-800 whitespace-nowrap opacity-0 md:opacity-100 transition-opacity">
                  {p.name}
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-8 right-8 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-4 max-w-xs animate-fade-in">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center text-xl">📍</div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-0.5">Your Location</p>
              <p className="text-sm font-medium text-gray-800 leading-tight">Cyber City, Gurugram</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Discover;
