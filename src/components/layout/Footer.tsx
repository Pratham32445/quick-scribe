
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 border-t border-slate-100">
      <div className="content-wrap py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <span className="text-xl md:text-2xl font-bold bg-gradient-to-r from-quikscribe-600 to-quikscribe-500 bg-clip-text text-transparent">
                Quikscribe
              </span>
            </a>
            <p className="text-slate-600 text-xs md:text-sm mb-4 max-w-xs">
              AI-powered transcription service that turns your meetings, lectures and interviews into searchable, shareable notes.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="text-slate-400 hover:text-quikscribe-600 transition-colors"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 md:w-5 md:h-5"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-quikscribe-600 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 md:w-5 md:h-5"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
            </div><br />
            <a href="mailto:support@quikscribe.in" className="text-slate-500 hover:text-quikscribe-600 transition-colors">
              support@quikscribe.in
            </a><br />
            <a href="https://wa.me/919082410984" className="text-slate-500 hover:text-quikscribe-600 transition-colors">
            +91 90824 10984
            </a>
          </div>

          <div>
            <h3 className="font-medium text-xs md:text-sm mb-3">Product</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-slate-600 hover:text-quikscribe-600 text-xs md:text-sm transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-slate-600 hover:text-quikscribe-600 text-xs md:text-sm transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-quikscribe-600 text-xs md:text-sm transition-colors"
                >
                  API
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-quikscribe-600 text-xs md:text-sm transition-colors"
                >
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-xs md:text-sm mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-quikscribe-600 text-xs md:text-sm transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-quikscribe-600 text-xs md:text-sm transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-quikscribe-600 text-xs md:text-sm transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-quikscribe-600 text-xs md:text-sm transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium text-xs md:text-sm mb-3">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-quikscribe-600 text-xs md:text-sm transition-colors"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-quikscribe-600 text-xs md:text-sm transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-quikscribe-600 text-xs md:text-sm transition-colors"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-slate-600 hover:text-quikscribe-600 text-xs md:text-sm transition-colors"
                >
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-8 md:mt-12 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-500 text-xs md:text-sm">
            © {currentYear} Quikscribe.in. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <a
              href="#"
              className="text-slate-500 hover:text-quikscribe-600 text-xs md:text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-slate-500 hover:text-quikscribe-600 text-xs md:text-sm transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
