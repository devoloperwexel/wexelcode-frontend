import {
  FormDateInputField,
  FormInputField,
  FormSelectField,
} from '@wexelcode/components';

export function MedicalDetailsForm() {
  return (
    <div className="space-y-4">
      <h1>Medical Details Form</h1>

      <div>
        <FormInputField label="Occupation" name="occupation" />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <FormInputField label="Weight (kg)" name="weight" />
        <FormInputField label="Height (cm)" name="height" />
      </div>
    </div>
  );
}
