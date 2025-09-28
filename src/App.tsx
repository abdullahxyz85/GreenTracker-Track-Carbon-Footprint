import React, { useState } from 'react';
import LandingPage from './components/LandingPage';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import ExpenseTracker from './components/ExpenseTracker';
import EcoAlternatives from './components/EcoAlternatives';
// import BadgeSystem from './components/BadgeSystem';
// import GoalTracker from './components/GoalTracker';
// import SocialHub from './components/SocialHub';
import Analytics from './components/Analytics';

function App() {
  const [showLanding, setShowLanding] = useState(true);
  const [currentView, setCurrentView] = useState('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  if (showLanding) {
    return <LandingPage onGetStarted={() => setShowLanding(false)} />;
  }

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard />;
      case 'expenses':
        return <ExpenseTracker />;
      case 'alternatives':
        return <EcoAlternatives />;
      // case 'badges':
      //   return <BadgeSystem />;
      // case 'goals':
      //   return <GoalTracker />;
      // case 'social':
      //   return <SocialHub />;
      case 'analytics':
        return <Analytics />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      <Header 
        currentView={currentView}
        onViewChange={setCurrentView}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-emerald-100 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-600 mb-2">
              🌱 Making sustainable finance accessible to everyone
            </p>
            <p className="text-sm text-gray-500">
              Together, we're building a greener future through mindful spending
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;