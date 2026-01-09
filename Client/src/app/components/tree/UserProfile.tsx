import { User, Settings, LogOut, Award, TreePine, Crown, Share2, Edit, Building2 } from 'lucide-react';

const stats = [
  { label: 'Trees Planted', value: 12, icon: '🌳' },
  { label: 'Eco Coins', value: 850, icon: '🪙' },
  { label: 'CO₂ Offset', value: '72kg', icon: '🌍' },
  { label: 'Rank', value: '#245', icon: '🏆' },
];

const badges = [
  { name: 'Early Adopter', icon: '🌟', earned: true },
  { name: 'Tree Guardian', icon: '🌳', earned: true },
  { name: '15 Day Streak', icon: '🔥', earned: true },
  { name: 'Community Leader', icon: '👥', earned: false },
  { name: 'Eco Warrior', icon: '⚔️', earned: false },
  { name: 'Green Champion', icon: '👑', earned: false },
];

export function UserProfile() {
  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto pb-20">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-6 text-white mb-6 shadow-xl">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-4xl">
              👤
            </div>
            <div>
              <h1 className="text-2xl mb-1">Alex Johnson</h1>
              <p className="text-green-100 text-sm">@alexj • Joined Dec 2024</p>
              <div className="flex items-center gap-2 mt-2">
                <Crown size={16} className="text-yellow-300" />
                <span className="text-sm text-yellow-100">Gold Member</span>
              </div>
            </div>
          </div>
          <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
            <Edit size={20} />
          </button>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/10 rounded-xl p-3 text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <p className="text-xl mb-1">{stat.value}</p>
              <p className="text-xs text-green-100">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl text-gray-900">🏆 Badges & Achievements</h2>
          <span className="text-sm text-gray-600">{badges.filter((b) => b.earned).length}/{badges.length}</span>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`text-center p-3 rounded-xl ${
                badge.earned ? 'bg-amber-50 border-2 border-amber-500' : 'bg-gray-50 opacity-50'
              }`}
            >
              <div className="text-3xl mb-1">{badge.icon}</div>
              <p className="text-xs text-gray-700">{badge.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Impact Summary */}
      <div className="bg-white rounded-2xl p-6 shadow-md mb-6">
        <h2 className="text-xl text-gray-900 mb-4">Your Impact This Month</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <TreePine size={20} className="text-green-600" />
              </div>
              <div>
                <p className="text-gray-900">Trees Planted</p>
                <p className="text-sm text-gray-600">2 new this month</p>
              </div>
            </div>
            <span className="text-2xl text-green-600">+2</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Award size={20} className="text-blue-600" />
              </div>
              <div>
                <p className="text-gray-900">Eco Coins Earned</p>
                <p className="text-sm text-gray-600">From challenges & actions</p>
              </div>
            </div>
            <span className="text-2xl text-blue-600">+250</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                <Share2 size={20} className="text-purple-600" />
              </div>
              <div>
                <p className="text-gray-900">Friends Invited</p>
                <p className="text-sm text-gray-600">Help grow the community</p>
              </div>
            </div>
            <span className="text-2xl text-purple-600">3</span>
          </div>
        </div>
      </div>

      {/* Settings Menu */}
      <div className="bg-white rounded-2xl shadow-md overflow-hidden mb-6">
        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Settings size={20} className="text-gray-600" />
            <span className="text-gray-900">Account Settings</span>
          </div>
          <span className="text-gray-400">→</span>
        </button>

        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Building2 size={20} className="text-gray-600" />
            <span className="text-gray-900">Switch to CSR Dashboard</span>
          </div>
          <span className="text-gray-400">→</span>
        </button>

        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
          <div className="flex items-center gap-3">
            <Share2 size={20} className="text-gray-600" />
            <span className="text-gray-900">Invite Friends</span>
          </div>
          <span className="text-gray-400">→</span>
        </button>

        <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-3">
            <LogOut size={20} className="text-red-600" />
            <span className="text-red-600">Logout</span>
          </div>
        </button>
      </div>

      {/* CSR Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <Building2 size={32} />
          <div>
            <h3 className="text-xl mb-1">For Companies & NGOs</h3>
            <p className="text-blue-100 text-sm">Access CSR Dashboard & Transparent Reporting</p>
          </div>
        </div>
        <button className="w-full bg-white text-blue-700 py-3 rounded-xl hover:bg-blue-50 transition-colors">
          Switch to CSR View
        </button>
      </div>
    </div>
  );
}
