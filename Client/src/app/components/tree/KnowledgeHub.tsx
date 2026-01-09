import { BookOpen, Video, FileText, HelpCircle, Search } from 'lucide-react';

const categories = [
  { name: 'Tree Care Basics', icon: '🌱', articles: 12 },
  { name: 'Native Species', icon: '🌳', articles: 25 },
  { name: 'Composting Guide', icon: '♻️', articles: 8 },
  { name: 'Water Harvesting', icon: '💧', articles: 10 },
  { name: 'Pest Management', icon: '🐛', articles: 15 },
  { name: 'Seasonal Care', icon: '🌦️', articles: 18 },
];

const articles = [
  {
    title: 'Best Trees for Your Climate Zone',
    category: 'Native Species',
    readTime: '5 min',
    views: '2.5k',
    thumbnail: '🗺️',
  },
  {
    title: 'DIY Kitchen Composting for Beginners',
    category: 'Composting',
    readTime: '7 min',
    views: '3.2k',
    thumbnail: '♻️',
  },
  {
    title: 'Rainwater Harvesting Setup Guide',
    category: 'Water Conservation',
    readTime: '10 min',
    views: '1.8k',
    thumbnail: '💧',
  },
];

const quizzes = [
  { title: '🌳 Tree Species Quiz', questions: 10, coins: 50 },
  { title: '♻️ Sustainability Challenge', questions: 15, coins: 75 },
  { title: '🌍 Climate Action Quiz', questions: 12, coins: 60 },
];

export function KnowledgeHub() {
  return (
    <div className="p-4 md:p-6 max-w-6xl mx-auto pb-20">
      <h1 className="text-3xl text-gray-900 mb-2">Knowledge Hub 📚</h1>
      <p className="text-gray-600 mb-6">Learn, grow, and become a nature expert!</p>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={20} className="absolute left-3 top-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search guides, articles, videos..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      {/* Categories */}
      <div className="mb-6">
        <h2 className="text-xl text-gray-900 mb-4">Browse by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all text-left border-2 border-transparent hover:border-green-500"
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <p className="text-gray-900 mb-1">{category.name}</p>
              <p className="text-xs text-gray-600">{category.articles} articles</p>
            </button>
          ))}
        </div>
      </div>

      {/* Featured Articles */}
      <div className="mb-6">
        <h2 className="text-xl text-gray-900 mb-4">Featured Articles</h2>
        <div className="space-y-4">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <div className="flex gap-4">
                <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0 text-4xl">
                  {article.thumbnail}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg text-gray-900 mb-1">{article.title}</h3>
                  <div className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded">{article.category}</span>
                    <span>📖 {article.readTime}</span>
                    <span>👁️ {article.views}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Quizzes */}
      <div className="mb-6">
        <h2 className="text-xl text-gray-900 mb-4">Test Your Knowledge</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {quizzes.map((quiz, index) => (
            <div key={index} className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-5 border border-purple-200">
              <h3 className="text-lg text-gray-900 mb-2">{quiz.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{quiz.questions} questions</p>
              <button className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
                <span>Start Quiz</span>
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded">+{quiz.coins} coins</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Video Tutorials */}
      <div className="mb-6">
        <h2 className="text-xl text-gray-900 mb-4">📹 Video Tutorials</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer">
            <div className="h-40 bg-gradient-to-br from-green-200 to-green-300 flex items-center justify-center">
              <Video size={48} className="text-green-700" />
            </div>
            <div className="p-4">
              <h3 className="text-gray-900 mb-1">How to Plant a Sapling</h3>
              <p className="text-sm text-gray-600">Step-by-step guide • 8:32</p>
            </div>
          </div>

          <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all cursor-pointer">
            <div className="h-40 bg-gradient-to-br from-blue-200 to-blue-300 flex items-center justify-center">
              <Video size={48} className="text-blue-700" />
            </div>
            <div className="p-4">
              <h3 className="text-gray-900 mb-1">Identifying Healthy vs Unhealthy Trees</h3>
              <p className="text-sm text-gray-600">Visual guide • 6:15</p>
            </div>
          </div>
        </div>
      </div>

      {/* Ask Community */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
            <HelpCircle size={24} />
          </div>
          <div>
            <h3 className="text-xl">Got Questions?</h3>
            <p className="text-blue-100 text-sm">Ask our community of 50k+ green enthusiasts</p>
          </div>
        </div>
        <button className="w-full bg-white text-blue-700 py-3 rounded-xl hover:bg-blue-50 transition-colors">
          Ask a Question
        </button>
      </div>
    </div>
  );
}
