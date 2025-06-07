import React from 'react';

import { SmartMultiSelect } from '../..';
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '.';

type Props = Omit<React.ComponentProps<typeof FormField>, 'render'> &
  Omit<React.ComponentProps<typeof SmartMultiSelect>, 'onChange' | 'value'> & {
    label?: string;
    description?: string;
  };

const FormSmartMultiSelectorField = ({
  label,
  placeholder,
  emptyText,
  searchPlaceholder,
  description,
  options = [],
  maxItems,
  ...rest
}: Props) => {
  return (
    <FormField
      {...rest}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}

          <SmartMultiSelect
            options={options}
            value={field.value}
            onChange={field.onChange}
            placeholder={placeholder}
            emptyText={emptyText}
            searchPlaceholder={searchPlaceholder}
            maxItems={maxItems}
          />

          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

FormSmartMultiSelectorField.displayName = 'FormSmartMultiSelectorField';

export { FormSmartMultiSelectorField };
