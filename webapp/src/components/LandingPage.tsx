import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowRight,
  faChartLine,
  faLock,
  faZap,
  faBarChart,
  faCheckCircle,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const LandingPage: React.FC = () => {
  const features = [
    {
      icon: faLock,
      title: 'Budget Enforcement',
      description: 'Set spending limits and get alerts before exceeding budget thresholds',
    },
    {
      icon: faZap,
      title: 'Request Deduplication',
      description: 'Eliminate redundant API calls and reduce costs by up to 40%',
    },
    {
      icon: faStar,
      title: 'Utility Scoring',
      description: 'Score requests by their actual business value to optimize spending',
    },
    {
      icon: faBarChart,
      title: 'Analytics Dashboard',
      description: 'Real-time insights into your AI API spending patterns and trends',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/30 dark:to-gray-900" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl mb-6">
            <span className="text-purple-600">VideoScan</span><br/>Intelligent Video Analysis
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400 mb-10">Extract insights from video with AI-powered scene detection, object tracking, and moderation.</p>
          <div className="flex items-center justify-center gap-4">
            <a href="#/signup" className="rounded-lg bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-purple-500">Get Started Free &rarr;</a>
            <a href="#/pricing" className="rounded-lg border border-gray-300 dark:border-gray-700 px-6 py-3 text-sm font-semibold text-gray-700 dark:text-gray-300">Learn More</a>
          </div>
        </div>
      </section>
      {/* Features */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4">Powerful Features</h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">Everything you need</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-100 dark:border-gray-700">
                <div className="w-12 h-12 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 mb-4">
                  <FontAwesomeIcon icon={f.icon} className="text-xl" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{f.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl bg-purple-600 px-8 py-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-purple-100 mb-8">Join teams using VideoScan today.</p>
            <a href="#/signup" className="inline-block rounded-lg bg-white px-8 py-3 text-sm font-semibold text-purple-600 hover:bg-gray-100">Start Free Trial</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
