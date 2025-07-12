import React, { useState, useEffect } from 'react';
import { Bot, Calendar, Upload, Bell, Sparkles } from 'lucide-react';
import UploadZone from './components/UploadZone';
import TaskList from './components/TaskList';
import CalendarView from './components/CalendarView';
import AgentPanel from './components/AgentPanel';
import Logo from './components/Logo';
import DemoInstructions from './components/DemoInstructions';
import SuccessNotification from './components/SuccessNotification';
import EventModal from './components/EventModal';
import { mockOCR, mockCalendarIntegration, mockCalendarEvents } from './mockData';

function App() {
  const [currentView, setCurrentView] = useState('upload');
  const [isProcessing, setIsProcessing] = useState(false);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [extractedTasks, setExtractedTasks] = useState([]);
  const [calendarEvents, setCalendarEvents] = useState(mockCalendarEvents);
  const [selectedDate, setSelectedDate] = useState(new Date('2024-07-08'));
  const [isAgentPanelVisible, setIsAgentPanelVisible] = useState(false);
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showDemoInstructions, setShowDemoInstructions] = useState(true);
  const [notification, setNotification] = useState({ message: '', isVisible: false, type: 'success' });
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEventModalOpen, setIsEventModalOpen] = useState(false);

  // Mock authentication on component mount
  useEffect(() => {
    const authenticateUser = async () => {
      try {
        const result = await mockCalendarIntegration.authenticate();
        if (result.success) {
          setUser(result.user);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.error('Authentication failed:', error);
      }
    };
    
    authenticateUser();
  }, []);

  const handleImageUpload = async (file) => {
    setIsProcessing(true);
    setUploadedImage(URL.createObjectURL(file));
    
    try {
      // Mock OCR processing
      const result = await mockOCR(file);
      setExtractedTasks(result.tasks);
      setCurrentView('tasks');
      
      // Show extraction success notification
      setNotification({
        message: `🎉 Found ${result.tasks.length} tasks! Review and schedule them below.`,
        isVisible: true,
        type: 'success'
      });
    } catch (error) {
      console.error('OCR processing failed:', error);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleTaskUpdate = (taskId, updates) => {
    setExtractedTasks(prev => 
      prev.map(task => 
        task.id === taskId ? { ...task, ...updates } : task
      )
    );
  };

  const handleTaskSchedule = async (task) => {
    try {
      const newEvent = {
        id: calendarEvents.length + 1,
        title: task.text,
        start: task.suggestedSlot,
        end: new Date(new Date(task.suggestedSlot).getTime() + 60 * 60 * 1000).toISOString(), // 1 hour duration
        color: task.category === 'learning' ? '#AF52DE' : task.priority === 'high' ? '#FF3B30' : '#007AFF',
        type: task.category,
        description: `Scheduled from handwritten to-do list`,
        priority: task.priority,
        participants: task.participants || [],
        location: task.location || 'TBD'
      };

      setCalendarEvents(prev => [...prev, newEvent]);
      setCurrentView('calendar');
      
      // Show success notification
      setNotification({
        message: `✅ "${task.text}" scheduled successfully!`,
        isVisible: true,
        type: 'success'
      });
    } catch (error) {
      console.error('Failed to schedule task:', error);
    }
  };

  const handleEventClick = async (event) => {
    setSelectedEvent(event);
    setIsEventModalOpen(true);
  };

  const handleEventSave = (updatedEvent) => {
    setCalendarEvents(prev => 
      prev.map(event => 
        event.id === updatedEvent.id ? { ...event, ...updatedEvent } : event
      )
    );
    setIsEventModalOpen(false);
    setSelectedEvent(null);
    setNotification({
      message: `✅ Event "${updatedEvent.title}" updated successfully!`,
      isVisible: true,
      type: 'success'
    });
  };

  const handleEventDelete = (eventId) => {
    const eventToDelete = calendarEvents.find(e => e.id === eventId);
    setCalendarEvents(prev => prev.filter(event => event.id !== eventId));
    setIsEventModalOpen(false);
    setSelectedEvent(null);
    setNotification({
      message: `🗑️ Event "${eventToDelete?.title}" deleted successfully!`,
      isVisible: true,
      type: 'success'
    });
  };

  const handleEventModalClose = () => {
    setIsEventModalOpen(false);
    setSelectedEvent(null);
  };

  const navigationItems = [
    { id: 'upload', label: 'Upload', icon: Upload },
    { id: 'tasks', label: 'Tasks', icon: Calendar },
    { id: 'calendar', label: 'Calendar', icon: Calendar },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-goodnotes-gray via-goodnotes-paper to-goodnotes-gray">
      {/* Header */}
      <header className="glass-effect shadow-lg border-b border-goodnotes-gray/20 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-6">
              <Logo className="h-10 w-10" showText={true} />
              
              {/* Navigation */}
              <nav className="hidden md:flex space-x-4">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentView(item.id)}
                      className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                        currentView === item.id
                          ? 'bg-goodnotes-blue text-white'
                          : 'text-goodnotes-dark hover:bg-goodnotes-gray'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

                         <div className="flex items-center space-x-3">
               {/* Agent Toggle Button */}
               <button
                 onClick={() => setIsAgentPanelVisible(!isAgentPanelVisible)}
                 className={`relative p-3 rounded-xl transition-all duration-300 ${
                   isAgentPanelVisible
                     ? 'bg-goodnotes-purple text-white shadow-lg agent-glow'
                     : 'text-goodnotes-purple hover:bg-goodnotes-purple/10 hover:shadow-md'
                 }`}
                 title="AI Agent Assistant"
               >
                 <Bot className="h-5 w-5" />
                 {isAgentPanelVisible && (
                   <div className="absolute -top-1 -right-1 w-3 h-3 bg-goodnotes-green rounded-full animate-pulse"></div>
                 )}
               </button>

               {/* Notifications */}
               <button className="relative p-3 text-goodnotes-light-gray hover:text-goodnotes-dark rounded-xl hover:bg-goodnotes-gray/50 transition-all duration-300">
                 <Bell className="h-5 w-5" />
                 <div className="absolute -top-1 -right-1 w-2 h-2 bg-goodnotes-red rounded-full"></div>
               </button>

              {/* User Profile */}
              {isAuthenticated && user && (
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="text-sm font-medium text-goodnotes-dark">{user.name}</p>
                    <p className="text-xs text-goodnotes-light-gray">{user.email}</p>
                  </div>
                  <img
                    src={user.avatar}
                    alt="User avatar"
                    className="h-8 w-8 rounded-full"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                 {currentView === 'upload' && (
           <div className="space-y-8">
             <div className="text-center space-y-4">
               <div className="flex items-center justify-center space-x-2 mb-4">
                 <Sparkles className="h-8 w-8 text-goodnotes-blue animate-pulse" />
                 <h2 className="text-3xl font-bold text-goodnotes-dark">
                   Transform Your <span className="text-goodnotes-blue">Handwritten</span> To-Do Lists
                 </h2>
                 <Sparkles className="h-8 w-8 text-goodnotes-blue animate-pulse" />
               </div>
               <p className="text-lg text-goodnotes-light-gray max-w-2xl mx-auto">
                 Upload a screenshot of your handwritten notes and watch our AI extract and intelligently schedule your tasks
               </p>
               <div className="flex items-center justify-center space-x-6 text-sm text-goodnotes-light-gray">
                 <div className="flex items-center space-x-2">
                   <div className="w-2 h-2 bg-goodnotes-green rounded-full"></div>
                   <span>AI-Powered OCR</span>
                 </div>
                 <div className="flex items-center space-x-2">
                   <div className="w-2 h-2 bg-goodnotes-blue rounded-full"></div>
                   <span>Smart Scheduling</span>
                 </div>
                 <div className="flex items-center space-x-2">
                   <div className="w-2 h-2 bg-goodnotes-purple rounded-full"></div>
                   <span>Agent Assistance</span>
                 </div>
               </div>
               
               {/* Quick Demo Button */}
               <div className="flex justify-center">
                 <button
                   onClick={() => setShowDemoInstructions(true)}
                   className="flex items-center space-x-2 text-goodnotes-blue hover:text-goodnotes-dark transition-colors"
                 >
                   <Sparkles className="h-4 w-4" />
                   <span>Need help? View demo guide</span>
                 </button>
               </div>
             </div>
             <UploadZone onImageUpload={handleImageUpload} isProcessing={isProcessing} />
           </div>
         )}

        {currentView === 'tasks' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-goodnotes-dark mb-2">
                Review & Edit Your Tasks
              </h2>
              <p className="text-goodnotes-light-gray">
                Make any necessary edits and schedule tasks to your calendar
              </p>
            </div>
            <TaskList
              tasks={extractedTasks}
              onTaskUpdate={handleTaskUpdate}
              onTaskSchedule={handleTaskSchedule}
              uploadedImage={uploadedImage}
            />
          </div>
        )}

        {currentView === 'calendar' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-goodnotes-dark mb-2">
                Your Unified Calendar
              </h2>
              <p className="text-goodnotes-light-gray">
                View all your scheduled tasks and events in one place
              </p>
            </div>
            <CalendarView
              events={calendarEvents}
              selectedDate={selectedDate}
              onDateSelect={setSelectedDate}
              onEventClick={handleEventClick}
            />
          </div>
        )}
      </main>

             {/* Agent Panel */}
       <AgentPanel
         isVisible={isAgentPanelVisible}
         onToggle={() => setIsAgentPanelVisible(!isAgentPanelVisible)}
         onScheduleEvent={(newEvent) => {
           setCalendarEvents(prev => [...prev, newEvent]);
           setNotification({
             message: `📅 "${newEvent.title}" scheduled successfully by AI Agent!`,
             isVisible: true,
             type: 'success'
           });
         }}
       />

       {/* Demo Instructions */}
       <DemoInstructions
         isVisible={showDemoInstructions}
         onClose={() => setShowDemoInstructions(false)}
       />

       {/* Success Notification */}
       <SuccessNotification
         message={notification.message}
         isVisible={notification.isVisible}
         type={notification.type}
         onClose={() => setNotification(prev => ({ ...prev, isVisible: false }))}
       />

      {/* Event Modal */}
      <EventModal
        event={selectedEvent}
        isOpen={isEventModalOpen}
        onClose={handleEventModalClose}
        onSave={handleEventSave}
        onDelete={handleEventDelete}
      />

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-goodnotes-gray/30 px-4 py-2">
        <div className="flex justify-around">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`flex flex-col items-center space-y-1 p-2 rounded-lg transition-colors ${
                  currentView === item.id
                    ? 'text-goodnotes-blue'
                    : 'text-goodnotes-light-gray'
                }`}
              >
                <Icon className="h-5 w-5" />
                <span className="text-xs">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

export default App;