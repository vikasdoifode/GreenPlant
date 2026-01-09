import { ArrowLeft, Star, Calendar, Sprout } from 'lucide-react';

interface CropRecommendationsProps {
  onBack: () => void;
}

const crops = [
  {
    name: 'Rice',
    suitability: 95,
    season: 'Kharif (June-Nov)',
    image: '🌾',
    reason: 'High moisture retention, optimal pH',
  },
  {
    name: 'Wheat',
    suitability: 88,
    season: 'Rabi (Nov-Apr)',
    image: '🌾',
    reason: 'Good nutrient balance, suitable temperature',
  },
  {
    name: 'Cotton',
    suitability: 82,
    season: 'Kharif (Apr-Oct)',
    image: '🌿',
    reason: 'Adequate drainage, good soil structure',
  },
  {
    name: 'Sugarcane',
    suitability: 78,
    season: 'Year-round',
    image: '🎋',
    reason: 'High moisture availability',
  },
  {
    name: 'Tomato',
    suitability: 85,
    season: 'Winter (Oct-Mar)',
    image: '🍅',
    reason: 'Rich in organic matter, good pH',
  },
  {
    name: 'Potato',
    suitability: 80,
    season: 'Winter (Oct-Jan)',
    image: '🥔',
    reason: 'Well-drained loamy soil, optimal temperature',
  },
];

export function CropRecommendations({ onBack }: CropRecommendationsProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 rounded-b-3xl">
        <button onClick={onBack} className="mb-4 flex items-center gap-2 text-green-100 hover:text-white">
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <div className="flex items-center gap-3">
          <Sprout size={32} />
          <div>
            <h1 className="text-2xl">Crop Recommendations</h1>
            <p className="text-green-100 text-sm mt-1">Based on your soil analysis</p>
          </div>
        </div>
      </div>

      {/* Crop Cards */}
      <div className="p-4 space-y-4">
        {crops.map((crop, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-4 border border-gray-200 hover:shadow-lg transition-shadow"
          >
            <div className="flex gap-4">
              {/* Crop Icon */}
              <div className="w-16 h-16 bg-green-50 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-3xl">{crop.image}</span>
              </div>

              {/* Crop Info */}
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg text-gray-900">{crop.name}</h3>
                  <div className="flex items-center gap-1 bg-green-50 px-2 py-1 rounded-lg">
                    <Star size={14} className="text-green-600 fill-green-600" />
                    <span className="text-sm text-green-700">{crop.suitability}%</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                  <Calendar size={14} />
                  <span>{crop.season}</span>
                </div>

                <p className="text-sm text-gray-600">{crop.reason}</p>

                {/* Suitability Bar */}
                <div className="mt-3">
                  <div className="w-full bg-gray-200 rounded-full h-1.5">
                    <div
                      className={`h-1.5 rounded-full ${
                        crop.suitability >= 85
                          ? 'bg-green-500'
                          : crop.suitability >= 70
                          ? 'bg-yellow-500'
                          : 'bg-orange-500'
                      }`}
                      style={{ width: `${crop.suitability}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Note */}
      <div className="p-4">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
          <p className="text-sm text-blue-900">
            💡 <strong>Note:</strong> These recommendations are based on current soil conditions. 
            Consider local climate, water availability, and market demand before planting.
          </p>
        </div>
      </div>
    </div>
  );
}
