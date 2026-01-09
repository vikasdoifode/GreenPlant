import { useState } from 'react';
import { 
  User, MapPin, Maximize2, Wheat, Edit, Settings, HelpCircle, 
  Shield, LogOut, ChevronRight, Cloud, BarChart3, Bell, Globe 
} from 'lucide-react';
import { SettingsScreen } from './SettingsScreen';
import { HelpScreen } from './HelpScreen';
import { AdminDashboard } from './AdminDashboard';

type View = 'profile' | 'settings' | 'help' | 'admin';

export function ProfileModule() {
  const [view, setView] = useState<View>('profile');
  const [isEditing, setIsEditing] = useState(false);

  if (view === 'settings') {
    return <SettingsScreen onBack={() => setView('profile')} />;
  }

  if (view === 'help') {
    return <HelpScreen onBack={() => setView('profile')} />;
  }

  if (view === 'admin') {
    return <AdminDashboard onBack={() => setView('profile')} />;
  }

  return (
    <div className="pb-20">
      {/* Profile Header */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 rounded-b-3xl">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
              <User size={40} />
            </div>
            <div>
              <h1 className="text-2xl">Rajesh Kumar</h1>
              <p className="text-green-100 text-sm">Farmer ID: FK2024001</p>
            </div>
          </div>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
          >
            <Edit size={20} />
          </button>
        </div>
      </div>

      <div className="p-4">
        {/* Farm Information */}
        <div className="bg-white rounded-xl p-4 border border-gray-200 mb-4">
          <h3 className="text-gray-900 mb-3">Farm Information</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <MapPin size={18} className="text-gray-500" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-gray-900">Pune, Maharashtra</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Maximize2 size={18} className="text-gray-500" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Farm Size</p>
                <p className="text-gray-900">5 Acres</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Wheat size={18} className="text-gray-500" />
              <div className="flex-1">
                <p className="text-sm text-gray-500">Preferred Crops</p>
                <p className="text-gray-900">Rice, Wheat, Cotton</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="bg-green-50 border border-green-200 rounded-xl p-3 text-center">
            <p className="text-2xl text-green-900">5</p>
            <p className="text-xs text-green-700 mt-1">Total Scans</p>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
            <p className="text-2xl text-blue-900">85</p>
            <p className="text-xs text-blue-700 mt-1">Health Score</p>
          </div>
          <div className="bg-purple-50 border border-purple-200 rounded-xl p-3 text-center">
            <p className="text-2xl text-purple-900">12</p>
            <p className="text-xs text-purple-700 mt-1">Days Active</p>
          </div>
        </div>

        {/* Menu Options */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden mb-4">
          <button
            onClick={() => setView('admin')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-200"
          >
            <div className="flex items-center gap-3">
              <BarChart3 size={20} className="text-gray-600" />
              <span className="text-gray-900">Admin Analytics</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <button
            onClick={() => setView('settings')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-200"
          >
            <div className="flex items-center gap-3">
              <Settings size={20} className="text-gray-600" />
              <span className="text-gray-900">Settings</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <button
            onClick={() => setView('help')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors border-b border-gray-200"
          >
            <div className="flex items-center gap-3">
              <HelpCircle size={20} className="text-gray-600" />
              <span className="text-gray-900">Help & Support</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors">
            <div className="flex items-center gap-3">
              <Shield size={20} className="text-gray-600" />
              <span className="text-gray-900">Privacy & Security</span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </button>
        </div>

        {/* Cloud Sync Status */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Cloud size={20} className="text-blue-600" />
              <div>
                <p className="text-sm text-blue-900">Cloud Sync</p>
                <p className="text-xs text-blue-700">Last synced: 2 mins ago</p>
              </div>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          </div>
        </div>

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-2 bg-red-50 text-red-600 py-3 rounded-xl hover:bg-red-100 transition-colors">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
