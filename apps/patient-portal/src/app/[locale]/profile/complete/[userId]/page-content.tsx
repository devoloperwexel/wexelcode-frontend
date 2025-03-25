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
  Text,
} from '@wexelcode/components';
import { useCompletePatientProfile } from '@wexelcode/hooks';
import { cn } from '@wexelcode/utils';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import {
  DetailsReview,
  MedicalDetailsForm,
  PersonalDetailsForm,
} from '../../../../../components/details';
import Routes from '../../../../../constants/routes';
import { useRouter } from '../../../../../i18n/routing';

interface DetailsPageContentProps {
  userId: string;
}

export default function DetailsPageContent({
  userId,
}: DetailsPageContentProps) {
  const t = useTranslations('profile.completeProfilePage');

  const { mutateAsync: complete } = useCompletePatientProfile();

  const { replace } = useRouter();

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

  const onHandleButtonClick = async () => {
    const valid = await form.trigger();

    if (!valid) {
      return;
    }

    if (currentStep === steps.length - 1) {
      const data = form.getValues() as any; // TODO: Fix type
      data.id = userId;

      await complete(data);

      replace(Routes.home);
    } else {
      setCurrentStep((prev) => prev + 1);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('title')}</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            className="space-y-6"
            onSubmit={form.handleSubmit((data) => console.log(data))}
          >
            <Stepper steps={steps} currentStep={currentStep} />
            {currentStep === 0 && (
              <div className="space-y-6">
                <Text variant="h4" weight="semibold">
                  {t('personalDetails')}
                </Text>
                <PersonalDetailsForm />
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-6">
                <Text variant="h4" weight="semibold">
                  {t('medicalDetails')}
                </Text>
                <MedicalDetailsForm />
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <Text variant="h4" weight="semibold">
                  {t('reviewTitle')}
                </Text>
                <DetailsReview />
              </div>
            )}
          </form>
        </Form>
      </CardContent>

      <CardFooter
        className={cn(
          'flex',
          currentStep === 0 ? 'justify-end' : 'justify-between'
        )}
      >
        {currentStep !== 0 && (
          <Button
            variant="outline"
            onClick={() => setCurrentStep((prev) => prev - 1)}
          >
            {t('back')}
          </Button>
        )}

        <Button onClick={onHandleButtonClick}>
          {currentStep === steps.length - 1 ? t('submit') : t('next')}
        </Button>
      </CardFooter>
    </Card>
  );
}
