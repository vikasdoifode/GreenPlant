import { RefreshCw, Droplets, Activity, ThermometerSun, TrendingUp, Leaf } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const sensorData = [
  { time: '6am', moisture: 65, ph: 6.5, temp: 22 },
  { time: '9am', moisture: 62, ph: 6.6, temp: 25 },
  { time: '12pm', moisture: 58, ph: 6.4, temp: 28 },
  { time: '3pm', moisture: 55, ph: 6.5, temp: 30 },
  { time: '6pm', moisture: 60, ph: 6.5, temp: 26 },
];

export function Dashboard() {
  const currentTime = new Date().toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 mt-2">
        <div>
          <h1 className="text-2xl text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm">Real-time soil monitoring</p>
        </div>
        <button className="p-2 bg-green-50 rounded-full text-green-600 hover:bg-green-100 transition-colors">
          <RefreshCw size={20} />
        </button>
      </div>

      {/* Soil Health Score */}
      <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white mb-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <p className="text-green-100 text-sm">Overall Soil Health</p>
            <h2 className="text-4xl mt-1">85/100</h2>
          </div>
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
            <Leaf size={32} />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex-1 bg-white/20 rounded-full h-2 overflow-hidden">
            <div className="bg-white h-full w-[85%]"></div>
          </div>
          <span className="text-sm">Good</span>
        </div>
      </div>

      {/* Sensor Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Soil Moisture */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Droplets size={20} className="text-blue-600" />
            <span className="text-sm text-blue-900">Moisture</span>
          </div>
          <p className="text-2xl text-blue-900">60%</p>
          <p className="text-xs text-blue-700 mt-1">Normal</p>
        </div>

        {/* Soil pH */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Activity size={20} className="text-green-600" />
            <span className="text-sm text-green-900">pH Level</span>
          </div>
          <p className="text-2xl text-green-900">6.5</p>
          <p className="text-xs text-green-700 mt-1">Optimal</p>
        </div>

        {/* Temperature */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <ThermometerSun size={20} className="text-orange-600" />
            <span className="text-sm text-orange-900">Temperature</span>
          </div>
          <p className="text-2xl text-orange-900">26°C</p>
          <p className="text-xs text-orange-700 mt-1">Normal</p>
        </div>

        {/* NPK */}
        <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={20} className="text-purple-600" />
            <span className="text-sm text-purple-900">NPK</span>
          </div>
          <p className="text-lg text-purple-900">N:80 P:60</p>
          <p className="text-xs text-purple-700 mt-1">K:70 mg/kg</p>
        </div>
      </div>

      {/* Trend Chart */}
      <div className="bg-white rounded-xl p-4 border border-gray-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-gray-900">Moisture Trend</h3>
          <span className="text-xs text-gray-500">Last 12 hours</span>
        </div>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={sensorData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="time" stroke="#666" fontSize={12} />
            <YAxis stroke="#666" fontSize={12} />
            <Tooltip />
            <Line type="monotone" dataKey="moisture" stroke="#16a34a" strokeWidth={2} dot={{ fill: '#16a34a' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Last Updated */}
      <div className="text-center text-sm text-gray-500 mt-4">
        Last updated: Today at {currentTime}
      </div>
    </div>
  );
}
