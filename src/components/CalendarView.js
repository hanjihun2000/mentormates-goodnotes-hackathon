import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Clock, Users, BookOpen } from 'lucide-react';
import { format, addDays, startOfWeek, isSameDay } from 'date-fns';

const CalendarView = ({ events, selectedDate, onDateSelect, onEventClick }) => {
  const [currentWeek, setCurrentWeek] = useState(startOfWeek(selectedDate));
  
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(currentWeek, i));
  const hours = Array.from({ length: 12 }, (_, i) => i + 8); // 8AM to 7PM

  const navigateWeek = (direction) => {
    setCurrentWeek(prev => addDays(prev, direction * 7));
  };

  const getEventsForTimeSlot = (date, hour) => {
    return events.filter(event => {
      const eventDate = new Date(event.start);
      const eventHour = eventDate.getHours();
      return isSameDay(eventDate, date) && eventHour === hour;
    });
  };

  const getEventColor = (type) => {
    switch (type) {
      case 'work': return 'bg-goodnotes-blue';
      case 'personal': return 'bg-goodnotes-green';
      case 'learning': return 'bg-goodnotes-purple';
      default: return 'bg-goodnotes-orange';
    }
  };

  const getEventIcon = (type) => {
    switch (type) {
      case 'work': return <Users className="h-3 w-3" />;
      case 'personal': return <Clock className="h-3 w-3" />;
      case 'learning': return <BookOpen className="h-3 w-3" />;
      default: return <Calendar className="h-3 w-3" />;
    }
  };

  return (
    <div className="floating-card rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-goodnotes-blue/10 rounded-lg">
            <Calendar className="h-6 w-6 text-goodnotes-blue" />
          </div>
          <h2 className="text-2xl font-bold text-goodnotes-dark">Weekly Calendar</h2>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigateWeek(-1)}
            className="p-2 hover:bg-goodnotes-gray rounded-lg transition-colors"
          >
            <ChevronLeft className="h-5 w-5 text-goodnotes-dark" />
          </button>
          <span className="text-sm font-medium text-goodnotes-dark min-w-[200px] text-center">
            {format(currentWeek, 'MMM d')} - {format(addDays(currentWeek, 6), 'MMM d, yyyy')}
          </span>
          <button
            onClick={() => navigateWeek(1)}
            className="p-2 hover:bg-goodnotes-gray rounded-lg transition-colors"
          >
            <ChevronRight className="h-5 w-5 text-goodnotes-dark" />
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* Header with days */}
          <div className="grid grid-cols-8 gap-1 mb-2">
            <div className="p-2"></div> {/* Empty cell for time column */}
            {weekDays.map((day, index) => (
              <div
                key={index}
                className={`p-2 text-center rounded-lg cursor-pointer transition-colors ${
                  isSameDay(day, selectedDate)
                    ? 'bg-goodnotes-blue text-white'
                    : 'hover:bg-goodnotes-gray'
                }`}
                onClick={() => onDateSelect(day)}
              >
                <div className="text-xs text-goodnotes-light-gray font-medium">
                  {format(day, 'EEE')}
                </div>
                <div className="text-sm font-semibold">
                  {format(day, 'd')}
                </div>
              </div>
            ))}
          </div>

          {/* Time slots */}
          <div className="space-y-1">
            {hours.map((hour) => (
              <div key={hour} className="grid grid-cols-8 gap-1">
                {/* Time label */}
                <div className="p-2 text-xs text-goodnotes-light-gray font-medium text-right">
                  {format(new Date().setHours(hour, 0, 0, 0), 'h:mm a')}
                </div>
                
                {/* Day columns */}
                {weekDays.map((day, dayIndex) => {
                  const timeSlotEvents = getEventsForTimeSlot(day, hour);
                  return (
                    <div
                      key={dayIndex}
                      className="p-1 min-h-[60px] border border-goodnotes-gray/30 rounded-lg hover:bg-goodnotes-gray/20 transition-colors"
                    >
                      {timeSlotEvents.map((event) => (
                        <div
                          key={event.id}
                          className={`${getEventColor(event.type)} text-white p-2 rounded-lg mb-1 cursor-pointer hover:opacity-90 transition-opacity`}
                          onClick={() => onEventClick(event)}
                        >
                          <div className="flex items-center space-x-1">
                            {getEventIcon(event.type)}
                            <span className="text-xs font-medium truncate">
                              {event.title}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 text-xs">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-goodnotes-blue rounded"></div>
          <span>Work</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-goodnotes-green rounded"></div>
          <span>Personal</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-goodnotes-purple rounded"></div>
          <span>Learning</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-goodnotes-orange rounded"></div>
          <span>Other</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarView; 