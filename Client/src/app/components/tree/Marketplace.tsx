import { ShoppingBag, Award, Gift, Sparkles, TreePine, Ticket } from 'lucide-react';

const products = [
  {
    name: 'Plant 5 More Trees',
    description: 'Sponsor tree planting in your community',
    price: 500,
    category: 'Sponsorship',
    icon: '🌳',
  },
  {
    name: 'Eco-Friendly Water Bottle',
    description: 'Reusable stainless steel bottle',
    price: 300,
    category: 'Product',
    icon: '🍾',
  },
  {
    name: 'Organic Seeds Pack',
    description: 'Mixed vegetable & herb seeds',
    price: 200,
    category: 'Product',
    icon: '🌱',
  },
  {
    name: 'Bamboo Toothbrush Set',
    description: 'Pack of 4 eco-friendly toothbrushes',
    price: 150,
    category: 'Product',
    icon: '🦷',
  },
  {
    name: '10% Off Eco Store',
    description: 'Discount voucher for partner stores',
    price: 100,
    category: 'Voucher',
    icon: '🎟️',
  },
  {
    name: 'Tree Care Kit',
    description: 'Organic fertilizer & tools',
    price: 400,
    category: 'Product',
    icon: '🛠️',
  },
];

const rewards = [
  { name: 'Bronze Badge', requirement: '5 trees', unlocked: true },
  { name: 'Silver Badge', requirement: '10 trees', unlocked: true },
  { name: 'Gold Badge', requirement: '25 trees', unlocked: false },
  { name: 'Platinum Badge', requirement: '50 trees', unlocked: false },
];

export function Marketplace() {
  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto pb-20">
      <h1 className="text-3xl text-gray-900 mb-2">Green Marketplace 🛒</h1>
      <p className="text-gray-600 mb-6">Redeem your eco-coins for rewards</p>

      {/* Wallet Card */}
      <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white mb-6 shadow-xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-amber-100 text-sm mb-1">Your Eco-Coins</p>
            <h2 className="text-5xl">850</h2>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Award size={32} />
          </div>
        </div>
        <div className="flex gap-3">
          <button className="flex-1 bg-white/20 py-2 rounded-lg hover:bg-white/30 transition-colors">
            History
          </button>
          <button className="flex-1 bg-white/20 py-2 rounded-lg hover:bg-white/30 transition-colors">
            Earn More
          </button>
        </div>
      </div>

      {/* How to Earn */}
      <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-5 mb-6 border border-green-200">
        <h3 className="text-gray-900 mb-3 flex items-center gap-2">
          <Sparkles size={20} className="text-green-600" />
          <span>How to Earn Eco-Coins</span>
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
          <div className="bg-white p-3 rounded-lg">
            <p className="text-2xl mb-1">🌳</p>
            <p className="text-gray-900 mb-1">Plant a Tree</p>
            <p className="text-green-600">+50 coins</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <p className="text-2xl mb-1">📸</p>
            <p className="text-gray-900 mb-1">Health Check</p>
            <p className="text-green-600">+10 coins</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <p className="text-2xl mb-1">🏆</p>
            <p className="text-gray-900 mb-1">Complete Challenge</p>
            <p className="text-green-600">+75 coins</p>
          </div>
          <div className="bg-white p-3 rounded-lg">
            <p className="text-2xl mb-1">📚</p>
            <p className="text-gray-900 mb-1">Take Quiz</p>
            <p className="text-green-600">+25 coins</p>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="mb-6">
        <h2 className="text-xl text-gray-900 mb-4">Redeem Rewards</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all overflow-hidden"
            >
              <div className="h-32 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
                <span className="text-6xl">{product.icon}</span>
              </div>
              <div className="p-4">
                <div className="mb-2">
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                <h3 className="text-gray-900 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-600">
                    <Award size={18} />
                    <span className="text-lg">{product.price}</span>
                  </div>
                  <button
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      product.price <= 850
                        ? 'bg-green-600 text-white hover:bg-green-700'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={product.price > 850}
                  >
                    Redeem
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievement Badges */}
      <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
        <h2 className="text-xl text-gray-900 mb-4">🏅 Achievement Badges</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {rewards.map((reward, index) => (
            <div
              key={index}
              className={`text-center p-4 rounded-xl border-2 ${
                reward.unlocked
                  ? 'border-amber-500 bg-amber-50'
                  : 'border-gray-200 bg-gray-50 opacity-50'
              }`}
            >
              <div className="text-4xl mb-2">{reward.unlocked ? '🏆' : '🔒'}</div>
              <p className="text-gray-900 mb-1">{reward.name}</p>
              <p className="text-xs text-gray-600">{reward.requirement}</p>
              {reward.unlocked && (
                <p className="text-xs text-green-600 mt-2">✓ Unlocked!</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Partner Brands */}
      <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
        <h3 className="text-xl mb-2">🤝 Partner with Us</h3>
        <p className="text-purple-100 mb-4">
          Are you an eco-friendly brand? Partner with GreenTracker to reach 50k+ conscious consumers
        </p>
        <button className="bg-white text-purple-700 px-6 py-3 rounded-xl hover:bg-purple-50 transition-colors">
          Become a Partner
        </button>
      </div>
    </div>
  );
}
