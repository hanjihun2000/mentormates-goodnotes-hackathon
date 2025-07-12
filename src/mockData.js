// Mock data for the application - Workplace focused
export const mockTasks = [
  {
    id: 1,
    text: "Client presentation for Q1 strategy",
    originalText: "Client presentation for Q1 strategy",
    time: "Tuesday 10AM",
    priority: "high",
    category: "work",
    suggestedSlot: "2024-01-16T10:00:00",
    participants: ["John Smith (Client)", "Marketing Team"],
    location: "Conference Room A",
    estimatedDuration: "90 minutes"
  },
  {
    id: 2,
    text: "Team bonding lunch - New restaurant",
    originalText: "Team bonding lunch - New restaurant",
    time: "Wednesday 12PM",
    priority: "medium",
    category: "work",
    suggestedSlot: "2024-01-17T12:00:00",
    participants: ["Sarah Johnson", "Mike Chen", "Lisa Park", "David Kim"],
    location: "Olive Garden Downtown",
    estimatedDuration: "120 minutes"
  },
  {
    id: 3,
    text: "Leadership training workshop",
    originalText: "Leadership training workshop",
    time: "Thursday 2PM",
    priority: "medium",
    category: "learning",
    suggestedSlot: "2024-01-18T14:00:00",
    isUpskilling: true,
    location: "Training Room B",
    estimatedDuration: "180 minutes"
  },
  {
    id: 4,
    text: "Weekly standup with development team",
    originalText: "Weekly standup with development team",
    time: "Friday 9AM",
    priority: "high",
    category: "work",
    suggestedSlot: "2024-01-19T09:00:00",
    participants: ["Dev Team", "Product Manager"],
    location: "Zoom Meeting",
    estimatedDuration: "30 minutes"
  },
  {
    id: 5,
    text: "Performance review preparation",
    originalText: "Performance review preparation",
    time: "Monday 3PM",
    priority: "high",
    category: "work",
    suggestedSlot: "2024-01-15T15:00:00",
    location: "Private Office",
    estimatedDuration: "60 minutes"
  },
  {
    id: 6,
    text: "Budget planning meeting with finance",
    originalText: "Budget planning meeting with finance",
    time: "",
    priority: "high",
    category: "work",
    suggestedSlot: "2024-01-16T15:00:00",
    participants: ["CFO", "Finance Team"],
    location: "Executive Conference Room",
    estimatedDuration: "120 minutes"
  },
  {
    id: 7,
    text: "1-on-1 with team members this week",
    originalText: "1-on-1 with team members this week",
    time: "",
    priority: "medium",
    category: "work",
    suggestedSlot: "2024-01-17T15:00:00",
    participants: ["Team Member"],
    location: "Manager's Office",
    estimatedDuration: "60 minutes"
  }
];

export const mockCalendarEvents = [
  // Monday - Jan 15
  {
    id: 1,
    title: "Morning Team Standup",
    start: "2024-01-15T09:00:00",
    end: "2024-01-15T09:30:00",
    color: "#007AFF",
    type: "work",
    participants: ["Development Team", "Product Manager"],
    location: "Conference Room A",
    description: "Daily progress updates and blockers discussion"
  },
  {
    id: 2,
    title: "Client Onboarding Meeting",
    start: "2024-01-15T14:00:00",
    end: "2024-01-15T15:30:00",
    color: "#FF9500",
    type: "work",
    participants: ["New Client", "Sales Team", "Account Manager"],
    location: "Executive Conference Room",
    description: "Welcome new client and discuss project requirements"
  },
  {
    id: 3,
    title: "Coffee Chat with Sarah",
    start: "2024-01-15T16:00:00",
    end: "2024-01-15T16:30:00",
    color: "#FFCC02",
    type: "personal",
    participants: ["Sarah Johnson"],
    location: "Cafe Downstairs",
    description: "Informal catch-up and networking"
  },
  
  // Tuesday - Jan 16
  {
    id: 4,
    title: "Sprint Planning Session",
    start: "2024-01-16T10:00:00",
    end: "2024-01-16T12:00:00",
    color: "#34C759",
    type: "work",
    participants: ["Scrum Master", "Development Team", "QA Team"],
    location: "Agile Room",
    description: "Plan upcoming sprint goals and task assignments"
  },
  {
    id: 5,
    title: "Marketing Review Meeting",
    start: "2024-01-16T14:00:00",
    end: "2024-01-16T15:00:00",
    color: "#FF3B30",
    type: "work",
    participants: ["Marketing Team", "Creative Director"],
    location: "Marketing Conference Room",
    description: "Review Q1 marketing campaigns and strategies"
  },
  {
    id: 6,
    title: "Dentist Appointment",
    start: "2024-01-16T17:30:00",
    end: "2024-01-16T18:30:00",
    color: "#8E8E93",
    type: "personal",
    participants: ["Dr. Smith"],
    location: "Downtown Dental Clinic",
    description: "Routine dental checkup and cleaning"
  },
  
  // Wednesday - Jan 17
  {
    id: 7,
    title: "Product Strategy Meeting",
    start: "2024-01-17T09:30:00",
    end: "2024-01-17T11:00:00",
    color: "#AF52DE",
    type: "work",
    participants: ["Product Team", "Engineering Leads", "Design Team"],
    location: "Product War Room",
    description: "Discuss product roadmap and feature prioritization"
  },
  {
    id: 8,
    title: "Lunch & Learn: AI in Business",
    start: "2024-01-17T12:00:00",
    end: "2024-01-17T13:00:00",
    color: "#5AC8FA",
    type: "learning",
    participants: ["All Employees"],
    location: "Main Conference Room",
    description: "Guest speaker on AI implementation in business"
  },
  {
    id: 9,
    title: "All-Hands Company Meeting",
    start: "2024-01-17T16:00:00",
    end: "2024-01-17T17:00:00",
    color: "#AF52DE",
    type: "work",
    participants: ["All Employees"],
    location: "Main Auditorium",
    description: "Quarterly results and company updates"
  },
  
  // Thursday - Jan 18
  {
    id: 10,
    title: "Design Review Session",
    start: "2024-01-18T10:00:00",
    end: "2024-01-18T11:30:00",
    color: "#FF9500",
    type: "work",
    participants: ["Design Team", "UX Research", "Product Manager"],
    location: "Design Studio",
    description: "Review new feature designs and user research findings"
  },
  {
    id: 11,
    title: "1-on-1 with Manager",
    start: "2024-01-18T11:00:00",
    end: "2024-01-18T11:30:00",
    color: "#FF3B30",
    type: "work",
    participants: ["Direct Manager"],
    location: "Manager's Office",
    description: "Weekly check-in and career development discussion"
  },
  {
    id: 12,
    title: "Technical Architecture Review",
    start: "2024-01-18T15:00:00",
    end: "2024-01-18T16:30:00",
    color: "#007AFF",
    type: "work",
    participants: ["Senior Engineers", "Tech Lead", "CTO"],
    location: "Engineering Conference Room",
    description: "Review system architecture and scalability plans"
  },
  {
    id: 13,
    title: "Gym Session",
    start: "2024-01-18T18:00:00",
    end: "2024-01-18T19:00:00",
    color: "#34C759",
    type: "personal",
    participants: ["Personal Trainer"],
    location: "Company Gym",
    description: "Weekly workout session and fitness training"
  },
  
  // Friday - Jan 19
  {
    id: 14,
    title: "Weekly Team Standup",
    start: "2024-01-19T09:00:00",
    end: "2024-01-19T09:30:00",
    color: "#007AFF",
    type: "work",
    participants: ["Development Team", "Product Manager"],
    location: "Conference Room A",
    description: "Weekly progress updates and planning"
  },
  {
    id: 15,
    title: "Client Demo Preparation",
    start: "2024-01-19T11:00:00",
    end: "2024-01-19T12:00:00",
    color: "#FF9500",
    type: "work",
    participants: ["Sales Team", "Demo Engineer"],
    location: "Demo Room",
    description: "Prepare for upcoming client product demonstration"
  },
  {
    id: 16,
    title: "Cross-team Collaboration Workshop",
    start: "2024-01-19T13:00:00",
    end: "2024-01-19T15:00:00",
    color: "#5AC8FA",
    type: "work",
    participants: ["Marketing", "Sales", "Product", "Engineering"],
    location: "Innovation Lab",
    description: "Improve inter-department communication and processes"
  },
  {
    id: 17,
    title: "Happy Hour with Team",
    start: "2024-01-19T17:00:00",
    end: "2024-01-19T19:00:00",
    color: "#FFCC02",
    type: "personal",
    participants: ["Team Members"],
    location: "Local Sports Bar",
    description: "End of week team bonding and celebration"
  },
  
  // Saturday - Jan 20
  {
    id: 18,
    title: "Weekend Project Planning",
    start: "2024-01-20T10:00:00",
    end: "2024-01-20T11:00:00",
    color: "#8E8E93",
    type: "personal",
    participants: ["Self"],
    location: "Home Office",
    description: "Plan personal projects and side initiatives"
  },
  {
    id: 19,
    title: "Family Brunch",
    start: "2024-01-20T12:00:00",
    end: "2024-01-20T14:00:00",
    color: "#FF3B30",
    type: "personal",
    participants: ["Family"],
    location: "Hometown Diner",
    description: "Monthly family gathering and meal"
  },
  
  // Sunday - Jan 21
  {
    id: 20,
    title: "Online Course: Leadership Skills",
    start: "2024-01-21T14:00:00",
    end: "2024-01-21T16:00:00",
    color: "#AF52DE",
    type: "learning",
    participants: ["Self"],
    location: "Home",
    description: "Continue leadership development course from LinkedIn Learning"
  },
  
  // Sample To-Do Tasks (showing as scheduled)
  {
    id: 21,
    title: "Client presentation for Q1 strategy",
    start: "2024-01-16T10:00:00",
    end: "2024-01-16T11:30:00",
    color: "#FF3B30",
    type: "work",
    participants: ["John Smith (Client)", "Marketing Team"],
    location: "Conference Room A",
    description: "Q1 strategy presentation - extracted from handwritten notes",
    isFromTodo: true
  },
  {
    id: 22,
    title: "Team bonding lunch - New restaurant",
    start: "2024-01-17T12:00:00",
    end: "2024-01-17T14:00:00",
    color: "#FFCC02",
    type: "work",
    participants: ["Sarah Johnson", "Mike Chen", "Lisa Park", "David Kim"],
    location: "Olive Garden Downtown",
    description: "Team bonding activity - extracted from handwritten notes",
    isFromTodo: true
  },
  {
    id: 23,
    title: "Leadership training workshop",
    start: "2024-01-18T14:00:00",
    end: "2024-01-18T17:00:00",
    color: "#AF52DE",
    type: "learning",
    participants: ["Training Team"],
    location: "Training Room B",
    description: "Leadership skills development - extracted from handwritten notes",
    isFromTodo: true
  },
  {
    id: 24,
    title: "Weekly standup with development team",
    start: "2024-01-19T09:00:00",
    end: "2024-01-19T09:30:00",
    color: "#007AFF",
    type: "work",
    participants: ["Dev Team", "Product Manager"],
    location: "Zoom Meeting",
    description: "Weekly development standup - extracted from handwritten notes",
    isFromTodo: true
  },
  {
    id: 25,
    title: "Performance review preparation",
    start: "2024-01-15T15:00:00",
    end: "2024-01-15T16:00:00",
    color: "#FF3B30",
    type: "work",
    participants: ["Self"],
    location: "Private Office",
    description: "Prepare for upcoming performance review - extracted from handwritten notes",
    isFromTodo: true
  },
  {
    id: 26,
    title: "Budget planning meeting with finance",
    start: "2024-01-16T15:00:00",
    end: "2024-01-16T17:00:00",
    color: "#FF3B30",
    type: "work",
    participants: ["CFO", "Finance Team"],
    location: "Executive Conference Room",
    description: "Q1 budget planning session - extracted from handwritten notes",
    isFromTodo: true
  },
  {
    id: 27,
    title: "1-on-1 with team members this week",
    start: "2024-01-17T15:00:00",
    end: "2024-01-17T16:00:00",
    color: "#007AFF",
    type: "work",
    participants: ["Team Member 1"],
    location: "Manager's Office",
    description: "Weekly 1-on-1 meeting - extracted from handwritten notes",
    isFromTodo: true
  },
  
  // July 6-12, 2024 - Sample Tasks Week
  // Saturday - July 6
  {
    id: 28,
    title: "Weekend project planning session",
    start: "2024-07-06T10:00:00",
    end: "2024-07-06T11:30:00",
    color: "#8E8E93",
    type: "personal",
    participants: ["Self"],
    location: "Home Office",
    description: "Plan upcoming personal and work projects",
    isFromTodo: true
  },
  {
    id: 29,
    title: "Grocery shopping and meal prep",
    start: "2024-07-06T14:00:00",
    end: "2024-07-06T16:00:00",
    color: "#34C759",
    type: "personal",
    participants: ["Self"],
    location: "Local Market",
    description: "Weekly grocery run and meal preparation",
    isFromTodo: true
  },
  
  // Sunday - July 7
  {
    id: 30,
    title: "Review quarterly goals and progress",
    start: "2024-07-07T09:00:00",
    end: "2024-07-07T10:30:00",
    color: "#FF9500",
    type: "work",
    participants: ["Self"],
    location: "Home Office",
    description: "Quarterly self-assessment and goal review",
    isFromTodo: true
  },
  {
    id: 31,
    title: "Call parents and family check-in",
    start: "2024-07-07T16:00:00",
    end: "2024-07-07T17:00:00",
    color: "#FF3B30",
    type: "personal",
    participants: ["Family"],
    location: "Home",
    description: "Weekly family catch-up call",
    isFromTodo: true
  },
  
  // Monday - July 8
  {
    id: 32,
    title: "Team standup and sprint planning",
    start: "2024-07-08T09:00:00",
    end: "2024-07-08T10:00:00",
    color: "#007AFF",
    type: "work",
    participants: ["Development Team", "Scrum Master"],
    location: "Conference Room A",
    description: "Weekly team standup and sprint planning session",
    isFromTodo: true
  },
  {
    id: 33,
    title: "Client proposal presentation prep",
    start: "2024-07-08T14:00:00",
    end: "2024-07-08T16:00:00",
    color: "#FF3B30",
    type: "work",
    participants: ["Sales Team", "Product Manager"],
    location: "Meeting Room B",
    description: "Prepare presentation for new client proposal",
    isFromTodo: true
  },
  {
    id: 34,
    title: "Gym workout - leg day",
    start: "2024-07-08T18:00:00",
    end: "2024-07-08T19:30:00",
    color: "#34C759",
    type: "personal",
    participants: ["Personal Trainer"],
    location: "Fitness Center",
    description: "Lower body strength training session",
    isFromTodo: true
  },
  
  // Tuesday - July 9
  {
    id: 35,
    title: "Budget review with finance team",
    start: "2024-07-09T10:00:00",
    end: "2024-07-09T11:30:00",
    color: "#FF9500",
    type: "work",
    participants: ["Finance Team", "CFO"],
    location: "Executive Conference Room",
    description: "Monthly budget review and planning session",
    isFromTodo: true
  },
  {
    id: 36,
    title: "Doctor appointment - annual checkup",
    start: "2024-07-09T15:00:00",
    end: "2024-07-09T16:00:00",
    color: "#8E8E93",
    type: "personal",
    participants: ["Dr. Johnson"],
    location: "Medical Center",
    description: "Annual health checkup and routine tests",
    isFromTodo: true
  },
  {
    id: 37,
    title: "Read industry reports and research",
    start: "2024-07-09T20:00:00",
    end: "2024-07-09T21:00:00",
    color: "#AF52DE",
    type: "learning",
    participants: ["Self"],
    location: "Home",
    description: "Stay updated with industry trends and research",
    isFromTodo: true
  },
  
  // Wednesday - July 10
  {
    id: 38,
    title: "Team building lunch with colleagues",
    start: "2024-07-10T12:00:00",
    end: "2024-07-10T13:30:00",
    color: "#FFCC02",
    type: "work",
    participants: ["Team Members"],
    location: "Italian Restaurant",
    description: "Monthly team bonding lunch outing",
    isFromTodo: true
  },
  {
    id: 39,
    title: "Performance review with direct reports",
    start: "2024-07-10T15:00:00",
    end: "2024-07-10T17:00:00",
    color: "#FF3B30",
    type: "work",
    participants: ["Direct Reports"],
    location: "Manager's Office",
    description: "Monthly performance review meetings",
    isFromTodo: true
  },
  {
    id: 40,
    title: "Online course - Leadership skills",
    start: "2024-07-10T19:00:00",
    end: "2024-07-10T20:30:00",
    color: "#AF52DE",
    type: "learning",
    participants: ["Self"],
    location: "Home",
    description: "Continue leadership development course",
    isFromTodo: true
  },
  
  // Thursday - July 11
  {
    id: 41,
    title: "Product roadmap planning session",
    start: "2024-07-11T09:30:00",
    end: "2024-07-11T11:30:00",
    color: "#007AFF",
    type: "work",
    participants: ["Product Team", "Engineering Leads"],
    location: "Innovation Lab",
    description: "Plan product roadmap for next quarter",
    isFromTodo: true
  },
  {
    id: 42,
    title: "Car maintenance appointment",
    start: "2024-07-11T14:00:00",
    end: "2024-07-11T15:30:00",
    color: "#8E8E93",
    type: "personal",
    participants: ["Mechanic"],
    location: "Auto Service Center",
    description: "Routine car maintenance and oil change",
    isFromTodo: true
  },
  {
    id: 43,
    title: "Networking event - Tech meetup",
    start: "2024-07-11T18:00:00",
    end: "2024-07-11T20:00:00",
    color: "#5AC8FA",
    type: "professional",
    participants: ["Tech Community"],
    location: "Downtown Event Center",
    description: "Monthly tech networking and knowledge sharing",
    isFromTodo: true
  },
  
  // Friday - July 12
  {
    id: 44,
    title: "Weekly team retrospective",
    start: "2024-07-12T10:00:00",
    end: "2024-07-12T11:00:00",
    color: "#007AFF",
    type: "work",
    participants: ["Development Team"],
    location: "Agile Room",
    description: "Weekly sprint retrospective and improvement planning",
    isFromTodo: true
  },
  {
    id: 45,
    title: "Client demo and feedback session",
    start: "2024-07-12T14:00:00",
    end: "2024-07-12T15:30:00",
    color: "#FF9500",
    type: "work",
    participants: ["Client", "Demo Team"],
    location: "Demo Room",
    description: "Product demonstration and client feedback collection",
    isFromTodo: true
  },
  {
    id: 46,
    title: "Happy hour with team - End of week",
    start: "2024-07-12T17:00:00",
    end: "2024-07-12T19:00:00",
    color: "#FFCC02",
    type: "personal",
    participants: ["Team Members"],
    location: "Local Bar",
    description: "End of week celebration and team bonding",
    isFromTodo: true
  }
];

export const mockMicroCourses = {
  "leadership": [
    {
      id: 1,
      title: "Executive Leadership Essentials",
      provider: "LinkedIn Learning",
      duration: "3h 45m",
      url: "https://www.linkedin.com/learning/executive-leadership",
      rating: 4.9,
      description: "Develop core leadership skills for senior management roles"
    },
    {
      id: 2,
      title: "Leading Remote Teams Effectively",
      provider: "Coursera",
      duration: "2h 30m",
      url: "https://www.coursera.org/learn/leading-teams",
      rating: 4.8,
      description: "Master virtual team management and communication"
    }
  ],
  "management": [
    {
      id: 3,
      title: "Project Management Professional (PMP)",
      provider: "Udemy",
      duration: "8h 20m",
      url: "https://www.udemy.com/course/pmp-certification-exam-prep-course-pmbok-6th-edition/",
      rating: 4.7,
      description: "Complete PMP certification preparation course"
    },
    {
      id: 4,
      title: "Agile and Scrum Fundamentals",
      provider: "LinkedIn Learning",
      duration: "4h 15m",
      url: "https://www.linkedin.com/learning/agile-foundations",
      rating: 4.6,
      description: "Learn agile methodologies and scrum framework"
    }
  ],
  "communication": [
    {
      id: 5,
      title: "Effective Business Communication",
      provider: "Coursera",
      duration: "3h 30m",
      url: "https://www.coursera.org/learn/business-communication",
      rating: 4.8,
      description: "Improve workplace communication and presentation skills"
    },
    {
      id: 6,
      title: "Conflict Resolution in the Workplace",
      provider: "LinkedIn Learning",
      duration: "2h 45m",
      url: "https://www.linkedin.com/learning/conflict-resolution-foundations",
      rating: 4.7,
      description: "Handle workplace conflicts professionally and effectively"
    }
  ],
  "finance": [
    {
      id: 7,
      title: "Financial Planning and Analysis",
      provider: "Coursera",
      duration: "5h 20m",
      url: "https://www.coursera.org/learn/financial-planning-analysis",
      rating: 4.9,
      description: "Master corporate financial planning and budgeting"
    },
    {
      id: 8,
      title: "Business Intelligence and Analytics",
      provider: "Udemy",
      duration: "6h 10m",
      url: "https://www.udemy.com/course/business-intelligence-analyst-course/",
      rating: 4.6,
      description: "Learn data-driven decision making for business"
    }
  ]
};

export const mockAgentActions = [
  {
    id: 1,
    type: "meeting_conflict",
    message: "🚨 Conflict detected: Client presentation overlaps with Sprint Planning. Suggesting to move Sprint Planning to 2PM or reschedule client meeting.",
    timestamp: "2024-01-15T08:30:00",
    priority: "high",
    actions: ["Reschedule Sprint Planning", "Move Client Meeting", "Find Alternative Time", "Decline Conflict"]
  },
  {
    id: 2,
    type: "smart_scheduling",
    message: "💡 Schedule optimized: Moved leadership training to Thursday morning when you're most focused. Team bonding lunch moved to Wednesday for better team availability.",
    timestamp: "2024-01-15T07:00:00",
    priority: "medium",
    actions: ["Accept Optimization", "Review Changes", "Customize Preferences", "Revert Changes"]
  },
  {
    id: 3,
    type: "inter_agent_communication",
    message: "🤝 Coordinated with Finance team's agent: Budget planning meeting confirmed for Tuesday 3PM. Conference room reserved and agenda shared automatically.",
    timestamp: "2024-01-15T06:45:00",
    priority: "low",
    actions: ["View Meeting Details", "Download Agenda", "Send Confirmation", "Add Prep Time"]
  },
  {
    id: 4,
    type: "proactive_suggestion",
    message: "📈 Suggestion: Based on your calendar, consider scheduling 1-on-1s with team members before the performance review preparation. This will gather valuable feedback.",
    timestamp: "2024-01-15T06:00:00",
    priority: "medium",
    actions: ["Schedule 1-on-1s", "Add Prep Reminders", "Dismiss Suggestion", "Customize Timing"]
  },
  {
    id: 5,
    type: "travel_optimization",
    message: "🚗 Travel optimization: Client meeting and team lunch are both downtown. Suggested 30-minute buffer between meetings for travel time.",
    timestamp: "2024-01-15T05:30:00",
    priority: "low",
    actions: ["Accept Buffer Time", "Book Transportation", "Find Closer Venue", "Ignore Suggestion"]
  }
];

export const mockTrendingSkills = [
  "Leadership & Management",
  "Strategic Planning",
  "Team Building",
  "Project Management",
  "Business Communication",
  "Financial Analysis",
  "Change Management",
  "Conflict Resolution",
  "Performance Management",
  "Digital Transformation"
];

// Mock responses for different UI button clicks
export const mockUIResponses = {
  // When user clicks "Edit Task" button
  editTask: (taskId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Task editing mode activated",
          taskId: taskId,
          suggestions: [
            "Add specific time duration",
            "Include meeting location",
            "Add participants list",
            "Set priority level"
          ]
        });
      }, 300);
    });
  },

  // When user clicks "Schedule Task" button
  scheduleTask: (task) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const conflictingEvents = mockCalendarEvents.filter(event => {
          const taskTime = new Date(task.suggestedSlot);
          const eventTime = new Date(event.start);
          return Math.abs(taskTime - eventTime) < 3600000; // Within 1 hour
        });

        resolve({
          success: true,
          message: `"${task.text}" scheduled successfully!`,
          suggestedSlots: [
            task.suggestedSlot,
            new Date(new Date(task.suggestedSlot).getTime() + 3600000).toISOString(),
            new Date(new Date(task.suggestedSlot).getTime() + 7200000).toISOString()
          ],
          conflicts: conflictingEvents,
          roomSuggestions: [
            "Conference Room A (Available)",
            "Executive Boardroom (Available)",
            "Zoom Meeting Room 1 (Virtual)"
          ]
        });
      }, 800);
    });
  },

  // When user clicks on calendar events
  eventDetails: (eventId) => {
    const event = mockCalendarEvents.find(e => e.id === eventId);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          event: {
            ...event,
            agenda: [
              "Welcome and introductions",
              "Review previous action items",
              "Main discussion points",
              "Next steps and assignments",
              "Q&A session"
            ],
            materials: [
              "Meeting slides.pdf",
              "Project timeline.xlsx",
              "Budget report.docx"
            ],
            joinInfo: {
              meetingId: "123-456-789",
              dialIn: "+1-555-123-4567",
              webLink: "https://zoom.us/j/123456789"
            }
          }
        });
      }, 500);
    });
  },

  // When user clicks "Try Demo" button
  demoUpload: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Demo image processed successfully!",
          processingSteps: [
            "📸 Image uploaded",
            "🔍 Handwriting detected",
            "🤖 AI analyzing content",
            "📝 Tasks extracted",
            "🎯 Priorities assigned",
            "📅 Time slots suggested"
          ],
          extractedTasks: mockTasks.length,
          confidence: 0.94
        });
      }, 2000);
    });
  },

  // When user interacts with AI Agent panel
  agentAction: (actionType) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const responses = {
          'meeting_conflict': {
            success: true,
            message: "Conflict resolution options generated",
            solutions: [
              "Reschedule Sprint Planning to 2:00 PM",
              "Move client presentation to Conference Room B",
              "Suggest virtual attendance for part of the meeting",
              "Delegate presentation to team member"
            ],
            impact: "Minimal disruption to other scheduled items"
          },
          'smart_scheduling': {
            success: true,
            message: "Schedule optimization completed",
            changes: [
              "Moved leadership training to morning (high energy time)",
              "Grouped related meetings together",
              "Added buffer time between locations",
              "Scheduled prep time before important meetings"
            ],
            efficiency: "23% improvement in schedule efficiency"
          },
          'inter_agent_communication': {
            success: true,
            message: "Agent coordination successful",
            actions: [
              "Confirmed availability with 3 participants",
              "Reserved Conference Room A automatically",
              "Sent calendar invites with agenda",
              "Set up pre-meeting reminders"
            ],
            nextSteps: "All participants confirmed attendance"
          }
        };

        resolve(responses[actionType] || responses['smart_scheduling']);
      }, 1000);
    });
  },

  // When user clicks notification buttons
  notificationAction: (action) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: `Action "${action}" completed successfully`,
          timestamp: new Date().toISOString(),
          followUp: action === 'Accept' ? "Changes applied to your calendar" : "No changes made"
        });
      }, 500);
    });
  }
};

// Mock data for different meeting types and suggestions
export const mockMeetingTemplates = {
  "client_presentation": {
    duration: "90 minutes",
    participants: ["Client", "Sales Team", "Product Manager"],
    agenda: ["Introduction", "Product Demo", "Q&A", "Next Steps"],
    materials: ["Presentation slides", "Product brochure", "Pricing sheet"],
    location: "Executive Conference Room"
  },
  "team_standup": {
    duration: "30 minutes",
    participants: ["Development Team", "Scrum Master"],
    agenda: ["Yesterday's progress", "Today's goals", "Blockers", "Sprint updates"],
    materials: ["Sprint board", "Burn-down chart"],
    location: "Agile Room"
  },
  "one_on_one": {
    duration: "30 minutes",
    participants: ["Manager", "Team Member"],
    agenda: ["Performance check-in", "Career development", "Feedback", "Goal setting"],
    materials: ["Performance notes", "Development plan"],
    location: "Manager's Office"
  },
  "team_bonding": {
    duration: "120 minutes",
    participants: ["All Team Members"],
    agenda: ["Icebreaker activity", "Team lunch", "Informal discussions", "Group photo"],
    materials: ["Team building activities", "Restaurant menu"],
    location: "Off-site venue"
  }
};

// Mock OCR function
export const mockOCR = (imageFile) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        extractedText: `Client presentation for Q1 strategy - Tuesday 10AM
Team bonding lunch - New restaurant - Wednesday 12PM
Leadership training workshop - Thursday 2PM
Weekly standup with development team - Friday 9AM
Performance review preparation - Monday 3PM
Budget planning meeting with finance
1-on-1 with team members this week`,
        confidence: 0.94,
        tasks: mockTasks,
        metadata: {
          processingTime: "1.8s",
          detectedLanguage: "English",
          handwritingQuality: "Good",
          businessContext: true
        }
      });
    }, 2000); // Simulate OCR processing time
  });
};

// Mock calendar integration
export const mockCalendarIntegration = {
  authenticate: () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          user: {
            name: "John Doe",
            email: "john.doe@example.com",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format&q=80"
          }
        });
      }, 1000);
    });
  },
  
  getEvents: (startDate, endDate) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(mockCalendarEvents);
      }, 500);
    });
  },
  
  createEvent: (event) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          eventId: Math.random().toString(36).substr(2, 9),
          event: {
            ...event,
            id: Math.random().toString(36).substr(2, 9)
          }
        });
      }, 800);
    });
  },
  
  getEventDetails: (eventId) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const event = mockCalendarEvents.find(e => e.id === eventId);
        resolve({
          success: true,
          event: {
            ...event,
            agenda: [
              "Welcome and introductions",
              "Review previous action items", 
              "Main discussion points",
              "Next steps and assignments"
            ],
            materials: ["Meeting slides", "Agenda document"],
            meetingRoom: event.location || "TBD"
          }
        });
      }, 500);
    });
  }
}; 