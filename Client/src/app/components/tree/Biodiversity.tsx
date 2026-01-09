import { Bird, Bug, Leaf, Droplets, Recycle, Plus } from 'lucide-react';

const ecoActions = [
  { id: 1, type: 'bird', name: 'Sparrow Sighting', date: '2 hours ago', coins: 10, icon: '🐦' },
  { id: 2, type: 'butterfly', name: 'Monarch Butterfly', date: '1 day ago', coins: 15, icon: '🦋' },
  { id: 3, type: 'compost', name: 'Kitchen Composting', date: '2 days ago', coins: 20, icon: '♻️' },
  { id: 4, type: 'rainwater', name: 'Rainwater Harvesting', date: '3 days ago', coins: 25, icon: '💧' },
];

export function Biodiversity() {
  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto pb-20">
      <h1 className="text-3xl text-gray-900 mb-2">Biodiversity Tracker 🦋</h1>
      <p className="text-gray-600 mb-6">Log your eco-actions and nature observations</p>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
        <button className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all text-center border-2 border-transparent hover:border-blue-500">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Bird size={24} className="text-blue-600" />
          </div>
          <p className="text-sm text-gray-900">Log Bird</p>
        </button>

        <button className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all text-center border-2 border-transparent hover:border-purple-500">
          <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Bug size={24} className="text-purple-600" />
          </div>
          <p className="text-sm text-gray-900">Butterfly</p>
        </button>

        <button className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all text-center border-2 border-transparent hover:border-green-500">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Recycle size={24} className="text-green-600" />
          </div>
          <p className="text-sm text-gray-900">Composting</p>
        </button>

        <button className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all text-center border-2 border-transparent hover:border-cyan-500">
          <div className="w-12 h-12 bg-cyan-100 rounded-full flex items-center justify-center mx-auto mb-2">
            <Droplets size={24} className="text-cyan-600" />
          </div>
          <p className="text-sm text-gray-900">Rainwater</p>
        </button>
      </div>

      {/* Recent Activities */}
      <div className="bg-white rounded-2xl p-5 shadow-md mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg text-gray-900">Recent Eco-Actions</h2>
          <button className="flex items-center gap-1 text-green-600 hover:text-green-700 text-sm">
            <Plus size={18} />
            <span>Log New</span>
          </button>
        </div>

        <div className="space-y-3">
          {ecoActions.map((action) => (
            <div key={action.id} className="flex items-center gap-4 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
              <div className="text-3xl">{action.icon}</div>
              <div className="flex-1">
                <p className="text-gray-900">{action.name}</p>
                <p className="text-sm text-gray-500">{action.date}</p>
              </div>
              <div className="bg-amber-50 text-amber-700 px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                <span>+{action.coins}</span>
                <span className="text-xs">coins</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Waste-to-Green Integration */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 border border-green-200 mb-6">
        <h2 className="text-lg text-gray-900 mb-4">♻️ Waste-to-Green Actions</h2>
        <div className="space-y-3">
          <div className="bg-white p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <Recycle size={20} className="text-green-600" />
              <h3 className="text-gray-900">Kitchen Composting</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">Convert food waste into nutrient-rich soil</p>
            <button className="text-sm text-green-600 hover:text-green-700">Learn How →</button>
          </div>

          <div className="bg-white p-4 rounded-xl">
            <div className="flex items-center gap-3 mb-2">
              <Leaf size={20} className="text-green-600" />
              <h3 className="text-gray-900">Switched to Cloth Bags</h3>
            </div>
            <p className="text-sm text-gray-600 mb-2">Reduced plastic usage by carrying reusable bags</p>
            <button className="text-sm text-green-600 hover:text-green-700">Track Impact →</button>
          </div>
        </div>
      </div>

      {/* Nature Observations Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-md text-center">
          <div className="text-3xl mb-2">🐦</div>
          <p className="text-2xl text-gray-900">12</p>
          <p className="text-xs text-gray-600">Birds Logged</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md text-center">
          <div className="text-3xl mb-2">🦋</div>
          <p className="text-2xl text-gray-900">8</p>
          <p className="text-xs text-gray-600">Butterflies</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md text-center">
          <div className="text-3xl mb-2">♻️</div>
          <p className="text-2xl text-gray-900">15</p>
          <p className="text-xs text-gray-600">Compost Days</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md text-center">
          <div className="text-3xl mb-2">💧</div>
          <p className="text-2xl text-gray-900">120L</p>
          <p className="text-xs text-gray-600">Water Saved</p>
        </div>
      </div>

      {/* Biodiversity Impact */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
        <h3 className="text-xl mb-2">🌿 Your Biodiversity Impact</h3>
        <p className="text-purple-100 mb-4">
          Your actions have created a thriving ecosystem around your trees!
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/20 rounded-xl p-3">
            <p className="text-sm mb-1">Species Attracted</p>
            <p className="text-2xl">15+</p>
          </div>
          <div className="bg-white/20 rounded-xl p-3">
            <p className="text-sm mb-1">Eco Score</p>
            <p className="text-2xl">92/100</p>
          </div>
        </div>
      </div>
    </div>
  );
}
