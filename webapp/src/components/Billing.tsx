import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faArrowRight,
  faCreditCard,
  faDownload,
  faCalendar,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '@/contexts/AuthContext';
import { BillingInfo, PricingTier } from '@/types';

const Billing: React.FC = () => {
  const { user } = useAuth();
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
eosLimit) * 100}%`,
                        }}
                       />
                    </div>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {(billingInfo.videosLimit - billingInfo.videosUsed) video{rbillingInfo.videosLimit - billingInfo.videosUsed !== 1 ? 's' : ''} remaining this month
                </p>
              </div>