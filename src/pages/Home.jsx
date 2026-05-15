import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthNavbar from '../components/AuthNavbar';

const Home = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Get the email from local storage to personalize the dashboard
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const getUsername = (email) => {
    if (!email) return 'Foodie';
    return email.split('@')[0];
  };

  const dashboardCards = [
    {
      title: 'My Recipes',
      icon: '🍲',
      desc: 'You have 12 saved recipes. Try making something new today!',
      link: '#',
      btnText: 'View Recipes',
    },
    {
      title: 'Weekly Meal Plan',
      icon: '📅',
      desc: 'Your meal plan for this week is 80% complete. Plan your weekend meals.',
      link: '#',
      btnText: 'Edit Plan',
    },
    {
      title: 'Grocery List',
      icon: '🛒',
      desc: 'You have 15 items on your grocery list for your upcoming meals.',
      link: '#',
      btnText: 'Shop Now',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-geist">
      <AuthNavbar />
      
      <main className="pt-28 pb-16 px-6 md:px-16 max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100 mb-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h1 className="font-oswald text-3xl md:text-5xl text-gray-800 mb-4 tracking-wide capitalize">
              Welcome back, {getUsername(email)}! 👋
            </h1>
            <p className="font-unna text-lg text-gray-600 max-w-2xl">
              Ready to cook something amazing today? Your personalized food dashboard is waiting for you. Let's make meal planning effortless.
            </p>
          </div>
          <div className="hidden md:block w-48 h-48 rounded-full overflow-hidden border-4 border-orange-100 flex-shrink-0 shadow-inner">
            <img 
              src="/foodster1.jpeg" 
              alt="Dashboard food" 
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = "https://images.unsplash.com/photo-1498837167922-41c53bbfedab?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60";
              }}
            />
          </div>
        </div>

        {/* Dashboard Grid */}
        <h2 className="font-oswald text-2xl text-gray-800 mb-6 tracking-wide">YOUR DASHBOARD</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {dashboardCards.map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col h-full">
              <div className="text-4xl mb-4 bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center">
                {card.icon}
              </div>
              <h3 className="font-oswald text-xl text-gray-800 mb-2">{card.title}</h3>
              <p className="text-gray-600 text-sm mb-6 flex-grow">{card.desc}</p>
              <Link 
                to={card.link}
                className="inline-block text-center border-2 border-orange-400 text-orange-500 hover:bg-orange-400 hover:text-white font-medium px-4 py-2 rounded transition-colors"
              >
                {card.btnText}
              </Link>
            </div>
          ))}
        </div>

        {/* Recent Activity / Recommendations */}
        <div className="bg-orange-50 rounded-2xl p-8 border border-orange-100">
          <div className="flex justify-between items-end mb-6">
            <div>
              <p className="font-great text-orange-500 text-2xl mb-1">Recommended for you</p>
              <h2 className="font-oswald text-2xl text-gray-800 tracking-wide">RECIPE OF THE DAY</h2>
            </div>
            <Link to="#" className="text-orange-500 font-medium hover:underline text-sm hidden md:block">
              Explore more recipes →
            </Link>
          </div>
          
          <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 h-48 md:h-auto bg-gray-200">
              <img 
                src="/hero5.jpg" 
                alt="Recipe of the day" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60";
                }}
              />
            </div>
            <div className="p-6 md:p-8 flex flex-col justify-center w-full md:w-2/3">
              <div className="flex gap-2 mb-3">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">Healthy</span>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-2 py-1 rounded">30 Min</span>
              </div>
              <h3 className="font-oswald text-2xl text-gray-800 mb-2">Mediterranean Grilled Salmon</h3>
              <p className="text-gray-600 mb-6 max-w-lg">
                A fresh, vibrant, and incredibly flavorful salmon dish loaded with fresh herbs, cherry tomatoes, and olives. Perfect for a quick weeknight dinner!
              </p>
              <div>
                <button className="orangeButton text-sm px-6 py-2">
                  <span className="relative z-10">Add to Meal Plan</span>
                  <div className="seconddiv" />
                  <div className="thirddiv" />
                  <div className="fourthdiv" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;