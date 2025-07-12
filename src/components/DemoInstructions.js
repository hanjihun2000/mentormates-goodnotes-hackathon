import React, { useState } from 'react';
import { X, ArrowRight, Sparkles } from 'lucide-react';

const DemoInstructions = ({ isVisible, onClose }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    {
      title: "Welcome to ScriptSchedule! 🎉",
      description: "Transform your handwritten to-do lists into smart schedules with AI assistance.",
      icon: "🚀",
      action: "Get Started"
    },
    {
      title: "Upload Your Handwritten Notes 📝",
      description: "Click 'Try Demo' to see how our AI extracts tasks from handwritten images, or upload your own screenshot.",
      icon: "📸",
      action: "Try Demo"
    },
    {
      title: "Review & Edit Tasks ✏️",
      description: "Our AI extracts tasks with priorities and times. Edit any task before scheduling.",
      icon: "📋",
      action: "Edit Tasks"
    },
    {
      title: "Schedule to Calendar 📅",
      description: "Click the calendar icon to schedule tasks. Our AI suggests optimal time slots.",
      icon: "⏰",
      action: "Schedule"
    },
    {
      title: "Meet Your AI Agent 🤖",
      description: "Click the purple bot icon to see smart scheduling features like conflict resolution and inter-agent communication.",
      icon: "🧠",
      action: "Explore Agent"
    }
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onClose();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="floating-card rounded-2xl p-8 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-goodnotes-gray/50 rounded-lg transition-colors"
        >
          <X className="h-5 w-5 text-goodnotes-light-gray" />
        </button>

        <div className="text-center mb-6">
          <div className="text-6xl mb-4">{steps[currentStep].icon}</div>
          <h3 className="text-2xl font-bold text-goodnotes-dark mb-2">
            {steps[currentStep].title}
          </h3>
          <p className="text-goodnotes-light-gray leading-relaxed">
            {steps[currentStep].description}
          </p>
        </div>

        <div className="flex items-center justify-center space-x-2 mb-6">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentStep ? 'bg-goodnotes-blue' : 'bg-goodnotes-gray'
              }`}
            />
          ))}
        </div>

        <div className="flex justify-between items-center">
          <button
            onClick={prevStep}
            disabled={currentStep === 0}
            className={`px-4 py-2 rounded-lg transition-colors ${
              currentStep === 0
                ? 'text-goodnotes-light-gray cursor-not-allowed'
                : 'text-goodnotes-blue hover:bg-goodnotes-blue/10'
            }`}
          >
            Previous
          </button>

          <div className="text-sm text-goodnotes-light-gray">
            {currentStep + 1} of {steps.length}
          </div>

          <button
            onClick={nextStep}
            className="flex items-center space-x-2 bg-goodnotes-blue text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <span>{currentStep === steps.length - 1 ? 'Start Using' : 'Next'}</span>
            {currentStep === steps.length - 1 ? (
              <Sparkles className="h-4 w-4" />
            ) : (
              <ArrowRight className="h-4 w-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DemoInstructions; 