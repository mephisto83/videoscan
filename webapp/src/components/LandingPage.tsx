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
    <div className="min-h-screen bg-white dark:bg-gray-950"/>
  );
}

export default LandingPage;