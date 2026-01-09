import { ArrowLeft, Users, Activity, TrendingUp, Database, CheckCircle2, AlertTriangle } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface AdminDashboardProps {
  onBack: () => void;
}

const userActivityData = [
  { day: 'Mon', scans: 45 },
  { day: 'Tue', scans: 52 },
  { day: 'Wed', scans: 38 },
  { day: 'Thu', scans: 65 },
  { day: 'Fri', scans: 58 },
  { day: 'Sat', scans: 42 },
  { day: 'Sun', scans: 35 },
];

const soilTypeData = [
  { name: 'Loamy', value: 45 },
  { name: 'Clay', value: 25 },
  { name: 'Sandy', value: 20 },
  { name: 'Silt', value: 10 },
];

const COLORS = ['#16a34a', '#3b82f6', '#f59e0b', '#8b5cf6'];

export function AdminDashboard({ onBack }: AdminDashboardProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-700 text-white p-6 rounded-b-3xl">
        <button onClick={onBack} className="mb-4 flex items-center gap-2 text-purple-100 hover:text-white">
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <h1 className="text-2xl">Admin Analytics</h1>
        <p className="text-purple-100 text-sm mt-1">System-wide insights</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Overview Stats */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Users size={20} className="text-blue-600" />
              <span className="text-sm text-gray-600">Total Users</span>
            </div>
            <p className="text-3xl text-gray-900">1,247</p>
            <div className="flex items-center gap-1 text-green-600 text-sm mt-1">
              <TrendingUp size={14} />
              <span>+12% this month</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Activity size={20} className="text-green-600" />
              <span className="text-sm text-gray-600">Active Devices</span>
            </div>
            <p className="text-3xl text-gray-900">892</p>
            <div className="flex items-center gap-1 text-green-600 text-sm mt-1">
              <TrendingUp size={14} />
              <span>+8% this week</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <Database size={20} className="text-purple-600" />
              <span className="text-sm text-gray-600">Total Scans</span>
            </div>
            <p className="text-3xl text-gray-900">15.2K</p>
            <p className="text-sm text-gray-600 mt-1">This month</p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-gray-200">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 size={20} className="text-green-600" />
              <span className="text-sm text-gray-600">AI Accuracy</span>
            </div>
            <p className="text-3xl text-gray-900">94.2%</p>
            <p className="text-sm text-gray-600 mt-1">Average</p>
          </div>
        </div>

        {/* Weekly Activity Chart */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <h3 className="text-gray-900 mb-4">Weekly Scan Activity</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={userActivityData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="day" stroke="#666" fontSize={12} />
              <YAxis stroke="#666" fontSize={12} />
              <Tooltip />
              <Bar dataKey="scans" fill="#16a34a" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Soil Type Distribution */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <h3 className="text-gray-900 mb-4">Soil Type Distribution</h3>
          <div className="flex items-center justify-center">
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie
                  data={soilTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {soilTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* System Health */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <h3 className="text-gray-900 mb-3">System Health</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-900">API Server</span>
              </div>
              <span className="text-sm text-green-600">Operational</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-900">Database</span>
              </div>
              <span className="text-sm text-green-600">Operational</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-900">AI Service</span>
              </div>
              <span className="text-sm text-green-600">Operational</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <span className="text-sm text-gray-900">Cloud Storage</span>
              </div>
              <span className="text-sm text-yellow-600">Degraded</span>
            </div>
          </div>
        </div>

        {/* Recent Alerts */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <h3 className="text-gray-900 mb-3">Recent System Alerts</h3>
          <div className="space-y-2">
            <div className="flex items-start gap-3 p-3 bg-yellow-50 rounded-lg">
              <AlertTriangle size={18} className="text-yellow-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-900">High API Load</p>
                <p className="text-xs text-gray-600">Increased by 45% in last hour</p>
              </div>
              <span className="text-xs text-gray-500">5m ago</span>
            </div>
            <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg">
              <CheckCircle2 size={18} className="text-green-600 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-gray-900">Backup Completed</p>
                <p className="text-xs text-gray-600">All data backed up successfully</p>
              </div>
              <span className="text-xs text-gray-500">1h ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
