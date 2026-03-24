import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';
import { PricingTier } from '@/types';

const PricingPage: React.FC = () => {
  const pricingTiers: PricingTier[] = [
    {
      name: 'Free',
      price: 0,
      period: '/month',
      requests: 10000,
      description: 'Perfect for getting started',
      features: [
        'Up to 10,000 API requests/month',
        'Basic budget tracking',
        'Monthly analytics report',
        'Email support',
        'Community access',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Pro',
      price: 29,
      period: '/month',
      requests: 100000,
      description: 'For growing teams',
      features: [
        'Up to 100,000 API requests/month',
        'Advanced budget enforcement',
        'Request deduplication',
        'Real-time analytics dashboard',
        'Priority email support',
        'Custom budget alerts',
        'API access',
        'Team collaboration (up to 5 users)',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 0,
      period: 'Custom',
      requests: 0,
      description: 'For large organizations',
      features: [
        'Unlimited API requests',
        'Advanced utility scoring',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 phone support',
        'SLA guarantee (99.9%)',
        'Advanced security features',
        'Unlimited team members',
        'Custom reporting',
      ],
      cta: 'Contact Sales',
    },
  ];

  const faqs = [
    {
      question: 'Can I upgrade or downgrade my plan anytime?',
      answer:
        'Yes! You can change your plan at any time. Changes take effect immediately, and we\'ll prorate your charges.',
    },
    {
      question: 'What happens if I exceed my request limit?',
      answer:
        'We\'ll notify you when you reach 80% of your limit. You can upgrade anytime, or we can temporarily increase your limit.',
    },
    {
      question: 'Do you offer a free trial?',
      answer:
        'Yes! The Free plan is always available with no time limits. Pro plan includes a 14-day free trial with no credit card required.',
    },
    {
      question: 'Is there a setup fee?',
      answer:
        'No setup fees! You only pay for the plan you choose. Some Enterprise plans may have implementation fees.',
    },
    {
      question: 'What payment methods do you accept?',
      answer:
        'We accept all major credit cards, ACH transfers, and wire transfers. Enterprise customers can arrange custom billing.',
    },
    {
      question: 'Can I use AgentCost for multiple projects?',
      answer:
        'Yes! You can create multiple projects and manage budgets separately for each one. All projects share your API quota.',
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your team. Always flexible, never locked in.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`rounded-2xl border transition-all ${
                tier.highlighted
                  ? 'md:scale-105 border-primary-500 bg-white dark:bg-gray-900 shadow-2xl shadow-primary-500/20'
                  : 'border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-800'
              }`}
            >
              {tier.highlighted && (
                <div className="bg-gradient-br text-white px-6 py-2 text-center text-sm font-semibold rounded-t-2xl flex items-center justify-center gap-2">
                  <FontAwesomeIcon icon={faStar} /> Most Popular
                </div>
              )}

              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {tier.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{tier.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gray-900 dark:text-white">
                      ${tier.price}
                    </span>
                    <span className="text-gray-600 dark:text-gray-400 font-medium">
                      {tier.period}
                    </span>
                  </div>
                              { tier.requests > 0 && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                      {tier.requests.toLocaleString()} requests included
                    </p>
                    )}
                </div>

                <Link
                  to={tier.name === 'Enterprise' ? '/' : '/signup'}
                  className={`w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 mb-8 transition-all ${
                    tier.highlighted
                      ? 'bg-gradient-br text-white hover:opacity-90'
                      : 'border-2 border-primary-500 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20'
                  }`}
                >
                  {tier.cta}
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>

                <div className="space-y-4">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <FontAwesomeIcon
                        icon={faCheck}
                        className="text-primary-600 dark:text-primary-400 mt-0.5"
                      />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto py-20 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-12 border-t border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Ready to start saving?
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Get instant access to AgentCost. No credit card required.
          </p>
          <Link
            to="/signup"
            className="inline-flex px-8 py-3 rounded-lg bg-gradient-br text-white font-semibold hover:opacity-90 gap-2 items-center"
          >
            Get Started Free
            <FontAwesomeIcon icon={faArrowRight} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
