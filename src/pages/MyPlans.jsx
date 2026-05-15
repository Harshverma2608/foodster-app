import React from 'react';
import AuthNavbar from '../components/AuthNavbar';

const MyPlans = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-geist">
      <AuthNavbar />
      
      <main className="pt-28 pb-16 px-6 md:px-16 max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="font-oswald text-4xl text-gray-800 tracking-wide mb-2">MY SUBSCRIPTIONS</h1>
          <p className="text-gray-600">Manage your active tiffin plans and delivery schedules.</p>
        </div>

        {/* Active Plan Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-orange-200 overflow-hidden mb-12 relative">
          <div className="absolute top-0 left-0 w-2 h-full bg-orange-500"></div>
          
          <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between gap-8">
            <div className="flex-grow">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Active</span>
                <span className="text-gray-500 text-sm">Renews on Oct 15</span>
              </div>
              
              <h2 className="font-oswald text-3xl text-gray-800 mb-1">Maa Ki Rasoi - Premium Veg</h2>
              <p className="text-gray-600 mb-6 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                Lunch (1:00 PM - 2:00 PM) • Mon to Sat
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <p className="text-xs text-gray-500 mb-1">Plan Type</p>
                  <p className="font-medium text-gray-800">Monthly</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <p className="text-xs text-gray-500 mb-1">Meals Left</p>
                  <p className="font-medium text-gray-800">18 / 26</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                  <p className="text-xs text-gray-500 mb-1">Price</p>
                  <p className="font-medium text-gray-800">₹2500</p>
                </div>
              </div>
              
              <div className="flex gap-3">
                <button className="bg-gray-100 text-gray-700 hover:bg-gray-200 px-4 py-2 rounded-md font-medium text-sm transition-colors">
                  Pause Delivery
                </button>
                <button className="text-orange-500 hover:bg-orange-50 px-4 py-2 rounded-md font-medium text-sm transition-colors border border-orange-200">
                  Contact Provider
                </button>
              </div>
            </div>
            
            <div className="md:w-1/3 bg-orange-50 p-6 rounded-xl flex flex-col justify-center items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-2xl shadow-sm mb-3">
                🥘
              </div>
              <h3 className="font-oswald text-xl text-gray-800 mb-1">Today's Menu</h3>
              <p className="text-gray-600 text-sm mb-4">Paneer Butter Masala, Dal Makhani, 4 Rotis, Rice, Salad, Sweet</p>
              <button className="orangeButton w-full text-sm py-2">
                <span className="relative z-10">Track Delivery</span>
                <div className="seconddiv" />
                <div className="thirddiv" />
                <div className="fourthdiv" />
              </button>
            </div>
          </div>
        </div>

        {/* History / Previous Plans */}
        <h2 className="font-oswald text-2xl text-gray-800 tracking-wide mb-6">PAST SUBSCRIPTIONS</h2>
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-x-auto">
          <table className="w-full min-w-[500px] text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wider">
                <th className="p-4 font-medium">Provider</th>
                <th className="p-4 font-medium">Duration</th>
                <th className="p-4 font-medium">Amount</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="p-4">
                  <p className="font-medium text-gray-800">Healthy Bites</p>
                  <p className="text-xs text-gray-500">Dinner • Veg</p>
                </td>
                <td className="p-4 text-sm text-gray-600">Aug 1 - Aug 31</td>
                <td className="p-4 text-sm text-gray-800 font-medium">₹2800</td>
                <td className="p-4">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Completed</span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-orange-500 hover:underline text-sm font-medium">Re-subscribe</button>
                </td>
              </tr>
              <tr>
                <td className="p-4">
                  <p className="font-medium text-gray-800">Spice Route Tiffins</p>
                  <p className="text-xs text-gray-500">Lunch • Non-Veg</p>
                </td>
                <td className="p-4 text-sm text-gray-600">Jun 15 - Jul 15</td>
                <td className="p-4 text-sm text-gray-800 font-medium">₹3000</td>
                <td className="p-4">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">Completed</span>
                </td>
                <td className="p-4 text-right">
                  <button className="text-orange-500 hover:underline text-sm font-medium">Re-subscribe</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default MyPlans;
