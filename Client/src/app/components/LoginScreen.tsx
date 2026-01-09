import { useState } from 'react';
import { Sprout } from 'lucide-react';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [isSignup, setIsSignup] = useState(false);
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');
  const [showOtp, setShowOtp] = useState(false);

  const handleSendOtp = () => {
    if (mobile.length >= 10) {
      setShowOtp(true);
    }
  };

  const handleVerifyOtp = () => {
    if (otp.length >= 4) {
      onLogin();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex flex-col items-center justify-center p-6">
      {/* Logo */}
      <div className="mb-8 text-center">
        <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <Sprout size={40} className="text-white" />
        </div>
        <h1 className="text-3xl text-gray-900 mb-2">Soil Quality</h1>
        <p className="text-gray-600">Smart farming made simple</p>
      </div>

      {/* Auth Form */}
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl text-gray-900 mb-6">
          {isSignup ? 'Create Account' : 'Welcome Back'}
        </h2>

        {!showOtp ? (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Mobile Number</label>
              <input
                type="tel"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                placeholder="Enter 10-digit mobile number"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <button
              onClick={handleSendOtp}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors mb-4"
            >
              Send OTP
            </button>
          </>
        ) : (
          <>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Enter OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter 6-digit OTP"
                maxLength={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <p className="text-sm text-gray-500 mt-2">OTP sent to {mobile}</p>
            </div>

            <button
              onClick={handleVerifyOtp}
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors mb-4"
            >
              Verify & Continue
            </button>

            <button
              onClick={() => setShowOtp(false)}
              className="w-full text-green-600 py-2"
            >
              Change Number
            </button>
          </>
        )}

        <div className="text-center mt-6">
          <button
            onClick={() => setIsSignup(!isSignup)}
            className="text-green-600"
          >
            {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
          </button>
        </div>
      </div>

      {/* Quick Demo Button */}
      <button
        onClick={onLogin}
        className="mt-6 text-gray-500 underline"
      >
        Continue as Demo User
      </button>
    </div>
  );
}
