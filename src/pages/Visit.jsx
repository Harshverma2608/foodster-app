import React from 'react';
import { Link } from 'react-router-dom';

const Visit = () => {
  return (
    <div className="bg-background text-on-surface selection:bg-primary-fixed selection:text-on-primary-fixed min-h-screen">
      {/* TopNavBar */}
      <header className="bg-surface/80 backdrop-blur-md full-width top-0 sticky z-50 shadow-md">
        <div className="flex justify-between items-center h-20 px-6 md:px-16 max-w-7xl mx-auto">
          <div className="flex items-center gap-8">
            <Link className="text-headline-md font-headline-lg tracking-tight text-on-surface" to="/">Foodster</Link>
            <nav className="hidden md:flex gap-6 items-center">
              <span className="font-label-md text-label-md text-primary border-b-2 border-primary pb-1 transition-all">Services</span>
              <span className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer">How It Works</span>
              <span className="font-label-md text-label-md text-on-surface-variant hover:text-primary transition-colors cursor-pointer">Plans</span>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login" className="font-label-md text-label-md text-deep-navy border border-deep-navy px-6 py-2 rounded-lg hover:bg-surface-container-low transition-all">Log In</Link>
            <Link to="/signup" className="font-label-md text-label-md text-on-primary bg-gradient-to-r from-orange-500 to-red-600 px-6 py-2 rounded-lg shadow-md hover:scale-95 duration-200 ease-in-out">Sign Up</Link>
          </div>
        </div>
      </header>
      
      <main>
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 px-6 md:px-16 max-w-7xl mx-auto overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-6 z-10">
              <div className="inline-flex items-center gap-2 px-4 py-1 bg-primary-fixed rounded-full text-on-primary-fixed-variant font-label-sm text-label-sm mb-6">
                <span className="material-symbols-outlined text-[16px]">rocket_launch</span>
                #1 TIFFIN NETWORK IN INDIA
              </div>
              <h1 className="font-display-lg text-4xl md:text-5xl text-on-surface mb-6 font-bold leading-tight">
                Say goodbye to <br/>
                <span className="text-primary">cooking stress.</span>
              </h1>
              <p className="font-body-lg text-lg text-on-surface-variant mb-10 max-w-lg">
                Discover local home chefs, subscribe to healthy daily meals, and get hot food delivered straight to your desk or home.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="font-label-md text-label-md text-on-primary bg-gradient-to-r from-orange-500 to-red-600 px-8 py-4 rounded-xl shadow-lg hover:scale-95 transition-transform flex items-center gap-2">
                  Find Tiffins Near Me
                </button>
                <button className="font-label-md text-label-md text-deep-navy bg-pure-white border border-outline-variant px-8 py-4 rounded-xl shadow-sm hover:bg-surface-container-low transition-all flex items-center gap-2">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                  Watch Video
                </button>
              </div>
              
              {/* Social Proof */}
              <div className="mt-12 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <img className="w-10 h-10 rounded-full border-2 border-pure-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSZG629zcXAzUQGsFxHqCeNFyqnZQScdlM8ZRPk-CKymHU6UogrAWJ-8eBMA_pjnRAIl7kPVHRV2HBJb77eN2on4T5ULWoh_ed0oTnN7jDrQtru7OuzcSttB2vaWfNK1ZYN8_tO8EaPuwTaEZzZUuCaI_7ji-u5DdrBWVhflI3F8ijz62Uk2nCsWdATmQb-D7ybW_cm_1B0VDPZ2K0L8K8yfJTsdZIw1qBb72MNqQTOcek_zCpYBnjmkjQw4h1w6M0fON0IhURt_qi" alt="User 1" />
                  <img className="w-10 h-10 rounded-full border-2 border-pure-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC71PMcSW180uH2-S04lw_tW_6-4j0mcTxLXGc22eIdhmRdHoB9P_sBceq0JPxObCl148HmHa_pEoburzKMpylP3yTUo8lQsJ0mH_Cpc82JPnv9m7mKoQtWsePx0PBc_mNe7aEi8HTTru_hUGX-xc7e6wlKGaY0z3bQGp6-njNlJAnpcj1kKZpfAyTCB8D2XD5oRMxH6BFR6nWxb6SYLqoB4Ph2uj9GCuis2ng-mjDjw4hdqzMQbExHYBYyJusUWTphmJTH8W-pnNKV" alt="User 2" />
                  <img className="w-10 h-10 rounded-full border-2 border-pure-white object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-COKt9U6Stixn6rxeb2FLuo8UUGwpwPAOUxlNbuYJ-Z_ZCYkAEW1LN_SmkNnTq73G3FhzWVuZcH5HO79qdi-L2MQIp1mCY-jJqR_AvUSqb_CwtudDEYYeo74_4F3LeWtN0zI3bIreyZXJksPCOiaPJMALpQSpNK-S1s2xjFcddslk5oRUEy0DBxvGpXh_hetIBj-cBsRY9St5GFctqcgb-Smr1FP45Dv7WSF_BZErrG5r23m7bfEHKl9cmUVx7r8bzLdZBHs5U_N0" alt="User 3" />
                </div>
                <p className="font-label-sm text-label-sm text-on-surface-variant">Trusted by 10,000+ busy professionals</p>
              </div>
            </div>
            <div className="md:col-span-6 relative">
              <div className="shadow-2xl shadow-primary/20 rounded-[32px] overflow-hidden transform rotate-2">
                <img className="w-full h-auto" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCzeacIpjbeqOI8d_4DLg1hceoaGirbwhU9fgm4kWJmFiQU3REe9FbVzcKUs4eWQWf93LLU3Ob1anflZAO1iL75jJ-x7hiAESdIMrnpVlGO0HiIEO9cWBVZo0K0vko1asWb68h8qWR8UYPl0ETVlq_XEBYRsYSybzKGBRo8eV1s2UCwvzcplMS3Ugk67YiOmrAzXBhy4dcODSamIbQ30LYdW7ZbpoZuGRkdyX1aY7dxs9aGOVgoKaL-I5LjBH388xYJBN1_e3NPLchn" alt="Premium Tiffin" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-pure-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-4 border border-outline-variant max-w-xs">
                <div className="w-10 h-10 bg-secondary-container rounded-lg flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-secondary-container">verified</span>
                </div>
                <div>
                  <p className="font-label-md text-label-md text-on-surface font-bold">Maa Ki Rasoi delivered!</p>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Your Premium Veg meal just arrived.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-24 bg-background-surface px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="font-headline-lg text-3xl font-bold text-on-surface mb-4">OUR MEAL SERVICES</h2>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
                We offer flexible plans tailored to your lifestyle, diet, and budget. Cancel or pause anytime.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-pure-white rounded-2xl p-8 border border-outline-variant shadow-sm hover:shadow-xl transition-all flex flex-col h-full relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-surface-container-highest rounded-t-2xl"></div>
                <div className="w-14 h-14 bg-surface-container-low rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[32px] text-on-surface">lunch_dining</span>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface mb-4">Standard Daily Tiffin</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                  Perfect for daily office goers. Includes 4 rotis, seasonal veg, dal, rice, and salad. Homestyle cooking that keeps you light and energetic.
                </p>
                <div className="pt-6 border-t border-outline-variant flex justify-between items-center">
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Starting from</p>
                    <p className="font-headline-md text-xl font-bold text-on-surface">₹2,500<span className="text-body-md font-normal">/mo</span></p>
                  </div>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-pure-white rounded-2xl p-8 border border-outline-variant shadow-sm hover:shadow-xl transition-all flex flex-col h-full relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-vibrant-orange rounded-t-2xl"></div>
                <div className="w-14 h-14 bg-primary-fixed rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[32px] text-primary">restaurant</span>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface mb-4">Premium Executive</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                  A rich culinary experience. Includes special paneer/chicken gravy, premium dal makhani, flavoured rice, dessert, and papad.
                </p>
                <div className="pt-6 border-t border-outline-variant flex justify-between items-center">
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Starting from</p>
                    <p className="font-headline-md text-xl font-bold text-on-surface">₹3,500<span className="text-body-md font-normal">/mo</span></p>
                  </div>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-pure-white rounded-2xl p-8 border border-outline-variant shadow-sm hover:shadow-xl transition-all flex flex-col h-full relative group">
                <div className="absolute top-0 left-0 w-full h-1 bg-secondary rounded-t-2xl"></div>
                <div className="w-14 h-14 bg-secondary-container rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-[32px] text-secondary">skillet</span>
                </div>
                <h3 className="font-headline-md text-xl font-bold text-on-surface mb-4">Health & Diet Plan</h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-8 flex-grow">
                  Tailored for fitness enthusiasts. High protein, low carb meals featuring grilled chicken, quinoa, boiled veggies, and healthy salads.
                </p>
                <div className="pt-6 border-t border-outline-variant flex justify-between items-center">
                  <div>
                    <p className="font-label-sm text-label-sm text-on-surface-variant uppercase">Starting from</p>
                    <p className="font-headline-md text-xl font-bold text-on-surface">₹4,000<span className="text-body-md font-normal">/mo</span></p>
                  </div>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 bg-deep-navy text-pure-white px-6 md:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="font-headline-lg text-3xl font-bold mb-4">HOW FOODSTER WORKS</h2>
            <p className="font-body-md text-body-md text-surface-variant/80 mb-20">Three simple steps to automate your daily meals.</p>
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-0">
              <div className="hidden md:block absolute top-12 left-1/4 right-1/4 h-[2px] bg-white/10 z-0"></div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-2 border-primary bg-deep-navy flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(182,23,34,0.3)]">
                  <span className="font-headline-md text-2xl font-bold">01</span>
                </div>
                <h4 className="font-headline-md text-xl font-bold mb-4">Discover</h4>
                <p className="font-body-md text-body-md text-surface-variant/80 max-w-xs">Browse top-rated home chefs and professional tiffin centers in your locality using our smart filters.</p>
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-2 border-vibrant-orange bg-deep-navy flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(249,115,22,0.3)]">
                  <span className="font-headline-md text-2xl font-bold">02</span>
                </div>
                <h4 className="font-headline-md text-xl font-bold mb-4">Subscribe</h4>
                <p className="font-body-md text-body-md text-surface-variant/80 max-w-xs">Choose a service tier (Standard, Premium, Diet) and set your delivery schedule with a single tap.</p>
              </div>
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full border-2 border-secondary bg-deep-navy flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(0,108,73,0.3)]">
                  <span className="font-headline-md text-2xl font-bold">03</span>
                </div>
                <h4 className="font-headline-md text-xl font-bold mb-4">Enjoy</h4>
                <p className="font-body-md text-body-md text-surface-variant/80 max-w-xs">Get hot, fresh, and hygienic meals delivered straight to your desk or doorstep, exactly on time.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 md:px-16">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-[40px] p-12 md:p-24 text-center shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[length:24px_24px]"></div>
              <h2 className="font-display-lg text-4xl font-bold text-pure-white mb-6 relative z-10">HUNGRY FOR BETTER FOOD?</h2>
              <p className="font-body-lg text-body-lg text-pure-white/90 mb-12 max-w-2xl mx-auto relative z-10">
                Join thousands of bachelors and professionals who have already upgraded their daily dining experience.
              </p>
              <Link to="/signup">
                <button className="bg-pure-white text-primary font-label-md text-label-md px-12 py-5 rounded-2xl shadow-xl hover:bg-surface-container-low transition-all hover:scale-105 active:scale-95 relative z-10">
                  Create Your Free Account
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-deep-navy text-on-primary w-full pb-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-16 px-6 md:px-16 max-w-7xl mx-auto border-t border-white/10 gap-10">
          <div className="space-y-4">
            <span className="text-headline-md font-bold text-pure-white text-xl">Foodster</span>
            <p className="font-label-sm text-label-sm text-surface-variant/80">Premium Daily Tiffin Subscriptions</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <a className="font-label-sm text-label-sm text-surface-variant/80 hover:text-pure-white transition-colors" href="#">Contact Us</a>
            <a className="font-label-sm text-label-sm text-surface-variant/80 hover:text-pure-white transition-colors" href="#">Privacy Policy</a>
            <a className="font-label-sm text-label-sm text-surface-variant/80 hover:text-pure-white transition-colors" href="#">Terms of Service</a>
            <a className="font-label-sm text-label-sm text-surface-variant/80 hover:text-pure-white transition-colors" href="#">FAQ</a>
          </div>
        </div>
        <div className="px-6 md:px-16 max-w-7xl mx-auto pb-8 flex flex-col md:flex-row justify-between items-center gap-4 text-surface-variant/40">
          <p className="font-label-sm text-label-sm">© 2024 Foodster Technologies. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Visit;
