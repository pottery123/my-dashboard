export interface EmployeeInterface{
    id: number; 
    name: string;
    jobTitle: string;
    commuteType: string;
    numberOfDaysCommute: number;
    hoursCommutePerWeek: number;
    daysOfWeekCommute: string[];
    totalEmissionsPerWeek: number;
  }