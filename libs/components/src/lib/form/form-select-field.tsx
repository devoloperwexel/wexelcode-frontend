import React from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../..';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '.';

type SelectOption = {
  value: string;
  label: string;
};

type Props = Omit<React.ComponentProps<typeof FormField>, 'render'> & {
  label?: string;
  placeholder?: string;
  description?: string;
  options: SelectOption[];
};

const FormSelectField = ({
  label,
  placeholder,
  description,
  options = [],
  ...rest
}: Props) => {
  return (
    <FormField
      {...rest}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

FormSelectField.displayName = 'FormSelectField';

export { FormSelectField };
