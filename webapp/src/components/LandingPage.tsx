import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faImages, faCubes, faChartLine, faArrowRight, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '@/contexts/AuthContext';

const LandingPage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  const features = [
    {
      icon: faImages,
      title: 'Scene Detection',
      description: 'Automatically identify and segment scenes with high precision using AI-powered analysis.',
    },
    {
      icon: faVideo,
      title: 'Key Frame Extraction',
      description: 'Extract the most important frames from your videos for quick visual reference.',
    },
    {
      icon: faCubes,
      title: 'Object Recognition',
      description: 'Detect and identify objects, people, and activities throughout your video content.',
    },
    {
      icon: faChartLine,
      title: 'Temporal Analysis',
      description: 'Analyze patterns and trends across time with detailed temporal insights.',
    },
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Upload Your Video',
      description: 'Drag and drop or select video files up to your plan limit.',
    },
    {
      step: 2,
      title: 'AI Analysis',
      description: 'Our intelligent system processes and analyzes your video in minutes.',
    },
    {
      step: 3,
      title: 'Review Results',
      description: 'Explore scenes, key frames, objects, and patterns in an intuitive dashboard.',
    },
    {
      step: 4,
      title: 'Export & Share',
      description: 'Download detailed reports and share insights with your team.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Intelligent Video Analysis
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Extract scenes, objects, and insights from your videos with cutting-edge AI. Understand your content like never before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              {isAuthenticated ? (
                <Link
                  to="/dashboard"
                  className="bg-gradient-br text-white px-8 py-3 rounded-lg hover:shadow-lg transition-shadow font-semibold text-center"
                >
                  Go to Dashboard
                </Link>
              ) : (
                <>
                  <Link
                    to="/signup"
                    className="bg-gradient-br text-white px-8 py-3 rounded-lg hover:shadow-lg transition-shadow font-semibold text-center flex items-center justify-center gap-2"
                  >
                    Get Started Free
                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                  </Link>
                  <Link
                    to="/pricing"
                    className="border-2 border-primary-600 dark:border-primary-400 text-primary-600 dark:text-primary-400 px-8 py-3 rounded-lg hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors font-semibold text-center"
                  >
                    View Pricing
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="relative h-96 bg-gradient-br rounded-2xl flex items-center justify-center overflow-hidden group">
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="relative z-10 text-center">
              <FontAwesomeIcon icon={faVideo} className="w-24 h-24 text-white/80 mx-auto mb-4" />
              <p className="text-white text-lg font-semibold">AI-Powered Analysis</p>
              <p className="text-white/80 mt-2">See what's in your videos instantly</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-800">
              <div className="w-14 h-14 bg-gradient-br rounded-lg flex items-center justify-center text-white mb-4">
                <FontAwesomeIcon icon={feature.icon} className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-16">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((item, index) => (
              <div key={index} className="relative">
                <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl p-8">
                  <div className="w-12 h-12 bg-gradient-br rounded-lg flex items-center justify-center text-white font-bold text-lg mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </div>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <FontAwesomeIcon icon={faArrowRight} className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-br rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Understand Your Videos?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Start analyzing videos for free. No credit card required.
          </p>
          {!isAuthenticated ? (
            <Link
              to="/signup"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Get Started Now
            </Link>
          ) : (
            <Link
              to="/dashboard"
              className="inline-block bg-white text-primary-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Upload Videos
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
