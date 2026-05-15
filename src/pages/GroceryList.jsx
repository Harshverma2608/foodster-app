import React, { useState } from 'react';
import AuthNavbar from '../components/AuthNavbar';

const GroceryList = () => {
  const [items, setItems] = useState({
    Produce: [
      { id: 1, name: 'Spinach', checked: false },
      { id: 2, name: 'Cherry Tomatoes', checked: true },
      { id: 3, name: 'Avocados (3)', checked: false },
      { id: 4, name: 'Garlic', checked: false }
    ],
    Dairy: [
      { id: 5, name: 'Greek Yogurt', checked: false },
      { id: 6, name: 'Mozzarella Cheese', checked: true },
      { id: 7, name: 'Butter', checked: false }
    ],
    Proteins: [
      { id: 8, name: 'Salmon Fillets', checked: false },
      { id: 9, name: 'Chicken Breast', checked: false },
      { id: 10, name: 'Eggs (1 Dozen)', checked: true }
    ],
    Pantry: [
      { id: 11, name: 'Olive Oil', checked: false },
      { id: 12, name: 'Quinoa', checked: false },
      { id: 13, name: 'Honey', checked: true }
    ]
  });

  const toggleItem = (category, id) => {
    setItems(prev => {
      const newItems = { ...prev };
      newItems[category] = newItems[category].map(item => 
        item.id === id ? { ...item, checked: !item.checked } : item
      );
      return newItems;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 font-geist">
      <AuthNavbar />
      
      <main className="pt-28 pb-16 px-6 md:px-16 max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <div>
            <h1 className="font-oswald text-4xl text-gray-800 tracking-wide mb-2">GROCERY LIST</h1>
            <p className="text-gray-600">Generated automatically from your Meal Plan.</p>
          </div>
          <div className="flex gap-3">
            <button className="text-gray-600 border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Clear Checked
            </button>
            <button className="bg-orange-500 text-white hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2">
              <span>+</span> Add Item
            </button>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10">
          <div className="space-y-8">
            {Object.keys(items).map(category => (
              <div key={category}>
                <h2 className="font-oswald text-2xl text-gray-800 mb-4 pb-2 border-b border-gray-100">
                  {category}
                </h2>
                <div className="space-y-3">
                  {items[category].map(item => (
                    <label 
                      key={item.id} 
                      className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                        item.checked ? 'bg-gray-50' : 'hover:bg-orange-50'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        checked={item.checked}
                        onChange={() => toggleItem(category, item.id)}
                        className="w-5 h-5 text-orange-500 rounded border-gray-300 focus:ring-orange-500 cursor-pointer"
                      />
                      <span className={`text-lg transition-all ${
                        item.checked ? 'text-gray-400 line-through' : 'text-gray-700'
                      }`}>
                        {item.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default GroceryList;
