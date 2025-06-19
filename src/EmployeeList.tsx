import React from 'react';
import { Link } from 'react-router-dom';
import employeesData from './Employees';





const EmployeesList: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Employee Commute Dashboard
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {employeesData.map((employee, index) => (
          <Link 
          to={`/employee/${employee.id}`}
          className="block hover:shadow-lg transition-shadow"
          >
          <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-bold text-gray-800 mb-4">{employee.name}</h2>
            
            <div className="space-y-2">
              <div>
                <span className="font-semibold text-gray-600">Job Title:</span>
                <span className="ml-2 text-gray-800">{employee.jobTitle}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-600">Commute Type:</span>
                <span className="ml-2 text-gray-800">{employee.commuteType}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-600">Days per Week:</span>
                <span className="ml-2 text-gray-800">{employee.numberOfDaysCommute}</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-600">Hours per Week:</span>
                <span className="ml-2 text-gray-800">{employee.hoursCommutePerWeek}h</span>
              </div>
              
              <div>
                <span className="font-semibold text-gray-600">Commute Days:</span>
                <div className="ml-2 text-gray-800 text-sm">
                  {employee.daysOfWeekCommute.length > 0 
                    ? employee.daysOfWeekCommute.join(", ")
                    : "None"
                  }
                </div>
              </div>
              
              <div>
                <span className="font-semibold text-gray-600">Weekly Emissions:</span>
                <span className={`ml-2 font-medium ${
                  employee.totalEmissionsPerWeek === 0 
                    ? 'text-green-600' 
                    : employee.totalEmissionsPerWeek > 20 
                    ? 'text-red-600' 
                    : 'text-orange-600'
                }`}>
                  {employee.totalEmissionsPerWeek} kg CO₂
                </span>
              </div>
            </div>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default EmployeesList;