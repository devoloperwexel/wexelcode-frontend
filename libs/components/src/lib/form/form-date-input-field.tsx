import React from 'react';

import { DatePicker } from '../..';
import {
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '.';

type Props = Omit<React.ComponentProps<typeof FormField>, 'render'> & {
  label?: string;
  initialDate?: Date;
  description?: string;
};

const FormDateInputField = ({
  label,
  initialDate,
  description,
  ...rest
}: Props) => {
  return (
    <FormField
      {...rest}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <DatePicker initialDate={initialDate} onSelect={field.onChange} />
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

FormDateInputField.displayName = 'FormDateInputField';

export { FormDateInputField };
