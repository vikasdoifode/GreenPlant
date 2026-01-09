import { useState } from 'react';
import { Camera, MapPin, Upload, CheckCircle2, TreePine, Calendar } from 'lucide-react';

const treeSpecies = [
  { name: 'Neem', icon: '🌿', category: 'Medicinal', co2PerYear: 20 },
  { name: 'Mango', icon: '🥭', category: 'Fruit', co2PerYear: 28 },
  { name: 'Banyan', icon: '🌳', category: 'Large', co2PerYear: 50 },
  { name: 'Peepal', icon: '🍃', category: 'Sacred', co2PerYear: 45 },
  { name: 'Bamboo', icon: '🎋', category: 'Fast Growing', co2PerYear: 35 },
  { name: 'Coconut', icon: '🌴', category: 'Coastal', co2PerYear: 30 },
];

export function PlantTree() {
  const [step, setStep] = useState<'details' | 'photo' | 'location' | 'success'>('details');
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [treeName, setTreeName] = useState('');
  const [location, setLocation] = useState('');

  if (step === 'success') {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={48} className="text-green-600" />
          </div>
          <h1 className="text-3xl text-gray-900 mb-3">Tree Planted Successfully! 🎉</h1>
          <p className="text-gray-600 mb-6">
            Your {selectedSpecies} tree has been added to your forest. Keep nurturing it!
          </p>
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
            <p className="text-sm text-gray-700 mb-2">Estimated Impact (Per Year)</p>
            <p className="text-3xl text-green-600 mb-1">
              {treeSpecies.find((s) => s.name === selectedSpecies)?.co2PerYear || 0} kg
            </p>
            <p className="text-sm text-gray-600">CO₂ Absorbed</p>
          </div>
          <div className="space-y-3">
            <button
              onClick={() => {
                setStep('details');
                setSelectedSpecies('');
                setTreeName('');
                setLocation('');
              }}
              className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors"
            >
              Plant Another Tree
            </button>
            <button className="w-full bg-white text-gray-900 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors">
              View My Trees
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'location') {
    return (
      <div className="p-4 md:p-6 max-w-2xl mx-auto pb-20">
        <h1 className="text-3xl text-gray-900 mb-2">Add Location 📍</h1>
        <p className="text-gray-600 mb-6">Tag where you planted your tree</p>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Location Address</label>
            <div className="relative">
              <MapPin size={20} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter city or area"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 mb-4">
            <MapPin size={20} />
            <span>Use Current Location</span>
          </button>

          {/* Mock Map */}
          <div className="w-full h-64 bg-gray-200 rounded-xl flex items-center justify-center mb-4">
            <div className="text-center">
              <MapPin size={48} className="text-gray-400 mx-auto mb-2" />
              <p className="text-gray-600">Map will appear here</p>
            </div>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setStep('photo')}
            className="flex-1 bg-white text-gray-900 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            onClick={() => setStep('success')}
            className="flex-1 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors"
          >
            Complete
          </button>
        </div>
      </div>
    );
  }

  if (step === 'photo') {
    return (
      <div className="p-4 md:p-6 max-w-2xl mx-auto pb-20">
        <h1 className="text-3xl text-gray-900 mb-2">Upload Tree Photo 📸</h1>
        <p className="text-gray-600 mb-6">Help us verify your plantation</p>

        <div className="bg-white rounded-2xl shadow-md p-6 mb-4">
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center mb-4 hover:border-green-500 transition-colors cursor-pointer">
            <Camera size={48} className="text-gray-400 mx-auto mb-4" />
            <p className="text-gray-700 mb-2">Click to take a photo or upload</p>
            <p className="text-sm text-gray-500">AI will verify the tree sapling</p>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
            <p className="text-sm text-blue-900 mb-2">📷 Photo Tips:</p>
            <ul className="text-sm text-blue-800 space-y-1 list-disc list-inside">
              <li>Ensure good lighting</li>
              <li>Show the full sapling/tree</li>
              <li>Include surroundings for verification</li>
            </ul>
          </div>
        </div>

        <div className="flex gap-3">
          <button
            onClick={() => setStep('details')}
            className="flex-1 bg-white text-gray-900 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Back
          </button>
          <button
            onClick={() => setStep('location')}
            className="flex-1 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors"
          >
            Next
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl text-gray-900 mb-2">Plant a New Tree 🌱</h1>
      <p className="text-gray-600 mb-6">Start your green journey today!</p>

      <div className="bg-white rounded-2xl shadow-md p-6 mb-4">
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Tree Name (Optional)</label>
          <input
            type="text"
            value={treeName}
            onChange={(e) => setTreeName(e.target.value)}
            placeholder="Give your tree a name"
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-gray-700 mb-3">Select Tree Species</label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {treeSpecies.map((species) => (
              <button
                key={species.name}
                onClick={() => setSelectedSpecies(species.name)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedSpecies === species.name
                    ? 'border-green-600 bg-green-50'
                    : 'border-gray-200 bg-white hover:border-green-300'
                }`}
              >
                <div className="text-4xl mb-2">{species.icon}</div>
                <p className="text-sm text-gray-900 mb-1">{species.name}</p>
                <p className="text-xs text-gray-600">{species.category}</p>
              </button>
            ))}
          </div>
        </div>

        {selectedSpecies && (
          <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
            <p className="text-sm text-green-900 mb-2">
              🌍 Impact: This tree will absorb approximately{' '}
              <strong>
                {treeSpecies.find((s) => s.name === selectedSpecies)?.co2PerYear} kg CO₂
              </strong>{' '}
              per year when fully grown!
            </p>
          </div>
        )}
      </div>

      <button
        onClick={() => setStep('photo')}
        disabled={!selectedSpecies}
        className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed"
      >
        Next: Upload Photo
      </button>
    </div>
  );
}