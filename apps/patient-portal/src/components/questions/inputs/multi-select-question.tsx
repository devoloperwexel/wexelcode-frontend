import { FormField, FormItem } from '@wexelcode/components';
import { Question } from '@wexelcode/types';
import { CheckSquareIcon, SquareIcon } from 'lucide-react';
import React from 'react';

interface MultipleSelectQuestionProps {
  question: Question;
  local: string;
}

export const MultipleSelectQuestion: React.FC<MultipleSelectQuestionProps> = ({
  question,
  local,
}) => {
  const options = question.options.map((option) => option[local]);

  return (
    <FormField
      name={question.id}
      render={({ field }) => {
        const selectedValues = Array.isArray(field.value) ? field.value : [];

        const handleSelect = (value: string) => {
          const newValues = selectedValues.includes(value)
            ? selectedValues.filter((v) => v !== value)
            : [...selectedValues, value];
          field.onChange(newValues);
        };

        return (
          <FormItem>
            <div className="p-4 border border-gray-200 rounded-lg bg-white hover:border-blue-200 transition-all duration-200">
              <div className="mb-3 font-medium text-gray-800 flex items-center gap-2">
                {question.text[local]}
              </div>

              <div className="space-y-3">
                {options.map((option, index) => {
                  const optionValue = option;
                  const isSelected = selectedValues.includes(optionValue);

                  return (
                    <label
                      key={index}
                      onClick={() => handleSelect(optionValue)}
                      className={`flex items-center cursor-pointer p-2 rounded-md transition-all duration-200 ${
                        isSelected ? 'bg-blue-50' : 'hover:bg-gray-50'
                      }`}
                    >
                      <div className="relative flex items-center justify-center">
                        {isSelected ? (
                          <CheckSquareIcon className="w-5 h-5 text-blue-600" />
                        ) : (
                          <SquareIcon className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                      <span className="ml-2 text-gray-700">{optionValue}</span>
                    </label>
                  );
                })}
              </div>
            </div>
          </FormItem>
        );
      }}
    />
  );
};
