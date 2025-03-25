import React from 'react';

import { DropdownMultiSector } from '../..';
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '.';

type Props = Omit<React.ComponentProps<typeof FormField>, 'render'> &
  Omit<
    React.ComponentProps<typeof DropdownMultiSector>,
    'onChange' | 'value'
  > & {
    label?: string;
    description?: string;
  };

const FormMultiSelectorField = ({
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

          <DropdownMultiSector
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

FormMultiSelectorField.displayName = 'FormMultiSelectorField';

export { FormMultiSelectorField };
