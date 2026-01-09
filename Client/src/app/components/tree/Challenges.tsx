import { Trophy, Users, Clock, Award, Target, Flame } from 'lucide-react';

const activeChallenges = [
  {
    id: 1,
    title: '🌍 Global Tree Challenge',
    description: 'Plant 1 tree this week',
    participants: 5420,
    progress: 100,
    reward: 100,
    timeLeft: '2 days left',
    status: 'completed',
  },
  {
    id: 2,
    title: '💧 Water Warrior',
    description: 'Water your trees for 7 days straight',
    participants: 3250,
    progress: 85,
    reward: 75,
    timeLeft: '1 day left',
    status: 'active',
  },
  {
    id: 3,
    title: '📸 Health Check Master',
    description: 'Perform 5 AI health checks this month',
    participants: 2180,
    progress: 60,
    reward: 50,
    timeLeft: '12 days left',
    status: 'active',
  },
];

const upcomingChallenges = [
  {
    title: '🏆 Community Forest',
    description: 'Collective goal: 10,000 trees in your city',
    startsIn: '3 days',
    reward: 200,
  },
  {
    title: '🌱 Biodiversity Boost',
    description: 'Plant 3 different tree species',
    startsIn: '1 week',
    reward: 150,
  },
];

const leaderboard = [
  { rank: 1, name: 'Priya Sharma', trees: 45, coins: 2850, avatar: '👩' },
  { rank: 2, name: 'Rahul Kumar', trees: 42, coins: 2650, avatar: '👨' },
  { rank: 3, name: 'Anita Singh', trees: 38, coins: 2420, avatar: '👩' },
  { rank: 4, name: 'You (Alex)', trees: 12, coins: 850, avatar: '🧑', isUser: true },
  { rank: 5, name: 'Vikram Patel', trees: 11, coins: 780, avatar: '👨' },
];

export function Challenges() {
  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto pb-20">
      <h1 className="text-3xl text-gray-900 mb-2">Green Challenges 🏆</h1>
      <p className="text-gray-600 mb-6">Compete, collaborate, and earn rewards!</p>

      {/* Active Challenges */}
      <div className="mb-6">
        <h2 className="text-xl text-gray-900 mb-4">Active Challenges</h2>
        <div className="space-y-4">
          {activeChallenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`bg-white rounded-2xl p-6 shadow-md border-2 ${
                challenge.status === 'completed' ? 'border-green-500' : 'border-transparent'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg text-gray-900 mb-1">{challenge.title}</h3>
                  <p className="text-sm text-gray-600">{challenge.description}</p>
                </div>
                {challenge.status === 'completed' && (
                  <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                    <Award size={16} />
                    <span>Completed!</span>
                  </div>
                )}
              </div>

              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-gray-600">Progress</span>
                  <span className="text-green-600">{challenge.progress}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-green-500 h-3 rounded-full transition-all"
                    style={{ width: `${challenge.progress}%` }}
                  ></div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    <span>{challenge.participants.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{challenge.timeLeft}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 bg-amber-50 px-4 py-2 rounded-lg">
                  <Award size={18} className="text-amber-600" />
                  <span className="text-amber-700">{challenge.reward} coins</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard */}
      <div className="mb-6">
        <h2 className="text-xl text-gray-900 mb-4">🏆 Leaderboard (This Month)</h2>
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {leaderboard.map((user) => (
            <div
              key={user.rank}
              className={`flex items-center gap-4 p-4 border-b border-gray-100 last:border-0 ${
                user.isUser ? 'bg-green-50' : 'bg-white'
              }`}
            >
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  user.rank === 1
                    ? 'bg-yellow-100 text-yellow-700'
                    : user.rank === 2
                    ? 'bg-gray-200 text-gray-700'
                    : user.rank === 3
                    ? 'bg-orange-100 text-orange-700'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                {user.rank <= 3 ? (
                  <Trophy size={20} />
                ) : (
                  <span>{user.rank}</span>
                )}
              </div>

              <div className="text-2xl">{user.avatar}</div>

              <div className="flex-1">
                <p className={`text-gray-900 ${user.isUser ? 'font-bold' : ''}`}>
                  {user.name}
                </p>
                <p className="text-sm text-gray-600">{user.trees} trees planted</p>
              </div>

              <div className="text-right">
                <div className="flex items-center gap-1 text-amber-600">
                  <Award size={16} />
                  <span>{user.coins}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Challenges */}
      <div className="mb-6">
        <h2 className="text-xl text-gray-900 mb-4">Upcoming Challenges</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {upcomingChallenges.map((challenge, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-200"
            >
              <h3 className="text-lg text-gray-900 mb-2">{challenge.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{challenge.description}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-sm text-purple-700">
                  <Clock size={16} />
                  <span>Starts in {challenge.startsIn}</span>
                </div>
                <div className="bg-amber-100 text-amber-700 px-3 py-1 rounded-lg text-sm flex items-center gap-1">
                  <Award size={14} />
                  <span>{challenge.reward} coins</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Create Team Challenge */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white shadow-xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <Users size={24} />
          </div>
          <div>
            <h3 className="text-xl mb-1">Team Challenges</h3>
            <p className="text-green-100 text-sm">Compete with friends or colleagues</p>
          </div>
        </div>
        <button className="w-full bg-white text-green-700 py-3 rounded-xl hover:bg-green-50 transition-colors">
          Create Team Challenge
        </button>
      </div>
    </div>
  );
}
