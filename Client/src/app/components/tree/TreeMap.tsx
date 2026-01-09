import { MapPin, Filter, Search, Globe } from 'lucide-react';

const mapTrees = [
  { id: 1, name: 'Neem #1', lat: 19.076, lng: 72.877, city: 'Mumbai', health: 'healthy' },
  { id: 2, name: 'Mango #1', lat: 18.52, lng: 73.856, city: 'Pune', health: 'healthy' },
  { id: 3, name: 'Banyan', lat: 28.704, lng: 77.102, city: 'Delhi', health: 'needs-care' },
];

export function TreeMap() {
  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto pb-20">
      <h1 className="text-3xl text-gray-900 mb-2">Global Green Map 🗺️</h1>
      <p className="text-gray-600 mb-6">Explore trees planted worldwide</p>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white rounded-xl p-4 shadow-md text-center">
          <Globe size={24} className="text-green-600 mx-auto mb-2" />
          <p className="text-2xl text-gray-900">1.2M</p>
          <p className="text-xs text-gray-600">Total Trees</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md text-center">
          <MapPin size={24} className="text-blue-600 mx-auto mb-2" />
          <p className="text-2xl text-gray-900">150+</p>
          <p className="text-xs text-gray-600">Countries</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-md text-center">
          <Filter size={24} className="text-purple-600 mx-auto mb-2" />
          <p className="text-2xl text-gray-900">500+</p>
          <p className="text-xs text-gray-600">Species</p>
        </div>
      </div>

      {/* Search Bar */}
      <div className="flex gap-3 mb-6">
        <div className="flex-1 relative">
          <Search size={20} className="absolute left-3 top-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search location, tree species..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button className="p-3 bg-white border border-gray-300 rounded-xl hover:bg-gray-50">
          <Filter size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Map Container */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-6">
        <div className="relative w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
          <div className="text-center">
            <MapPin size={64} className="text-green-600 mx-auto mb-4" />
            <p className="text-gray-700 mb-2">Interactive Map</p>
            <p className="text-sm text-gray-500">Map integration would appear here</p>
            <p className="text-xs text-gray-400 mt-4">
              (In production: Integrate with Google Maps / OpenStreetMap)
            </p>
          </div>

          {/* Mock Markers */}
          <div className="absolute top-20 left-20 animate-bounce">
            <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
          </div>
          <div className="absolute top-40 right-32 animate-bounce" style={{ animationDelay: '0.1s' }}>
            <div className="w-8 h-8 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
          </div>
          <div className="absolute bottom-28 left-40 animate-bounce" style={{ animationDelay: '0.2s' }}>
            <div className="w-8 h-8 bg-yellow-500 rounded-full border-4 border-white shadow-lg"></div>
          </div>
        </div>
      </div>

      {/* Nearby Trees */}
      <div className="mb-6">
        <h2 className="text-xl text-gray-900 mb-4">Your Trees</h2>
        <div className="space-y-3">
          {mapTrees.map((tree) => (
            <div key={tree.id} className="bg-white rounded-xl p-4 shadow-md flex items-center gap-4">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  tree.health === 'healthy' ? 'bg-green-100' : 'bg-yellow-100'
                }`}
              >
                <MapPin size={24} className={tree.health === 'healthy' ? 'text-green-600' : 'text-yellow-600'} />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-900">{tree.name}</h3>
                <p className="text-sm text-gray-600">{tree.city}</p>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm">
                View on Map
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Global Impact */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-6 text-white">
        <h3 className="text-xl mb-4">🌍 Global Impact Today</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-green-100 text-sm">Trees Planted</p>
            <p className="text-3xl">+ 1,247</p>
          </div>
          <div>
            <p className="text-green-100 text-sm">CO₂ Offset</p>
            <p className="text-3xl">18.5 tons</p>
          </div>
        </div>
      </div>
    </div>
  );
}
