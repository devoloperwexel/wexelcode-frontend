import React from 'react';

import { Input, Textarea } from '../../';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '.';

type Props = Omit<React.ComponentProps<typeof FormField>, 'render'> & {
  label?: string;
  placeholder?: string;
  description?: string;
  lines?: number;
  type?: React.HTMLInputTypeAttribute;
};

const FormInputField = ({
  label,
  placeholder,
  description,
  lines = 1,
  type,
  ...rest
}: Props) => {
  return (
    <FormField
      {...rest}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            {lines > 1 ? (
              <Textarea
                placeholder={placeholder}
                rows={lines}
                {...field}
                className="bg-white"
              />
            ) : (
              <Input placeholder={placeholder} {...field} type={type} />
            )}
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

FormInputField.displayName = 'FormInputField';

export { FormInputField };
