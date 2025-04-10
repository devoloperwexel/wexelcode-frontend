import React from 'react';

import { PhoneInput } from '../../';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '.';

type Props = Omit<React.ComponentProps<typeof FormField>, 'render'> &
  React.ComponentProps<typeof PhoneInput> & {
    label?: string;
    placeholder?: string;
    description?: string;
  };

const FormPhoneInputField = ({
  label,
  placeholder,
  description,
  ...rest
}: Props) => {
  return (
    <FormField
      {...rest}
      render={({ field }) => {
        return (
          <FormItem>
            {label && <FormLabel>{label}</FormLabel>}
            <FormControl>
              <PhoneInput {...field} placeholder={placeholder} {...rest} />
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

FormPhoneInputField.displayName = 'FormPhoneInputField';

export { FormPhoneInputField };
