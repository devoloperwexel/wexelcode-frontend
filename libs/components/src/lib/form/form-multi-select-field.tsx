import React from 'react';

import { MultiSelect } from '../..';
import {
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

const FormMultiSelectField = ({
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

          <MultiSelect
            options={options.map((option) => option.label)}
            selected={field.value}
            onChange={field.onChange}
            placeholder={placeholder}
          />

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

FormMultiSelectField.displayName = 'FormMultiSelectField';

export { FormMultiSelectField };
