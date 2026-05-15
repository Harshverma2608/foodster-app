import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthNavbar from '../components/AuthNavbar';

const meals = [
  { id: 1, name: 'Mediterranean Salmon Bowl', price: '₹350', time: '25 mins', tags: ['High Protein', 'Omega-3'], tagColors: ['bg-green-100 text-green-700', 'bg-blue-100 text-blue-700'], desc: 'Pan-seared Atlantic salmon with quinoa, roasted greens, and lemon-tahini drizzle.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsDL2dzJdnzj-5UY8QSUWzELV8Lpa9jvL2tuqsB1JSfm81pW8IiufiClG3rwJf9Uxp9700iq2TlPtiLMFkWb3Ps_H7r8gh57_gR3hZhAKVOezJODDO9fbYrhLPP0yOmLjBt4Xtr1sKjM7mfDYKoVvS3LiSctak1cTh5PS8hQ-RGUT8ZJS_DNHPV48iWc3nQQhdGWcj4sKXDneIGB6MeBGRURv0ohGX09fsJX4ffBg-M0726LGxlmfk77IzjlcBXICeqVyuGoFLNvih', category: 'High Protein' },
  { id: 2, name: 'Harvest Buddha Bowl', price: '₹280', time: '15 mins', tags: ['Vegan', 'Gluten-Free'], tagColors: ['bg-green-100 text-green-700', 'bg-gray-100 text-gray-600'], desc: 'Roasted sweet potatoes, kale, chickpeas, and signature velvet beet hummus.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARAfRLjtK6OuzTeKkJQZStZdqpPV5lxo12fAZusNEJbHgtz6UIVdKDCCSQPG1rDGzy7vWTlM3hnTLoOXc7mlHiEG_aX6QQgK-efALX6dx-3m7WHUTi9WtNCCAexQmxgyXfMjpGLh3uh4Y7ORIDaC4ZXsSS8H7LGK8go_Yzf1DcTp2pa2YIYl57POOKXrPCN1XGPyWieAwawebzG4TQpjTSRSCCCTaCiFvlbDSRshCiUXiDjYa6whxshdPtgIzz4b9Ie7jV83-dWmMu', category: "Chef's Specials" },
  { id: 3, name: 'Grass-Fed Steak & Greens', price: '₹420', time: '20 mins', tags: ['Low Carb', "Chef's Choice"], tagColors: ['bg-green-100 text-green-700', 'bg-orange-100 text-orange-600'], desc: 'Flame-grilled ribeye steak with butter-steamed broccoli and garlic herb oil.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBH-GLJaX4F-4bPxPrF6N7n4l2z1xr3ZsJzjzEUnX09puZtcFMX6W_NYTuFkzDIO2idMshrwNCOnZonbEzfdSFSaResqnO-yO2IIPeztDrBLNyPZYs81FeWn2FUDhlxorVh7hNJcrhBec2Cv4fbho0OWcBDQ1Z7Ny7_elVpGjm3dyPboCTELyaD4iGl5d03yxaAkZF1rP7cfU2oJ6MRqO6xUB3t-F3l00O1PEalmpRiNGj4Aqe0iG0wA_M89YYdqEcGdJKjBnlV9CQz', category: 'Low Carb' },
  { id: 4, name: 'Pesto Primavera Pasta', price: '₹290', time: '12 mins', tags: ['Vegetarian'], tagColors: ['bg-green-100 text-green-700'], desc: 'Fresh fusilli in house-made basil pesto, sun-dried tomatoes, and toasted pine nuts.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3lNRZUF0R4EQ6PQbfCfYb04zOsK1sGiGhYJJ4kPPnzOVCqj3XJgDWZix9Fcd6AaS8c1SGcQjA9ImrdOuO8ROpcLG0bMbIDKYrs5nud7VwCye5JUuI1K6tvKtiBDDjeRWEDCVKPX_uRpiAW-SWr0eFayOHVCrHgqew1eXjHnF22iqUGT7bdUzYt2G1Cis4SXBGRjfSd41RhjX9Ebk3UDbhxw1UQp6RPO3cmXLo7rGYVKefxC0mn91bBZ_oZzLxhlJJjRoaiIUL5oJ1', category: 'Veg Delights' },
  { id: 5, name: 'Fiesta Chicken Bowl', price: '₹320', time: '20 mins', tags: ['High Protein', 'Dairy Free'], tagColors: ['bg-green-100 text-green-700', 'bg-gray-100 text-gray-600'], desc: 'Grilled chicken strips, black beans, corn salsa, and cilantro over brown rice.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6HYE5gr_V4J9S8bR9K0hFdzaCsi6HbxktfpGLFQl-CV8BhvheG0mJCQYMtjJs9DRPVHfKSSMngFLIC6cxwsHd4Cs6Y9JETVvriIYjvUjRb0AtF-vqRlfI1B5A9NwxUv8_sr0-NZDLuc3K8WYcjCmSTTkfDTOE0KDCelSKz9qQR-JNOboRzltCopcpJqTOuJLExhGmzAvMNao2kB4QLJ79O9RCboBfj4EQOSI1LZKANqn9f1kN96Kly3CzNO3gbXgvA2GQ5mjfXAxs', category: 'High Protein' },
  { id: 6, name: 'Glazed Sesame Tofu', price: '₹260', time: '18 mins', tags: ['Vegan', 'Fiber Rich'], tagColors: ['bg-green-100 text-green-700', 'bg-blue-100 text-blue-700'], desc: 'Sesame-crusted tofu in ginger-soy reduction, served with flash-seared snap peas.', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEOGVq2aLlaqEeLz3grQjbPTceh42pYhdYB0JjAjpAuLqGCLcClnts5N5BT00rrj1nfF6T1piZH2vyk6ZTW2758xE7hEMi3VgNnXwysLtBsQSzz7Y9NSQkWsDahFC3mfKIRyRqq4GcYKYLgWkBI5luYgDT2m_HQLPn3QScPQqcJ3PDKplAeI1iSt9UsLhzFsh5AekERk7jPnG0dqV2v_LZIyL6DHg7yvdiX1loCmt5L_PrWG2t-LJ1Ge4Pg9z-iQmlhIsnoZACUVG-', category: 'Keto Friendly' },
];

const categories = ['All Meals', "Chef's Specials", 'Veg Delights', 'Low Carb', 'High Protein', 'Keto Friendly'];
const catIcons = { 'All Meals': 'restaurant', "Chef's Specials": 'star', 'Veg Delights': 'eco', 'Low Carb': 'fitness_center', 'High Protein': 'bolt', 'Keto Friendly': 'egg_alt' };

export default function MenuExplorer() {
  const [activeCategory, setActiveCategory] = useState('All Meals');
  const [search, setSearch] = useState('');
  const filtered = meals.filter(m => (activeCategory === 'All Meals' || m.category === activeCategory) && (m.name.toLowerCase().includes(search.toLowerCase()) || m.desc.toLowerCase().includes(search.toLowerCase())));

  return (
    <div className="bg-[#f8f9ff] min-h-screen font-geist">
      <AuthNavbar />
      <main className="max-w-7xl mx-auto px-5 md:px-16 pt-28 pb-24">
        <section className="py-10 md:py-16 text-center max-w-3xl mx-auto">
          <h1 className="font-bold text-4xl md:text-[56px] text-[#0b1c30] mb-6" style={{ fontFamily: 'Montserrat', lineHeight: 1.1, letterSpacing: '-0.02em' }}>Discover Your Next <span className="text-[#b61722]">Favorite Meal.</span></h1>
          <p className="text-lg text-[#5b403e] mb-10">Chef-curated menus delivered to your doorstep. Explore our diverse range of nutritional plans tailored for your lifestyle.</p>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-[#5b403e]">search</span>
            <input className="w-full pl-14 pr-6 py-5 rounded-full border border-[#8f6f6d]/30 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-[#b61722]/20 focus:border-[#b61722] transition-all text-base" placeholder="Search for meals, ingredients, or dietary preferences..." value={search} onChange={e => setSearch(e.target.value)} />
          </div>
        </section>
        <section className="mb-12">
          <div className="flex items-center gap-3 overflow-x-auto pb-3 no-scrollbar">
            {categories.map(cat => (
              <button key={cat} onClick={() => setActiveCategory(cat)} className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-[#b61722] text-white shadow-md' : 'bg-[#eff4ff] text-[#5b403e] hover:bg-[#dce9ff]'}`}>
                <span className="material-symbols-outlined text-[18px]">{catIcons[cat]}</span>{cat}
              </button>
            ))}
          </div>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filtered.map(meal => (
            <div key={meal.id} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-[#8f6f6d]/10 transition-all hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1">
              <div className="relative h-64 overflow-hidden">
                <img alt={meal.name} src={meal.img} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">{meal.tags.map((tag, i) => <span key={tag} className={`px-3 py-1 backdrop-blur-md rounded-full text-xs font-medium ${meal.tagColors[i]}`}>{tag}</span>)}</div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg text-[#0b1c30]" style={{ fontFamily: 'Montserrat' }}>{meal.name}</h3>
                  <span className="font-semibold text-sm text-[#b61722]">{meal.price}</span>
                </div>
                <p className="text-sm text-[#5b403e] mb-6 line-clamp-2">{meal.desc}</p>
                <div className="mt-auto pt-5 border-t border-[#8f6f6d]/10 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#5b403e]">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                    <span className="text-xs font-medium">{meal.time}</span>
                  </div>
                  <Link to="/plans">
                    <button className="flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-orange-500 to-[#b61722] text-white rounded-full text-sm font-semibold shadow-sm hover:shadow-md active:scale-95 transition-all">Add to Plan</button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {filtered.length === 0 && <div className="col-span-3 text-center py-20 text-[#5b403e]"><span className="material-symbols-outlined text-6xl mb-4 block">search_off</span><p className="text-lg font-medium">No meals found.</p></div>}
        </section>
      </main>
    </div>
  );
}
