import { useState } from 'react';
import { Camera, Upload, CheckCircle2, AlertTriangle, Sparkles } from 'lucide-react';

export function HealthCheck() {
  const [step, setStep] = useState<'upload' | 'analyzing' | 'results'>('upload');
  const [healthStatus, setHealthStatus] = useState<'healthy' | 'needs-care' | null>(null);

  const handleAnalyze = () => {
    setStep('analyzing');
    setTimeout(() => {
      setHealthStatus(Math.random() > 0.3 ? 'healthy' : 'needs-care');
      setStep('results');
    }, 2500);
  };

  if (step === 'results') {
    return (
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-6">
          <div
            className={`w-24 h-24 ${
              healthStatus === 'healthy' ? 'bg-green-100' : 'bg-yellow-100'
            } rounded-full flex items-center justify-center mx-auto mb-4`}
          >
            {healthStatus === 'healthy' ? (
              <CheckCircle2 size={48} className="text-green-600" />
            ) : (
              <AlertTriangle size={48} className="text-yellow-600" />
            )}
          </div>
          <h1 className="text-3xl text-gray-900 mb-2">
            {healthStatus === 'healthy' ? 'Tree is Healthy! 🎉' : 'Tree Needs Care ⚠️'}
          </h1>
          <p className="text-gray-600">AI Confidence: 94%</p>
        </div>

        {healthStatus === 'healthy' ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-6">
            <h3 className="text-green-900 mb-3">Analysis Results</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-green-800">Leaf Color:</span>
                <span className="text-green-600">✓ Healthy Green</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-800">Hydration:</span>
                <span className="text-green-600">✓ Adequate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-800">Growth:</span>
                <span className="text-green-600">✓ Normal</span>
              </div>
              <div className="flex justify-between">
                <span className="text-green-800">Pests/Disease:</span>
                <span className="text-green-600">✓ None Detected</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-6">
            <h3 className="text-yellow-900 mb-3">Issues Detected</h3>
            <div className="space-y-3">
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-gray-900 mb-1">⚠️ Yellowing Leaves</p>
                <p className="text-xs text-gray-600">Possible nitrogen deficiency</p>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <p className="text-sm text-gray-900 mb-1">💧 Dry Soil</p>
                <p className="text-xs text-gray-600">Increase watering frequency</p>
              </div>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl p-6 shadow-md mb-4">
          <h3 className="text-gray-900 mb-3">Recommendations</h3>
          <div className="space-y-2 text-sm text-gray-700">
            {healthStatus === 'healthy' ? (
              <>
                <p>• Continue current watering schedule</p>
                <p>• Ensure adequate sunlight (4-6 hours daily)</p>
                <p>• Monitor for any changes</p>
                <p>• Next check-up in 7 days</p>
              </>
            ) : (
              <>
                <p>• Water immediately and increase frequency to daily</p>
                <p>• Apply organic fertilizer rich in nitrogen</p>
                <p>• Check soil drainage</p>
                <p>• Recheck health in 3 days</p>
              </>
            )}
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => {
              setStep('upload');
              setHealthStatus(null);
            }}
            className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors"
          >
            Check Another Tree
          </button>
          <button className="w-full bg-white text-gray-900 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 transition-colors">
            Save Report
          </button>
        </div>
      </div>
    );
  }

  if (step === 'analyzing') {
    return (
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
            <Sparkles size={48} className="text-green-600" />
          </div>
          <h2 className="text-2xl text-gray-900 mb-2">Analyzing Tree Health...</h2>
          <p className="text-gray-600 mb-6">AI is examining your tree</p>
          <div className="flex justify-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-bounce"></div>
            <div
              className="w-3 h-3 bg-green-500 rounded-full animate-bounce"
              style={{ animationDelay: '0.1s' }}
            ></div>
            <div
              className="w-3 h-3 bg-green-500 rounded-full animate-bounce"
              style={{ animationDelay: '0.2s' }}
            ></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 max-w-2xl mx-auto pb-20">
      <h1 className="text-3xl text-gray-900 mb-2">AI Health Check 🔍</h1>
      <p className="text-gray-600 mb-6">Upload a photo to analyze your tree's health</p>

      <div className="bg-white rounded-2xl shadow-md p-6 mb-4">
        <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center mb-6 hover:border-green-500 transition-colors cursor-pointer">
          <Camera size={64} className="text-gray-400 mx-auto mb-4" />
          <p className="text-lg text-gray-700 mb-2">Take a Photo or Upload</p>
          <p className="text-sm text-gray-500">Supported: JPG, PNG (Max 10MB)</p>
        </div>

        <button
          onClick={handleAnalyze}
          className="w-full bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
        >
          <Sparkles size={20} />
          <span>Analyze with AI</span>
        </button>
      </div>

      <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6">
        <h3 className="text-blue-900 mb-3">What AI Checks:</h3>
        <div className="space-y-2 text-sm text-blue-800">
          <p>✓ Leaf color and condition</p>
          <p>✓ Signs of disease or pests</p>
          <p>✓ Hydration levels</p>
          <p>✓ Growth patterns</p>
          <p>✓ Overall health score</p>
        </div>
      </div>
    </div>
  );
}