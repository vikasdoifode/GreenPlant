import { TrendingUp, Droplets, Wind, Leaf, Car, Trash2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const impactData = [
  { month: 'Jan', co2: 15 },
  { month: 'Feb', co2: 22 },
  { month: 'Mar', co2: 30 },
  { month: 'Apr', co2: 45 },
  { month: 'May', co2: 58 },
  { month: 'Jun', co2: 72 },
];

const treeTypeData = [
  { name: 'Neem', value: 30, color: '#16a34a' },
  { name: 'Mango', value: 25, color: '#3b82f6' },
  { name: 'Banyan', value: 20, color: '#f59e0b' },
  { name: 'Others', value: 25, color: '#8b5cf6' },
];

export function EcoImpact() {
  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto pb-20">
      <h1 className="text-3xl text-gray-900 mb-2">Your Eco Impact 🌍</h1>
      <p className="text-gray-600 mb-6">See the real difference you're making</p>

      {/* Total Impact Card */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-8 text-white mb-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-green-100 mb-2">Total CO₂ Absorbed</p>
            <h2 className="text-5xl mb-2">72 kg</h2>
            <p className="text-green-100 text-sm">By your 12 trees</p>
          </div>
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
            <Leaf size={40} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-green-100 text-sm mb-1">Oxygen Produced</p>
            <p className="text-2xl">54 kg</p>
          </div>
          <div className="bg-white/10 rounded-xl p-4">
            <p className="text-green-100 text-sm mb-1">Water Saved</p>
            <p className="text-2xl">180 L</p>
          </div>
        </div>
      </div>

      {/* Real-World Comparisons */}
      <div className="mb-6">
        <h2 className="text-xl text-gray-900 mb-4">Real-World Impact</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-2xl p-5 shadow-md border-l-4 border-blue-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <Car size={24} className="text-blue-600" />
              </div>
              <h3 className="text-gray-900">Car Travel</h3>
            </div>
            <p className="text-3xl text-gray-900 mb-1">280 km</p>
            <p className="text-sm text-gray-600">CO₂ emissions offset</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-md border-l-4 border-green-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Trash2 size={24} className="text-green-600" />
              </div>
              <h3 className="text-gray-900">Plastic Bottles</h3>
            </div>
            <p className="text-3xl text-gray-900 mb-1">85</p>
            <p className="text-sm text-gray-600">Production emissions saved</p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-md border-l-4 border-purple-500">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <Wind size={24} className="text-purple-600" />
              </div>
              <h3 className="text-gray-900">Air Quality</h3>
            </div>
            <p className="text-3xl text-gray-900 mb-1">1200 m³</p>
            <p className="text-sm text-gray-600">Air purified daily</p>
          </div>
        </div>
      </div>

      {/* CO2 Absorption Trend */}
      <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
        <h2 className="text-xl text-gray-900 mb-4">CO₂ Absorption Over Time</h2>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={impactData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="month" stroke="#666" />
            <YAxis stroke="#666" />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="co2"
              stroke="#16a34a"
              strokeWidth={3}
              dot={{ fill: '#16a34a', r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
        <p className="text-center text-sm text-gray-600 mt-4">
          📈 Your impact is growing by <strong>15% each month!</strong>
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Tree Distribution */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl text-gray-900 mb-4">Your Forest Composition</h2>
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie
                data={treeTypeData}
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {treeTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Environmental Benefits */}
        <div className="bg-white rounded-2xl p-6 shadow-md">
          <h2 className="text-xl text-gray-900 mb-4">Environmental Benefits</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">🌡️ Temperature Reduction</span>
                <span className="text-green-600">2-3°C</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">💧 Soil Moisture</span>
                <span className="text-blue-600">+40%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '80%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-gray-700">🦋 Biodiversity</span>
                <span className="text-purple-600">+60%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-6 shadow-md">
        <h2 className="text-xl text-gray-900 mb-4">Impact Milestones 🏆</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white rounded-xl">
            <div className="text-3xl mb-2">🌱</div>
            <p className="text-sm text-gray-700">First 10 Trees</p>
            <p className="text-xs text-green-600 mt-1">Unlocked!</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl">
            <div className="text-3xl mb-2">💚</div>
            <p className="text-sm text-gray-700">50kg CO₂</p>
            <p className="text-xs text-green-600 mt-1">Unlocked!</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl opacity-50">
            <div className="text-3xl mb-2">🌳</div>
            <p className="text-sm text-gray-700">25 Trees</p>
            <p className="text-xs text-gray-500 mt-1">13 more to go</p>
          </div>
          <div className="text-center p-4 bg-white rounded-xl opacity-50">
            <div className="text-3xl mb-2">👑</div>
            <p className="text-sm text-gray-700">100kg CO₂</p>
            <p className="text-xs text-gray-500 mt-1">28kg more</p>
          </div>
        </div>
      </div>
    </div>
  );
}
