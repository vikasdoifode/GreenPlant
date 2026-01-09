import { 
  TreePine, Droplets, Bell, Award, TrendingUp, MapPin, 
  Camera, Leaf, Users, Crown, Flame, Heart 
} from 'lucide-react';

interface TreeDashboardProps {
  onNavigate: (tab: string) => void;
}

const recentTrees = [
  { id: 1, name: 'Neem Sapling', health: 'healthy', daysOld: 5, needsWater: false },
  { id: 2, name: 'Mango Tree', health: 'healthy', daysOld: 12, needsWater: true },
  { id: 3, name: 'Banyan Sapling', health: 'needs-care', daysOld: 8, needsWater: false },
];

const reminders = [
  { id: 1, type: 'water', message: 'Water your Mango Tree today - it\'s hot!', time: '2 hours ago' },
  { id: 2, type: 'sunlight', message: 'Your Neem sapling needs sunlight', time: '5 hours ago' },
];

const achievements = [
  { icon: '🌱', name: 'First Planter', unlocked: true },
  { icon: '🌳', name: 'Tree Guardian', unlocked: true },
  { icon: '🏆', name: 'Eco Warrior', unlocked: false },
  { icon: '👑', name: 'Green Champion', unlocked: false },
];

export function TreeDashboard({ onNavigate }: TreeDashboardProps) {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl text-gray-900 mb-2">Welcome back, Alex! 🌿</h1>
        <p className="text-gray-600">Your forest is growing beautifully</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <TreePine size={28} />
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">+2 this week</span>
          </div>
          <p className="text-4xl mb-2">12</p>
          <p className="text-green-100">Trees Planted</p>
        </div>

        <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <Droplets size={28} />
            <span className="text-sm bg-white/20 px-3 py-1 rounded-full">92%</span>
          </div>
          <p className="text-4xl mb-2">11</p>
          <p className="text-blue-100">Healthy Trees</p>
        </div>

        <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <Award size={28} />
            <Crown size={18} className="text-amber-200" />
          </div>
          <p className="text-4xl mb-2">850</p>
          <p className="text-amber-100">Eco Coins</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center justify-between mb-3">
            <TrendingUp size={28} />
            <Flame size={18} className="text-orange-300" />
          </div>
          <p className="text-4xl mb-2">15</p>
          <p className="text-purple-100">Day Streak</p>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mb-6">
        <h2 className="text-xl text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button
            onClick={() => onNavigate('plant')}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center border-2 border-transparent hover:border-green-500"
          >
            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <TreePine size={28} className="text-green-600" />
            </div>
            <p className="text-gray-900">Plant Tree</p>
          </button>

          <button
            onClick={() => onNavigate('health')}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center border-2 border-transparent hover:border-green-500"
          >
            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Camera size={28} className="text-blue-600" />
            </div>
            <p className="text-gray-900">Health Check</p>
          </button>

          <button
            onClick={() => onNavigate('impact')}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center border-2 border-transparent hover:border-green-500"
          >
            <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Leaf size={28} className="text-purple-600" />
            </div>
            <p className="text-gray-900">Eco Impact</p>
          </button>

          <button
            onClick={() => onNavigate('map')}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center border-2 border-transparent hover:border-green-500"
          >
            <div className="w-14 h-14 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <MapPin size={28} className="text-amber-600" />
            </div>
            <p className="text-gray-900">View Map</p>
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mb-6">
        {/* Care Reminders */}
        <div className="lg:col-span-1 bg-white rounded-2xl p-5 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg text-gray-900">Today's Reminders</h2>
            <Bell size={20} className="text-orange-500" />
          </div>
          <div className="space-y-3">
            {reminders.map((reminder) => (
              <div
                key={reminder.id}
                className="flex items-start gap-3 p-3 bg-orange-50 border border-orange-200 rounded-xl"
              >
                <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                  {reminder.type === 'water' ? (
                    <Droplets size={18} className="text-orange-600" />
                  ) : (
                    <Leaf size={18} className="text-orange-600" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900">{reminder.message}</p>
                  <p className="text-xs text-gray-500 mt-1">{reminder.time}</p>
                </div>
              </div>
            ))}
            <button className="w-full text-center text-sm text-green-600 hover:text-green-700 py-2">
              View All Reminders →
            </button>
          </div>
        </div>

        {/* Recent Trees */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-md">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg text-gray-900">Recent Trees</h2>
            <TreePine size={20} className="text-green-600" />
          </div>
          <div className="grid md:grid-cols-2 gap-3">
            {recentTrees.map((tree) => (
              <div
                key={tree.id}
                className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl">🌱</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-gray-900 truncate">{tree.name}</p>
                  <p className="text-xs text-gray-500">{tree.daysOld} days old</p>
                </div>
                <div>
                  {tree.health === 'healthy' ? (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full whitespace-nowrap">Healthy</span>
                  ) : (
                    <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full whitespace-nowrap">Needs Care</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => onNavigate('mytrees')}
            className="w-full text-center text-sm text-green-600 hover:text-green-700 py-2 mt-3"
          >
            View All Trees →
          </button>
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 shadow-md mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl text-gray-900">Recent Achievements</h2>
          <Award size={24} className="text-amber-600" />
        </div>
        <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className={`text-center p-4 rounded-xl ${
                achievement.unlocked ? 'bg-white shadow-md' : 'bg-gray-100 opacity-50'
              }`}
            >
              <div className="text-4xl mb-2">{achievement.icon}</div>
              <p className="text-xs text-gray-700">{achievement.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Community Challenge */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-2xl mb-2">🌍 Global Tree Challenge</h2>
            <p className="text-green-100">Join 5,000+ planters this month!</p>
          </div>
          <Users size={32} />
        </div>
        <div className="mb-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Progress</span>
            <span>12,450 / 50,000 trees</span>
          </div>
          <div className="w-full bg-green-800 rounded-full h-4">
            <div className="bg-white h-4 rounded-full" style={{ width: '25%' }}></div>
          </div>
        </div>
        <button
          onClick={() => onNavigate('challenges')}
          className="w-full md:w-auto bg-white text-green-700 px-8 py-3 rounded-xl hover:bg-green-50 transition-colors"
        >
          View Challenge Details
        </button>
      </div>
    </div>
  );
}