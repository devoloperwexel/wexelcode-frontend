import { useFormContext } from 'react-hook-form';

export function DetailsReview() {
  const { getValues } = useFormContext();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Review Your Information</h2>
      <div className="bg-gray-50 p-4 rounded-md">
        <h3 className="font-medium mb-2">Personal Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <span className="font-medium">Birthday:</span>
            {getValues('birthday')}
          </p>
          <p>
            <span className="font-medium">Gender:</span>
            {getValues('gender')}
          </p>
          <p>
            <span className="font-medium">Address:</span> {getValues('gender')}
          </p>
          <p>
            <span className="font-medium">City:</span> {getValues('gender')}
          </p>
          <p>
            <span className="font-medium">County:</span> {getValues('gender')}
          </p>
          <p>
            <span className="font-medium">Zipcode:</span> {getValues('gender')}
          </p>
          {/* <p className="col-span-2">
              <span className="font-medium">Languages:</span>{' '}
              {formData.languages.join(', ')}
            </p> */}
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-md">
        <h3 className="font-medium mb-2">Medical Details</h3>
        <div className="grid grid-cols-2 gap-4">
          <p>
            <span className="font-medium">Occupation:</span>{' '}
            {getValues('gender')}
          </p>
          <p>
            <span className="font-medium">Weight:</span> {getValues('gender')}{' '}
            kg
          </p>
          <p>
            <span className="font-medium">Height:</span> {getValues('gender')}
            cm
          </p>
          <p className="col-span-2">
            <span className="font-medium">Activities:</span>{' '}
            {/* {formData.activities.join(', ') || 'None'} */}
          </p>
        </div>
      </div>
    </div>
  );
}
