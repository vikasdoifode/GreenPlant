import { useState } from 'react';
import { TreePine, Mail, Lock, Sprout } from 'lucide-react';

interface TreeLoginScreenProps {
  onLogin: () => void;
}

export function TreeLoginScreen({ onLogin }: TreeLoginScreenProps) {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-400 via-green-500 to-green-600 flex flex-col items-center justify-center p-6">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-green-300 opacity-20 text-6xl">🌳</div>
        <div className="absolute top-40 right-20 text-green-300 opacity-20 text-5xl">🌱</div>
        <div className="absolute bottom-40 left-20 text-green-300 opacity-20 text-7xl">🌿</div>
        <div className="absolute bottom-20 right-10 text-green-300 opacity-20 text-6xl">🍃</div>
      </div>

      {/* Logo and Title */}
      <div className="mb-8 text-center relative z-10">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
          <TreePine size={48} className="text-green-600" />
        </div>
        <h1 className="text-4xl text-white mb-2">GreenTracker</h1>
        <p className="text-green-100 text-lg">Plant. Nurture. Transform.</p>
      </div>

      {/* Login/Signup Form */}
      <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8 relative z-10">
        <h2 className="text-2xl text-gray-900 mb-6 text-center">
          {isSignup ? 'Join the Green Revolution' : 'Welcome Back, Nature Hero!'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 mb-2 text-sm">Email</label>
            <div className="relative">
              <Mail size={20} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your.email@example.com"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 mb-2 text-sm">Password</label>
            <div className="relative">
              <Lock size={20} className="absolute left-3 top-3 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-600 to-green-700 text-white py-3 rounded-xl hover:from-green-700 hover:to-green-800 transition-all shadow-lg"
          >
            {isSignup ? 'Create Account' : 'Login'}
          </button>
        </form>

        <div className="text-center mt-6">
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-green-600 hover:text-green-700"
          >
            {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
          </button>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200">
          <button
            onClick={onLogin}
            className="w-full text-gray-600 hover:text-gray-800 text-sm"
          >
            Continue as Demo User →
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-8 w-full max-w-md relative z-10">
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center text-white">
          <p className="text-2xl mb-1">1.2M+</p>
          <p className="text-xs text-green-100">Trees Planted</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center text-white">
          <p className="text-2xl mb-1">50K+</p>
          <p className="text-xs text-green-100">Active Users</p>
        </div>
        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center text-white">
          <p className="text-2xl mb-1">85%</p>
          <p className="text-xs text-green-100">Survival Rate</p>
        </div>
      </div>
    </div>
  );
}
