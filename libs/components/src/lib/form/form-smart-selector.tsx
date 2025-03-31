import React from 'react';

import { SmartSelect } from '../..';
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '.';

type Props = Omit<React.ComponentProps<typeof FormField>, 'render'> &
  Omit<React.ComponentProps<typeof SmartSelect>, 'onChange' | 'value'> & {
    label?: string;
    description?: string;
  };

const FormSmartSelectorField = ({
  label,
  placeholder,
  emptyText,
  searchPlaceholder,
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

          <SmartSelect
            options={options}
            value={field.value}
            onChange={field.onChange}
            placeholder={placeholder}
            emptyText={emptyText}
            searchPlaceholder={searchPlaceholder}
          />

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

FormSmartSelectorField.displayName = 'FormSmartSelectorField';

export { FormSmartSelectorField };
