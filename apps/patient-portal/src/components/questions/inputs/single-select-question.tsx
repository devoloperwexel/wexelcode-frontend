import { FormField } from '@wexelcode/components';
import { Question } from '@wexelcode/types';
import { CheckCircleIcon, CircleIcon } from 'lucide-react';
import React from 'react';

interface SingleSelectQuestionProps {
  question: Question;
  local: string;
}

export const SingleSelectQuestion: React.FC<SingleSelectQuestionProps> = ({
  question,
  local,
}) => {
  const options = question.options.map((option) => option[local]);

  return (
    <FormField
      name={question.id}
      render={({ field }) => {
        return (
          <div className="p-4 border border-gray-200 rounded-lg bg-white hover:border-blue-200 transition-all duration-200">
            <div className="mb-3 font-medium text-gray-800 flex items-center gap-2">
              {question.text[local]}
              {/* {question.tooltip && (
          <Tooltip content={question.tooltip[language]}>
            <HelpCircleIcon className="w-4 h-4 text-blue-500 cursor-help" />
          </Tooltip>
        )} */}
            </div>
            <div className="space-y-3">
              {options.map((option, index) => {
                const isSelected = field.value === option;
                return (
                  <label
                    key={index}
                    className={`flex items-center cursor-pointer p-2 rounded-md transition-all duration-200 ${
                      isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                  >
                    <div className="relative flex items-center justify-center">
                      <input
                        type="radio"
                        className="sr-only"
                        {...field}
                        value={option}
                      />
                      {isSelected ? (
                        <CheckCircleIcon className="w-5 h-5 text-blue-600" />
                      ) : (
                        <CircleIcon className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                    <span className="ml-2 text-gray-700">{option}</span>
                  </label>
                );
              })}
            </div>
          </div>
        );
      }}
    />
  );
};
