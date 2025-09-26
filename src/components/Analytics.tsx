import React, { useState } from 'react';
import { 
  BarChart3, 
  TrendingDown, 
  TrendingUp, 
  Calendar, 
  Download,
  Filter,
  Leaf,
  DollarSign,
  Target,
  Globe,
  Car,
  TreePine,
  Zap,
  Home,
  Utensils,
  ShoppingBag
} from 'lucide-react';

interface ChartData {
  month: string;
  spending: number;
  carbon: number;
  savings: number;
}

const Analytics: React.FC = () => {
  const [timeRange, setTimeRange] = useState<'3m' | '6m' | '1y'>('6m');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const chartData: ChartData[] = [
    { month: 'Jul', spending: 850, carbon: 45.2, savings: 120 },
    { month: 'Aug', spending: 920, carbon: 52.1, savings: 95 },
    { month: 'Sep', spending: 780, carbon: 38.7, savings: 180 },
    { month: 'Oct', spending: 650, carbon: 32.4, savings: 220 },
    { month: 'Nov', spending: 720, carbon: 35.8, savings: 195 },
    { month: 'Dec', spending: 580, carbon: 28.9, savings: 280 }
  ];

  const categoryBreakdown = [
    { name: 'Transportation', carbon: 156.7, spending: 450, icon: Car, color: 'bg-blue-500', percentage: 35 },
    { name: 'Food & Dining', carbon: 89.3, spending: 320, icon: Utensils, color: 'bg-orange-500', percentage: 20 },
    { name: 'Utilities', carbon: 78.9, spending: 280, icon: Zap, color: 'bg-yellow-500', percentage: 18 },
    { name: 'Shopping', carbon: 67.4, spending: 240, icon: ShoppingBag, color: 'bg-purple-500', percentage: 15 },
    { name: 'Entertainment', carbon: 34.2, spending: 150, icon: Home, color: 'bg-pink-500', percentage: 8 },
    { name: 'Travel', carbon: 23.5, spending: 100, icon: Globe, color: 'bg-indigo-500', percentage: 4 }
  ];

  const insights = [
    {
      icon: TrendingDown,
      title: 'Carbon Footprint Reduced',
      value: '36%',
      description: 'Compared to 6 months ago',
      color: 'text-green-600',
      bg: 'bg-green-100'
    },
    {
      icon: DollarSign,
      title: 'Money Saved',
      value: '$1,290',
      description: 'Through eco-friendly choices',
      color: 'text-blue-600',
      bg: 'bg-blue-100'
    },
    {
      icon: Target,
      title: 'Goals Achieved',
      value: '8/10',
      description: 'Sustainability targets met',
      color: 'text-purple-600',
      bg: 'bg-purple-100'
    },
    {
      icon: TreePine,
      title: 'Trees Equivalent',
      value: '23',
      description: 'CO₂ offset this year',
      color: 'text-emerald-600',
      bg: 'bg-emerald-100'
    }
  ];

  const predictions = [
    {
      title: 'Next Month Forecast',
      carbonReduction: 12,
      savings: 180,
      confidence: 85
    },
    {
      title: 'Year-End Projection',
      carbonReduction: 45,
      savings: 2100,
      confidence: 78
    }
  ];

  const maxSpending = Math.max(...chartData.map(d => d.spending));
  const maxCarbon = Math.max(...chartData.map(d => d.carbon));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600 mt-1">Deep insights into your sustainable finance journey</p>
        </div>
        <div className="flex items-center space-x-3">
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
          >
            <option value="3m">Last 3 months</option>
            <option value="6m">Last 6 months</option>
            <option value="1y">Last year</option>
          </select>
          <button className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
            <Download className="w-4 h-4" />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {insights.map((insight, index) => {
          const IconComponent = insight.icon;
          return (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">{insight.title}</p>
                  <p className="text-2xl font-bold text-gray-900">{insight.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{insight.description}</p>
                </div>
                <div className={`p-3 rounded-lg ${insight.bg}`}>
                  <IconComponent className={`w-6 h-6 ${insight.color}`} />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Spending vs Carbon Chart */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">Spending vs Carbon Impact</h2>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Spending ($)</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
              <span className="text-sm text-gray-600">Carbon (kg CO₂)</span>
            </div>
          </div>
        </div>

        <div className="relative h-64">
          <div className="absolute inset-0 flex items-end justify-between space-x-2">
            {chartData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center space-y-2">
                <div className="w-full flex flex-col space-y-1">
                  <div
                    className="bg-blue-500 rounded-t"
                    style={{ height: `${(data.spending / maxSpending) * 200}px` }}
                  ></div>
                  <div
                    className="bg-emerald-500 rounded-t"
                    style={{ height: `${(data.carbon / maxCarbon) * 200}px` }}
                  ></div>
                </div>
                <span className="text-sm text-gray-600">{data.month}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-sm text-gray-600">Avg Monthly Spending</p>
            <p className="text-lg font-semibold text-gray-900">
              ${(chartData.reduce((sum, d) => sum + d.spending, 0) / chartData.length).toFixed(0)}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Avg Carbon Footprint</p>
            <p className="text-lg font-semibold text-gray-900">
              {(chartData.reduce((sum, d) => sum + d.carbon, 0) / chartData.length).toFixed(1)} kg
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Total Savings</p>
            <p className="text-lg font-semibold text-emerald-600">
              ${chartData.reduce((sum, d) => sum + d.savings, 0)}
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Category Breakdown */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Impact by Category</h2>
          <div className="space-y-4">
            {categoryBreakdown.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${category.color}`}>
                      <IconComponent className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{category.name}</p>
                      <p className="text-sm text-gray-600">${category.spending} • {category.carbon} kg CO₂</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900">{category.percentage}%</p>
                    <div className="w-16 bg-gray-200 rounded-full h-2 mt-1">
                      <div
                        className={`h-2 rounded-full ${category.color}`}
                        style={{ width: `${category.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Predictions */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">AI Predictions</h2>
          <div className="space-y-4">
            {predictions.map((prediction, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-emerald-50 to-green-50 rounded-lg border border-emerald-100">
                <h3 className="font-medium text-gray-900 mb-2">{prediction.title}</h3>
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-sm text-gray-600">Carbon Reduction</p>
                    <p className="text-lg font-semibold text-emerald-600">{prediction.carbonReduction}%</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Potential Savings</p>
                    <p className="text-lg font-semibold text-blue-600">${prediction.savings}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Confidence Level</span>
                  <div className="flex items-center space-x-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-emerald-500 h-2 rounded-full"
                        style={{ width: `${prediction.confidence}%` }}
                      ></div>
                    </div>
                    <span className="text-sm font-medium text-gray-900">{prediction.confidence}%</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Environmental Impact */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-6 rounded-xl text-white">
        <h2 className="text-xl font-bold mb-4">Your Environmental Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="p-3 bg-white/20 rounded-lg w-fit mx-auto mb-3">
              <Car className="w-8 h-8 text-white" />
            </div>
            <p className="text-2xl font-bold">2,340 km</p>
            <p className="text-emerald-100 text-sm">Driving distance saved</p>
          </div>
          <div className="text-center">
            <div className="p-3 bg-white/20 rounded-lg w-fit mx-auto mb-3">
              <TreePine className="w-8 h-8 text-white" />
            </div>
            <p className="text-2xl font-bold">23 trees</p>
            <p className="text-emerald-100 text-sm">CO₂ absorption equivalent</p>
          </div>
          <div className="text-center">
            <div className="p-3 bg-white/20 rounded-lg w-fit mx-auto mb-3">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <p className="text-2xl font-bold">1,890 kWh</p>
            <p className="text-emerald-100 text-sm">Energy consumption avoided</p>
          </div>
          <div className="text-center">
            <div className="p-3 bg-white/20 rounded-lg w-fit mx-auto mb-3">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <p className="text-2xl font-bold">Top 15%</p>
            <p className="text-emerald-100 text-sm">Global sustainability rank</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;