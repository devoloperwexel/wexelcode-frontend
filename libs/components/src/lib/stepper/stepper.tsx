import React, { Fragment } from 'react';

interface Step {
  title: string;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

export function Stepper({ steps, currentStep }: StepperProps) {
  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => (
        <Fragment key={index}>
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index <= currentStep
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600'
              }`}
            >
              {index + 1}
            </div>
            <span className="text-xs mt-1">{step.title}</span>
          </div>
          {index < steps.length - 1 && (
            <div
              className={`h-1 w-12 mx-2 ${
                index < currentStep ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            ></div>
          )}
        </Fragment>
      ))}
    </div>
  );
}
