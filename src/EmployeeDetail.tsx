import React from 'react';
import { data, useParams } from 'react-router-dom';
import employeesData from './Employees';




const SimpleCO2Predictions: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const employee = employeesData.find(emp => emp.id === parseInt(id || '0'));

  // Generate 10 years of predictions (2024-2033)
  const generateYearlyPredictions = () => {
    const baseYear = 2024;
    const baseEmissions = employee?.totalEmissionsPerWeek;
    const predictions = [];

    for (let i = 0; i < 10; i++) {
      const year = baseYear + i;
      let weeklyEmissions = baseEmissions;
      
      // Apply reduction factors based on year
      if (i >= 1) weeklyEmissions *= 0.92; // 8% reduction per year initially
      if (i >= 3) weeklyEmissions *= 0.85; // Additional reduction for hybrid work
      if (i >= 6) weeklyEmissions *= 0.6;  // Electric transport adoption
      if (i >= 8) weeklyEmissions *= 0.3;  // Future mobility solutions
      
      const annualEmissions = weeklyEmissions * 52; // 52 weeks per year
      
      predictions.push({
        year,
        weeklyEmissions: Math.round(weeklyEmissions * 10) / 10,
        annualEmissions: Math.round(annualEmissions * 10) / 10
      });
    }
    
    return predictions;
  };

  const predictions = generateYearlyPredictions();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800">
            {employee?.name} <span className="text-gray-600 font-normal">Project CO2 Emissions over Ten years</span>
          </h1>
        </div>

        {/* 10 Year Grid */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid grid-cols-10 gap-4">
            
            {/* Year Headers */}
            {predictions.map((prediction) => (
              <div key={prediction.year} className="text-center">
                <div className="bg-blue-500 text-white p-3 rounded-t font-bold text-sm">
                  {prediction.year}
                </div>
                <div className="bg-blue-50 p-4 rounded-b border-x border-b border-blue-200">
                  <div className="text-lg font-bold text-gray-800 mb-1">
                    {prediction.weeklyEmissions}
                  </div>
                  <div className="text-xs text-gray-600 mb-2">kg/week</div>
                  <div className="text-sm font-semibold text-blue-600">
                    {prediction.annualEmissions}
                  </div>
                  <div className="text-xs text-gray-500">kg/year</div>
                </div>
              </div>
            ))}
            
          </div>
          
          {/* Summary */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-green-50 p-4 rounded">
                <div className="text-2xl font-bold text-green-600">
                  {Math.round(((predictions[0].annualEmissions - predictions[9].annualEmissions) / predictions[0].annualEmissions) * 100)}%
                </div>
                <div className="text-sm text-gray-600">Total Reduction</div>
              </div>
              <div className="bg-orange-50 p-4 rounded">
                <div className="text-2xl font-bold text-orange-600">
                  {predictions[0].annualEmissions}
                </div>
                <div className="text-sm text-gray-600">2024 Baseline (kg)</div>
              </div>
              <div className="bg-purple-50 p-4 rounded">
                <div className="text-2xl font-bold text-purple-600">
                  {predictions[9].annualEmissions}
                </div>
                <div className="text-sm text-gray-600">2033 Projected (kg)</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default SimpleCO2Predictions;


