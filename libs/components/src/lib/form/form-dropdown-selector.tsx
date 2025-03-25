import React from 'react';

import { DropdownSelector } from '../..';
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '.';

type Props = Omit<React.ComponentProps<typeof FormField>, 'render'> &
  Omit<React.ComponentProps<typeof DropdownSelector>, 'onChange' | 'value'> & {
    label?: string;
    description?: string;
  };

const FormSelectorField = ({
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

          <DropdownSelector
            options={options}
            value={field.value}
            placeholder={placeholder}
            onChange={field.onChange}
          />

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

FormSelectorField.displayName = 'FormSelectorField';

export { FormSelectorField };
