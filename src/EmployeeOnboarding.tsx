import React, { useState } from 'react';
import { CheckCircle, Circle, User, Building, Car, FileText, Gift, Coffee, ChevronRight, ChevronLeft } from 'lucide-react';

interface OnboardingStep {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  completed: boolean;
}

interface EmployeeData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    emergencyContact: string;
  };
  jobInfo: {
    department: string;
    position: string;
    startDate: string;
    manager: string;
    workLocation: string;
  };
  commuteInfo: {
    commuteType: string;
    daysPerWeek: number;
    parkingNeeded: boolean;
    transitPass: boolean;
  };
  preferences: {
    workStyle: string;
    communicationStyle: string;
    learningPreference: string;
  };
}

const EmployeeOnboarding: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [employeeData, setEmployeeData] = useState<EmployeeData>({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      emergencyContact: ''
    },
    jobInfo: {
      department: '',
      position: '',
      startDate: '',
      manager: '',
      workLocation: ''
    },
    commuteInfo: {
      commuteType: '',
      daysPerWeek: 5,
      parkingNeeded: false,
      transitPass: false
    },
    preferences: {
      workStyle: '',
      communicationStyle: '',
      learningPreference: ''
    }
  });

  const steps: OnboardingStep[] = [
    {
      id: 1,
      title: "Welcome",
      description: "Introduction and overview",
      icon: <Gift className="w-6 h-6" />,
      completed: completedSteps.includes(1)
    },
    {
      id: 2,
      title: "Personal Information",
      description: "Basic details and contact info",
      icon: <User className="w-6 h-6" />,
      completed: completedSteps.includes(2)
    },
    {
      id: 3,
      title: "Job Details",
      description: "Role and department information",
      icon: <Building className="w-6 h-6" />,
      completed: completedSteps.includes(3)
    },
    {
      id: 4,
      title: "Commute & Transport",
      description: "Travel preferences and needs",
      icon: <Car className="w-6 h-6" />,
      completed: completedSteps.includes(4)
    },
    {
      id: 5,
      title: "Work Preferences",
      description: "Communication and work style",
      icon: <Coffee className="w-6 h-6" />,
      completed: completedSteps.includes(5)
    },
    {
      id: 6,
      title: "Documentation",
      description: "Review and complete paperwork",
      icon: <FileText className="w-6 h-6" />,
      completed: completedSteps.includes(6)
    }
  ];

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCompletedSteps([...completedSteps, currentStep]);
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleStepClick = (stepId: number) => {
    setCurrentStep(stepId);
  };

  const updateEmployeeData = (section: keyof EmployeeData, field: string, value: any) => {
    setEmployeeData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="text-center py-8">
            <div className="mb-6">
              <Gift className="w-16 h-16 text-blue-500 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-800 mb-2">Welcome to the Team!</h2>
              <p className="text-lg text-gray-600">We're excited to have you join us. Let's get you set up for success.</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-3">What to Expect</h3>
              <ul className="text-left space-y-2 text-blue-700">
                <li>• Complete your personal and job information</li>
                <li>• Set up your commute and transport preferences</li>
                <li>• Configure your work style preferences</li>
                <li>• Review and sign necessary documents</li>
                <li>• Get access to all company resources</li>
              </ul>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="py-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={employeeData.personalInfo.firstName}
                  onChange={(e) => updateEmployeeData('personalInfo', 'firstName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={employeeData.personalInfo.lastName}
                  onChange={(e) => updateEmployeeData('personalInfo', 'lastName', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={employeeData.personalInfo.email}
                  onChange={(e) => updateEmployeeData('personalInfo', 'email', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={employeeData.personalInfo.phone}
                  onChange={(e) => updateEmployeeData('personalInfo', 'phone', e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  rows={3}
                  value={employeeData.personalInfo.address}
                  onChange={(e) => updateEmployeeData('personalInfo', 'address', e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Emergency Contact</label>
                <input
                  type="text"
                  placeholder="Name, relationship, phone number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={employeeData.personalInfo.emergencyContact}
                  onChange={(e) => updateEmployeeData('personalInfo', 'emergencyContact', e.target.value)}
                />
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="py-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Job Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={employeeData.jobInfo.department}
                  onChange={(e) => updateEmployeeData('jobInfo', 'department', e.target.value)}
                >
                  <option value="">Select Department</option>
                  <option value="Engineering">Engineering</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                  <option value="HR">Human Resources</option>
                  <option value="Finance">Finance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={employeeData.jobInfo.position}
                  onChange={(e) => updateEmployeeData('jobInfo', 'position', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
                <input
                  type="date"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={employeeData.jobInfo.startDate}
                  onChange={(e) => updateEmployeeData('jobInfo', 'startDate', e.target.value)}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Direct Manager</label>
                <input
                  type="text"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={employeeData.jobInfo.manager}
                  onChange={(e) => updateEmployeeData('jobInfo', 'manager', e.target.value)}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-2">Work Location</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={employeeData.jobInfo.workLocation}
                  onChange={(e) => updateEmployeeData('jobInfo', 'workLocation', e.target.value)}
                >
                  <option value="">Select Location</option>
                  <option value="Office">Office Only</option>
                  <option value="Remote">Remote Only</option>
                  <option value="Hybrid">Hybrid (Office + Remote)</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="py-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Commute & Transport</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary Commute Method</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={employeeData.commuteInfo.commuteType}
                  onChange={(e) => updateEmployeeData('commuteInfo', 'commuteType', e.target.value)}
                >
                  <option value="">Select Commute Type</option>
                  <option value="Car">Personal Car</option>
                  <option value="Train">Train/Subway</option>
                  <option value="Bus">Bus</option>
                  <option value="Bike">Bicycle</option>
                  <option value="Walk">Walking</option>
                  <option value="Carpool">Carpool</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Days per week in office</label>
                <input
                  type="number"
                  min="0"
                  max="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={employeeData.commuteInfo.daysPerWeek}
                  onChange={(e) => updateEmployeeData('commuteInfo', 'daysPerWeek', parseInt(e.target.value))}
                />
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="parking"
                    className="mr-3 h-4 w-4 text-blue-600"
                    checked={employeeData.commuteInfo.parkingNeeded}
                    onChange={(e) => updateEmployeeData('commuteInfo', 'parkingNeeded', e.target.checked)}
                  />
                  <label htmlFor="parking" className="text-sm text-gray-700">I need a parking space</label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="transit"
                    className="mr-3 h-4 w-4 text-blue-600"
                    checked={employeeData.commuteInfo.transitPass}
                    onChange={(e) => updateEmployeeData('commuteInfo', 'transitPass', e.target.checked)}
                  />
                  <label htmlFor="transit" className="text-sm text-gray-700">I need a transit pass subsidy</label>
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="py-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Work Preferences</h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Work Style</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={employeeData.preferences.workStyle}
                  onChange={(e) => updateEmployeeData('preferences', 'workStyle', e.target.value)}
                >
                  <option value="">Select Work Style</option>
                  <option value="Collaborative">Collaborative Team Work</option>
                  <option value="Independent">Independent Work</option>
                  <option value="Mixed">Mix of Both</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Communication Style</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={employeeData.preferences.communicationStyle}
                  onChange={(e) => updateEmployeeData('preferences', 'communicationStyle', e.target.value)}
                >
                  <option value="">Select Communication Style</option>
                  <option value="Direct">Direct and Brief</option>
                  <option value="Detailed">Detailed Explanations</option>
                  <option value="Visual">Visual/Diagrams</option>
                  <option value="Verbal">Verbal Discussions</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Learning Preference</label>
                <select
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  value={employeeData.preferences.learningPreference}
                  onChange={(e) => updateEmployeeData('preferences', 'learningPreference', e.target.value)}
                >
                  <option value="">Select Learning Style</option>
                  <option value="Hands-on">Hands-on Practice</option>
                  <option value="Documentation">Reading Documentation</option>
                  <option value="Video">Video Tutorials</option>
                  <option value="Mentoring">One-on-one Mentoring</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="py-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Documentation & Completion</h2>
            <div className="space-y-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-green-800 mb-3">Onboarding Complete!</h3>
                <p className="text-green-700 mb-4">
                  Thank you for completing your onboarding process. Here's a summary of your information:
                </p>
                <div className="bg-white p-4 rounded border">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <strong>Name:</strong> {employeeData.personalInfo.firstName} {employeeData.personalInfo.lastName}
                    </div>
                    <div>
                      <strong>Department:</strong> {employeeData.jobInfo.department}
                    </div>
                    <div>
                      <strong>Position:</strong> {employeeData.jobInfo.position}
                    </div>
                    <div>
                      <strong>Commute:</strong> {employeeData.commuteInfo.commuteType} ({employeeData.commuteInfo.daysPerWeek} days/week)
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Next Steps</h3>
                <ul className="text-blue-700 space-y-2">
                  <li>• You will receive your employee handbook via email</li>
                  <li>• IT will contact you about equipment setup</li>
                  <li>• Your manager will schedule a welcome meeting</li>
                  <li>• Access to company systems will be granted within 24 hours</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return <div>Step not found</div>;
    }
  };

  const progressPercentage = (completedSteps.length / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Employee Onboarding</h1>
          <p className="text-gray-600">Complete your onboarding process step by step</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Progress</span>
            <span>{Math.round(progressPercentage)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            ></div>
          </div>
        </div>

        {/* Steps Navigation */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2">
            {steps.map((step) => (
              <button
                key={step.id}
                onClick={() => handleStepClick(step.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentStep === step.id
                    ? 'bg-blue-500 text-white'
                    : step.completed
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {step.completed ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <Circle className="w-4 h-4" />
                )}
                <span className="hidden sm:inline">{step.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          {renderStepContent()}
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between">
          <button
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              currentStep === 1
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          <button
            onClick={handleNext}
            disabled={currentStep === steps.length}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-colors ${
              currentStep === steps.length
                ? 'bg-gray-700 text-gray-700 cursor-not-allowed'
                : 'bg-blue-500 text-gray-700 hover:bg-blue-600'
            }`}
          >
            <span>{currentStep === steps.length ? 'Complete' : 'Next'}</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default EmployeeOnboarding;