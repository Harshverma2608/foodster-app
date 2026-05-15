import React from 'react';
import AuthNavbar from '../components/AuthNavbar';

const MealPlan = () => {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const mealPlanData = {
    'Monday': {
      breakfast: 'Oatmeal with Berries',
      lunch: 'Chicken Salad Sandwich',
      dinner: 'Mediterranean Grilled Salmon'
    },
    'Tuesday': {
      breakfast: 'Avocado Toast',
      lunch: 'Leftover Salmon',
      dinner: 'Spicy Garlic Butter Shrimp'
    },
    'Wednesday': {
      breakfast: 'Greek Yogurt & Honey',
      lunch: 'Quinoa Veggie Bowl',
      dinner: 'Vegetable Stir-fry'
    },
    'Thursday': {
      breakfast: 'Smoothie Bowl',
      lunch: 'Turkey Wrap',
      dinner: 'Classic Margherita Pizza'
    },
    'Friday': {
      breakfast: 'Eggs & Bacon',
      lunch: 'Caprese Salad',
      dinner: 'Steak & Sweet Potatoes'
    },
    'Saturday': {
      breakfast: 'Pancakes',
      lunch: 'Tacos',
      dinner: 'Sushi Night'
    },
    'Sunday': {
      breakfast: 'Brunch Buffet',
      lunch: 'Light Soup',
      dinner: 'Roast Chicken'
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-geist">
      <AuthNavbar />
      
      <main className="pt-28 pb-16 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h1 className="font-oswald text-4xl text-gray-800 tracking-wide mb-2">WEEKLY MEAL PLAN</h1>
            <p className="text-gray-600">Plan your week, save time, and eat well.</p>
          </div>
          <button className="orangeButton px-6 py-2 text-sm font-semibold">
            <span className="relative z-10">Generate New Plan</span>
            <div className="seconddiv" />
            <div className="thirddiv" />
            <div className="fourthdiv" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {daysOfWeek.map(day => (
            <div key={day} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="bg-orange-50 px-4 py-3 border-b border-orange-100">
                <h2 className="font-oswald text-xl text-orange-600">{day}</h2>
              </div>
              <div className="p-4 space-y-4">
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Breakfast</p>
                  <p className="text-gray-800 font-medium">{mealPlanData[day].breakfast}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Lunch</p>
                  <p className="text-gray-800 font-medium">{mealPlanData[day].lunch}</p>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-1">Dinner</p>
                  <p className="text-gray-800 font-medium">{mealPlanData[day].dinner}</p>
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 border-t border-gray-100 flex justify-end">
                <button className="text-orange-500 text-sm font-medium hover:underline">Edit Day</button>
              </div>
            </div>
          ))}
          
          <div className="bg-orange-50 rounded-xl shadow-sm border border-orange-200 border-dashed flex flex-col items-center justify-center p-8 text-center h-full min-h-[300px]">
            <div className="text-4xl mb-4 text-orange-300">💡</div>
            <h3 className="font-oswald text-xl text-gray-800 mb-2">Pro Tip</h3>
            <p className="text-gray-600 text-sm">
              Planning your meals in advance reduces food waste by up to 30% and saves you hours of grocery shopping!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default MealPlan;
