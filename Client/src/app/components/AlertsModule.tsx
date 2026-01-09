import { AlertTriangle, CheckCircle2, Info, Droplets, Activity, Clock } from 'lucide-react';

const alerts = [
  {
    type: 'warning',
    title: 'Low Soil Moisture Detected',
    message: 'Soil moisture has dropped to 45%. Consider irrigation soon.',
    time: '2 hours ago',
    action: 'View Details',
  },
  {
    type: 'info',
    title: 'Fertilizer Application Due',
    message: 'Based on your schedule, it\'s time to apply nitrogen fertilizer.',
    time: '5 hours ago',
    action: 'View Guide',
  },
  {
    type: 'success',
    title: 'Soil Analysis Complete',
    message: 'Your recent soil scan results are now available.',
    time: '1 day ago',
    action: 'View Report',
  },
  {
    type: 'warning',
    title: 'pH Level Fluctuation',
    message: 'pH has changed from 6.5 to 6.2. Monitor closely.',
    time: '2 days ago',
    action: 'View Details',
  },
  {
    type: 'info',
    title: 'Weather Alert',
    message: 'Heavy rainfall expected in next 48 hours. Protect exposed soil.',
    time: '3 days ago',
    action: 'Dismiss',
  },
];

export function AlertsModule() {
  return (
    <div className="p-4 pb-20">
      {/* Header */}
      <div className="mb-6 mt-2">
        <h1 className="text-2xl text-gray-900">Alerts & Notifications</h1>
        <p className="text-gray-500 text-sm">Stay updated on soil conditions</p>
      </div>

      {/* Active Alerts Summary */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-center">
          <p className="text-2xl text-red-600">2</p>
          <p className="text-xs text-red-700 mt-1">Critical</p>
        </div>
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-3 text-center">
          <p className="text-2xl text-yellow-600">1</p>
          <p className="text-xs text-yellow-700 mt-1">Warning</p>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 text-center">
          <p className="text-2xl text-blue-600">2</p>
          <p className="text-xs text-blue-700 mt-1">Info</p>
        </div>
      </div>

      {/* Alerts List */}
      <div className="space-y-3">
        {alerts.map((alert, index) => (
          <div
            key={index}
            className={`rounded-xl p-4 border-l-4 ${
              alert.type === 'warning'
                ? 'bg-yellow-50 border-yellow-500'
                : alert.type === 'success'
                ? 'bg-green-50 border-green-500'
                : 'bg-blue-50 border-blue-500'
            }`}
          >
            <div className="flex items-start gap-3">
              {/* Icon */}
              <div className="flex-shrink-0 mt-1">
                {alert.type === 'warning' && <AlertTriangle size={20} className="text-yellow-600" />}
                {alert.type === 'success' && <CheckCircle2 size={20} className="text-green-600" />}
                {alert.type === 'info' && <Info size={20} className="text-blue-600" />}
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3
                  className={`mb-1 ${
                    alert.type === 'warning'
                      ? 'text-yellow-900'
                      : alert.type === 'success'
                      ? 'text-green-900'
                      : 'text-blue-900'
                  }`}
                >
                  {alert.title}
                </h3>
                <p
                  className={`text-sm mb-2 ${
                    alert.type === 'warning'
                      ? 'text-yellow-800'
                      : alert.type === 'success'
                      ? 'text-green-800'
                      : 'text-blue-800'
                  }`}
                >
                  {alert.message}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-gray-600">
                    <Clock size={12} />
                    <span>{alert.time}</span>
                  </div>
                  <button
                    className={`text-sm px-3 py-1 rounded-lg ${
                      alert.type === 'warning'
                        ? 'bg-yellow-200 text-yellow-800 hover:bg-yellow-300'
                        : alert.type === 'success'
                        ? 'bg-green-200 text-green-800 hover:bg-green-300'
                        : 'bg-blue-200 text-blue-800 hover:bg-blue-300'
                    }`}
                  >
                    {alert.action}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-6 bg-white rounded-xl p-4 border border-gray-200">
        <h3 className="text-gray-900 mb-3">Quick Actions</h3>
        <div className="space-y-2">
          <button className="w-full flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <Droplets size={20} className="text-blue-600" />
            <div className="text-left flex-1">
              <p className="text-sm text-gray-900">Check Moisture Level</p>
              <p className="text-xs text-gray-600">View real-time sensor data</p>
            </div>
          </button>

          <button className="w-full flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <Activity size={20} className="text-purple-600" />
            <div className="text-left flex-1">
              <p className="text-sm text-gray-900">Review pH Levels</p>
              <p className="text-xs text-gray-600">Monitor soil acidity</p>
            </div>
          </button>
        </div>
      </div>

      {/* Mark All as Read */}
      <button className="w-full mt-4 bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-colors">
        Mark All as Read
      </button>
    </div>
  );
}
