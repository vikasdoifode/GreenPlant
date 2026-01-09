import { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, Phone, Mail, MessageCircle, FileText } from 'lucide-react';

interface HelpScreenProps {
  onBack: () => void;
}

const faqs = [
  {
    question: 'How do I capture a soil image?',
    answer: 'Go to the Capture tab, point your camera at a soil sample, and tap the capture button. Make sure you have good lighting for best results.',
  },
  {
    question: 'What do the soil health scores mean?',
    answer: 'Scores above 80 indicate excellent soil health, 60-80 is good, 40-60 needs improvement, and below 40 requires immediate attention.',
  },
  {
    question: 'How often should I scan my soil?',
    answer: 'We recommend scanning once a week during the growing season and once a month during off-season for best monitoring.',
  },
  {
    question: 'Are the crop recommendations accurate?',
    answer: 'Our AI analyzes your soil data and provides recommendations with 90%+ accuracy. However, always consider local climate and market conditions.',
  },
  {
    question: 'How do I sync my data to the cloud?',
    answer: 'Data syncs automatically when you have an internet connection. You can also manually sync from your profile settings.',
  },
];

export function HelpScreen({ onBack }: HelpScreenProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-6 rounded-b-3xl">
        <button onClick={onBack} className="mb-4 flex items-center gap-2 text-blue-100 hover:text-white">
          <ArrowLeft size={20} />
          <span>Back</span>
        </button>
        <h1 className="text-2xl">Help & Support</h1>
        <p className="text-blue-100 text-sm mt-1">We're here to help you</p>
      </div>

      <div className="p-4 space-y-4">
        {/* Quick Actions */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <h3 className="text-gray-900 mb-3">Contact Support</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center gap-3 p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
              <Phone size={20} className="text-green-600" />
              <div className="text-left">
                <p className="text-sm text-gray-900">Call Us</p>
                <p className="text-xs text-gray-600">1800-SOIL-HELP</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
              <Mail size={20} className="text-blue-600" />
              <div className="text-left">
                <p className="text-sm text-gray-900">Email Support</p>
                <p className="text-xs text-gray-600">support@soilquality.app</p>
              </div>
            </button>

            <button className="w-full flex items-center gap-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
              <MessageCircle size={20} className="text-purple-600" />
              <div className="text-left">
                <p className="text-sm text-gray-900">Live Chat</p>
                <p className="text-xs text-gray-600">Available 9 AM - 6 PM</p>
              </div>
            </button>
          </div>
        </div>

        {/* FAQs */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <h3 className="text-gray-900 mb-3">Frequently Asked Questions</h3>
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 last:border-0">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between py-3 text-left"
                >
                  <span className="text-gray-900">{faq.question}</span>
                  {expandedFaq === index ? (
                    <ChevronUp size={20} className="text-gray-500" />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </button>
                {expandedFaq === index && (
                  <div className="pb-3 text-sm text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* How-to Guides */}
        <div className="bg-white rounded-xl p-4 border border-gray-200">
          <h3 className="text-gray-900 mb-3">How-to Guides</h3>
          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-gray-600" />
                <span className="text-sm text-gray-900">Getting Started Guide</span>
              </div>
              <ChevronDown size={18} className="text-gray-400 rotate-[-90deg]" />
            </button>

            <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-gray-600" />
                <span className="text-sm text-gray-900">Understanding Soil Reports</span>
              </div>
              <ChevronDown size={18} className="text-gray-400 rotate-[-90deg]" />
            </button>

            <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-gray-600" />
                <span className="text-sm text-gray-900">Best Practices for Soil Care</span>
              </div>
              <ChevronDown size={18} className="text-gray-400 rotate-[-90deg]" />
            </button>

            <button className="w-full flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-gray-600" />
                <span className="text-sm text-gray-900">Troubleshooting Common Issues</span>
              </div>
              <ChevronDown size={18} className="text-gray-400 rotate-[-90deg]" />
            </button>
          </div>
        </div>

        {/* Feedback */}
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-4 text-white">
          <h3 className="mb-2">Share Your Feedback</h3>
          <p className="text-green-100 text-sm mb-4">
            Help us improve by sharing your experience
          </p>
          <button className="w-full bg-white text-green-600 py-2 rounded-lg hover:bg-green-50 transition-colors">
            Submit Feedback
          </button>
        </div>
      </div>
    </div>
  );
}
