import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthNavbar from '../components/AuthNavbar';

const weekDays = [
  { day: 'MON', date: '19', meals: 0, done: true },
  { day: 'TUE', date: '20', meals: 2, active: true },
  { day: 'WED', date: '21', meals: 1 },
  { day: 'THU', date: '22', meals: 0, skipped: true },
  { day: 'FRI', date: '23', meals: 2 },
  { day: 'SAT', date: '24', meals: 0, off: true },
  { day: 'SUN', date: '25', meals: 0, off: true },
];

const recs = [
  { name: 'Spring Harvest Stew', cal: '420 kcal • 32g Protein', badge: 'New', badgeColor: 'bg-[#006c49] text-white', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqjgwA8xZTIwlOp1H03c9-wMjiaxpe_I9fO7BoCLSjEGcsR6SU0ql1EGLklT9zAx0lotBVtv7hSR30yREiB3Mktc3f4SdrVsDg5O6SrxSnaeOxJqcv0mhni5z4fkRzHQmPNolWby-urzAyJBU9VJBWgsT-0JVRCnvpv4y9_SSWStYvX6ObPoofiy3YSkSBCU-9dBqMdCxveoQBwo5ofmcOIz2LoXRA3LuVDyiZxgCtd23Osjee40b4yg7764F73UbsYr49UfZrJNHu' },
  { name: 'Citrus Seared Scallops', cal: '380 kcal • 45g Protein', badge: 'Top Rated', badgeColor: 'bg-orange-500 text-white', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD_JoARcymR53oLqzIWum1SrBHybGrOsHErYkcTxSsyP7ya23FEUVHb_Usvif-NYShtVI71t7nBLSjhn6RtAOYyjwpvvm8tTwHpZ_glCC3w7mOETc6LNdJTmXB9IcBxQqcDjq1Dw9KsE5sBIwp9vVRlTthyA5jEdc-wQpHXn3eOWBkPCKqKhVVaizEY2fcVjWNH7hvHeDOFilEGM3BVkoSQ3MAmNNyuSQVm7pw7RKkVTfbCcMFhx91WVvZG4JO8fkPMyVFBfDtQp-YX' },
  { name: 'Walnut Spinach Bowl', cal: '310 kcal • 18g Protein', badge: null, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuPaN6Agi5X7BFxObzP7u4ZK7oNlDy_BQ_KeFJ8QfEAf018MZD1UmBil0fM_QZawSUSu28wm81VWL0qcb5OCl1ZRlZUi4uD1B9Rc0XrFF1eS2lS301eeFFpraTAEr3sSir3D9scXaD_sFxy4fNrKmkn2s1apLxt5cpqjqiNgZwIKnN4qTsr2bMmT8lCMnShzrlMDso0vxPLdoY2IZKSwwPZFiqIbALDjHzIbg1dxTCo44h7Pdw7-ZaoJ_Y0NRNJKaFjdhg36ZEqAnl' },
  { name: 'Artisan Veggie Flatbread', cal: '540 kcal • 24g Protein', badge: 'High Fiber', badgeColor: 'bg-[#d3e4fe] text-[#5b403e]', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJ_y7GAcJv6TOP65C4F9NoDntQzCUoh3DpvA3leoUuuTg-jF65nMQq46gb6-fVWHplac5nR0-5IVcBkjFNc-jIYlqJL7Xyes2qiOWLNcXJRlMtbnQNOLVGniUoTbl65jdILOjg79KC3JAsZBJefvt-Gyd2V0HmBBzje0JtoFgxoGK0TmX3pELysDiluno5VtQVttFhjz5QW6BvZcGBXgeB50jab-04OZ0k-bEDTJnjIP8SzkCkDA-K4znpr07A5gm5TX7h04_LgtZH' },
];

export default function Home() {
  const [email, setEmail] = useState('');
  useEffect(() => { const e = localStorage.getItem('email'); if (e) setEmail(e); }, []);
  const username = email ? email.split('@')[0] : 'User';

  return (
    <div className="bg-[#f8f9ff] min-h-screen font-geist pb-20">
      <AuthNavbar />
      <main className="max-w-7xl mx-auto px-5 md:px-16 pt-28">
        {/* Header */}
        <header className="mb-10">
          <h1 className="font-bold text-3xl text-[#0b1c30] mb-1" style={{ fontFamily: 'Montserrat' }}>Welcome back, {username}!</h1>
          <p className="text-sm text-[#5b403e]">Your wellness journey is on track. You've saved 4 hours of cooking this week.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Next Delivery Card */}
          <div className="md:col-span-8 bg-white rounded-xl p-8 border border-[#e4beba]/30 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-7 gap-4">
              <div>
                <h2 className="font-bold text-xl text-[#0b1c30] mb-1" style={{ fontFamily: 'Montserrat' }}>Next Delivery</h2>
                <div className="flex items-center gap-2 text-[#006c49] text-sm font-semibold">
                  <span className="material-symbols-outlined text-[18px]">local_shipping</span>
                  Arriving Tuesday, May 20
                </div>
              </div>
              <span className="bg-[#6cf8bb] text-[#00714d] px-4 py-1.5 rounded-full text-xs font-bold">Preparing</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-7">
              {[{ name: 'Miso Salmon', meal: 'Lunch', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCPwu8FFzJ26yJN94bFczS-u1T4RqK4aO7QJuH3qdlrUK2iV0ODzQhbBIuozk5_1-4EtIejZZdzGccDiiv0qxkIo5A_y61s7r-NI_BHpKW_wpYg1EaFyIH2vQI-h9WRvDnHCfgzbtjK3YgO19l2ZmDd7SL-iTk61fp8_k_jVl5vEU6l272-DAd2HXkO5Bn7v2-sXLdpasFZdXRhlQqacQ2g7OSmKjvI8oW7dWDhIgzjk7EfXSmpm0WLoC-B-kfbOegTWfS2bCpNO64a' }, { name: 'Buddha Bowl', meal: 'Dinner', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8_PsMuSqX26P45CmbnTmvJJEmpxEXm5HyoAMYpW1_Op3M6VCsff9D_4IJ-yRD6oeYBRshG7rB9vrLi2CkdNVeYOC0FStXj8ryVAx8hDICfH7qWCZ0-WWxFPpGzWOYgHNfOz-Grj1d60Fv71BMkLk7OA-AEDtrKd0NWM9LAnJbqmv1Rc-FIQhScs_23S5jvRo-oqLPUOkkwWwliuRv9JrNTorOfK4Cit1zblrbnoMhohg2aQNF_kszBU6JgJ7JCEcPfiypOhmfuu-L' }, { name: 'Herb Chicken', meal: 'Dinner', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQlsShVnpOReuilqrIIBhxUHSjJ29GlxiRWreaZ1WTusb_CqbyLvQqjOdsGmBMcgWeufkkazrTDYWap22c8UG5eaumI3QP2NxDgBj4ZQXUg12Y-gmZ4RvudrOtjLKVNXPJXQvgltCquqrmqGsiiyJvqTZMMOelQMpdmPCaQPRUCZoNbjWLpSFNw_w1oxxGsgTPZBUYNCLQrOrucBMGOLXBN3jRDjebZGaDqj-vEAnRsoH-e_9ylBinkMpTznEbSVS_QkfBIRQzJBnJ' }].map(item => (
                <div key={item.name} className="flex gap-4 items-center">
                  <div className="w-16 h-16 rounded-lg bg-[#e5eeff] overflow-hidden flex-shrink-0">
                    <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm text-[#0b1c30]">{item.name}</p>
                    <p className="text-xs text-[#5b403e]">{item.meal}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-wrap gap-3 pt-5 border-t border-[#e4beba]/30">
              <button className="flex items-center gap-2 text-sm font-semibold text-[#b61722] border border-[#b61722] px-5 py-2 rounded-full hover:bg-[#b61722]/5 transition-all active:scale-95">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>Change Delivery Slot
              </button>
              <button className="flex items-center gap-2 text-sm font-semibold text-[#5b403e] border border-[#8f6f6d] px-5 py-2 rounded-full hover:bg-[#e5eeff] transition-all active:scale-95">
                <span className="material-symbols-outlined text-[18px]">block</span>Skip a Meal
              </button>
            </div>
          </div>

          {/* Taste Profile */}
          <div className="md:col-span-4 bg-[#111827] text-white rounded-xl p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="font-bold text-xl mb-5" style={{ fontFamily: 'Montserrat' }}>Taste Profile</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-[#d3e4fe]/80">Protein Goal</span><span className="font-semibold">120g/day</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-3/4 h-full bg-[#6ffbbe] rounded-full"></div>
                </div>
                <div className="flex flex-wrap gap-2 pt-3">
                  {['No Gluten', 'High Protein', 'Pescatarian'].map(t => (
                    <span key={t} className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium">{t}</span>
                  ))}
                </div>
              </div>
            </div>
            <Link to="/plans">
              <button className="mt-8 flex items-center justify-center gap-2 bg-[#b61722] text-white font-semibold text-sm w-full py-3 rounded-full hover:shadow-lg active:scale-95 transition-all">Update Preferences</button>
            </Link>
          </div>

          {/* Weekly Calendar */}
          <div className="md:col-span-12 mt-2 bg-[#eff4ff] rounded-xl p-8 border border-[#e4beba]/30">
            <div className="flex justify-between items-center mb-7">
              <h2 className="font-bold text-xl text-[#0b1c30]" style={{ fontFamily: 'Montserrat' }}>Your Week</h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-full border border-[#8f6f6d] hover:bg-white transition-all"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
                <button className="p-2 rounded-full border border-[#8f6f6d] hover:bg-white transition-all"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
              </div>
            </div>
            <div className="grid grid-cols-4 md:grid-cols-7 gap-3">
              {weekDays.map(d => (
                <div key={d.day} className={`bg-white p-4 rounded-lg shadow-sm border-2 ${d.active ? 'border-[#b61722]' : 'border-transparent'} ${d.done ? 'opacity-60' : ''}`}>
                  <p className={`text-xs font-semibold mb-2 ${d.active ? 'text-[#b61722]' : 'text-[#5b403e]'}`}>{d.day} {d.date}</p>
                  {d.done ? <div className="h-8 flex items-center justify-center"><span className="material-symbols-outlined text-[#5b403e]/40">done</span></div>
                    : d.skipped ? <div className="h-8 flex items-center justify-center text-[#5b403e]/40 text-xs italic">Skipped</div>
                    : d.off ? <p className="text-xs text-[#5b403e]/60 mt-2">No delivery</p>
                    : <div className="space-y-1.5 mt-1">{Array.from({ length: d.meals }).map((_, i) => <div key={i} className={`h-1 rounded-full ${i === 0 ? 'bg-[#006c49]' : 'bg-orange-500'}`}></div>)}<p className="text-xs font-semibold text-[#0b1c30] mt-2">{d.meals} {d.meals === 1 ? 'Meal' : 'Meals'}</p></div>}
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="md:col-span-12 mt-4">
            <div className="flex justify-between items-end mb-7">
              <div>
                <h2 className="font-bold text-xl text-[#0b1c30] mb-1" style={{ fontFamily: 'Montserrat' }}>Recommended for You</h2>
                <p className="text-sm text-[#5b403e]">Based on your love for healthy fats and high-protein recipes.</p>
              </div>
              <Link to="/menu" className="text-[#b61722] text-sm font-semibold flex items-center gap-1 hover:underline">View All <span className="material-symbols-outlined text-[18px]">arrow_forward</span></Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {recs.map(r => (
                <div key={r.name} className="group cursor-pointer">
                  <div className="relative aspect-square rounded-xl overflow-hidden mb-4 shadow-md group-hover:shadow-xl transition-shadow">
                    <img src={r.img} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    {r.badge && <div className="absolute top-3 left-3"><span className={`px-2 py-1 rounded text-[10px] uppercase font-bold ${r.badgeColor}`}>{r.badge}</span></div>}
                  </div>
                  <h4 className="font-bold text-base text-[#0b1c30] group-hover:text-[#b61722] transition-colors" style={{ fontFamily: 'Montserrat' }}>{r.name}</h4>
                  <p className="text-xs text-[#5b403e] mt-1">{r.cal}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}