import React, { useState } from 'react';
import { 
  Users, 
  Trophy, 
  Share2, 
  MessageCircle, 
  Heart, 
  TrendingUp,
  Globe,
  Award,
  Target,
  Leaf,
  Calendar,
  ChevronRight,
  UserPlus,
  Crown
} from 'lucide-react';

interface Challenge {
  id: string;
  title: string;
  description: string;
  participants: number;
  duration: string;
  reward: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  progress?: number;
}

interface Achievement {
  id: string;
  user: string;
  avatar: string;
  action: string;
  impact: string;
  timestamp: string;
  likes: number;
  comments: number;
}

interface Leaderboard {
  rank: number;
  user: string;
  avatar: string;
  carbonSaved: number;
  streak: number;
  badges: number;
}

const SocialHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'feed' | 'challenges' | 'leaderboard'>('feed');

  const challenges: Challenge[] = [
    {
      id: '1',
      title: 'Plastic-Free Week',
      description: 'Avoid single-use plastics for 7 consecutive days',
      participants: 1247,
      duration: '7 days',
      reward: 'Plastic Warrior Badge + 500 points',
      difficulty: 'medium',
      category: 'waste',
      progress: 65
    },
    {
      id: '2',
      title: 'Green Commute Challenge',
      description: 'Use sustainable transport for all trips this month',
      participants: 892,
      duration: '30 days',
      reward: 'Eco Commuter Badge + 1000 points',
      difficulty: 'hard',
      category: 'transport'
    },
    {
      id: '3',
      title: 'Local Food Friday',
      description: 'Buy only locally-sourced food every Friday',
      participants: 2156,
      duration: '4 weeks',
      reward: 'Local Hero Badge + 300 points',
      difficulty: 'easy',
      category: 'food'
    }
  ];

  const achievements: Achievement[] = [
    {
      id: '1',
      user: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      action: 'completed the Plastic-Free Week challenge',
      impact: 'Saved 2.3 kg CO₂',
      timestamp: '2 hours ago',
      likes: 24,
      comments: 8
    },
    {
      id: '2',
      user: 'Marcus Johnson',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      action: 'reached a 30-day sustainable streak',
      impact: 'Total impact: 45.7 kg CO₂ saved',
      timestamp: '4 hours ago',
      likes: 31,
      comments: 12
    },
    {
      id: '3',
      user: 'Elena Rodriguez',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      action: 'earned the Carbon Cutter badge',
      impact: 'Reduced footprint by 15% this month',
      timestamp: '6 hours ago',
      likes: 18,
      comments: 5
    },
    {
      id: '4',
      user: 'David Kim',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      action: 'shared an eco-tip about composting',
      impact: 'Helped 50+ community members',
      timestamp: '8 hours ago',
      likes: 42,
      comments: 15
    }
  ];

  const leaderboard: Leaderboard[] = [
    {
      rank: 1,
      user: 'EcoWarrior2024',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      carbonSaved: 156.7,
      streak: 45,
      badges: 12
    },
    {
      rank: 2,
      user: 'GreenGuru',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      carbonSaved: 142.3,
      streak: 38,
      badges: 10
    },
    {
      rank: 3,
      user: 'SustainableSam',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      carbonSaved: 128.9,
      streak: 32,
      badges: 9
    },
    {
      rank: 4,
      user: 'ClimateChamp',
      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      carbonSaved: 115.4,
      streak: 28,
      badges: 8
    },
    {
      rank: 5,
      user: 'You',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop',
      carbonSaved: 89.2,
      streak: 18,
      badges: 6
    }
  ];

  const getDifficultyColor = (difficulty: Challenge['difficulty']) => {
    switch (difficulty) {
      case 'easy':
        return 'text-green-600 bg-green-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'hard':
        return 'text-red-600 bg-red-100';
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 2:
        return <Award className="w-5 h-5 text-gray-400" />;
      case 3:
        return <Award className="w-5 h-5 text-amber-600" />;
      default:
        return <span className="text-sm font-bold text-gray-600">#{rank}</span>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="p-3 bg-blue-100 rounded-lg">
            <Users className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Community Hub</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Connect with eco-warriors worldwide, join challenges, and celebrate sustainable achievements together
        </p>
      </div>

      {/* Community Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="p-3 bg-emerald-100 rounded-lg w-fit mx-auto mb-3">
            <Users className="w-6 h-6 text-emerald-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">50.2K</p>
          <p className="text-sm text-gray-600">Active Members</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="p-3 bg-green-100 rounded-lg w-fit mx-auto mb-3">
            <Leaf className="w-6 h-6 text-green-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">1.2M kg</p>
          <p className="text-sm text-gray-600">CO₂ Saved Together</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="p-3 bg-purple-100 rounded-lg w-fit mx-auto mb-3">
            <Target className="w-6 h-6 text-purple-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">847</p>
          <p className="text-sm text-gray-600">Active Challenges</p>
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
          <div className="p-3 bg-yellow-100 rounded-lg w-fit mx-auto mb-3">
            <Trophy className="w-6 h-6 text-yellow-600" />
          </div>
          <p className="text-2xl font-bold text-gray-900">15.7K</p>
          <p className="text-sm text-gray-600">Badges Earned</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white p-1 rounded-xl shadow-sm border border-gray-100">
        <div className="flex space-x-1">
          {[
            { id: 'feed', label: 'Activity Feed', icon: Globe },
            { id: 'challenges', label: 'Challenges', icon: Target },
            { id: 'leaderboard', label: 'Leaderboard', icon: Trophy }
          ].map((tab) => {
            const IconComponent = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex-1 flex items-center justify-center space-x-2 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-emerald-100 text-emerald-800'
                    : 'text-gray-600 hover:text-emerald-700 hover:bg-emerald-50'
                }`}
              >
                <IconComponent className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Activity Feed */}
      {activeTab === 'feed' && (
        <div className="space-y-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-start space-x-4">
                <img
                  src={achievement.avatar}
                  alt={achievement.user}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-semibold text-gray-900">{achievement.user}</span>
                    <span className="text-gray-600">{achievement.action}</span>
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="p-1 bg-emerald-100 rounded">
                      <Leaf className="w-3 h-3 text-emerald-600" />
                    </div>
                    <span className="text-sm text-emerald-700 font-medium">{achievement.impact}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{achievement.timestamp}</span>
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-red-500 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">{achievement.likes}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-blue-500 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">{achievement.comments}</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-emerald-500 transition-colors">
                        <Share2 className="w-4 h-4" />
                        <span className="text-sm">Share</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Challenges */}
      {activeTab === 'challenges' && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-emerald-600 to-green-600 p-6 rounded-xl text-white">
            <h2 className="text-xl font-bold mb-2">Join the Movement!</h2>
            <p className="text-emerald-100 mb-4">
              Participate in community challenges to accelerate your sustainability journey and earn exclusive rewards.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center">
                <p className="text-2xl font-bold">2,847</p>
                <p className="text-emerald-100 text-sm">Total Participants</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">156 kg</p>
                <p className="text-emerald-100 text-sm">CO₂ Saved This Week</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold">23</p>
                <p className="text-emerald-100 text-sm">Active Challenges</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {challenges.map((challenge) => (
              <div key={challenge.id} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{challenge.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{challenge.description}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(challenge.difficulty)}`}>
                    {challenge.difficulty}
                  </span>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{challenge.participants.toLocaleString()} participants</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{challenge.duration}</span>
                    </div>
                  </div>

                  {challenge.progress && (
                    <div>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-gray-600">Your Progress</span>
                        <span className="text-sm font-medium text-gray-900">{challenge.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-emerald-500 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${challenge.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm font-medium text-yellow-800">Reward: {challenge.reward}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
                  <UserPlus className="w-4 h-4" />
                  <span>{challenge.progress ? 'Continue Challenge' : 'Join Challenge'}</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Leaderboard */}
      {activeTab === 'leaderboard' && (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">Global Leaderboard</h2>
              <div className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-emerald-600" />
                <span className="text-sm text-emerald-600">Updated live</span>
              </div>
            </div>

            <div className="space-y-4">
              {leaderboard.map((entry) => (
                <div
                  key={entry.rank}
                  className={`flex items-center justify-between p-4 rounded-lg border transition-colors ${
                    entry.user === 'You'
                      ? 'bg-emerald-50 border-emerald-200'
                      : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                  }`}
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-8 h-8">
                      {getRankIcon(entry.rank)}
                    </div>
                    <img
                      src={entry.avatar}
                      alt={entry.user}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className={`font-semibold ${entry.user === 'You' ? 'text-emerald-900' : 'text-gray-900'}`}>
                        {entry.user}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Leaf className="w-3 h-3 text-green-500" />
                          <span>{entry.carbonSaved} kg CO₂ saved</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Target className="w-3 h-3 text-blue-500" />
                          <span>{entry.streak} day streak</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Award className="w-3 h-3 text-yellow-500" />
                          <span>{entry.badges} badges</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 rounded-xl text-white">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-2">Climb the Ranks!</h3>
              <p className="text-purple-100 mb-4">
                Keep making sustainable choices to improve your position and earn exclusive rewards.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-lg font-bold">+12 positions</p>
                  <p className="text-purple-100 text-sm">to reach top 10%</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold">67.5 kg</p>
                  <p className="text-purple-100 text-sm">more CO₂ to save</p>
                </div>
                <div className="text-center">
                  <p className="text-lg font-bold">10 days</p>
                  <p className="text-purple-100 text-sm">to extend streak</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialHub;