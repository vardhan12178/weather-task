import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-200 dark:bg-gray-800 py-6 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between items-center">
          <div className="flex flex-col md:flex-row items-center md:space-x-8 mb-3">
            <a href="#" className="text-gray-800 dark:text-gray-100 hover:text-blue-500 mb-4 md:mb-0">
              About Us
            </a>
            <a href="#" className="text-gray-800 dark:text-gray-100 hover:text-blue-500 mb-4 md:mb-0">
              Contact
            </a>
            <a href="#" className="text-gray-800 dark:text-gray-100 hover:text-blue-500 mb-4 md:mb-0">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-800 dark:text-gray-100 hover:text-blue-500">
              Terms of Service
            </a>
          </div>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" aria-label="Twitter" className="text-gray-800 dark:text-gray-100 hover:text-blue-400">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#" aria-label="Facebook" className="text-gray-800 dark:text-gray-100 hover:text-blue-600">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="#" aria-label="Instagram" className="text-gray-800 dark:text-gray-100 hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>


        <div className="text-center mt-6">
          <p className="text-gray-600 dark:text-gray-400">&copy; 2024 YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
