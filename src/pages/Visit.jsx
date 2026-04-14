import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "/hero1.jpg",
    tag: "Welcome to Foodster",
    heading: "FOOD THAT FITS",
    highlight: "YOUR LIFE",
    sub: "Discover recipes, plan your meals, and build smarter grocery lists — all in one place.",
  },
  {
    image: "/hero2.jpg",
    tag: "Explore Cuisines",
    heading: "TASTE THE",
    highlight: "WORLD",
    sub: "From street food to fine dining, find recipes from every corner of the globe.",
  },
  {
    image: "/hero3.jpg",
    tag: "Plan Smarter",
    heading: "MEALS MADE",
    highlight: "EFFORTLESS",
    sub: "Weekly meal planning that saves you time, money, and the daily dinner dilemma.",
  },
  {
    image: "/hero4.jpg",
    tag: "Shop Smarter",
    heading: "GROCERY LISTS",
    highlight: "IN SECONDS",
    sub: "Auto-generated shopping lists straight from your meal plan. No more forgotten items.",
  },
  {
    image: "/hero5.jpg",
    tag: "Cook with Confidence",
    heading: "RECIPES FOR",
    highlight: "EVERY SKILL",
    sub: "Whether you're a beginner or a seasoned cook, we've got the perfect recipe for you.",
  },
  {
    image: "/hero6.jpg",
    tag: "Eat Better",
    heading: "NOURISH YOUR",
    highlight: "BODY & SOUL",
    sub: "Healthy, delicious, and easy-to-make meals that fit your lifestyle and goals.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback(
    (index) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(index);
      setTimeout(() => setAnimating(false), 700);
    },
    [animating]
  );

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Slides background */}
      {slides.map((s, i) => (
        <div
          key={i}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
          style={{
            backgroundImage: `url('${s.image}')`,
            opacity: i === current ? 1 : 0,
          }}
        />  
      ))}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16 py-24 w-full">
        <p
          key={`tag-${current}`}
          className="font-great text-orange-400 text-2xl md:text-3xl mb-3 animate-fade-in"
        >
          {slide.tag}
        </p>
        <h1
          key={`h-${current}`}
          className="font-anton text-5xl md:text-7xl text-white leading-tight mb-6 animate-fade-in"
        >
          {slide.heading}
          <br />
          <span className="text-orange-400">{slide.highlight}</span>
        </h1>
        <p
          key={`sub-${current}`}
          className="font-unna text-lg md:text-xl text-gray-200 max-w-xl mb-10 leading-relaxed animate-fade-in"
        >
          {slide.sub}
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/signup" className="orangeButton  text-base  font-semibold px-6 py-3">
            <span className="relative z-10  top-1">Start for Free</span>
            <div className="seconddiv" />
            <div className="thirddiv" />
            <div className="fourthdiv" />
          </Link>
          <Link
            to="/login"
            className="text-white border border-white/50 hover:border-white hover:bg-white/10 transition-all px-6 py-3 rounded text-base font-medium"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 flex items-center justify-center text-white transition-all"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/30 hover:bg-black/60 border border-white/20 flex items-center justify-center text-white transition-all"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? "w-8 bg-orange-400" : "w-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

const features = [
  {
    icon: "🍽️",
    title: "Discover Recipes",
    desc: "Explore thousands of recipes from cuisines around the world, curated just for you.",
  },
  {
    icon: "📋",
    title: "Plan Your Meals",
    desc: "Organize your weekly meals effortlessly and never wonder what's for dinner again.",
  },
  {
    icon: "🛒",
    title: "Smart Grocery Lists",
    desc: "Auto-generate shopping lists from your meal plan and save time at the store.",
  },
];

const testimonials = [
  {
    name: "Harsh V.",
    text: "Foodster completely changed how I cook at home. The recipes are amazing!",
    avatar: "AO",
  },
  {
    name: "Sarthak A.",
    text: "Meal planning used to stress me out. Now it takes five minutes a week.",
    avatar: "JK",
  },
  {
    name: "Priya S.",
    text: "The grocery list feature alone is worth it. So convenient.",
    avatar: "PS",
  },
];

const Visit = () => {
  return (
    <div className="min-h-screen bg-white font-geist overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0  z-25 flex items-center justify-between px-6 md:px-16 py-4 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="flex items-center gap-2">
          <img src="/FoodsterLogo3.png" alt="Foodster" className="h-9 w-auto" />
          <span className="font-oswald text-xl font-semibold tracking-wide text-gray-800">
            Foodster
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="text-sm text-gray-600 hover:text-gray-900 transition-colors border-0 px-4 py-2"
          >
            Login
          </Link>
          <Link to="/signup" className="orangeButton text-sm font-medium">
            <span className="relative z-10">Sign Up</span>
            <div className="seconddiv" />
            <div className="thirddiv" />
            <div className="fourthdiv" />
          </Link>
        </div>
      </nav>

      <HeroSlider />

      {/* Features */}
      <section className="py-24 px-6 md:px-16 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <p className="font-great text-orange-400 text-2xl text-center mb-2">
            Why Foodster?
          </p>
          <h2 className="font-oswald text-3xl md:text-4xl text-center text-gray-800 font-semibold mb-14 tracking-wide">
            EVERYTHING YOU NEED IN THE KITCHEN
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-orange-400 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 flex flex-col gap-4 giftBox text-center"
              >
                {/* <span className="text-4xl">{f.icon}</span> */}
                <h3 className="font-oswald text-2xl font-semibold text-white tracking-wider mt-15">
                  {f.title}
                </h3>
                <p className="font-unna text-white leading-relaxed tracking-wider text-md">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual break / food image */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img
          src="/foodster1.jpeg"
          alt="Delicious food"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <p className="font-playfair italic text-white text-2xl md:text-4xl text-center px-6">
            "Good food is the foundation of genuine happiness."
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <p className="font-great text-orange-400 text-2xl text-center mb-2">
            Loved by food lovers
          </p>
          <h2 className="font-oswald text-3xl md:text-4xl text-center text-gray-800 font-semibold mb-14 tracking-wide">
            WHAT OUR USERS SAY
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-gray-50 rounded-xl p-8 border border-gray-100 flex flex-col gap-4"
              >
                <p className="font-unna text-gray-600 leading-relaxed italic">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-orange-400 flex items-center justify-center text-white text-sm font-semibold font-oswald">
                    {t.avatar}
                  </div>
                  <span className="font-geist text-sm font-medium text-gray-700">
                    {t.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative py-28 px-6 md:px-16 bg-cover bg-center"
        style={{ backgroundImage: "url('/orangeBg.jpeg')" }}
      >
        <div className="absolute inset-0 bg-orange-900/70" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="font-anton text-4xl md:text-5xl text-white mb-4">
            READY TO EAT BETTER?
          </h2>
          <p className="font-unna text-orange-100 text-lg mb-10">
            Join thousands of food lovers already using Foodster to simplify
            their kitchen life.
          </p>
          <Link to="/signup" className="orangeButton text-base font-semibold px-8 py-3 inline-block">
            <span className="relative z-10">Create Free Account</span>
            <div className="seconddiv" />
            <div className="thirddiv" />
            <div className="fourthdiv" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-50text-gray-400 py-10 px-6 md:px-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/FoodsterLogo2.png" alt="Foodster" className="h-7 w-auto opacity-80" />
            <span className="font-oswald text-white text-lg tracking-wide">Foodster</span>
          </div>
          <p className="text-sm">© {new Date().getFullYear()} Foodster. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            <Link to="/login" className="hover:text-white transition-colors">Login</Link>
            <Link to="/signup" className="hover:text-white transition-colors">Sign Up</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Visit;
