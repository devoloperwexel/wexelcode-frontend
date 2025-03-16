import {
  FormDateInputField,
  FormInputField,
  FormSelectField,
} from '@wexelcode/components';

export function PersonalDetailsForm() {
  return (
    <div className="space-y-4">
      <h1>Personal Details Form</h1>

      <div className="grid grid-cols-2 gap-6">
        <FormDateInputField label="Date of Birth" name="dateOfBirth" />

        <FormSelectField
          label="Gender"
          name="gender"
          options={[
            {
              label: 'Male',
              value: 'male',
            },
            {
              label: 'Female',
              value: 'female',
            },
          ]}
        />
      </div>

      <div>
        <FormInputField label="Address" name="address" />
      </div>

      <div className="grid grid-cols-3 gap-6">
        <FormInputField label="City" name="city" />
        <FormInputField label="Country" name="county" />
        <FormInputField label="Zipcode" name="zipcode" />
      </div>
    </div>
  );
}
