import React from 'react';
import AuthNavbar from '../components/AuthNavbar';

const Documentation = () => {
  const sections = [
    {
      title: 'Getting Started',
      icon: '🚀',
      content: 'Welcome to Foodster! To get started, head over to your Dashboard where you can view your personalized recipe recommendations. Make sure your profile is complete so we can suggest the best meals for you.',
    },
    {
      title: 'Discovering Recipes',
      icon: '🔍',
      content: 'You can discover recipes by browsing categories or using the search feature. We have thousands of recipes ranging from quick 15-minute meals to elaborate weekend dinners. Filter by dietary restrictions like Vegan, Keto, or Gluten-Free.',
    },
    {
      title: 'Meal Planning',
      icon: '📅',
      content: 'Once you find a recipe you like, click "Add to Meal Plan". You can assign recipes to specific days of the week. This helps you stay organized and ensures you always know what\'s for dinner.',
    },
    {
      title: 'Smart Grocery Lists',
      icon: '🛒',
      content: 'The magic happens here! Once your meal plan is set, Foodster automatically generates a grocery list with all the ingredients you need. It even groups them by supermarket aisle to save you time.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-geist">
      <AuthNavbar />
      
      <main className="pt-28 pb-16 px-6 md:px-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="font-great text-orange-500 text-3xl mb-2">How to use Foodster</p>
          <h1 className="font-oswald text-4xl md:text-5xl text-gray-800 tracking-wide">
            DOCUMENTATION
          </h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Everything you need to know to get the most out of your kitchen experience.
          </p>
        </div>

        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex gap-6 md:gap-8">
              <div className="hidden md:flex flex-shrink-0 w-16 h-16 bg-orange-50 rounded-xl items-center justify-center text-3xl border border-orange-100">
                {section.icon}
              </div>
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="md:hidden text-2xl">{section.icon}</span>
                  <h2 className="font-oswald text-2xl text-gray-800">{section.title}</h2>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {section.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-orange-400 rounded-2xl p-8 md:p-12 text-center shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-orange-300 rounded-full opacity-50 blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-orange-500 rounded-full opacity-50 blur-2xl"></div>
          
          <div className="relative z-10">
            <h2 className="font-oswald text-3xl text-white mb-4">STILL HAVE QUESTIONS?</h2>
            <p className="font-unna text-orange-50 text-xl mb-8 max-w-xl mx-auto">
              Our support team is always ready to help you with your meal planning journey.
            </p>
            <button className="bg-white text-orange-500 hover:bg-gray-50 font-semibold px-8 py-3 rounded shadow transition-colors">
              Contact Support
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Documentation;