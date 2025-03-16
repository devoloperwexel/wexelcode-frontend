'use client';

import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Form,
  Stepper,
} from '@wexelcode/components';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  DetailsReview,
  MedicalDetailsForm,
  PersonalDetailsForm,
} from '../../../components/details';

export default function DetailsPageContent() {
  const steps = [
    {
      title: 'Personal Details',
    },
    {
      title: 'Medical Details',
    },
    {
      title: 'Review',
    },
  ];
  const [currentStep, setCurrentStep] = useState(0);
  const form = useForm();

  const onHandleButtonClick = () => {
    // if (!form.formState.isValid) {
    //   return;
    // }

    if (currentStep === steps.length - 1) {
      console.log(form.getValues());
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Details</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <Stepper steps={steps} currentStep={currentStep} />
          {currentStep === 0 && <PersonalDetailsForm />}
          {currentStep === 1 && <MedicalDetailsForm />}
          {currentStep === 2 && <DetailsReview />}
        </Form>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={onHandleButtonClick}>Next</Button>
      </CardFooter>
    </Card>
  );
}
