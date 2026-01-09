import { useState } from 'react';
import { Camera, RotateCcw, Upload, Sparkles, CheckCircle2, Sprout, Package } from 'lucide-react';
import { CropRecommendations } from './CropRecommendations';
import { FertilizerRecommendations } from './FertilizerRecommendations';

type Step = 'camera' | 'analyzing' | 'results';

export function CaptureModule() {
  const [step, setStep] = useState<Step>('camera');
  const [showRecommendations, setShowRecommendations] = useState<'crop' | 'fertilizer' | null>(null);

  const handleCapture = () => {
    setStep('analyzing');
    // Simulate AI analysis
    setTimeout(() => {
      setStep('results');
    }, 2000);
  };

  const handleRetake = () => {
    setStep('camera');
    setShowRecommendations(null);
  };

  if (showRecommendations === 'crop') {
    return <CropRecommendations onBack={() => setShowRecommendations(null)} />;
  }

  if (showRecommendations === 'fertilizer') {
    return <FertilizerRecommendations onBack={() => setShowRecommendations(null)} />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Camera View */}
      {step === 'camera' && (
        <div className="relative h-screen">
          {/* Mock Camera Viewfinder */}
          <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900">
            <div className="flex items-center justify-center h-full">
              <div className="text-center text-white">
                <Camera size={64} className="mx-auto mb-4 opacity-50" />
                <p className="text-lg mb-2">Point camera at soil sample</p>
                <p className="text-sm text-gray-400">Ensure good lighting for best results</p>
              </div>
            </div>
          </div>

          {/* Camera Frame Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="border-2 border-white border-dashed rounded-lg w-72 h-72 opacity-50"></div>
          </div>

          {/* Header */}
          <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/50 to-transparent">
            <h1 className="text-white text-xl">Soil Image Capture</h1>
          </div>

          {/* Bottom Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/70 to-transparent">
            <div className="flex items-center justify-center gap-8">
              <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white">
                <RotateCcw size={24} />
              </button>
              
              <button
                onClick={handleCapture}
                className="w-20 h-20 bg-white rounded-full border-4 border-green-500 hover:scale-105 transition-transform"
              >
              </button>
              
              <button className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white">
                <Upload size={24} />
              </button>
            </div>
            <p className="text-center text-white text-sm mt-4">Tap to capture</p>
          </div>
        </div>
      )}

      {/* Analyzing State */}
      {step === 'analyzing' && (
        <div className="h-screen flex items-center justify-center">
          <div className="text-center text-white">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
              <Sparkles size={40} />
            </div>
            <h2 className="text-2xl mb-2">Analyzing Soil...</h2>
            <p className="text-gray-400">AI processing in progress</p>
            <div className="mt-6 flex justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
        </div>
      )}

      {/* AI Analysis Results */}
      {step === 'results' && (
        <div className="min-h-screen bg-gray-50 pb-20">
          <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-6 rounded-b-3xl">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle2 size={32} />
              <h1 className="text-2xl">Analysis Complete</h1>
            </div>
            <p className="text-green-100">AI confidence: 94%</p>
          </div>

          <div className="p-4 space-y-4">
            {/* Soil Type */}
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <h3 className="text-gray-900 mb-3">Soil Type</h3>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-2xl text-gray-900">Loamy Soil</p>
                  <p className="text-sm text-gray-600 mt-1">Ideal for most crops</p>
                </div>
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🌱</span>
                </div>
              </div>
            </div>

            {/* Nutrient Analysis */}
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <h3 className="text-gray-900 mb-3">Nutrient Levels</h3>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Nitrogen (N)</span>
                    <span className="text-green-600">80 mg/kg - Good</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '80%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Phosphorus (P)</span>
                    <span className="text-yellow-600">60 mg/kg - Moderate</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">Potassium (K)</span>
                    <span className="text-green-600">70 mg/kg - Good</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Soil Fertility Score */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-blue-100 text-sm">Soil Fertility Score</p>
                  <h2 className="text-4xl mt-1">8.2/10</h2>
                  <p className="text-blue-100 text-sm mt-2">Excellent condition</p>
                </div>
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <Sparkles size={36} />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <button
                onClick={() => setShowRecommendations('crop')}
                className="bg-green-600 text-white p-4 rounded-xl hover:bg-green-700 transition-colors flex flex-col items-center gap-2"
              >
                <Sprout size={24} />
                <span>View Crop Suggestions</span>
              </button>

              <button
                onClick={() => setShowRecommendations('fertilizer')}
                className="bg-amber-600 text-white p-4 rounded-xl hover:bg-amber-700 transition-colors flex flex-col items-center gap-2"
              >
                <Package size={24} />
                <span>Fertilizer Guide</span>
              </button>
            </div>

            {/* Retake Button */}
            <button
              onClick={handleRetake}
              className="w-full bg-white text-gray-900 p-4 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors"
            >
              Retake Image
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
