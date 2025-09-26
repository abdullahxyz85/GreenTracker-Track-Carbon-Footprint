import React, { useState } from 'react';
import { 
  Target, 
  TrendingDown, 
  Calendar, 
  Plus, 
  CheckCircle, 
  Clock,
  Award,
  BarChart3,
  Leaf,
  Zap,
  Car,
  Home
} from 'lucide-react';

interface Goal {
  id: string;
  title: string;
  description: string;
  type: 'carbon' | 'spending' | 'category';
  target: number;
  current: number;
  unit: string;
  deadline: string;
  status: 'active' | 'completed' | 'overdue';
  category?: string;
  reward?: string;
}

const GoalTracker: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([
    {
      id: '1',
      title: 'Reduce Monthly Carbon Footprint',
      description: 'Lower CO₂ emissions by 25% compared to last month',
      type: 'carbon',
      target: 25,
      current: 18,
      unit: '% reduction',
      deadline: '2024-12-31',
      status: 'active',
      reward: 'Carbon Warrior Badge'
    },
    {
      id: '2',
      title: 'Sustainable Transportation',
      description: 'Use public transport or bike for 80% of trips',
      type: 'category',
      target: 80,
      current: 65,
      unit: '% of trips',
      deadline: '2024-12-31',
      status: 'active',
      category: 'transport',
      reward: 'Eco Commuter Badge'
    },
    {
      id: '3',
      title: 'Green Spending Limit',
      description: 'Keep monthly spending under $800 with eco-friendly choices',
      type: 'spending',
      target: 800,
      current: 650,
      unit: '$',
      deadline: '2024-12-31',
      status: 'active',
      reward: '$50 Green Shopping Credit'
    },
    {
      id: '4',
      title: 'Zero Waste Week',
      description: 'Complete a week with minimal packaging waste',
      type: 'carbon',
      target: 100,
      current: 100,
      unit: '% completion',
      deadline: '2024-12-15',
      status: 'completed',
      reward: 'Zero Waste Hero Badge'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newGoal, setNewGoal] = useState({
    title: '',
    description: '',
    type: 'carbon' as Goal['type'],
    target: '',
    unit: '',
    deadline: '',
    category: ''
  });

  const goalTypes = [
    { id: 'carbon', name: 'Carbon Reduction', icon: Leaf, color: 'text-green-600', bg: 'bg-green-100' },
    { id: 'spending', name: 'Spending Limit', icon: Target, color: 'text-blue-600', bg: 'bg-blue-100' },
    { id: 'category', name: 'Category Focus', icon: BarChart3, color: 'text-purple-600', bg: 'bg-purple-100' }
  ];

  const quickGoals = [
    {
      title: 'Meatless Monday',
      description: 'Avoid meat products every Monday',
      type: 'category' as Goal['type'],
      target: 100,
      unit: '% compliance',
      category: 'food'
    },
    {
      title: 'Walk/Bike Week',
      description: 'Use active transport for short trips',
      type: 'category' as Goal['type'],
      target: 70,
      unit: '% of trips',
      category: 'transport'
    },
    {
      title: 'Energy Saver',
      description: 'Reduce home energy consumption by 15%',
      type: 'carbon' as Goal['type'],
      target: 15,
      unit: '% reduction',
      category: 'utilities'
    }
  ];

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newGoal.title || !newGoal.target || !newGoal.deadline) return;

    const goal: Goal = {
      id: Date.now().toString(),
      title: newGoal.title,
      description: newGoal.description,
      type: newGoal.type,
      target: parseFloat(newGoal.target),
      current: 0,
      unit: newGoal.unit,
      deadline: newGoal.deadline,
      status: 'active',
      category: newGoal.category || undefined,
      reward: 'Achievement Badge'
    };

    setGoals([goal, ...goals]);
    setNewGoal({
      title: '',
      description: '',
      type: 'carbon',
      target: '',
      unit: '',
      deadline: '',
      category: ''
    });
    setShowAddForm(false);
  };

  const addQuickGoal = (quickGoal: typeof quickGoals[0]) => {
    const goal: Goal = {
      id: Date.now().toString(),
      title: quickGoal.title,
      description: quickGoal.description,
      type: quickGoal.type,
      target: quickGoal.target,
      current: 0,
      unit: quickGoal.unit,
      deadline: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      status: 'active',
      category: quickGoal.category,
      reward: 'Quick Goal Badge'
    };

    setGoals([goal, ...goals]);
  };

  const getStatusColor = (status: Goal['status']) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-100';
      case 'overdue':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-blue-600 bg-blue-100';
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 100) return 'bg-green-500';
    if (progress >= 75) return 'bg-emerald-500';
    if (progress >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const activeGoals = goals.filter(g => g.status === 'active');
  const completedGoals = goals.filter(g => g.status === 'completed');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Goal Tracker</h1>
          <p className="text-gray-600 mt-1">Set and track your sustainability goals</p>
        </div>
        <button
          onClick={() => setShowAddForm(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
        >
          <Plus className="w-4 h-4" />
          <span>Add Goal</span>
        </button>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Active Goals</p>
              <p className="text-2xl font-bold text-gray-900">{activeGoals.length}</p>
            </div>
            <div className="p-3 bg-blue-100 rounded-lg">
              <Target className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Completed</p>
              <p className="text-2xl font-bold text-emerald-800">{completedGoals.length}</p>
            </div>
            <div className="p-3 bg-emerald-100 rounded-lg">
              <CheckCircle className="w-6 h-6 text-emerald-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Success Rate</p>
              <p className="text-2xl font-bold text-purple-800">
                {goals.length > 0 ? Math.round((completedGoals.length / goals.length) * 100) : 0}%
              </p>
            </div>
            <div className="p-3 bg-purple-100 rounded-lg">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 mb-1">Avg Progress</p>
              <p className="text-2xl font-bold text-amber-800">
                {activeGoals.length > 0 
                  ? Math.round(activeGoals.reduce((sum, goal) => sum + (goal.current / goal.target * 100), 0) / activeGoals.length)
                  : 0}%
              </p>
            </div>
            <div className="p-3 bg-amber-100 rounded-lg">
              <TrendingDown className="w-6 h-6 text-amber-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Quick Goals */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Start Goals</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {quickGoals.map((goal, index) => (
            <div key={index} className="p-4 bg-emerald-50 rounded-lg border border-emerald-100">
              <h3 className="font-medium text-gray-900 mb-2">{goal.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{goal.description}</p>
              <button
                onClick={() => addQuickGoal(goal)}
                className="w-full px-3 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors text-sm"
              >
                Add Goal
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Add Goal Form */}
      {showAddForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Create New Goal</h2>
          <form onSubmit={handleAddGoal} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Goal Title *</label>
              <input
                type="text"
                value={newGoal.title}
                onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="e.g., Reduce plastic usage"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Goal Type *</label>
              <select
                value={newGoal.type}
                onChange={(e) => setNewGoal({ ...newGoal, type: e.target.value as Goal['type'] })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              >
                {goalTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Target Value *</label>
              <input
                type="number"
                value={newGoal.target}
                onChange={(e) => setNewGoal({ ...newGoal, target: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="e.g., 25"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Unit *</label>
              <input
                type="text"
                value={newGoal.unit}
                onChange={(e) => setNewGoal({ ...newGoal, unit: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="e.g., % reduction, kg CO₂"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Deadline *</label>
              <input
                type="date"
                value={newGoal.deadline}
                onChange={(e) => setNewGoal({ ...newGoal, deadline: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category (Optional)</label>
              <select
                value={newGoal.category}
                onChange={(e) => setNewGoal({ ...newGoal, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
              >
                <option value="">Select category</option>
                <option value="food">Food & Dining</option>
                <option value="transport">Transportation</option>
                <option value="shopping">Shopping</option>
                <option value="utilities">Utilities</option>
                <option value="entertainment">Entertainment</option>
                <option value="travel">Travel</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
              <textarea
                value={newGoal.description}
                onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                rows={3}
                placeholder="Describe your goal and why it matters to you..."
              />
            </div>

            <div className="md:col-span-2 flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => setShowAddForm(false)}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
              >
                Create Goal
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Active Goals */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Active Goals</h2>
        <div className="space-y-4">
          {activeGoals.map((goal) => {
            const progress = Math.min((goal.current / goal.target) * 100, 100);
            const daysLeft = Math.ceil((new Date(goal.deadline).getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
            const typeConfig = goalTypes.find(t => t.id === goal.type);
            const IconComponent = typeConfig?.icon || Target;

            return (
              <div key={goal.id} className="p-4 bg-gray-50 rounded-lg">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-start space-x-3">
                    <div className={`p-2 rounded-lg ${typeConfig?.bg}`}>
                      <IconComponent className={`w-5 h-5 ${typeConfig?.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                      <p className="text-sm text-gray-600">{goal.description}</p>
                      {goal.reward && (
                        <div className="flex items-center space-x-1 mt-1">
                          <Award className="w-3 h-3 text-yellow-500" />
                          <span className="text-xs text-yellow-600">{goal.reward}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(goal.status)}`}>
                      {goal.status}
                    </span>
                    <div className="flex items-center space-x-1 mt-1">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span className="text-xs text-gray-500">{daysLeft} days left</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-medium text-gray-900">
                      {goal.current} / {goal.target} {goal.unit}
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${getProgressColor(progress)}`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-gray-500">{progress.toFixed(1)}% complete</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Completed Goals */}
      {completedGoals.length > 0 && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Completed Goals</h2>
          <div className="space-y-3">
            {completedGoals.map((goal) => {
              const typeConfig = goalTypes.find(t => t.id === goal.type);
              const IconComponent = typeConfig?.icon || Target;

              return (
                <div key={goal.id} className="p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-green-100 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{goal.title}</h3>
                        <p className="text-sm text-gray-600">{goal.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-green-600">Completed!</span>
                      {goal.reward && (
                        <div className="flex items-center space-x-1 mt-1">
                          <Award className="w-3 h-3 text-yellow-500" />
                          <span className="text-xs text-yellow-600">{goal.reward}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default GoalTracker;