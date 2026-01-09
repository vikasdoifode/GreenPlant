import { useState } from 'react';
import { Search, Filter, Heart, Droplets, Camera, MapPin, Calendar, TrendingUp } from 'lucide-react';

const trees = [
  {
    id: 1,
    name: 'Neem Sapling #1',
    species: 'Neem Tree',
    plantedDate: '2025-01-04',
    location: 'Mumbai, Maharashtra',
    health: 'healthy',
    healthScore: 95,
    daysOld: 5,
    waterSchedule: 'Daily',
    lastWatered: '2 hours ago',
    co2Absorbed: 0.5,
    image: '🌱',
    tags: ['Medicinal', 'Native'],
  },
  {
    id: 2,
    name: 'Mango Tree #1',
    species: 'Mango (Mangifera indica)',
    plantedDate: '2024-12-28',
    location: 'Pune, Maharashtra',
    health: 'healthy',
    healthScore: 88,
    daysOld: 12,
    waterSchedule: 'Every 2 days',
    lastWatered: '1 day ago',
    co2Absorbed: 1.2,
    image: '🌳',
    tags: ['Fruit', 'Native'],
  },
  {
    id: 3,
    name: 'Banyan Sapling',
    species: 'Banyan Tree',
    plantedDate: '2025-01-01',
    location: 'Delhi',
    health: 'needs-care',
    healthScore: 65,
    daysOld: 8,
    waterSchedule: 'Daily',
    lastWatered: '3 days ago',
    co2Absorbed: 0.8,
    image: '🌿',
    tags: ['Native', 'Large'],
  },
  {
    id: 4,
    name: 'Peepal Tree',
    species: 'Sacred Fig',
    plantedDate: '2024-12-20',
    location: 'Bangalore',
    health: 'healthy',
    healthScore: 92,
    daysOld: 20,
    waterSchedule: 'Every 2 days',
    lastWatered: '5 hours ago',
    co2Absorbed: 1.5,
    image: '🌳',
    tags: ['Sacred', 'Native'],
  },
];

export function MyTrees() {
  const [filter, setFilter] = useState<'all' | 'healthy' | 'needs-care'>('all');
  const [selectedTree, setSelectedTree] = useState<number | null>(null);

  const filteredTrees = trees.filter((tree) => {
    if (filter === 'all') return true;
    return tree.health === filter;
  });

  const tree = selectedTree ? trees.find((t) => t.id === selectedTree) : null;

  if (tree) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Tree Detail View */}
        <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 pb-20 rounded-b-3xl">
          <button
            onClick={() => setSelectedTree(null)}
            className="mb-4 text-green-100 hover:text-white"
          >
            ← Back to My Trees
          </button>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center text-4xl">
              {tree.image}
            </div>
            <div>
              <h1 className="text-2xl mb-1">{tree.name}</h1>
              <p className="text-green-100">{tree.species}</p>
            </div>
          </div>
          <div className="flex gap-2 flex-wrap">
            {tree.tags.map((tag) => (
              <span key={tag} className="text-xs bg-white/20 px-3 py-1 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="p-4 -mt-12">
          {/* Health Score Card */}
          <div className="bg-white rounded-2xl p-5 shadow-lg mb-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg text-gray-900">Health Score</h2>
              <span
                className={`text-2xl ${
                  tree.healthScore >= 80 ? 'text-green-600' : 'text-yellow-600'
                }`}
              >
                {tree.healthScore}%
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
              <div
                className={`h-3 rounded-full ${
                  tree.healthScore >= 80 ? 'bg-green-500' : 'bg-yellow-500'
                }`}
                style={{ width: `${tree.healthScore}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600">
              {tree.health === 'healthy' ? '✅ Your tree is healthy!' : '⚠️ Needs attention'}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Calendar size={18} className="text-blue-600" />
                <span className="text-sm text-gray-600">Age</span>
              </div>
              <p className="text-xl text-gray-900">{tree.daysOld} days</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp size={18} className="text-green-600" />
                <span className="text-sm text-gray-600">CO₂ Absorbed</span>
              </div>
              <p className="text-xl text-gray-900">{tree.co2Absorbed} kg</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <Droplets size={18} className="text-blue-600" />
                <span className="text-sm text-gray-600">Last Watered</span>
              </div>
              <p className="text-sm text-gray-900">{tree.lastWatered}</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <MapPin size={18} className="text-red-600" />
                <span className="text-sm text-gray-600">Location</span>
              </div>
              <p className="text-sm text-gray-900">{tree.location}</p>
            </div>
          </div>

          {/* Care Schedule */}
          <div className="bg-white rounded-xl p-5 shadow-md mb-4">
            <h3 className="text-gray-900 mb-3">Care Schedule</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <Droplets size={20} className="text-blue-600" />
                  <div>
                    <p className="text-sm text-gray-900">Watering</p>
                    <p className="text-xs text-gray-600">{tree.waterSchedule}</p>
                  </div>
                </div>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
                  Mark Done
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-2 gap-3">
            <button className="bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2">
              <Camera size={20} />
              <span>Health Check</span>
            </button>
            <button className="bg-white text-gray-900 p-4 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
              <Heart size={20} className="text-red-500" />
              <span>Add to Favorites</span>
            </button>
          </div>

          {/* Growth Timeline */}
          <div className="bg-white rounded-xl p-5 shadow-md mt-4">
            <h3 className="text-gray-900 mb-4">Growth Timeline</h3>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-lg">🌱</span>
                </div>
                <div>
                  <p className="text-sm text-gray-900">Tree Planted</p>
                  <p className="text-xs text-gray-500">{tree.plantedDate}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Droplets size={18} className="text-blue-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-900">First Watering</p>
                  <p className="text-xs text-gray-500">Day 1</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Camera size={18} className="text-purple-600" />
                </div>
                <div>
                  <p className="text-sm text-gray-900">Health Check</p>
                  <p className="text-xs text-gray-500">Day 3</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl text-gray-900 mb-2">My Trees 🌳</h1>
        <p className="text-gray-600">Manage and track your planted trees</p>
      </div>

      {/* Search and Filter */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <Search size={20} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search trees..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button className="p-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-50">
          <Filter size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-xl transition-colors ${
            filter === 'all'
              ? 'bg-green-600 text-white'
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
        >
          All ({trees.length})
        </button>
        <button
          onClick={() => setFilter('healthy')}
          className={`px-4 py-2 rounded-xl transition-colors ${
            filter === 'healthy'
              ? 'bg-green-600 text-white'
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
        >
          Healthy ({trees.filter((t) => t.health === 'healthy').length})
        </button>
        <button
          onClick={() => setFilter('needs-care')}
          className={`px-4 py-2 rounded-xl transition-colors ${
            filter === 'needs-care'
              ? 'bg-green-600 text-white'
              : 'bg-white text-gray-700 border border-gray-300'
          }`}
        >
          Needs Care ({trees.filter((t) => t.health === 'needs-care').length})
        </button>
      </div>

      {/* Trees Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filteredTrees.map((tree) => (
          <div
            key={tree.id}
            onClick={() => setSelectedTree(tree.id)}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden group"
          >
            {/* Tree Image/Icon */}
            <div className="h-40 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center group-hover:scale-105 transition-transform">
              <span className="text-6xl">{tree.image}</span>
            </div>

            <div className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h3 className="text-lg text-gray-900 mb-1">{tree.name}</h3>
                  <p className="text-sm text-gray-600">{tree.species}</p>
                </div>
                <button className="text-gray-400 hover:text-red-500">
                  <Heart size={20} />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <MapPin size={14} className="text-gray-500" />
                <span className="text-xs text-gray-600">{tree.location}</span>
              </div>

              {/* Health Status */}
              <div className="mb-3">
                <div className="flex justify-between text-xs mb-1">
                  <span className="text-gray-600">Health</span>
                  <span
                    className={
                      tree.health === 'healthy' ? 'text-green-600' : 'text-yellow-600'
                    }
                  >
                    {tree.healthScore}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      tree.health === 'healthy' ? 'bg-green-500' : 'bg-yellow-500'
                    }`}
                    style={{ width: `${tree.healthScore}%` }}
                  ></div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-blue-50 p-2 rounded-lg">
                  <p className="text-gray-600">Age</p>
                  <p className="text-gray-900">{tree.daysOld} days</p>
                </div>
                <div className="bg-green-50 p-2 rounded-lg">
                  <p className="text-gray-600">CO₂</p>
                  <p className="text-gray-900">{tree.co2Absorbed} kg</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}