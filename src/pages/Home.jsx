import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthNavbar from '../components/AuthNavbar';

// Simulate whether user has an active plan
// In a real app this would come from an API call
const getHasPlan = () => localStorage.getItem('activePlan') === 'true';

const tiffinMenu = [
  { name: 'Paneer Butter Masala', type: 'Veg', cal: '380 kcal', img: '/hero3.jpg', tags: ['North Indian', 'Rich'] },
  { name: 'Dal Makhani + Rice', type: 'Veg', cal: '320 kcal', img: '/hero4.jpg', tags: ['Comfort Food', 'High Protein'] },
  { name: 'Chicken Curry Thali', type: 'Non-Veg', cal: '520 kcal', img: '/hero5.jpg', tags: ['Non-Veg', 'Filling'] },
  { name: 'Rajma Chawal', type: 'Veg', cal: '410 kcal', img: '/hero6.jpg', tags: ['Veg', 'Classic'] },
  { name: 'Aloo Gobi + Roti', type: 'Veg', cal: '290 kcal', img: '/hero1.jpg', tags: ['Light', 'Homestyle'] },
  { name: 'Egg Curry Thali', type: 'Non-Veg', cal: '440 kcal', img: '/hero2.jpg', tags: ['Non-Veg', 'Protein'] },
];

const recs = [
  { name: 'Spring Harvest Stew', cal: '420 kcal • 32g Protein', badge: 'New', badgeClass: 'bg-[#006c49] text-white', img: '/foodster1.jpeg' },
  { name: 'Premium Tiffin Thali', cal: '380 kcal • 45g Protein', badge: 'Top Rated', badgeClass: 'bg-orange-500 text-white', img: '/premium_tiffin.png' },
  { name: 'Healthy Veg Bowl', cal: '310 kcal • 18g Protein', badge: null, img: '/secondfood.png' },
  { name: 'Artisan Flatbread', cal: '540 kcal • 24g Protein', badge: 'High Fiber', badgeClass: 'bg-[#d3e4fe] text-[#5b403e]', img: '/food-image.jpeg' },
];

// ── New User Onboarding Dashboard ─────────────────────────────────────────────
function NewUserDashboard({ username }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

      {/* Welcome CTA */}
      <div className="md:col-span-8 bg-gradient-to-br from-[#111827] to-[#1e2d40] rounded-xl p-8 text-white shadow-xl relative overflow-hidden">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#b61722]/20 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <span className="inline-flex items-center gap-1.5 bg-[#b61722]/20 text-[#ffb3ad] text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <span className="material-symbols-outlined text-[14px]">waving_hand</span>
            Welcome to Foodster!
          </span>
          <h2 className="font-bold text-2xl mb-3" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            You're all set, {username}!
          </h2>
          <p className="text-[#d3e4fe]/80 text-sm mb-6 max-w-md leading-relaxed">
            You don't have an active plan yet. Browse our tiffin services, pick a plan that fits your lifestyle, and get fresh meals delivered daily.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/plans">
              <button className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-[#b61722] text-white font-semibold text-sm px-6 py-3 rounded-xl shadow-lg hover:scale-95 transition-transform">
                <span className="material-symbols-outlined text-[18px]">subscriptions</span>
                Browse Plans
              </button>
            </Link>
            <Link to="/discover">
              <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all">
                <span className="material-symbols-outlined text-[18px]">explore</span>
                Discover Tiffins
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="md:col-span-4 grid grid-cols-1 gap-4">
        {[
          { icon: 'restaurant', color: 'text-[#b61722]', bg: 'bg-[#ffdad7]', label: 'Meals Available', value: '50+ daily' },
          { icon: 'verified', color: 'text-[#006c49]', bg: 'bg-[#6cf8bb]/30', label: 'Verified Chefs', value: '20+ nearby' },
          { icon: 'local_shipping', color: 'text-[#F97316]', bg: 'bg-orange-100', label: 'Delivery Time', value: 'Under 45 mins' },
        ].map(s => (
          <div key={s.label} className="bg-white rounded-xl p-4 border border-[#e4beba]/30 shadow-sm flex items-center gap-4">
            <div className={`w-10 h-10 ${s.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
              <span className={`material-symbols-outlined text-[20px] ${s.color}`}>{s.icon}</span>
            </div>
            <div>
              <p className="text-xs text-[#5b403e]">{s.label}</p>
              <p className="font-bold text-sm text-[#0b1c30]">{s.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* How it works steps */}
      <div className="md:col-span-12 bg-[#eff4ff] rounded-xl p-8 border border-[#e4beba]/30">
        <h2 className="font-bold text-xl text-[#0b1c30] mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Get started in 3 steps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { n: '01', icon: 'explore', title: 'Discover', desc: 'Browse verified home chefs and tiffin providers near you.', link: '/discover', linkLabel: 'Explore Now' },
            { n: '02', icon: 'subscriptions', title: 'Choose a Plan', desc: 'Pick Standard, Premium, or Diet — cancel anytime.', link: '/plans', linkLabel: 'See Plans' },
            { n: '03', icon: 'local_shipping', title: 'Get Delivered', desc: 'Fresh meals arrive at your door every day on schedule.', link: '/checkout', linkLabel: 'Get Started' },
          ].map(step => (
            <div key={step.n} className="bg-white rounded-xl p-6 shadow-sm border border-[#e4beba]/20 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold text-[#b61722] bg-[#ffdad7] px-2 py-0.5 rounded-full">{step.n}</span>
                <span className="material-symbols-outlined text-[#b61722] text-[22px]">{step.icon}</span>
              </div>
              <h3 className="font-bold text-base text-[#0b1c30]" style={{ fontFamily: 'Montserrat, sans-serif' }}>{step.title}</h3>
              <p className="text-xs text-[#5b403e] leading-relaxed flex-grow">{step.desc}</p>
              <Link to={step.link} className="text-[#b61722] text-xs font-semibold flex items-center gap-1 hover:underline mt-1">
                {step.linkLabel} <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// ── Active User Dashboard ─────────────────────────────────────────────────────
function ActiveUserDashboard() {
  const weekDays = [
    { day: 'MON', date: '23', meals: 0, done: true },
    { day: 'TUE', date: '24', meals: 2, active: true },
    { day: 'WED', date: '25', meals: 1 },
    { day: 'THU', date: '26', meals: 0, skipped: true },
    { day: 'FRI', date: '27', meals: 2 },
    { day: 'SAT', date: '28', meals: 0, off: true },
    { day: 'SUN', date: '29', meals: 0, off: true },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* Next Delivery */}
      <div className="md:col-span-8 bg-white rounded-xl p-8 border border-[#e4beba]/30 shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-7 gap-4">
          <div>
            <h2 className="font-bold text-xl text-[#0b1c30] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Next Delivery</h2>
            <div className="flex items-center gap-2 text-[#006c49] text-sm font-semibold">
              <span className="material-symbols-outlined text-[18px]">local_shipping</span>
              Arriving Tuesday, Oct 24
            </div>
          </div>
          <span className="bg-[#6cf8bb] text-[#00714d] px-4 py-1.5 rounded-full text-xs font-bold">Preparing</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-7">
          {[
            { name: 'Paneer Masala', meal: 'Lunch', img: '/hero3.jpg' },
            { name: 'Dal Makhani', meal: 'Dinner', img: '/hero4.jpg' },
            { name: 'Roti + Sabzi', meal: 'Dinner', img: '/hero6.jpg' },
          ].map(item => (
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
          <h3 className="font-bold text-xl mb-5" style={{ fontFamily: 'Montserrat, sans-serif' }}>Taste Profile</h3>
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm">
              <span className="text-[#d3e4fe]/80">Protein Goal</span>
              <span className="font-semibold">120g/day</span>
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
          <button className="mt-8 flex items-center justify-center gap-2 bg-[#b61722] text-white font-semibold text-sm w-full py-3 rounded-full hover:shadow-lg active:scale-95 transition-all">
            Update Preferences
          </button>
        </Link>
      </div>

      {/* Weekly Calendar */}
      <div className="md:col-span-12 mt-2 bg-[#eff4ff] rounded-xl p-8 border border-[#e4beba]/30">
        <div className="flex justify-between items-center mb-7">
          <h2 className="font-bold text-xl text-[#0b1c30]" style={{ fontFamily: 'Montserrat, sans-serif' }}>Your Week</h2>
          <div className="flex gap-2">
            <button className="p-2 rounded-full border border-[#8f6f6d] hover:bg-white transition-all"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
            <button className="p-2 rounded-full border border-[#8f6f6d] hover:bg-white transition-all"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
          </div>
        </div>
        <div className="grid grid-cols-4 sm:grid-cols-7 gap-3">
          {weekDays.map(d => (
            <div key={d.day} className={`bg-white p-4 rounded-lg shadow-sm border-2 ${d.active ? 'border-[#b61722]' : 'border-transparent'} ${d.done ? 'opacity-60' : ''}`}>
              <p className={`text-xs font-semibold mb-2 ${d.active ? 'text-[#b61722]' : 'text-[#5b403e]'}`}>{d.day} {d.date}</p>
              {d.done
                ? <div className="h-8 flex items-center justify-center"><span className="material-symbols-outlined text-[#5b403e]/40">done</span></div>
                : d.skipped
                ? <div className="h-8 flex items-center justify-center text-[#5b403e]/40 text-xs italic">Skipped</div>
                : d.off
                ? <p className="text-xs text-[#5b403e]/60 mt-2">No delivery</p>
                : <div className="space-y-1.5 mt-1">
                    {Array.from({ length: d.meals }).map((_, i) => (
                      <div key={i} className={`h-1 rounded-full ${i === 0 ? 'bg-[#006c49]' : 'bg-orange-500'}`}></div>
                    ))}
                    <p className="text-xs font-semibold text-[#0b1c30] mt-2">{d.meals} {d.meals === 1 ? 'Meal' : 'Meals'}</p>
                  </div>
              }
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function Home() {
  const [email, setEmail] = useState('');
  const [hasPlan, setHasPlan] = useState(false);

  useEffect(() => {
    const e = localStorage.getItem('email');
    if (e) setEmail(e);
    setHasPlan(getHasPlan());
  }, []);

  const username = email ? email.split('@')[0] : 'User';

  return (
    <div className="bg-[#f8f9ff] min-h-screen font-geist pb-20">
      <AuthNavbar />
      <main className="max-w-[1280px] mx-auto px-5 md:px-16 pt-24">

        {/* Header */}
        <header className="mb-8">
          <h1 className="font-bold text-3xl text-[#0b1c30] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            {hasPlan ? `Welcome back, ${username}!` : `Hey, ${username}! 👋`}
          </h1>
          <p className="text-sm text-[#5b403e]">
            {hasPlan
              ? "Your wellness journey is on track. You've saved 4 hours of cooking this week."
              : "Let's get you set up with fresh daily meals."}
          </p>
        </header>

        {/* Conditional dashboard */}
        {hasPlan ? <ActiveUserDashboard /> : <NewUserDashboard username={username} />}

        {/* ── Today's Tiffin Menu ── */}
        <section className="mt-12">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="font-bold text-xl text-[#0b1c30] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Today's Tiffin Menu</h2>
              <p className="text-sm text-[#5b403e]">Fresh meals prepared daily by verified home chefs.</p>
            </div>
            <Link to="/menu" className="text-[#b61722] text-sm font-semibold flex items-center gap-1 hover:underline">
              Full Menu <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {tiffinMenu.map(item => (
              <div key={item.name} className="bg-white rounded-xl overflow-hidden border border-[#e4beba]/30 shadow-sm hover:shadow-md transition-all group flex items-stretch">
                <div className="w-24 flex-shrink-0 overflow-hidden">
                  <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-4 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-2 h-2 rounded-full flex-shrink-0 ${item.type === 'Veg' ? 'bg-[#006c49]' : 'bg-[#b61722]'}`}></span>
                      <h3 className="font-semibold text-sm text-[#0b1c30]">{item.name}</h3>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {item.tags.map(t => (
                        <span key={t} className="text-[10px] bg-[#eff4ff] text-[#5b403e] px-2 py-0.5 rounded-full">{t}</span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <span className="text-xs text-[#5b403e]">{item.cal}</span>
                    <Link to="/plans">
                      <button className="text-xs font-semibold text-white bg-gradient-to-r from-orange-500 to-[#b61722] px-3 py-1.5 rounded-full hover:shadow-md active:scale-95 transition-all">
                        Add
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Recommended for You ── */}
        <section className="mt-12">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h2 className="font-bold text-xl text-[#0b1c30] mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>Recommended for You</h2>
              <p className="text-sm text-[#5b403e]">Popular picks loved by our community.</p>
            </div>
            <Link to="/menu" className="text-[#b61722] text-sm font-semibold flex items-center gap-1 hover:underline">
              View All <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {recs.map(r => (
              <div key={r.name} className="group cursor-pointer">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-3 shadow-md group-hover:shadow-xl transition-shadow">
                  <img src={r.img} alt={r.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  {r.badge && (
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-1 rounded text-[10px] uppercase font-bold ${r.badgeClass}`}>{r.badge}</span>
                    </div>
                  )}
                </div>
                <h4 className="font-bold text-sm text-[#0b1c30] group-hover:text-[#b61722] transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>{r.name}</h4>
                <p className="text-xs text-[#5b403e] mt-0.5">{r.cal}</p>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
