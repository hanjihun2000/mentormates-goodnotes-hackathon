import React, { useState } from 'react';
import { Edit2, Clock, Calendar, BookOpen, Users, AlertCircle } from 'lucide-react';
import { mockMicroCourses } from '../mockData';

const TaskList = ({ tasks, onTaskUpdate, onTaskSchedule, uploadedImage }) => {
  const [editingTask, setEditingTask] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEditStart = (task) => {
    setEditingTask(task.id);
    setEditText(task.text);
  };

  const handleEditSave = (taskId) => {
    onTaskUpdate(taskId, { text: editText });
    setEditingTask(null);
    setEditText('');
  };

  const handleEditCancel = () => {
    setEditingTask(null);
    setEditText('');
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-goodnotes-red border-goodnotes-red';
      case 'medium': return 'text-goodnotes-orange border-goodnotes-orange';
      case 'low': return 'text-goodnotes-green border-goodnotes-green';
      default: return 'text-goodnotes-light-gray border-goodnotes-light-gray';
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'work': return <Users className="h-4 w-4" />;
      case 'learning': return <BookOpen className="h-4 w-4" />;
      case 'personal': return <Clock className="h-4 w-4" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  const getSuggestedCourses = (taskText) => {
    const text = taskText.toLowerCase();
    if (text.includes('leadership') || text.includes('training') || text.includes('workshop')) {
      return mockMicroCourses.leadership;
    }
    if (text.includes('management') || text.includes('planning') || text.includes('project')) {
      return mockMicroCourses.management;
    }
    if (text.includes('presentation') || text.includes('meeting') || text.includes('communication')) {
      return mockMicroCourses.communication;
    }
    if (text.includes('budget') || text.includes('finance') || text.includes('review')) {
      return mockMicroCourses.finance;
    }
    return [];
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Original Image */}
      {uploadedImage && (
        <div className="lg:w-1/2">
          <div className="bg-white rounded-lg shadow-paper p-6">
            <h3 className="text-lg font-semibold text-goodnotes-dark mb-4">Original Image</h3>
            <div className="paper-texture rounded-lg p-4">
              <img 
                src={uploadedImage} 
                alt="Uploaded to-do list" 
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
          </div>
        </div>
      )}
      
      {/* Extracted Tasks */}
      <div className={uploadedImage ? 'lg:w-1/2' : 'w-full'}>
        <div className="floating-card rounded-xl p-6">
          <div className="flex items-center space-x-2 mb-6">
            <div className="p-2 bg-goodnotes-blue/10 rounded-lg">
              <BookOpen className="h-5 w-5 text-goodnotes-blue" />
            </div>
            <h3 className="text-xl font-bold text-goodnotes-dark">Extracted Tasks</h3>
            <div className="px-3 py-1 bg-goodnotes-green/10 text-goodnotes-green text-xs rounded-full font-medium">
              {tasks.length} tasks found
            </div>
          </div>
          
          <div className="space-y-4">
            {tasks.map((task, index) => (
              <div key={task.id} className={`task-card rounded-xl p-5 border handwriting-animation`} style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      {getCategoryIcon(task.category)}
                      <span className={`text-xs px-2 py-1 rounded-full border ${getPriorityColor(task.priority)}`}>
                        {task.priority}
                      </span>
                      {task.time && (
                        <span className="text-xs text-goodnotes-light-gray flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {task.time}
                        </span>
                      )}
                    </div>
                    
                    {editingTask === task.id ? (
                      <div className="space-y-2">
                        <input
                          type="text"
                          value={editText}
                          onChange={(e) => setEditText(e.target.value)}
                          className="w-full p-2 border border-goodnotes-light-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-goodnotes-blue handwritten-text"
                          autoFocus
                        />
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEditSave(task.id)}
                            className="px-3 py-1 bg-goodnotes-green text-white rounded-lg text-sm hover:bg-green-600 transition-colors"
                          >
                            Save
                          </button>
                          <button
                            onClick={handleEditCancel}
                            className="px-3 py-1 bg-goodnotes-light-gray text-goodnotes-dark rounded-lg text-sm hover:bg-gray-400 transition-colors"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="handwritten-text text-goodnotes-dark text-lg leading-relaxed">
                        {task.text}
                      </div>
                    )}
                  </div>
                  
                  <div className="flex space-x-2 ml-4">
                    <button
                      onClick={() => handleEditStart(task)}
                      className="p-3 text-goodnotes-blue hover:bg-goodnotes-blue/10 rounded-xl transition-all duration-300 hover:shadow-md"
                      title="Edit task"
                    >
                      <Edit2 className="h-4 w-4" />
                    </button>
                    <button
                      onClick={() => onTaskSchedule(task)}
                      className="p-3 bg-goodnotes-green/10 text-goodnotes-green hover:bg-goodnotes-green hover:text-white rounded-xl transition-all duration-300 hover:shadow-md"
                      title="Schedule task"
                    >
                      <Calendar className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                {/* Micro-course suggestions for upskilling tasks */}
                {task.isUpskilling && (
                  <div className="mt-4 pt-4 border-t border-goodnotes-yellow/20">
                    <h4 className="text-sm font-medium text-goodnotes-dark mb-2">Suggested Courses:</h4>
                    <div className="space-y-2">
                      {getSuggestedCourses(task.text).slice(0, 2).map((course) => (
                        <div key={course.id} className="flex items-center justify-between p-2 bg-goodnotes-gray/50 rounded-lg">
                          <div className="flex-1">
                            <div className="text-sm font-medium text-goodnotes-dark">{course.title}</div>
                            <div className="text-xs text-goodnotes-light-gray">
                              {course.provider} • {course.duration} • ⭐ {course.rating}
                            </div>
                          </div>
                          <button 
                            onClick={() => window.open(course.url, '_blank')}
                            className="text-xs bg-goodnotes-blue text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors"
                          >
                            View
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {tasks.length === 0 && (
            <div className="text-center py-8 text-goodnotes-light-gray">
              <BookOpen className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>No tasks extracted yet. Upload an image to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskList; 