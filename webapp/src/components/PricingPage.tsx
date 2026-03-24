import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from 'A/contexts/AuthContext';
import { PricingTier } from 'A/types';

const PricingPage: React.FC = () => {
  const { isAuthenticated } = useAuth();

  const tiers: PricingTier[] = [
    {
      name: 'Free',
      price: 0,
      period: 'forever',
      videosPerMonth: 5,
      storageLimit: '100 MB',
      description: 'Perfect for trying out VideoScan',
      features: [
        '5 videos per month',
        '100 MB storage limit',
        'Scene detection',
        'Key frame extraction',
        'Basic object recognition',
        'Web interface access',
        'Email support',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
@	   {
      name: 'Pro',
      price: 59,
      period: 'month',
      videosPerMonth: 100,
      storageLimit: '2 GB',
      description: 'For content creators and small teams',
features: [
        '100 videos per month',
        '2 GB storage limit',
        'Advanced scene detection',
        'Key frame extraction',
        'Full object recognition',
        'Activity recognition',
        'Temporal pattern analysis',
        'Batch processing',
        'API access',
        'Priority support',
        'Export to multiple formats',
      ],
      cta: 'Start Pro Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 0,
      period: 'custom',
      videosPerMonth: 0,
      storageLimit: 'Unlimited',
      description: 'For large-scale operations',
      features: [
        'Unlimited videos',
        'Unlimited storage',
        'All Pro features',
        'Custom integrations',
        'Dedicated API endpoints',
        'Advanced analytics',
        'Team management',
        'Custom workflows',
        '24/7 phone support',
        'SLA guarantees',
        'On-premises deployment option',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ];
const comparisonFeatures = [
    { name: 'Videos per month', free: '5', pro: '100', enterprise: 'Unlimited' },
    { name: 'Storage limit', free: '100 MB', pro: '2 GB', enterprise: 'Unlimited' },
    { name: 'Scene detection', free: true, pro: true, enterprise: true },
    { name: 'Key frame extraction', free: true, pro: true, enterprise: true },
    { name: 'Object recognition', free: true, pro: true, enterprise: true },
    { name: 'Activity recognition', free: false, pro: true, enterprise: true },
    { name: 'Temporal analysis', free: false, pro: true, enterprise: true },
    { name: 'Batch processing', free: false, pro: true, enterprise: true },
    { name: 'API access', free: false, pro: true, enterprise: true },
    { name: 'Custom integrations', free: false, pro: false, enterprise: true },
    { name: 'Dedicated support', free: false, pro: false, enterprise: true },
    { name: 'Team management', free: false, pro: false, enterprise: true },
  ];
