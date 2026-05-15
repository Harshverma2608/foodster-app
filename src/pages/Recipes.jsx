import React, { useState } from 'react';
import AuthNavbar from '../components/AuthNavbar';

const Recipes = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Breakfast', 'Lunch', 'Dinner', 'Healthy', 'Quick', 'Dessert'];

  const recipes = [
    {
      id: 1,
      title: 'Mediterranean Grilled Salmon',
      image: '/hero5.jpg',
      time: '30 Min',
      difficulty: 'Easy',
      category: 'Dinner',
      likes: 342
    },
    {
      id: 2,
      title: 'Avocado Toast with Poached Egg',
      image: '/hero4.jpg',
      time: '15 Min',
      difficulty: 'Easy',
      category: 'Breakfast',
      likes: 512
    },
    {
      id: 3,
      title: 'Spicy Garlic Butter Shrimp',
      image: '/hero3.jpg',
      time: '20 Min',
      difficulty: 'Medium',
      category: 'Dinner',
      likes: 289
    },
    {
      id: 4,
      title: 'Quinoa & Roasted Veggie Bowl',
      image: '/hero2.jpg',
      time: '45 Min',
      difficulty: 'Easy',
      category: 'Lunch',
      likes: 198
    },
    {
      id: 5,
      title: 'Classic Margherita Pizza',
      image: '/hero1.jpg',
      time: '1 Hour',
      difficulty: 'Medium',
      category: 'Dinner',
      likes: 890
    },
    {
      id: 6,
      title: 'Berry Smoothie Bowl',
      image: '/hero6.jpg',
      time: '10 Min',
      difficulty: 'Easy',
      category: 'Breakfast',
      likes: 420
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-geist">
      <AuthNavbar />
      
      <main className="pt-28 pb-16 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
          <div>
            <h1 className="font-oswald text-4xl text-gray-800 tracking-wide mb-2">MY RECIPES</h1>
            <p className="text-gray-600">Discover and organize your favorite meals.</p>
          </div>
          <div className="w-full md:w-auto flex">
            <input 
              type="text" 
              placeholder="Search recipes..." 
              className="border border-gray-300 rounded-l-md px-4 py-2 w-full md:w-64 focus:outline-none focus:border-orange-400"
            />
            <button className="bg-orange-500 text-white px-6 py-2 rounded-r-md font-medium hover:bg-orange-600 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-8">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === filter 
                  ? 'bg-orange-500 text-white' 
                  : 'bg-white text-gray-600 hover:bg-orange-100 border border-gray-200'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Recipe Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map(recipe => (
            <div key={recipe.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100 group">
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={recipe.image} 
                  alt={recipe.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1498837167922-41c53bbfedab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60";
                  }}
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full px-3 py-1 text-xs font-bold text-gray-800 flex items-center gap-1 shadow-sm">
                  ❤️ {recipe.likes}
                </div>
              </div>
              <div className="p-6">
                <div className="flex gap-2 mb-3 text-xs font-bold">
                  <span className="text-orange-600 bg-orange-100 px-2 py-1 rounded">{recipe.time}</span>
                  <span className="text-green-600 bg-green-100 px-2 py-1 rounded">{recipe.difficulty}</span>
                </div>
                <h3 className="font-oswald text-xl text-gray-800 mb-4">{recipe.title}</h3>
                <button className="w-full text-center border-2 border-orange-400 text-orange-500 hover:bg-orange-400 hover:text-white font-medium py-2 rounded transition-colors">
                  View Recipe
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Recipes;
