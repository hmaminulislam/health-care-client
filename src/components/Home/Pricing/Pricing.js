import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
      <section className="py-20 bg-gray-100 text-gray-800">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="font-bold tracking-wider uppercase text-emerald-600">
              Pricing
            </span>
            <h2 className="text-4xl font-bold lg:text-5xl">
              Choose your best plan
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-full">
            <div className="flex mb-8 sm:px-4 lg:mb-0">
              <div className="flex w-full flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Frist Time</h4>
                  <span className="text-6xl font-bold">Free</span>
                </div>
                <p className="mt-3 leading-relaxed text-gray-600">
                  Etiam ac convallis enim, eget euismod dolor.
                </p>
                <ul className="flex-1 mb-6 text-gray-600">
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 text-emerald-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>4 hour support</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 text-emerald-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Maximum 1 times a month</span>
                  </li>
                  <li className="flex mb-2 space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 text-emerald-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Daily email notifications</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-emerald-600 text-gray-50"
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="flex mb-8 sm:px-4 lg:mb-0">
              <div className="flex w-full flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-emerald-600 text-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Family</h4>
                  <span className="text-6xl font-bold">
                    $24
                    <span className="text-sm tracking-wide">/month</span>
                  </span>
                </div>
                <p className="leading-relaxed">
                  Morbi cursus ut sapien sit amet consectetur.
                </p>
                <ul className="flex-1 space-y-2">
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Everything in Free</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>24 hour support</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Maximum 2 times a month</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Daily email notifications</span>
                  </li>
                </ul>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-block w-full px-5 py-3 font-bold tracking-wider text-center rounded bg-gray-100 text-emerald-600"
                >
                  Get Started
                </Link>
              </div>
            </div>
            <div className="flex mb-8 sm:px-4 lg:mb-0">
              <div className="w-full p-6 space-y-6 rounded shadow sm:p-8 bg-gray-50">
                <div className="space-y-2">
                  <h4 className="text-2xl font-bold">Team</h4>
                  <span className="text-6xl font-bold">
                    $72
                    <span className="text-sm tracking-wide">/month</span>
                  </span>
                </div>
                <p className="leading-relaxed text-gray-600">
                  Phasellus ultrices bibendum nibh in vehicula.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 text-emerald-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Everything in Includes</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 text-emerald-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>24 hour support</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 text-emerald-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Unlimited groups</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 text-emerald-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Video screen captures</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6 text-emerald-600"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span>Daily email notifications</span>
                  </li>
                </ul>
                <Link
                  rel="noopener noreferrer"
                  href="#"
                  className="inline-block w-full px-5 py-3 font-semibold tracking-wider text-center rounded bg-emerald-600 text-gray-50"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Pricing;