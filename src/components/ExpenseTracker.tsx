import React, { useState } from 'react';
import { Plus, Upload, Calculator, Trash2, CreditCard as Edit } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { mockExpenses, categories } from '../data/mockData';
import { Expense } from '../types';

const ExpenseTracker: React.FC = () => {
  const [expenses, setExpenses] = useState<Expense[]>(mockExpenses);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    category: '',
    description: ''
  });

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.amount || !formData.category) return;

    const category = categories.find(c => c.id === formData.category);
    if (!category) return;

    const amount = parseFloat(formData.amount);
    const carbonFootprint = amount * category.carbonMultiplier;

    const newExpense: Expense = {
      id: Date.now().toString(),
      title: formData.title,
      amount,
      category,
      date: new Date().toISOString().split('T')[0],
      carbonFootprint,
      description: formData.description
    };

    setExpenses([newExpense, ...expenses]);
    setFormData({ title: '', amount: '', category: '', description: '' });
    setShowAddForm(false);
  };

  const handleDeleteExpense = (id: string) => {
    setExpenses(expenses.filter(expense => expense.id !== id));
  };

  const getCarbonColor = (carbon: number) => {
    if (carbon < 50) return 'text-green-600';
    if (carbon < 100) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getCarbonBg = (carbon: number) => {
    if (carbon < 50) return 'bg-green-100';
    if (carbon < 100) return 'bg-yellow-100';
    return 'bg-red-100';
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Expense Tracker</h1>
          <p className="text-gray-600 mt-1">Track your spending and environmental impact</p>
        </div>
        <div className="flex space-x-3">
          <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
            <Upload className="w-4 h-4" />
            <span>Upload Receipt</span>
          </button>
          <button
            onClick={() => setShowAddForm(true)}
            className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Expense</span>
          </button>
        </div>
      </div>

      {/* Add Expense Form */}
      {showAddForm && (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Add New Expense</h2>
          <form onSubmit={handleAddExpense} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Expense Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="e.g., Coffee at Starbucks"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Amount ($) *
              </label>
              <input
                type="number"
                step="0.01"
                value={formData.amount}
                onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="0.00"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                required
              >
                <option value="">Select a category</option>
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Description
              </label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                placeholder="Optional details"
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
                Add Expense
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Expense List */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900">Recent Expenses</h2>
        </div>
        <div className="divide-y divide-gray-100">
          {expenses.map((expense) => {
            const IconComponent = LucideIcons[expense.category.icon as keyof typeof LucideIcons] as React.ComponentType<any>;
            return (
              <div key={expense.id} className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 flex-1">
                    <div className={`p-3 rounded-lg ${expense.category.color}`}>
                      {IconComponent ? (
                        <IconComponent className="w-5 h-5 text-white" />
                      ) : (
                        <div className="w-5 h-5 bg-white rounded"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 truncate">{expense.title}</h3>
                      <p className="text-sm text-gray-600">{expense.category.name}</p>
                      {expense.description && (
                        <p className="text-sm text-gray-500 mt-1">{expense.description}</p>
                      )}
                    </div>
                    <div className="hidden sm:block text-right">
                      <p className="text-sm text-gray-600">{expense.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">${expense.amount.toFixed(2)}</p>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${getCarbonBg(expense.carbonFootprint)} ${getCarbonColor(expense.carbonFootprint)}`}>
                        {expense.carbonFootprint.toFixed(1)} kg CO₂e
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-gray-400 hover:text-emerald-600 transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDeleteExpense(expense.id)}
                        className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Carbon Calculator Info */}
      <div className="bg-gradient-to-r from-emerald-50 to-green-50 p-6 rounded-xl border border-emerald-100">
        <div className="flex items-start space-x-3">
          <div className="p-2 bg-emerald-600 rounded-lg">
            <Calculator className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-emerald-900 mb-2">How We Calculate Carbon Footprint</h3>
            <p className="text-emerald-800 text-sm mb-3">
              We use industry-standard carbon multipliers for different spending categories to estimate the environmental impact of your purchases.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {categories.map(category => (
                <div key={category.id} className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${category.color}`}></div>
                  <span className="text-sm text-emerald-800">
                    {category.name}: {category.carbonMultiplier} kg CO₂e/$
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTracker;