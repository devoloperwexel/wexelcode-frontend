import { FormField, FormMessage } from '@wexelcode/components';
import { Question } from '@wexelcode/types';
import { PenLineIcon } from 'lucide-react';
import React from 'react';

import QuestionTooltip from './tooltip';

interface TextQuestionProps {
  question: Question;
  local: string;
}

export const TextQuestion: React.FC<TextQuestionProps> = ({
  question,
  local,
}) => {
  return (
    <FormField
      name={question.id}
      rules={{
        required: 'This field is required',
      }}
      render={({ field }) => (
        <div className="p-4 border border-gray-200 rounded-lg bg-white hover:border-blue-200 transition-all duration-200">
          <div className="mb-3 font-medium text-gray-800 flex items-center gap-2">
            <PenLineIcon className="w-4 h-4 text-gray-400" />
            {question.text[local]}
            {question.tooltip && (
              <QuestionTooltip tooltip={question.tooltip[local]} />
            )}
          </div>

          <textarea
            {...field}
            className="w-full p-3 border border-gray-300 rounded-md
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          transition-all duration-200
          placeholder:text-gray-400"
            rows={3}
          />

          <FormMessage />
        </div>
      )}
    />
  );
};
