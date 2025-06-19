import React from "react";
import NavBar from "./NavBar";
import EmployeesList from "./EmployeeList";
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  
  
  return (
    <div>

  <NavBar />
  <EmployeesList />

  <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="p-8">
        <div className="text-center">
          <div className="mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">Welcome!</h3>
          <p className="text-gray-600 mb-6">Ready to get started? Let's walk you through the basics and get you set up in just a few minutes.</p>
          <Link
             to={`/employeeonboarding`}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-md hover:shadow-lg"
          >
            Start Onboarding
          </Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Home;
