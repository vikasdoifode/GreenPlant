import { ArrowLeft, Globe, Bell, Gauge, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

interface SettingsScreenProps {
  onBack: () => void;
}

export function SettingsScreen({ onBack }: SettingsScreenProps) {
  const [language, setLanguage] = useState('english');
  const [notifications, setNotifications] = useState(true);
  const [criticalAlerts, setCriticalAlerts] = useState(true);
  const [units, setUnits] = useState('metric');
  const [theme, setTheme] = useState('light');

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-700 to-gray-800 text-white p-6 rounded-b-3xl">
        <button onClick={onBack} className="mb-4 flex items-center gap-2 text-gray-300 hover:text-white">
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <h1 className="text-2xl">Settings</h1>
        <p className="text-gray-300 text-sm mt-1">Customize your app experience</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Language */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <Globe size={20} className="text-gray-600" />
            <h3 className="text-gray-900">Language</h3>
          </div>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="english">English</option>
            <option value="hindi">हिन्दी (Hindi)</option>
            <option value="marathi">मराठी (Marathi)</option>
            <option value="tamil">தமிழ் (Tamil)</option>
            <option value="telugu">తెలుగు (Telugu)</option>
          </select>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <Bell size={20} className="text-gray-600" />
            <h3 className="text-gray-900">Notifications</h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-900">All Notifications</p>
                <p className="text-sm text-gray-600">Receive all app notifications</p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  notifications ? 'bg-green-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    notifications ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                ></div>
              </button>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-gray-200">
              <div>
                <p className="text-gray-900">Critical Alerts</p>
                <p className="text-sm text-gray-600">Important soil conditions</p>
              </div>
              <button
                onClick={() => setCriticalAlerts(!criticalAlerts)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  criticalAlerts ? 'bg-green-600' : 'bg-gray-300'
                }`}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transition-transform ${
                    criticalAlerts ? 'translate-x-6' : 'translate-x-0.5'
                  }`}
                ></div>
              </button>
            </div>
          </div>
        </div>

        {/* Units */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <Gauge size={20} className="text-gray-600" />
            <h3 className="text-gray-900">Measurement Units</h3>
          </div>
          <select
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="metric">Metric (kg, cm, °C)</option>
            <option value="imperial">Imperial (lbs, in, °F)</option>
          </select>
        </div>

        {/* Theme */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            {theme === 'light' ? (
              <Sun size={20} className="text-gray-600" />
            ) : (
              <Moon size={20} className="text-gray-600" />
            )}
            <h3 className="text-gray-900">Theme</h3>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setTheme('light')}
              className={`p-3 rounded-lg border-2 transition-all ${
                theme === 'light'
                  ? 'border-green-600 bg-green-50'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <Sun size={24} className={theme === 'light' ? 'text-green-600' : 'text-gray-600'} />
              <p className="text-sm mt-1 text-gray-900">Light</p>
            </button>
            <button
              onClick={() => setTheme('dark')}
              className={`p-3 rounded-lg border-2 transition-all ${
                theme === 'dark'
                  ? 'border-green-600 bg-green-50'
                  : 'border-gray-200 bg-white'
              }`}
            >
              <Moon size={24} className={theme === 'dark' ? 'text-green-600' : 'text-gray-600'} />
              <p className="text-sm mt-1 text-gray-900">Dark</p>
            </button>
          </div>
        </div>

        {/* App Version */}
        <div className="bg-gray-100 rounded-xl p-4 text-center">
          <p className="text-sm text-gray-600">App Version</p>
          <p className="text-gray-900 mt-1">v1.0.0 (Build 001)</p>
        </div>
      </div>
    </div>
  );
}
