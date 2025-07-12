import React, { useState } from 'react';
import { Bot, MessageCircle, Calendar, Users, Brain, Sparkles, AlertTriangle, BarChart3, Plus, Clock } from 'lucide-react';
import { mockAgentActions } from '../mockData';

const AgentPanel = ({ isVisible, onToggle, onScheduleEvent }) => {
  const [selectedAction, setSelectedAction] = useState(null);
  const [activeTab, setActiveTab] = useState('actions'); // 'actions', 'summary', 'suggestions'

  const getActionIcon = (type) => {
    switch (type) {
      case 'meeting_conflict': return <AlertTriangle className="h-5 w-5 text-goodnotes-red" />;
      case 'smart_scheduling': return <Brain className="h-5 w-5 text-goodnotes-purple" />;
      case 'inter_agent_communication': return <MessageCircle className="h-5 w-5 text-goodnotes-green" />;
      default: return <Bot className="h-5 w-5 text-goodnotes-blue" />;
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-goodnotes-red/10 border-goodnotes-red text-goodnotes-red';
      case 'medium': return 'bg-goodnotes-orange/10 border-goodnotes-orange text-goodnotes-orange';
      case 'low': return 'bg-goodnotes-green/10 border-goodnotes-green text-goodnotes-green';
      default: return 'bg-goodnotes-gray/10 border-goodnotes-gray text-goodnotes-gray';
    }
  };

  const formatTime = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const mockWeeklySummary = {
    totalMeetings: 26,
    workMeetings: 15,
    personalMeetings: 7,
    learningMeetings: 4,
    busyDays: ['Monday', 'Wednesday', 'Friday'],
    lightDays: ['Saturday', 'Sunday'],
    conflictCount: 2,
    suggestionCount: 5
  };

  const mockPrioritySuggestions = [
    {
      id: 1,
      type: 'high_priority',
      title: 'Client presentation conflicts with Sprint Planning',
      suggestion: 'Move Sprint Planning to 2:00 PM to prioritize client presentation',
      impact: 'High revenue impact - Client presentation should take priority',
      action: 'reschedule'
    },
    {
      id: 2,
      type: 'optimization',
      title: 'Group downtown meetings together',
      suggestion: 'Move team bonding lunch to same day as client meeting',
      impact: 'Save 45 minutes travel time',
      action: 'optimize'
    },
    {
      id: 3,
      type: 'friend_meeting',
      title: 'Coffee with Sarah Johnson',
      suggestion: 'Schedule casual coffee meeting with Sarah',
      impact: 'Strengthen professional relationship',
      action: 'schedule',
      suggestedTime: '2024-07-10T15:30:00',
      duration: 60
    }
  ];

  const handleScheduleFriendMeeting = (suggestion) => {
    const newEvent = {
      id: Date.now(),
      title: suggestion.title,
      start: suggestion.suggestedTime,
      end: new Date(new Date(suggestion.suggestedTime).getTime() + suggestion.duration * 60000).toISOString(),
      type: 'personal',
      participants: ['Sarah Johnson'],
      location: 'Coffee Shop Downtown',
      description: 'Casual coffee meeting to catch up and strengthen professional relationship',
      color: '#34C759'
    };
    
    if (onScheduleEvent) {
      onScheduleEvent(newEvent);
    }
  };

  return (
    <div className={`fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 z-50 ${
      isVisible ? 'translate-x-0' : 'translate-x-full'
    }`}>
      <div className="agent-glow h-full flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-goodnotes-gray/30 bg-gradient-to-r from-goodnotes-purple/5 to-goodnotes-blue/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-goodnotes-purple/20 rounded-lg">
                <Bot className="h-6 w-6 text-goodnotes-purple" />
              </div>
              <div>
                <h3 className="font-semibold text-goodnotes-dark">AI Agent</h3>
                <p className="text-xs text-goodnotes-light-gray">Smart scheduling assistant</p>
              </div>
            </div>
            <button
              onClick={onToggle}
              className="p-2 hover:bg-goodnotes-gray/50 rounded-lg transition-colors"
            >
              <span className="text-goodnotes-light-gray">✕</span>
            </button>
          </div>
        </div>

        {/* Agent Status */}
        <div className="p-4 bg-goodnotes-gray/20">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-goodnotes-green rounded-full animate-pulse"></div>
            <span className="text-sm text-goodnotes-dark font-medium">Active & Monitoring</span>
          </div>
          <p className="text-xs text-goodnotes-light-gray mt-1">
            Automatically managing your schedule and coordinating with other agents
          </p>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-goodnotes-gray/30">
          <button
            onClick={() => setActiveTab('actions')}
            className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'actions' 
                ? 'text-goodnotes-blue border-b-2 border-goodnotes-blue' 
                : 'text-goodnotes-light-gray hover:text-goodnotes-dark'
            }`}
          >
            <div className="flex items-center justify-center space-x-1">
              <Bot className="h-4 w-4" />
              <span>Actions</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('summary')}
            className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'summary' 
                ? 'text-goodnotes-blue border-b-2 border-goodnotes-blue' 
                : 'text-goodnotes-light-gray hover:text-goodnotes-dark'
            }`}
          >
            <div className="flex items-center justify-center space-x-1">
              <BarChart3 className="h-4 w-4" />
              <span>Summary</span>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('suggestions')}
            className={`flex-1 px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === 'suggestions' 
                ? 'text-goodnotes-blue border-b-2 border-goodnotes-blue' 
                : 'text-goodnotes-light-gray hover:text-goodnotes-dark'
            }`}
          >
            <div className="flex items-center justify-center space-x-1">
              <Sparkles className="h-4 w-4" />
              <span>Suggestions</span>
            </div>
          </button>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-4">
          {activeTab === 'actions' && (
            <div>
              <h4 className="text-sm font-semibold text-goodnotes-dark mb-3">Recent Actions</h4>
              <div className="space-y-3">
                {mockAgentActions.map((action) => (
                  <div
                    key={action.id}
                    className={`p-3 rounded-lg border cursor-pointer transition-all hover:shadow-md ${
                      selectedAction?.id === action.id ? 'bg-goodnotes-blue/5 border-goodnotes-blue' : 'bg-white border-goodnotes-gray/30'
                    }`}
                    onClick={() => setSelectedAction(selectedAction?.id === action.id ? null : action)}
                  >
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {getActionIcon(action.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(action.priority)}`}>
                            {action.priority}
                          </span>
                          <span className="text-xs text-goodnotes-light-gray">
                            {formatTime(action.timestamp)}
                          </span>
                        </div>
                        <p className="text-sm text-goodnotes-dark leading-relaxed">
                          {action.message}
                        </p>
                        
                        {selectedAction?.id === action.id && (
                          <div className="mt-3 space-y-2">
                            <p className="text-xs text-goodnotes-light-gray">Available actions:</p>
                            <div className="flex flex-wrap gap-2">
                              {action.actions.map((actionName, index) => (
                                <button
                                  key={index}
                                  className="text-xs bg-goodnotes-blue text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors"
                                >
                                  {actionName}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'summary' && (
            <div>
              <h4 className="text-sm font-semibold text-goodnotes-dark mb-3">Weekly Schedule Summary</h4>
              
              {/* Overview Stats */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-goodnotes-blue/10 p-3 rounded-lg">
                  <div className="text-lg font-bold text-goodnotes-blue">{mockWeeklySummary.totalMeetings}</div>
                  <div className="text-xs text-goodnotes-dark">Total Meetings</div>
                </div>
                <div className="bg-goodnotes-red/10 p-3 rounded-lg">
                  <div className="text-lg font-bold text-goodnotes-red">{mockWeeklySummary.conflictCount}</div>
                  <div className="text-xs text-goodnotes-dark">Conflicts</div>
                </div>
              </div>

              {/* Meeting Breakdown */}
              <div className="mb-4">
                <h5 className="text-sm font-medium text-goodnotes-dark mb-2">Meeting Types</h5>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-goodnotes-blue rounded-full"></div>
                      <span className="text-sm text-goodnotes-dark">Work</span>
                    </div>
                    <span className="text-sm font-medium text-goodnotes-dark">{mockWeeklySummary.workMeetings}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-goodnotes-green rounded-full"></div>
                      <span className="text-sm text-goodnotes-dark">Personal</span>
                    </div>
                    <span className="text-sm font-medium text-goodnotes-dark">{mockWeeklySummary.personalMeetings}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-goodnotes-purple rounded-full"></div>
                      <span className="text-sm text-goodnotes-dark">Learning</span>
                    </div>
                    <span className="text-sm font-medium text-goodnotes-dark">{mockWeeklySummary.learningMeetings}</span>
                  </div>
                </div>
              </div>

              {/* Schedule Intensity */}
              <div className="mb-4">
                <h5 className="text-sm font-medium text-goodnotes-dark mb-2">Schedule Intensity</h5>
                <div className="space-y-2">
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-goodnotes-dark">Busy Days</span>
                      <span className="text-xs text-goodnotes-red">High</span>
                    </div>
                    <div className="text-xs text-goodnotes-light-gray">
                      {mockWeeklySummary.busyDays.join(', ')}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs text-goodnotes-dark">Light Days</span>
                      <span className="text-xs text-goodnotes-green">Low</span>
                    </div>
                    <div className="text-xs text-goodnotes-light-gray">
                      {mockWeeklySummary.lightDays.join(', ')}
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Insights */}
              <div className="bg-goodnotes-purple/10 p-3 rounded-lg">
                <h5 className="text-sm font-medium text-goodnotes-purple mb-2">AI Insights</h5>
                <ul className="text-xs text-goodnotes-dark space-y-1">
                  <li>• Peak productivity time: 9-11 AM</li>
                  <li>• Recommend moving learning sessions to afternoon</li>
                  <li>• Consider blocking focus time on busy days</li>
                  <li>• {mockWeeklySummary.suggestionCount} optimization opportunities identified</li>
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'suggestions' && (
            <div>
              <h4 className="text-sm font-semibold text-goodnotes-dark mb-3">Priority Suggestions</h4>
              <div className="space-y-3">
                {mockPrioritySuggestions.map((suggestion) => (
                  <div key={suggestion.id} className="bg-white border border-goodnotes-gray/30 rounded-lg p-3">
                    <div className="flex items-start space-x-3">
                      <div className="flex-shrink-0 mt-1">
                        {suggestion.type === 'high_priority' && <AlertTriangle className="h-4 w-4 text-goodnotes-red" />}
                        {suggestion.type === 'optimization' && <Brain className="h-4 w-4 text-goodnotes-purple" />}
                        {suggestion.type === 'friend_meeting' && <Users className="h-4 w-4 text-goodnotes-green" />}
                      </div>
                      <div className="flex-1">
                        <h5 className="text-sm font-medium text-goodnotes-dark mb-1">{suggestion.title}</h5>
                        <p className="text-xs text-goodnotes-light-gray mb-2">{suggestion.suggestion}</p>
                        <p className="text-xs text-goodnotes-dark mb-3">
                          <strong>Impact:</strong> {suggestion.impact}
                        </p>
                        
                        {suggestion.type === 'friend_meeting' ? (
                          <button
                            onClick={() => handleScheduleFriendMeeting(suggestion)}
                            className="flex items-center space-x-1 text-xs bg-goodnotes-green text-white px-3 py-1 rounded-lg hover:bg-green-600 transition-colors"
                          >
                            <Plus className="h-3 w-3" />
                            <span>Schedule Meeting</span>
                          </button>
                        ) : (
                          <div className="flex space-x-2">
                            <button className="text-xs bg-goodnotes-blue text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors">
                              Apply
                            </button>
                            <button className="text-xs border border-goodnotes-gray text-goodnotes-dark px-3 py-1 rounded-lg hover:bg-gray-50 transition-colors">
                              Dismiss
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Agent Features Preview */}
        <div className="p-4 border-t border-goodnotes-gray/30 bg-goodnotes-gray/10">
          <h4 className="text-sm font-semibold text-goodnotes-dark mb-3">Agent Capabilities</h4>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 text-goodnotes-purple" />
              <span className="text-xs text-goodnotes-dark">Smart conflict resolution</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-goodnotes-blue" />
              <span className="text-xs text-goodnotes-dark">Inter-agent communication</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-goodnotes-green" />
              <span className="text-xs text-goodnotes-dark">Automatic scheduling</span>
            </div>
            <div className="flex items-center space-x-2">
              <Brain className="h-4 w-4 text-goodnotes-orange" />
              <span className="text-xs text-goodnotes-dark">Energy-level optimization</span>
            </div>
          </div>
          
          <div className="mt-3 p-2 bg-goodnotes-purple/10 rounded-lg">
            <p className="text-xs text-goodnotes-dark">
              <strong>Coming Soon:</strong> Full agent-to-agent negotiation for meeting scheduling and automatic priority-based conflict resolution.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentPanel; 