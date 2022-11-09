import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="p-6 bg-gray-100 text-gray-800 mt-20">
        <div className="container grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Getting started</h2>
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <Link>
                Installation
              </Link>
              <Link>
                Release Notes
              </Link>
              <Link>
                Upgrade Guide
              </Link>
              <Link>
                Using with Preprocessors
              </Link>
              <Link>
                Optimizing for Production
              </Link>
              <Link>
                Browser Support
              </Link>
              <Link>
                IntelliSense
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Core Concepts</h2>
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <Link>
                Utility-First
              </Link>
              <Link>
                Responsive Design
              </Link>
              <Link>
                Hover, Focus, &amp; Other States
              </Link>
              <Link>
                Dark Mode
              </Link>
              <Link>
                Adding Base Styles
              </Link>
              <Link>
                Extracting Components
              </Link>
              <Link>
                Adding New Utilities
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Customization</h2>
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <Link>
                Configuration
              </Link>
              <Link>
                Theme Configuration
              </Link>
              <Link>
                Breakpoints
              </Link>
              <Link>
                Customizing Colors
              </Link>
              <Link>
                Customizing Spacing
              </Link>
              <Link>
                Configuring Variants
              </Link>
              <Link>
                Plugins
              </Link>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Community</h2>
            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <Link>
                GitHub
              </Link>
              <Link>
                Discord
              </Link>
              <Link>
                Twitter
              </Link>
              <Link>
                YouTube
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center px-6 pt-12 text-sm">
          <span className="text-gray-600">
            © Copyright 2022. All Rights Reserved.
          </span>
        </div>
      </footer>
    );
};

export default Footer;