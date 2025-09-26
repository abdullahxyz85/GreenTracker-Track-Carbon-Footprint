import React from 'react';
import { Award, Star, Target, Calendar, Lock } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { badges } from '../data/mockData';

const BadgeSystem: React.FC = () => {
  const earnedBadges = badges.filter(badge => badge.earned);
  const upcomingBadges = badges.filter(badge => !badge.earned);

  const progressData = [
    {
      label: 'Monthly Carbon Reduction',
      current: 12,
      target: 15,
      unit: '%',
      color: 'bg-emerald-500'
    },
    {
      label: 'Eco-Friendly Purchases',
      current: 8,
      target: 10,
      unit: 'items',
      color: 'bg-blue-500'
    },
    {
      label: 'Sustainable Days',
      current: 18,
      target: 30,
      unit: 'days',
      color: 'bg-green-500'
    }
  ];

  const achievements = [
    {
      icon: Target,
      title: 'First Week Complete',
      description: 'Successfully tracked expenses for 7 consecutive days',
      date: '2024-12-15',
      points: 100
    },
    {
      icon: Star,
      title: 'Carbon Conscious',
      description: 'Made your first low-carbon purchase choice',
      date: '2024-12-16',
      points: 150
    },
    {
      icon: Award,
      title: 'Eco Educator',
      description: 'Shared an eco-tip with the community',
      date: '2024-12-18',
      points: 200
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="p-3 bg-yellow-100 rounded-lg">
            <Award className="w-8 h-8 text-yellow-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Achievement Center</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Track your progress and unlock badges for sustainable financial habits
        </p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="p-3 bg-yellow-100 rounded-lg w-fit mx-auto mb-3">
            <Award className="w-6 h-6 text-yellow-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">{earnedBadges.length}</p>
          <p className="text-sm text-gray-600">Badges Earned</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="p-3 bg-emerald-100 rounded-lg w-fit mx-auto mb-3">
            <Star className="w-6 h-6 text-emerald-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">1,250</p>
          <p className="text-sm text-gray-600">Eco Points</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="p-3 bg-blue-100 rounded-lg w-fit mx-auto mb-3">
            <Target className="w-6 h-6 text-blue-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">18</p>
          <p className="text-sm text-gray-600">Day Streak</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="p-3 bg-purple-100 rounded-lg w-fit mx-auto mb-3">
            <Calendar className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">Level 3</p>
          <p className="text-sm text-gray-600">Eco Warrior</p>
        </div>
      </div>

      {/* Progress Tracking */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Monthly Progress</h2>
        <div className="space-y-6">
          {progressData.map((progress, index) => {
            const percentage = (progress.current / progress.target) * 100;
            return (
              <div key={index}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">{progress.label}</span>
                  <span className="text-sm text-gray-600">
                    {progress.current} / {progress.target} {progress.unit}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${progress.color} transition-all duration-500`}
                    style={{ width: `${Math.min(percentage, 100)}%` }}
                  ></div>
                </div>
                <div className="text-right mt-1">
                  <span className="text-xs text-gray-500">{percentage.toFixed(1)}% complete</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Earned Badges */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Earned Badges</h2>
          <div className="space-y-4">
            {earnedBadges.map((badge) => {
              const IconComponent = LucideIcons[badge.icon as keyof typeof LucideIcons] as React.ComponentType<any>;
              return (
                <div key={badge.id} className="flex items-center space-x-4 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg border border-yellow-200">
                  <div className="p-3 bg-yellow-500 rounded-lg">
                    {IconComponent ? (
                      <IconComponent className="w-6 h-6 text-white" />
                    ) : (
                      <Award className="w-6 h-6 text-white" />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{badge.name}</h3>
                    <p className="text-sm text-gray-600">{badge.description}</p>
                    {badge.earnedDate && (
                      <p className="text-xs text-yellow-600 mt-1">
                        Earned on {new Date(badge.earnedDate).toLocaleDateString()}
                      </p>
                    )}
                  </div>
                  <div className="text-yellow-600">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Badges */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Badges</h2>
          <div className="space-y-4">
            {upcomingBadges.map((badge) => {
              const IconComponent = LucideIcons[badge.icon as keyof typeof LucideIcons] as React.ComponentType<any>;
              return (
                <div key={badge.id} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="p-3 bg-gray-300 rounded-lg">
                    <Lock className="w-6 h-6 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-700">{badge.name}</h3>
                    <p className="text-sm text-gray-500">{badge.description}</p>
                    <p className="text-xs text-gray-400 mt-1">
                      Requirement: {badge.requirement}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Achievements */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Achievements</h2>
        <div className="space-y-4">
          {achievements.map((achievement, index) => {
            const IconComponent = achievement.icon;
            return (
              <div key={index} className="flex items-center space-x-4 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                <div className="p-2 bg-emerald-100 rounded-lg">
                  <IconComponent className="w-5 h-5 text-emerald-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{achievement.title}</h3>
                  <p className="text-sm text-gray-600">{achievement.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-emerald-600" />
                    <span className="text-sm font-medium text-emerald-600">
                      +{achievement.points} pts
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Level Progress */}
      <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-6 rounded-xl text-white">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-2">Level 3 - Eco Warrior</h3>
          <p className="text-emerald-100 mb-4">750 points until Level 4</p>
          
          <div className="w-full bg-emerald-800 rounded-full h-4 mb-4">
            <div className="bg-white h-4 rounded-full" style={{ width: '62%' }}></div>
          </div>
          
          <p className="text-sm text-emerald-100">
            Keep tracking your sustainable choices to unlock exclusive features!
          </p>
        </div>
      </div>
    </div>
  );
};

export default BadgeSystem;