import React, { useState } from 'react';
import { Lightbulb, Leaf, Star, ChevronRight, Filter, Search } from 'lucide-react';
import { ecoAlternatives } from '../data/mockData';
import { EcoAlternative } from '../types';

const EcoAlternatives: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'food', name: 'Food & Dining' },
    { id: 'transport', name: 'Transportation' },
    { id: 'shopping', name: 'Shopping' },
    { id: 'utilities', name: 'Utilities' }
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels' },
    { id: 'easy', name: 'Easy', color: 'text-green-600', bg: 'bg-green-100' },
    { id: 'medium', name: 'Medium', color: 'text-yellow-600', bg: 'bg-yellow-100' },
    { id: 'hard', name: 'Hard', color: 'text-red-600', bg: 'bg-red-100' }
  ];

  const filteredAlternatives = ecoAlternatives.filter(alt => {
    const categoryMatch = selectedCategory === 'all' || alt.category === selectedCategory;
    const difficultyMatch = selectedDifficulty === 'all' || alt.difficulty === selectedDifficulty;
    const searchMatch = alt.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       alt.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && difficultyMatch && searchMatch;
  });

  const getDifficultyConfig = (difficulty: EcoAlternative['difficulty']) => {
    const config = difficulties.find(d => d.id === difficulty);
    return config || { name: difficulty, color: 'text-gray-600', bg: 'bg-gray-100' };
  };

  const getImpactLevel = (savings: number) => {
    if (savings > 500) return { level: 'High Impact', color: 'text-green-700', bg: 'bg-green-100' };
    if (savings > 100) return { level: 'Medium Impact', color: 'text-yellow-700', bg: 'bg-yellow-100' };
    return { level: 'Low Impact', color: 'text-blue-700', bg: 'bg-blue-100' };
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="p-3 bg-emerald-100 rounded-lg">
            <Lightbulb className="w-8 h-8 text-emerald-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Eco-Friendly Alternatives</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover sustainable swaps that reduce your carbon footprint while saving money
        </p>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          <div className="flex items-center space-x-2">
            <Filter className="w-5 h-5 text-gray-500" />
            <span className="font-medium text-gray-700">Filters:</span>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
            {/* Search */}
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search alternatives..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent w-full sm:w-64"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>

            {/* Difficulty Filter */}
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            >
              {difficulties.map(difficulty => (
                <option key={difficulty.id} value={difficulty.id}>
                  {difficulty.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Alternatives Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlternatives.map((alternative) => {
          const difficultyConfig = getDifficultyConfig(alternative.difficulty);
          const impactConfig = getImpactLevel(alternative.potentialSavings);
          
          return (
            <div key={alternative.id} className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-emerald-100 rounded-lg">
                    <Leaf className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${difficultyConfig.bg} ${difficultyConfig.color}`}>
                      {difficultyConfig.name}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${impactConfig.bg} ${impactConfig.color}`}>
                      {impactConfig.level}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {alternative.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {alternative.description}
                </p>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Annual CO₂ Savings:</span>
                    <div className="flex items-center space-x-1">
                      <span className="font-bold text-emerald-600">
                        {alternative.potentialSavings.toFixed(1)} kg
                      </span>
                      <Star className="w-4 h-4 text-emerald-500" />
                    </div>
                  </div>

                  <div className="pt-3 border-t border-gray-100">
                    <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-100 transition-colors group">
                      <span className="font-medium">Learn More</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {filteredAlternatives.length === 0 && (
        <div className="text-center py-12">
          <div className="p-4 bg-gray-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <Search className="w-8 h-8 text-gray-400" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">No alternatives found</h3>
          <p className="text-gray-600">Try adjusting your filters or search terms</p>
        </div>
      )}

      {/* Impact Summary */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-6 rounded-xl text-white">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Make a Difference Today</h3>
          <p className="text-emerald-100 mb-4">
            Small changes in your spending habits can create significant environmental impact
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="text-center">
              <p className="text-2xl font-bold">2,100+</p>
              <p className="text-emerald-100 text-sm">kg CO₂ saved annually</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">95</p>
              <p className="text-emerald-100 text-sm">trees equivalent</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold">$840</p>
              <p className="text-emerald-100 text-sm">potential savings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcoAlternatives;