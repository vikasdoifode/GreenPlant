import { ArrowLeft, Package, Clock, Leaf } from 'lucide-react';

interface FertilizerRecommendationsProps {
  onBack: () => void;
}

const fertilizers = [
  {
    name: 'Urea',
    type: 'Nitrogen',
    quantity: '50 kg per acre',
    timing: 'Apply in 2 splits: 25 kg at sowing, 25 kg after 30 days',
    organic: 'Compost (200 kg/acre)',
    color: 'blue',
  },
  {
    name: 'DAP (Di-Ammonium Phosphate)',
    type: 'Phosphorus',
    quantity: '40 kg per acre',
    timing: 'Apply as basal dose before sowing',
    organic: 'Bone meal (100 kg/acre)',
    color: 'purple',
  },
  {
    name: 'Muriate of Potash',
    type: 'Potassium',
    quantity: '30 kg per acre',
    timing: 'Apply in 2 splits: 15 kg at sowing, 15 kg at flowering',
    organic: 'Wood ash (150 kg/acre)',
    color: 'green',
  },
];

export function FertilizerRecommendations({ onBack }: FertilizerRecommendationsProps) {
  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-6 rounded-b-3xl">
        <button onClick={onBack} className="mb-4 flex items-center gap-2 text-amber-100 hover:text-white">
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <div className="flex items-center gap-3">
          <Package size={32} />
          <div>
            <h1 className="text-2xl">Fertilizer Guide</h1>
            <p className="text-amber-100 text-sm mt-1">Personalized recommendations</p>
          </div>
        </div>
      </div>

      {/* Current Status */}
      <div className="p-4">
        <div className="bg-white rounded-xl p-4 border border-gray-200 mb-4">
          <h3 className="text-gray-900 mb-3">Current Nutrient Status</h3>
          <div className="grid grid-cols-3 gap-3">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-blue-700">N</span>
              </div>
              <p className="text-xs text-gray-600">Nitrogen</p>
              <p className="text-sm text-green-600 mt-1">Good</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-purple-700">P</span>
              </div>
              <p className="text-xs text-gray-600">Phosphorus</p>
              <p className="text-sm text-yellow-600 mt-1">Moderate</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-green-700">K</span>
              </div>
              <p className="text-xs text-gray-600">Potassium</p>
              <p className="text-sm text-green-600 mt-1">Good</p>
            </div>
          </div>
        </div>

        {/* Fertilizer Cards */}
        <div className="space-y-4">
          {fertilizers.map((fertilizer, index) => (
            <div key={index} className="bg-white rounded-xl p-4 border border-gray-200">
              <div className="flex items-start gap-3 mb-3">
                <div className={`w-12 h-12 bg-${fertilizer.color}-100 rounded-xl flex items-center justify-center flex-shrink-0`}>
                  <Package size={24} className={`text-${fertilizer.color}-600`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg text-gray-900">{fertilizer.name}</h3>
                  <p className="text-sm text-gray-600">{fertilizer.type} source</p>
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Package size={16} className="text-gray-600" />
                  <span className="text-sm text-gray-700">Required Quantity</span>
                </div>
                <p className="text-gray-900 ml-6">{fertilizer.quantity}</p>
              </div>

              {/* Timing */}
              <div className="mb-3 p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-2 mb-1">
                  <Clock size={16} className="text-gray-600" />
                  <span className="text-sm text-gray-700">Application Timing</span>
                </div>
                <p className="text-gray-900 ml-6 text-sm">{fertilizer.timing}</p>
              </div>

              {/* Organic Alternative */}
              <div className="p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center gap-2 mb-1">
                  <Leaf size={16} className="text-green-600" />
                  <span className="text-sm text-green-700">Organic Alternative</span>
                </div>
                <p className="text-green-900 ml-6">{fertilizer.organic}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Application Tips */}
        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4">
          <h3 className="text-amber-900 mb-3 flex items-center gap-2">
            <span>💡</span>
            <span>Application Tips</span>
          </h3>
          <ul className="space-y-2 text-sm text-amber-900">
            <li className="flex gap-2">
              <span>•</span>
              <span>Apply fertilizers in the evening or early morning</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Ensure soil moisture before application</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Keep fertilizers away from plant stems</span>
            </li>
            <li className="flex gap-2">
              <span>•</span>
              <span>Water the field after fertilizer application</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
