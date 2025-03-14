import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogTrigger,
} from '@wexelcode/components';
import { ClipboardListIcon, PlusCircleIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { QuestionnaireDialog } from '../questions';

export function MedicalScreeningInfoCard() {
  const t = useTranslations('appointments.medicalScreeningCard');

  return (
    <Card>
      <CardHeader>{t('title')}</CardHeader>

      <CardContent>
        <Dialog>
          <div className="text-center py-6 border-2 border-dashed border-gray-200 rounded-lg">
            <ClipboardListIcon className="w-12 h-12 mx-auto text-gray-400" />
            <p className="mt-2 text-gray-600">{t('noScreening')}</p>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-blue-600 ">
                <PlusCircleIcon className="w-5 h-5 mr-1" />
                {t('complete')}
              </Button>
            </DialogTrigger>
          </div>
          <QuestionnaireDialog />
        </Dialog>
      </CardContent>
    </Card>
  );
}
