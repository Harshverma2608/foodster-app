import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthNavbar from '../components/AuthNavbar';

export default function Checkout() {
  const [slot, setSlot] = useState('morning');

  return (
    <div className="bg-[#f8f9ff] min-h-screen font-geist">
      <AuthNavbar />
      <main className="max-w-[1280px] mx-auto px-5 md:px-16 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left: Checkout Form */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h1 className="font-bold text-4xl md:text-[56px] text-[#0b1c30] mb-2" style={{ fontFamily: 'Montserrat, sans-serif', lineHeight: 1.1 }}>Complete Your Order</h1>
              <p className="text-lg text-[#5b403e]">Review your details and schedule your first delivery.</p>
            </div>

            {/* Progress Steps */}
            <div className="flex items-center justify-between relative px-2 sm:px-4 mb-4">
              <div className="absolute top-5 left-0 w-full h-[2px] bg-[#dce9ff] -z-10"></div>
              {[{ n: '1', label: 'Address', active: true }, { n: '2', label: 'Slot', active: false }, { n: '3', label: 'Payment', active: false }].map(s => (
                <div key={s.n} className="flex flex-col items-center gap-2">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shadow ${s.active ? 'bg-[#b61722] text-white shadow-[#b61722]/30' : 'bg-[#d3e4fe] text-[#5b403e]'}`}>{s.n}</div>
                  <span className={`text-xs font-semibold ${s.active ? 'text-[#b61722]' : 'text-[#5b403e]'}`}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* Address */}
            <section className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#e4beba]/30">
              <div className="flex items-center gap-3 mb-7">
                <span className="material-symbols-outlined text-[#b61722]">location_on</span>
                <h2 className="font-bold text-xl text-[#0b1c30]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Address Details</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[{ label: 'Full Name', placeholder: 'John Doe', type: 'text' }, { label: 'Phone Number', placeholder: '+91 98765 43210', type: 'tel' }].map(f => (
                  <div key={f.label} className="space-y-2">
                    <label className="text-xs font-medium text-[#5b403e] uppercase tracking-wider">{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} className="w-full p-4 rounded-lg bg-[#f8f9ff] border border-[#e4beba] focus:border-[#b61722] focus:ring-1 focus:ring-[#b61722] outline-none transition-all text-sm" />
                  </div>
                ))}
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-medium text-[#5b403e] uppercase tracking-wider">Street Address</label>
                  <input type="text" placeholder="123, Sector 14, Gurugram" className="w-full p-4 rounded-lg bg-[#f8f9ff] border border-[#e4beba] focus:border-[#b61722] focus:ring-1 focus:ring-[#b61722] outline-none transition-all text-sm" />
                </div>
                {[{ label: 'City', placeholder: 'New Delhi' }, { label: 'Postal Code', placeholder: '110001' }].map(f => (
                  <div key={f.label} className="space-y-2">
                    <label className="text-xs font-medium text-[#5b403e] uppercase tracking-wider">{f.label}</label>
                    <input type="text" placeholder={f.placeholder} className="w-full p-4 rounded-lg bg-[#f8f9ff] border border-[#e4beba] focus:border-[#b61722] focus:ring-1 focus:ring-[#b61722] outline-none transition-all text-sm" />
                  </div>
                ))}
              </div>
            </section>

            {/* Delivery Slot */}
            <section className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#e4beba]/30">
              <div className="flex items-center gap-3 mb-7">
                <span className="material-symbols-outlined text-[#b61722]">schedule</span>
                <h2 className="font-bold text-xl text-[#0b1c30]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Delivery Slot</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[{ id: 'morning', title: 'Morning Delivery', time: 'Arrives 7:00 AM - 10:00 AM' }, { id: 'evening', title: 'Evening Delivery', time: 'Arrives 7:00 PM - 9:00 PM' }].map(s => (
                  <button key={s.id} onClick={() => setSlot(s.id)} className={`flex items-center justify-between p-6 rounded-xl border-2 text-left transition-all ${slot === s.id ? 'border-[#b61722] bg-[#b61722]/5' : 'border-[#e4beba] hover:border-[#b61722]/40'}`}>
                    <div>
                      <h3 className="font-semibold text-sm text-[#0b1c30] mb-1">{s.title}</h3>
                      <p className="text-sm text-[#5b403e]">{s.time}</p>
                    </div>
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${slot === s.id ? 'border-[#b61722]' : 'border-[#e4beba]'}`}>
                      {slot === s.id && <div className="w-3 h-3 rounded-full bg-[#b61722]"></div>}
                    </div>
                  </button>
                ))}
              </div>
            </section>

            {/* Payment (Locked) */}
            <section className="bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#e4beba]/30 opacity-60 pointer-events-none">
              <div className="flex items-center gap-3 mb-7">
                <span className="material-symbols-outlined text-[#5b403e]">payments</span>
                <h2 className="font-bold text-xl text-[#5b403e]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Payment Method</h2>
              </div>
              <div className="p-6 bg-[#f8f9ff] rounded-lg border border-dashed border-[#e4beba] text-center">
                <p className="text-sm text-[#5b403e]">Complete address and slot to unlock payment</p>
              </div>
            </section>

            <button className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-[#b61722] text-white font-semibold text-sm px-12 py-5 rounded-xl shadow-lg hover:shadow-xl active:scale-[0.98] transition-all flex items-center justify-center gap-2">
              Save and Continue to Payment
              <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </button>
          </div>

          {/* Right: Order Summary */}
          <aside className="lg:sticky lg:top-28 space-y-5">
            <div className="bg-[#111827] text-white rounded-2xl p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute -top-12 -right-12 w-40 h-40 bg-[#b61722]/20 rounded-full blur-3xl"></div>
              <h3 className="font-bold text-xl mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Order Summary</h3>
              <div className="space-y-5">
                <div className="flex gap-4 items-start pb-5 border-b border-white/10">
                  <img alt="Plan" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwD7PE2eyvRvRKOi2DNtW_oOCl46uw9Txlr4inr8F3j2gElp1abzpLQQAYwRZ8pFk2GbWNWGy-db3Wj8hmTjpDvfJYsjj4L71R1fQadQuZ_hNZw8GfRSLYpVCNe9yq5ZlotKu4hQPefFpVANtVgOccEOwSXeQwSLcURyDbveZ8fViGZvKrcbR3ExYfTUNgzk-cj2UTNj1ZHX94YW-z9WsBtpBjDlW-0NFsLYurdMYx8ZEOsN9-qLmmlLO0BzUvBj-z9Kc_04vf2qxg" className="w-20 h-20 rounded-lg object-cover flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-sm text-white">Premium Tiffin Plan</h4>
                    <p className="text-sm text-[#d3e4fe]/70 mt-1">Daily Lunch &amp; Dinner</p>
                    <span className="inline-block mt-2 px-2 py-0.5 bg-[#006c49]/30 text-[#6ffbbe] text-[10px] uppercase tracking-wider font-bold rounded">Active Selection</span>
                  </div>
                </div>
                <div className="space-y-3 pt-1">
                  {[{ label: 'Subtotal', val: '₹3,500' }, { label: 'Delivery Fee', val: 'Free', green: true }, { label: 'Service Fee', val: '₹50' }].map(r => (
                    <div key={r.label} className="flex justify-between text-sm text-[#d3e4fe]/80">
                      <span>{r.label}</span><span className={r.green ? 'text-[#6ffbbe]' : ''}>{r.val}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-5 border-t border-white/20 flex justify-between items-end">
                  <div>
                    <p className="text-[10px] text-white/50 uppercase tracking-widest">Total to pay</p>
                    <p className="font-bold text-3xl text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>₹3,550</p>
                  </div>
                  <span className="material-symbols-outlined text-[#6ffbbe] text-3xl">verified</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ icon: 'lock', label: 'Secure Checkout', color: 'text-[#b61722]' }, { icon: 'eco', label: 'Eco-Packaging', color: 'text-[#006c49]' }].map(b => (
                <div key={b.label} className="bg-white p-4 rounded-xl shadow-sm border border-[#e4beba]/30 flex flex-col items-center text-center gap-2">
                  <span className={`material-symbols-outlined ${b.color}`}>{b.icon}</span>
                  <span className="text-xs text-[#5b403e] font-medium">{b.label}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#dce9ff]/50 p-5 rounded-xl border border-[#b61722]/10">
              <p className="text-sm text-[#5b403e] italic">"The quality of the ingredients is unmatched. Best tiffin service I've ever used."</p>
              <p className="font-semibold text-sm text-[#0b1c30] mt-3">— Priya S., Software Engineer</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
