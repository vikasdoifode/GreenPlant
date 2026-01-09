import { useState } from 'react';
import { TreeDashboard } from './components/tree/TreeDashboard';
import { MyTrees } from './components/tree/MyTrees';
import { PlantTree } from './components/tree/PlantTree';
import { HealthCheck } from './components/tree/HealthCheck';
import { EcoImpact } from './components/tree/EcoImpact';
import { Challenges } from './components/tree/Challenges';
import { TreeMap } from './components/tree/TreeMap';
import { Biodiversity } from './components/tree/Biodiversity';
import { KnowledgeHub } from './components/tree/KnowledgeHub';
import { Marketplace } from './components/tree/Marketplace';
import { UserProfile } from './components/tree/UserProfile';
import { TreeLoginScreen } from './components/tree/TreeLoginScreen';
import { 
  LayoutDashboard, TreePine, Plus, Camera, TrendingUp, 
  Trophy, Map, Leaf, BookOpen, ShoppingBag, User, Bell, Search, Menu, X 
} from 'lucide-react';

type Tab = 'dashboard' | 'mytrees' | 'plant' | 'health' | 'impact' | 'challenges' | 'map' | 'biodiversity' | 'knowledge' | 'marketplace' | 'profile';

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (!isAuthenticated) {
    return <TreeLoginScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Sidebar Navigation */}
      <aside className={`${isSidebarOpen ? 'w-64' : 'w-0'} bg-white border-r border-gray-200 flex flex-col fixed h-screen transition-all duration-300 ease-in-out overflow-hidden`}>
        {/* Logo */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
              <TreePine size={24} className="text-white" />
            </div>
            <div className="min-w-0">
              <h1 className="text-xl text-gray-900 whitespace-nowrap">GreenTracker</h1>
              <p className="text-xs text-gray-500 whitespace-nowrap">Plant. Nurture. Transform.</p>
            </div>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className="flex-1 overflow-y-auto p-4">
          <div className="space-y-1">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'dashboard'
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <LayoutDashboard size={20} className="flex-shrink-0" />
              <span className="whitespace-nowrap">Dashboard</span>
            </button>

            <button
              onClick={() => setActiveTab('mytrees')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'mytrees'
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <TreePine size={20} className="flex-shrink-0" />
              <span className="whitespace-nowrap">My Trees</span>
            </button>

            <button
              onClick={() => setActiveTab('plant')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'plant'
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Plus size={20} className="flex-shrink-0" />
              <span className="whitespace-nowrap">Plant New Tree</span>
            </button>

            <button
              onClick={() => setActiveTab('health')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'health'
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Camera size={20} className="flex-shrink-0" />
              <span className="whitespace-nowrap">Health Check</span>
            </button>

            <button
              onClick={() => setActiveTab('impact')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'impact'
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <TrendingUp size={20} className="flex-shrink-0" />
              <span className="whitespace-nowrap">Eco Impact</span>
            </button>

            <button
              onClick={() => setActiveTab('challenges')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'challenges'
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Trophy size={20} className="flex-shrink-0" />
              <span className="whitespace-nowrap">Challenges</span>
            </button>

            <button
              onClick={() => setActiveTab('map')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'map'
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Map size={20} className="flex-shrink-0" />
              <span className="whitespace-nowrap">Global Map</span>
            </button>

            <button
              onClick={() => setActiveTab('biodiversity')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'biodiversity'
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <Leaf size={20} className="flex-shrink-0" />
              <span className="whitespace-nowrap">Biodiversity</span>
            </button>

            <button
              onClick={() => setActiveTab('knowledge')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'knowledge'
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <BookOpen size={20} className="flex-shrink-0" />
              <span className="whitespace-nowrap">Knowledge Hub</span>
            </button>

            <button
              onClick={() => setActiveTab('marketplace')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'marketplace'
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <ShoppingBag size={20} className="flex-shrink-0" />
              <span className="whitespace-nowrap">Marketplace</span>
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                activeTab === 'profile'
                  ? 'bg-green-50 text-green-700'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              <User size={20} className="flex-shrink-0" />
              <span className="whitespace-nowrap">Profile</span>
            </button>
          </div>
        </nav>

        {/* User Info */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white flex-shrink-0">
              AJ
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-900 truncate">Alex Johnson</p>
              <p className="text-xs text-gray-500 whitespace-nowrap">850 eco-coins</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? 'ml-64' : 'ml-0'}`}>
        {/* Top Header */}
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="px-6 py-4 flex items-center justify-between gap-4">
            {/* Menu Toggle Button */}
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isSidebarOpen ? <X size={22} className="text-gray-700" /> : <Menu size={22} className="text-gray-700" />}
            </button>

            <div className="flex-1 max-w-xl">
              <div className="relative">
                <Search size={20} className="absolute left-3 top-2.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search trees, locations, articles..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell size={22} className="text-gray-700" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {activeTab === 'dashboard' && <TreeDashboard onNavigate={setActiveTab} />}
          {activeTab === 'mytrees' && <MyTrees />}
          {activeTab === 'plant' && <PlantTree />}
          {activeTab === 'health' && <HealthCheck />}
          {activeTab === 'impact' && <EcoImpact />}
          {activeTab === 'challenges' && <Challenges />}
          {activeTab === 'map' && <TreeMap />}
          {activeTab === 'biodiversity' && <Biodiversity />}
          {activeTab === 'knowledge' && <KnowledgeHub />}
          {activeTab === 'marketplace' && <Marketplace />}
          {activeTab === 'profile' && <UserProfile />}
        </main>
      </div>
    </div>
  );
}