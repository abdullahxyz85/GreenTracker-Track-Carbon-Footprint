import { Expense, ExpenseCategory, EcoAlternative, Badge } from '../types';

export const categories: ExpenseCategory[] = [
  {
    id: 'food',
    name: 'Food & Dining',
    icon: 'Utensils',
    carbonMultiplier: 2.1,
    color: 'bg-orange-500'
  },
  {
    id: 'transport',
    name: 'Transportation',
    icon: 'Car',
    carbonMultiplier: 4.6,
    color: 'bg-blue-500'
  },
  {
    id: 'shopping',
    name: 'Shopping',
    icon: 'ShoppingBag',
    carbonMultiplier: 1.8,
    color: 'bg-purple-500'
  },
  {
    id: 'utilities',
    name: 'Utilities',
    icon: 'Zap',
    carbonMultiplier: 3.2,
    color: 'bg-yellow-500'
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: 'Film',
    carbonMultiplier: 1.5,
    color: 'bg-pink-500'
  },
  {
    id: 'travel',
    name: 'Travel',
    icon: 'Plane',
    carbonMultiplier: 8.9,
    color: 'bg-indigo-500'
  }
];

export const mockExpenses: Expense[] = [
  {
    id: '1',
    title: 'Starbucks Coffee',
    amount: 5.50,
    category: categories[0],
    date: '2024-12-19',
    carbonFootprint: 11.55,
    description: 'Morning coffee with oat milk'
  },
  {
    id: '2',
    title: 'Uber Ride',
    amount: 23.40,
    category: categories[1],
    date: '2024-12-19',
    carbonFootprint: 107.64,
    description: 'Airport to downtown'
  },
  {
    id: '3',
    title: 'Amazon Purchase',
    amount: 67.89,
    category: categories[2],
    date: '2024-12-18',
    carbonFootprint: 122.20,
    description: 'Phone case and charger'
  },
  {
    id: '4',
    title: 'Electricity Bill',
    amount: 125.00,
    category: categories[3],
    date: '2024-12-17',
    carbonFootprint: 400.00,
    description: 'Monthly utility payment'
  },
  {
    id: '5',
    title: 'Netflix Subscription',
    amount: 15.99,
    category: categories[4],
    date: '2024-12-15',
    carbonFootprint: 23.99,
    description: 'Monthly streaming service'
  }
];

export const ecoAlternatives: EcoAlternative[] = [
  {
    id: '1',
    title: 'Reusable Coffee Cup',
    description: 'Bring your own cup to coffee shops for discounts and reduced waste',
    potentialSavings: 45.6,
    category: 'food',
    difficulty: 'easy'
  },
  {
    id: '2',
    title: 'Public Transportation',
    description: 'Use buses and trains instead of ride-sharing when possible',
    potentialSavings: 1200.0,
    category: 'transport',
    difficulty: 'medium'
  },
  {
    id: '3',
    title: 'Buy Local Products',
    description: 'Choose locally-made products to reduce shipping emissions',
    potentialSavings: 89.3,
    category: 'shopping',
    difficulty: 'medium'
  },
  {
    id: '4',
    title: 'LED Light Bulbs',
    description: 'Replace incandescent bulbs with energy-efficient LEDs',
    potentialSavings: 156.7,
    category: 'utilities',
    difficulty: 'easy'
  }
];

export const monthlyData = [
  { month: 'Jan', spending: 1200, carbon: 65.4, savings: 0 },
  { month: 'Feb', spending: 1100, carbon: 58.7, savings: 50 },
  { month: 'Mar', spending: 950, carbon: 52.1, savings: 120 },
  { month: 'Apr', spending: 850, carbon: 45.2, savings: 180 },
  { month: 'May', spending: 780, carbon: 38.9, savings: 240 },
  { month: 'Jun', spending: 720, carbon: 35.6, savings: 290 }
];

export const badges: Badge[] = [
  {
    id: '1',
    name: 'Green Starter',
    description: 'Made your first eco-friendly choice',
    icon: 'Seedling',
    earned: true,
    earnedDate: '2024-12-15',
    requirement: 'Complete first week of tracking'
  },
  {
    id: '2',
    name: 'Carbon Cutter',
    description: 'Reduced carbon footprint by 10% this month',
    icon: 'Award',
    earned: true,
    earnedDate: '2024-12-18',
    requirement: 'Achieve 10% reduction'
  },
  {
    id: '3',
    name: 'Eco Warrior',
    description: 'Maintained low carbon footprint for 30 days',
    icon: 'Shield',
    earned: false,
    requirement: 'Stay below average for 30 days'
  },
  {
    id: '4',
    name: 'Planet Protector',
    description: 'Offset 100kg of CO2 through green choices',
    icon: 'Globe',
    earned: false,
    requirement: 'Offset 100kg CO2 total'
  }
];