import React from 'react';
import { 
  DollarSign, 
  TreePine, 
  Car, 
  TrendingDown, 
  TrendingUp,
  Zap,
  Droplets,
  Recycle,
  Calendar
} from 'lucide-react';
import { mockExpenses } from '../data/mockData';

const Dashboard: React.FC = () => {
  const totalSpent = mockExpenses.reduce((sum, expense) => sum + expense.amount, 0);
  const totalCarbon = mockExpenses.reduce((sum, expense) => sum + expense.carbonFootprint, 0);
  const avgCarbonPerDollar = totalCarbon / totalSpent;

  const carbonEquivalents = [
    {
      icon: Car,
      description: 'Driving distance',
      value: Math.round(totalCarbon * 0.23),
      unit: 'km',
      color: 'text-blue-600'
    },
    {
      icon: TreePine,
      description: 'Trees needed to offset',
      value: Math.round(totalCarbon / 22),
      unit: 'trees',
      color: 'text-green-600'
    },
    {
      icon: Zap,
      description: 'Home energy usage',
      value: Math.round(totalCarbon * 0.12),
      unit: 'kWh',
      color: 'text-yellow-600'
    }
  ];

  const categoryBreakdown = mockExpenses.reduce((acc, expense) => {
    const category = expense.category.name;
    if (!acc[category]) {
      acc[category] = { 
        total: 0, 
        carbon: 0, 
        color: expense.category.color,
        count: 0
      };
    }
    acc[category].total += expense.amount;
    acc[category].carbon += expense.carbonFootprint;
    acc[category].count += 1;
    return acc;
  }, {} as Record<string, { total: number; carbon: number; color: string; count: number }>);

  return (
    <div className="space-y-6">
      {/* Hero Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Total Spent</p>
              <p className="text-2xl font-bold text-gray-900">${totalSpent.toFixed(2)}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingUp className="w-4 h-4 text-red-500 mr-1" />
            <span className="text-red-600">+12% from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Carbon Footprint</p>
              <p className="text-2xl font-bold text-emerald-800">{totalCarbon.toFixed(1)}</p>
              <p className="text-xs text-gray-500">kg CO₂e</p>
            </div>
            <div className="p-3 bg-emerald-100 rounded-lg">
              <TreePine className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingDown className="w-4 h-4 text-emerald-500 mr-1" />
            <span className="text-emerald-600">-5% from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Efficiency</p>
              <p className="text-2xl font-bold text-amber-800">{avgCarbonPerDollar.toFixed(2)}</p>
              <p className="text-xs text-gray-500">kg CO₂e/$</p>
            </div>
            <div className="p-3 bg-amber-100 rounded-lg">
              <Recycle className="w-6 h-6 text-amber-600" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <TrendingDown className="w-4 h-4 text-emerald-500 mr-1" />
            <span className="text-emerald-600">Improving!</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">This Month</p>
              <p className="text-2xl font-bold text-gray-900">{mockExpenses.length}</p>
              <p className="text-xs text-gray-500">transactions</p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Calendar className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Carbon Equivalents */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Your Carbon Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {carbonEquivalents.map((equiv, index) => {
            const IconComponent = equiv.icon;
            return (
              <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                <IconComponent className={`w-8 h-8 mx-auto mb-2 ${equiv.color}`} />
                <p className="text-2xl font-bold text-gray-900">{equiv.value}</p>
                <p className="text-sm text-gray-600">{equiv.unit}</p>
                <p className="text-xs text-gray-500 mt-1">{equiv.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Category Breakdown */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Spending by Category</h2>
        <div className="space-y-4">
          {Object.entries(categoryBreakdown).map(([category, data]) => {
            const percentage = (data.total / totalSpent) * 100;
            return (
              <div key={category}>
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center space-x-2">
                    <div className={`w-3 h-3 rounded-full ${data.color}`}></div>
                    <span className="text-sm font-medium text-gray-900">{category}</span>
                    <span className="text-xs text-gray-500">({data.count} transactions)</span>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold text-gray-900">${data.total.toFixed(2)}</p>
                    <p className="text-xs text-gray-500">{data.carbon.toFixed(1)} kg CO₂e</p>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${data.color.replace('bg-', 'bg-').replace('-500', '-400')}`}
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h2>
        <div className="space-y-3">
          {mockExpenses.slice(0, 3).map((expense) => (
            <div key={expense.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`p-2 rounded-lg ${expense.category.color}`}>
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <div>
                  <p className="font-medium text-gray-900">{expense.title}</p>
                  <p className="text-sm text-gray-500">{expense.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold text-gray-900">${expense.amount.toFixed(2)}</p>
                <p className="text-sm text-red-600">{expense.carbonFootprint.toFixed(1)} kg CO₂e</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;