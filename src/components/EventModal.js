import React, { useState } from 'react';
import { X, Clock, MapPin, Users, Edit2, Save, Calendar, Trash2 } from 'lucide-react';
import { format } from 'date-fns';

const EventModal = ({ event, isOpen, onClose, onSave, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedEvent, setEditedEvent] = useState(event || {});

  if (!isOpen || !event) return null;

  const handleEdit = () => {
    setIsEditing(true);
    setEditedEvent({ ...event });
  };

  const handleSave = () => {
    onSave(editedEvent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedEvent({ ...event });
  };

  const handleInputChange = (field, value) => {
    setEditedEvent(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const formatDateTime = (dateString) => {
    return format(new Date(dateString), 'MMM d, yyyy • h:mm a');
  };

  const getEventTypeColor = (type) => {
    switch (type) {
      case 'work': return 'bg-goodnotes-blue';
      case 'personal': return 'bg-goodnotes-green';
      case 'learning': return 'bg-goodnotes-purple';
      case 'professional': return 'bg-goodnotes-orange';
      default: return 'bg-goodnotes-gray';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className={`w-4 h-4 rounded-full ${getEventTypeColor(event.type)}`}></div>
            <h2 className="text-xl font-bold text-goodnotes-dark">Event Details</h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event Title</label>
            {isEditing ? (
              <input
                type="text"
                value={editedEvent.title || ''}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-goodnotes-blue"
              />
            ) : (
              <h3 className="text-lg font-semibold text-goodnotes-dark">{event.title}</h3>
            )}
          </div>

          {/* Date and Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
              {isEditing ? (
                <input
                  type="datetime-local"
                  value={editedEvent.start ? new Date(editedEvent.start).toISOString().slice(0, 16) : ''}
                  onChange={(e) => handleInputChange('start', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-goodnotes-blue"
                />
              ) : (
                <div className="flex items-center space-x-2 text-goodnotes-dark">
                  <Clock className="h-4 w-4" />
                  <span>{formatDateTime(event.start)}</span>
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
              {isEditing ? (
                <input
                  type="datetime-local"
                  value={editedEvent.end ? new Date(editedEvent.end).toISOString().slice(0, 16) : ''}
                  onChange={(e) => handleInputChange('end', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-goodnotes-blue"
                />
              ) : (
                <div className="flex items-center space-x-2 text-goodnotes-dark">
                  <Clock className="h-4 w-4" />
                  <span>{formatDateTime(event.end)}</span>
                </div>
              )}
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            {isEditing ? (
              <input
                type="text"
                value={editedEvent.location || ''}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-goodnotes-blue"
                placeholder="Enter location"
              />
            ) : (
              <div className="flex items-center space-x-2 text-goodnotes-dark">
                <MapPin className="h-4 w-4" />
                <span>{event.location || 'No location specified'}</span>
              </div>
            )}
          </div>

          {/* Participants */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Participants</label>
            {isEditing ? (
              <input
                type="text"
                value={editedEvent.participants ? editedEvent.participants.join(', ') : ''}
                onChange={(e) => handleInputChange('participants', e.target.value.split(', ').filter(p => p.trim()))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-goodnotes-blue"
                placeholder="Enter participants separated by commas"
              />
            ) : (
              <div className="flex items-center space-x-2 text-goodnotes-dark">
                <Users className="h-4 w-4" />
                <span>{event.participants && event.participants.length > 0 ? event.participants.join(', ') : 'No participants'}</span>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
            {isEditing ? (
              <textarea
                value={editedEvent.description || ''}
                onChange={(e) => handleInputChange('description', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-goodnotes-blue"
                rows="3"
                placeholder="Enter event description"
              />
            ) : (
              <p className="text-goodnotes-dark">{event.description || 'No description available'}</p>
            )}
          </div>

          {/* Event Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
            {isEditing ? (
              <select
                value={editedEvent.type || ''}
                onChange={(e) => handleInputChange('type', e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-goodnotes-blue"
              >
                <option value="work">Work</option>
                <option value="personal">Personal</option>
                <option value="learning">Learning</option>
                <option value="professional">Professional</option>
              </select>
            ) : (
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${getEventTypeColor(event.type)}`}></div>
                <span className="text-goodnotes-dark capitalize">{event.type}</span>
              </div>
            )}
          </div>

          {/* From Todo indicator */}
          {event.isFromTodo && (
            <div className="bg-goodnotes-yellow/10 border border-goodnotes-yellow/20 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <Calendar className="h-4 w-4 text-goodnotes-yellow" />
                <span className="text-sm text-goodnotes-dark">This event was extracted from handwritten notes</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <div>
            {!isEditing && (
              <button
                onClick={() => onDelete && onDelete(event.id)}
                className="flex items-center space-x-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <Trash2 className="h-4 w-4" />
                <span>Delete Event</span>
              </button>
            )}
          </div>
          
          <div className="flex items-center space-x-3">
            {isEditing ? (
              <>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 px-4 py-2 bg-goodnotes-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
                >
                  <Save className="h-4 w-4" />
                  <span>Save Changes</span>
                </button>
              </>
            ) : (
              <button
                onClick={handleEdit}
                className="flex items-center space-x-2 px-4 py-2 bg-goodnotes-blue text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                <Edit2 className="h-4 w-4" />
                <span>Edit Event</span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventModal; 