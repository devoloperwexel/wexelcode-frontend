import { Check } from 'lucide-react';
import React from 'react';

import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '.';

type SelectorOption = {
  label: string;
  value: string;
};

type SelectorOptionProps = {
  option: SelectorOption;
  selected: boolean;
  onClick: () => void;
};

const SelectorItem = ({ option, selected, onClick }: SelectorOptionProps) => {
  return (
    <div
      key={option.value}
      className="flex gap-2 bg-white text-sm rounded-md border hover:bg-border p-2"
      onClick={onClick}
    >
      <div className="w-6 h-6 p-1 flex items-center justify-center rounded-md border border-border">
        {selected && <Check />}
      </div>

      {option.label}
    </div>
  );
};

type FormExpandedSelectorProps = Omit<
  React.ComponentProps<typeof FormField>,
  'render'
> & {
  label?: string;
  placeholder?: string;
  description?: string;
  options: SelectorOption[];
};

const FormExpandedSelector = ({
  label,
  placeholder,
  description,
  options,
  ...rest
}: FormExpandedSelectorProps) => {
  return (
    <FormField
      {...rest}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <div className="flex flex-col space-y-1">
            {options.map((option) => (
              <SelectorItem
                key={option.value}
                option={option}
                selected={field.value === option.value}
                onClick={() => field.onChange(option.value)}
              />
            ))}
          </div>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

FormExpandedSelector.displayName = 'FormExpandedSelector';

const FormExpandedMultiSelector = ({
  label,
  placeholder,
  description,
  options,
  ...rest
}: FormExpandedSelectorProps) => {
  return (
    <FormField
      {...rest}
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
            {label && <FormLabel>{label}</FormLabel>}
            <div className="flex flex-col space-y-1">
              {options.map((option) => (
                <SelectorItem
                  key={option.value}
                  option={option}
                  selected={selectedValues.includes(option.value)}
                  onClick={() => handleSelect(option.value)}
                />
              ))}
            </div>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

FormExpandedMultiSelector.displayName = 'FormExpandedMultiSelector';

export { FormExpandedMultiSelector, FormExpandedSelector };
