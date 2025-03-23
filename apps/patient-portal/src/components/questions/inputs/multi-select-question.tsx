import { FormField, FormItem, FormMessage } from '@wexelcode/components';
import { Question, TranslatedField } from '@wexelcode/types';
import { CheckSquareIcon, SquareIcon } from 'lucide-react';
import React from 'react';

import QuestionTooltip from './tooltip';

interface MultipleSelectQuestionProps {
  question: Question;
  local: string;
}

export const MultipleSelectQuestion: React.FC<MultipleSelectQuestionProps> = ({
  question,
  local,
}) => {
  return (
    <FormField
      name={question.id}
      rules={{
        required: 'This field is required',
      }}
      render={({ field }) => {
        const selectedValues = Array.isArray(field.value) ? field.value : [];

        const handleSelect = (isSelected: boolean, value: TranslatedField) => {
          if (isSelected) {
            field.onChange(
              selectedValues.filter((v) => v[local] !== value[local])
            );
          } else {
            field.onChange([...selectedValues, value]);
          }
        };

        const getIsSelected = (option: TranslatedField) => {
          if (!option) return false;

          return selectedValues.some((v) => v[local] === option[local]);
        };

        return (
          <FormItem>
            <div className="p-4 border border-gray-200 rounded-lg bg-white hover:border-blue-200 transition-all duration-200">
              <div className="mb-3 font-medium text-gray-800 flex items-center gap-2">
                {question.text[local]}
                {question.tooltip && (
                  <QuestionTooltip tooltip={question.tooltip[local]} />
                )}
              </div>

              <div className="space-y-3">
                {question.options.map((option, index) => {
                  const isSelected = getIsSelected(option);

                  return (
                    <label
                      key={index}
                      onClick={() => handleSelect(isSelected, option)}
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
                      <span className="ml-2 text-gray-700">
                        {option[local]}
                      </span>
                    </label>
                  );
                })}
              </div>

              <FormMessage />
            </div>
          </FormItem>
        );
      }}
    />
  );
};
