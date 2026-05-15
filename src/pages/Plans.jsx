import React from 'react';
import { Link } from 'react-router-dom';
import AuthNavbar from '../components/AuthNavbar';

const plans = [
  {
    id: 'standard',
    label: 'Essential',
    name: 'Standard',
    price: '₹2,500',
    highlight: false,
    badge: null,
    features: ['Daily Lunch & Dinner', '4 Rotis per Meal', 'Standard Curries & Dal', 'Salad & Pickle'],
    borderClass: 'border-[#e4beba]',
    btnClass: 'border-2 border-[#b61722] text-[#b61722] hover:bg-[#b61722]/5',
  },
  {
    id: 'premium',
    label: 'High Value',
    name: 'Premium',
    price: '₹3,500',
    highlight: true,
    badge: 'MOST POPULAR',
    features: ['Lunch, Snacks & Dinner', 'Unlimited Premium Rotis', '2 Premium Sides & Salads', 'Weekly Dessert Surprise', 'Priority Delivery'],
    borderClass: 'border-[#b61722]',
    btnClass: 'bg-gradient-to-r from-orange-500 to-[#b61722] text-white shadow-lg shadow-[#b61722]/20',
  },
  {
    id: 'diet',
    label: 'Health Focused',
    name: 'Diet',
    price: '₹4,000',
    highlight: false,
    badge: null,
    features: ['Calorie Counted Meals', 'Multi-grain Rotis', 'Keto & Vegan Options', 'Macro Tracking Sheet'],
    borderClass: 'border-[#e4beba]',
    btnClass: 'border-2 border-[#b61722] text-[#b61722] hover:bg-[#b61722]/5',
  },
];

export default function Plans() {
  return (
    <div className="bg-[#f8f9ff] min-h-screen font-geist">
      <AuthNavbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 px-6 md:px-16 text-center max-w-7xl mx-auto">
          <h1 className="font-bold text-4xl md:text-[56px] text-[#0b1c30] mb-4" style={{ fontFamily: 'Montserrat', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Choose Your Perfect Plan</h1>
          <p className="text-lg text-[#5b403e] max-w-2xl mx-auto">Freshly prepared meals, tailored to your dietary needs and delivered daily. Cancel or pause anytime.</p>
        </section>

        {/* Plan Cards */}
        <section className="px-6 md:px-16 pb-24 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            {plans.map(plan => (
              <div key={plan.id} className={`relative bg-white border-2 ${plan.borderClass} rounded-2xl p-8 shadow-sm flex flex-col transition-all hover:shadow-xl ${plan.highlight ? 'scale-105 z-10 shadow-xl' : ''}`}>
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#b61722] text-white px-4 py-1 rounded-full text-xs font-bold">{plan.badge}</div>
                )}
                <div className="mb-6">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${plan.highlight ? 'bg-[#b61722]/10 text-[#b61722]' : plan.id === 'diet' ? 'bg-[#006c49]/10 text-[#006c49]' : 'bg-[#dce9ff] text-[#5b403e]'}`}>{plan.label}</span>
                </div>
                <h3 className="font-bold text-2xl text-[#0b1c30] mb-2" style={{ fontFamily: 'Montserrat' }}>{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-4xl font-bold text-[#0b1c30]">{plan.price}</span>
                  <span className="text-[#5b403e] text-sm font-medium">/month</span>
                </div>
                <ul className="space-y-4 mb-10 flex-grow">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[#006c49] text-[20px]">check_circle</span>
                      <span className="text-sm text-[#5b403e]">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/checkout">
                  <button className={`w-full py-4 rounded-xl font-semibold text-sm transition-all active:scale-95 ${plan.btnClass}`}>Select Plan</button>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Custom Plan Section */}
        <section className="bg-[#eff4ff] py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="w-full md:w-1/2">
              <h2 className="font-bold text-3xl text-[#0b1c30] mb-6" style={{ fontFamily: 'Montserrat' }}>Build Your Custom Plan</h2>
              <p className="text-lg text-[#5b403e] mb-8 leading-relaxed">Need more flexibility? Create a meal schedule that fits your unique lifestyle. Choose your delivery days, calorie goals, and portion sizes.</p>
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="bg-[#6cf8bb] p-2 rounded-lg flex-shrink-0">
                    <span className="material-symbols-outlined text-[#00714d]">calendar_today</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#0b1c30]">Flexible Scheduling</p>
                    <p className="text-sm text-[#5b403e]">Pick specific days of the week for delivery.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-sm">
                  <div className="bg-[#dce9ff] p-2 rounded-lg flex-shrink-0">
                    <span className="material-symbols-outlined text-[#0b1c30]">scale</span>
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#0b1c30]">Macro Targeting</p>
                    <p className="text-sm text-[#5b403e]">Specify your protein and carb requirements.</p>
                  </div>
                </div>
              </div>
              <button className="bg-[#111827] text-white px-10 py-4 rounded-xl font-semibold text-sm active:scale-95 transition-all shadow-lg hover:bg-[#0b1c30]">Configure Now</button>
            </div>
            <div className="w-full md:w-1/2 relative">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDx_k5u90_xLHYpDBhDT65-wVpQuGQuktcQroLp3ioOonXt6VCYv-BNUoV1gEA0gsLOtYqCfBDF_ZPGXkhqnNroaILgqwI4gIC28sE7YYZBfaa94fgajVrxAk1MHzvWFBmMs5WoSfevyb89l6DF2A4nnq48xCZNVVTw4Iq7dGOBNmY0_d3kylkU9gihmNzf0SFb4gxJCVVDku89Mo09PB-k-mF9ys-6qcfceaae54AB_Htj1zzuCsWD6aVBO8zsxeYzR_M--5rIxK1z" alt="Custom meal prep" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-2xl flex items-center gap-4">
                <div className="bg-[#006c49] w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white">eco</span>
                </div>
                <div>
                  <p className="font-bold text-xl text-[#0b1c30]">100%</p>
                  <p className="text-xs text-[#5b403e]">Sustainable Packaging</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ CTA */}
        <section className="py-24 px-6 md:px-16 text-center">
          <h2 className="font-bold text-2xl text-[#0b1c30] mb-4" style={{ fontFamily: 'Montserrat' }}>Still have questions?</h2>
          <p className="text-sm text-[#5b403e] mb-8">Our nutritionists are here to help you find the right fit.</p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 rounded-xl border border-[#8f6f6d] text-[#0b1c30] font-semibold text-sm hover:bg-[#e5eeff] transition-colors">View FAQ</button>
            <button className="px-8 py-3 rounded-xl bg-[#e5eeff] text-[#0b1c30] font-semibold text-sm hover:bg-[#dce9ff] transition-colors">Chat with us</button>
          </div>
        </section>
      </main>
    </div>
  );
}
