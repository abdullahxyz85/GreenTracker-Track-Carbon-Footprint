export interface Expense {
  id: string;
  title: string;
  amount: number;
  category: ExpenseCategory;
  date: string;
  carbonFootprint: number; // kg CO2e
  description?: string;
}

export interface ExpenseCategory {
  id: string;
  name: string;
  icon: string;
  carbonMultiplier: number; // CO2e per dollar spent
  color: string;
}

export interface EcoAlternative {
  id: string;
  title: string;
  description: string;
  potentialSavings: number; // kg CO2e saved annually
  category: string;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  earnedDate?: string;
  requirement: string;
}

export interface CarbonEquivalent {
  activity: string;
  value: number;
  unit: string;
}