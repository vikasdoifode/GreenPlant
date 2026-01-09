import { useState } from 'react';
import { Download, TrendingUp, TrendingDown, Calendar } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const historyData = [
  {
    date: 'Dec 15',
    soilHealth: 82,
    moisture: 58,
    ph: 6.4,
    nitrogen: 75,
  },
  {
    date: 'Dec 16',
    soilHealth: 83,
    moisture: 60,
    ph: 6.5,
    nitrogen: 78,
  },
  {
    date: 'Dec 18',
    soilHealth: 84,
    moisture: 62,
    ph: 6.5,
    nitrogen: 80,
  },
  {
    date: 'Dec 20',
    soilHealth: 85,
    moisture: 60,
    ph: 6.5,
    nitrogen: 80,
  },
  {
    date: 'Dec 21',
    soilHealth: 85,
    moisture: 60,
    ph: 6.5,
    nitrogen: 80,
  },
];

const reports = [
  {
    date: 'Dec 21, 2024',
    time: '10:30 AM',
    soilHealth: 85,
    trend: 'up',
    soilType: 'Loamy',
    moisture: 60,
    ph: 6.5,
  },
  {
    date: 'Dec 20, 2024',
    time: '11:15 AM',
    soilHealth: 85,
    trend: 'up',
    soilType: 'Loamy',
    moisture: 60,
    ph: 6.5,
  },
  {
    date: 'Dec 18, 2024',
    time: '09:45 AM',
    soilHealth: 84,
    trend: 'up',
    soilType: 'Loamy',
    moisture: 62,
    ph: 6.5,
  },
  {
    date: 'Dec 16, 2024',
    time: '10:00 AM',
    soilHealth: 83,
    trend: 'up',
    soilType: 'Loamy',
    moisture: 60,
    ph: 6.5,
  },
  {
    date: 'Dec 15, 2024',
    time: '02:30 PM',
    soilHealth: 82,
    trend: 'down',
    soilType: 'Loamy',
    moisture: 58,
    ph: 6.4,
  },
];

export function HistoryModule() {
  const [selectedMetric, setSelectedMetric] = useState<'soilHealth' | 'moisture' | 'ph' | 'nitrogen'>('soilHealth');

  return (
    <div className="p-4 pb-20">
      {/* Header */}
      <div className="mb-6 mt-2">
        <h1 className="text-2xl text-gray-900">Soil Health History</h1>
        <p className="text-gray-500 text-sm">Track your soil progress over time</p>
      </div>

      {/* Trend Chart */}
      <div className="bg-white rounded-xl p-4 border border-gray-200 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-gray-900">Trends</h3>
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value as any)}
            className="text-sm border border-gray-300 rounded-lg px-3 py-1 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="soilHealth">Soil Health</option>
            <option value="moisture">Moisture</option>
            <option value="ph">pH Level</option>
            <option value="nitrogen">Nitrogen</option>
          </select>
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={historyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="date" stroke="#666" fontSize={12} />
            <YAxis stroke="#666" fontSize={12} />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey={selectedMetric}
              stroke="#16a34a"
              strokeWidth={2}
              dot={{ fill: '#16a34a', r: 4 }}
              name={selectedMetric === 'soilHealth' ? 'Soil Health' : selectedMetric === 'moisture' ? 'Moisture (%)' : selectedMetric === 'ph' ? 'pH Level' : 'Nitrogen (mg/kg)'}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="bg-green-50 border border-green-200 rounded-xl p-4">
          <p className="text-sm text-green-700 mb-1">Average Score</p>
          <p className="text-2xl text-green-900">83.8</p>
          <div className="flex items-center gap-1 text-green-600 text-sm mt-1">
            <TrendingUp size={14} />
            <span>+2.4% this week</span>
          </div>
        </div>

        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-700 mb-1">Total Scans</p>
          <p className="text-2xl text-blue-900">5</p>
          <p className="text-blue-600 text-sm mt-1">This month</p>
        </div>
      </div>

      {/* Reports List */}
      <div className="mb-4">
        <h3 className="text-gray-900 mb-3">Recent Reports</h3>
      </div>

      <div className="space-y-3">
        {reports.map((report, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-gray-500" />
                <div>
                  <p className="text-gray-900">{report.date}</p>
                  <p className="text-sm text-gray-500">{report.time}</p>
                </div>
              </div>
              <button className="text-green-600 hover:text-green-700">
                <Download size={20} />
              </button>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-3">
              <div>
                <p className="text-xs text-gray-500">Health</p>
                <p className="text-gray-900">{report.soilHealth}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Moisture</p>
                <p className="text-gray-900">{report.moisture}%</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">pH</p>
                <p className="text-gray-900">{report.ph}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Type</p>
                <p className="text-gray-900 text-sm">{report.soilType}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {report.trend === 'up' ? (
                <>
                  <TrendingUp size={16} className="text-green-600" />
                  <span className="text-sm text-green-600">Improving</span>
                </>
              ) : (
                <>
                  <TrendingDown size={16} className="text-orange-600" />
                  <span className="text-sm text-orange-600">Needs attention</span>
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Export All */}
      <button className="w-full mt-6 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
        <Download size={20} />
        <span>Export All Reports</span>
      </button>
    </div>
  );
}
