import type {EmployeeInterface} from './EmployeeInterface'

  const employeesData: EmployeeInterface[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    jobTitle: "Marketing Manager",
    commuteType: "Train",
    numberOfDaysCommute: 4,
    hoursCommutePerWeek: 8,
    daysOfWeekCommute: ["Monday", "Tuesday", "Thursday", "Friday"],
    totalEmissionsPerWeek: 12.3
  },
  {
    id: 2,
    name: "Michael Chen",
    jobTitle: "Software Engineer",
    commuteType: "Car",
    numberOfDaysCommute: 3,
    hoursCommutePerWeek: 6,
    daysOfWeekCommute: ["Monday", "Wednesday", "Friday"],
    totalEmissionsPerWeek: 28.5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    jobTitle: "UX Designer",
    commuteType: "Bike",
    numberOfDaysCommute: 5,
    hoursCommutePerWeek: 5,
    daysOfWeekCommute: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    totalEmissionsPerWeek: 0
  },
  {
    id: 4,
    name: "James Wilson",
    jobTitle: "Data Analyst",
    commuteType: "Bus",
    numberOfDaysCommute: 2,
    hoursCommutePerWeek: 4,
    daysOfWeekCommute: ["Tuesday", "Thursday"],
    totalEmissionsPerWeek: 8.7
  },
  {
    id: 5,
    name: "Lisa Thompson",
    jobTitle: "Project Manager",
    commuteType: "Remote",
    numberOfDaysCommute: 0,
    hoursCommutePerWeek: 0,
    daysOfWeekCommute: [],
    totalEmissionsPerWeek: 0
  }
];

export default employeesData

