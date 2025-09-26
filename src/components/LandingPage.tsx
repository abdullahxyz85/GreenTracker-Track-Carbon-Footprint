import React from 'react';
import { 
  Leaf, 
  TrendingDown, 
  Award, 
  Users, 
  BarChart3, 
  Camera, 
  Target, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Play,
  Shield,
  Zap,
  Heart
} from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  const features = [
    {
      icon: Camera,
      title: 'Smart Receipt Scanning',
      description: 'Upload receipts and let AI extract expense details automatically'
    },
    {
      icon: BarChart3,
      title: 'Carbon Analytics',
      description: 'Real-time CO₂ tracking with detailed breakdowns and trends'
    },
    {
      icon: Target,
      title: 'Goal Setting',
      description: 'Set and track sustainability goals with personalized recommendations'
    },
    {
      icon: Award,
      title: 'Eco Badges',
      description: 'Earn rewards for sustainable choices and build eco-friendly habits'
    },
    {
      icon: Users,
      title: 'Social Impact',
      description: 'Compare progress with friends and join community challenges'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'See your contribution to worldwide sustainability efforts'
    }
  ];

  const stats = [
    { value: '50K+', label: 'Active Users', icon: Users },
    { value: '2.3M kg', label: 'CO₂ Saved', icon: Leaf },
    { value: '95%', label: 'User Satisfaction', icon: Star },
    { value: '180+', label: 'Countries', icon: Globe }
  ];

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Environmental Consultant',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'GreenTracker helped me reduce my carbon footprint by 40% in just 3 months. The insights are incredible!'
    },
    {
      name: 'Marcus Johnson',
      role: 'Sustainability Manager',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'Finally, a tool that connects my spending habits with environmental impact. Game-changing!'
    },
    {
      name: 'Elena Rodriguez',
      role: 'Climate Activist',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      quote: 'The gamification aspect makes sustainable living fun and engaging. Highly recommend!'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/10 to-green-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-6">
              <div className="p-4 bg-emerald-600 rounded-2xl">
                <Leaf className="w-12 h-12 text-white" />
              </div>
              <div className="text-left">
                <h1 className="text-4xl sm:text-6xl font-bold text-emerald-900">
                  Green<span className="text-emerald-600">Tracker</span>
                </h1>
                <p className="text-emerald-700 text-lg">Sustainable Finance</p>
              </div>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Track Your <span className="text-emerald-600">Carbon Footprint</span><br />
              Through Smart Spending
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              The world's first expense tracker that shows both your financial spending and environmental impact. 
              Make sustainable choices, reduce your carbon footprint, and save money with AI-powered insights.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
              <button
                onClick={onGetStarted}
                className="group flex items-center space-x-2 px-8 py-4 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="text-lg font-semibold">Start Tracking Free</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="flex items-center space-x-2 px-8 py-4 bg-white text-emerald-600 rounded-xl hover:bg-emerald-50 transition-colors border border-emerald-200 shadow-sm">
                <Play className="w-5 h-5" />
                <span className="text-lg font-semibold">Watch Demo</span>
              </button>
            </div>
            
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-4 h-4 text-emerald-500" />
                <span>Free Forever</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4 text-emerald-500" />
                <span>Privacy First</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="w-4 h-4 text-emerald-500" />
                <span>Real-time Insights</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-emerald-100 rounded-lg">
                      <IconComponent className="w-6 h-6 text-emerald-600" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for <span className="text-emerald-600">Sustainable Finance</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to help you understand and reduce your environmental impact while managing your finances smarter.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="p-3 bg-emerald-100 rounded-lg w-fit mb-6">
                    <IconComponent className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">Simple steps to start your sustainable finance journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <div className="absolute top-10 left-1/2 transform translate-x-8 hidden md:block">
                  <ArrowRight className="w-6 h-6 text-emerald-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Track Expenses</h3>
              <p className="text-gray-600">Add your purchases manually or upload receipts for automatic processing</p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <div className="absolute top-10 left-1/2 transform translate-x-8 hidden md:block">
                  <ArrowRight className="w-6 h-6 text-emerald-300" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">See Impact</h3>
              <p className="text-gray-600">Get real-time carbon footprint calculations for every purchase</p>
            </div>
            
            <div className="text-center">
              <div className="mb-8">
                <div className="w-20 h-20 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Make Changes</h3>
              <p className="text-gray-600">Receive personalized recommendations for more sustainable choices</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Loved by <span className="text-emerald-600">Eco-Warriors</span> Worldwide
            </h2>
            <p className="text-xl text-gray-600">See what our community says about their sustainable finance journey</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-6">
            <Heart className="w-8 h-8 text-white mr-3" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Ready to Make a Difference?
            </h2>
          </div>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Join thousands of users who are already reducing their carbon footprint and saving money with smarter spending decisions.
          </p>
          <button
            onClick={onGetStarted}
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-white text-emerald-600 rounded-xl hover:bg-emerald-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-lg font-semibold"
          >
            <span>Start Your Green Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <p className="text-emerald-100 mt-4 text-sm">
            Free forever • No credit card required • Privacy protected
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 bg-emerald-600 rounded-lg">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">GreenTracker</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Empowering individuals and businesses to make sustainable financial decisions for a better planet.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm">f</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm">t</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm">in</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 GreenTracker. All rights reserved. Made with 💚 for the planet.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;