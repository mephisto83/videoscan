import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from 'A/contexts/AuthContext';
import { useTheme } from 'A/contexts/ThemeContext';

const Navigation: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const { isDark, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await logout();
    navigate('/');
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-br rounded-lg flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg transition-shadow">
              V
            </div>
            <span className="font-bold text-xl text-gray-900 dark:text-white hidden sm:inline">
              VideoScan
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/pricing"
                  className={`transition-colors ${
                    isActive('/pricing')
                      ? 'text-primary-600 dark:text-primary-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Pricing
                </Link>
                <Link
                  to="/signin"
                  className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="bg-gradient-br text-white px-6 py-2 rounded-lg hover:shadow-lg transition-shadow font-medium"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className={`transition-colors ${
                    isActive('/dashboard')
                      ? 'text-primary-600 dark:text-primary-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Dashboard
                </Link>
                <Link
                  to="/billing"
                  className={`transition-colors ${
                    isActive('/billing')
                      ? 'text-primary-600 dark:text-primary-400 font-semibold'
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  Billing
                </Link>
                <div className="border-l border-gray-200 dark:border-gray-800 pl-8 flex items-center space-x-4">
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {user?.email}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="text-sm text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors font-medium"
                  >
                    Logout
                  </button>
                </div>
              </>
            )}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FontAwesomeIcon icon={isDark ? faSun : faMoon} className="w-5 h-5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              <FontAwesomeIcon icon={mobileMenuOpen ? faTimes : faBars} className="w-5 h-5" />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3">
            {!isAuthenticated ? (
              <>
                <Link
                  to="/pricing"
                  className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Pricing
                </Link>
                <Link
                  to="/signin"
                  className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  className="block bg-gradient-br text-white px-4 py-2 rounded-lg font-medium text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/dashboard"
                  className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Dashboard
                </Link>
                <Link
                  to="/billing"
                  className="block text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Billing
                </Link>
                <button
                  onClick={() => {
                    handleLogout();
                    setMobileMenuOpen(false);
                  }}
                  className="block w-full text-left text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 py-2"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
   0
  };

export default Navigation;
