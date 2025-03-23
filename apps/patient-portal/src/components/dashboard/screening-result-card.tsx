import {
  Button,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  Dialog,
  DialogTrigger,
  ProgressIndicator,
  Text,
} from '@wexelcode/components';
import { useGetAnswers } from '@wexelcode/hooks';
import { ActivityIcon, CalculatorIcon, CheckCircleIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';

import { QuestionnaireDialog } from '../questions';

export function ScreeningResultCard() {
  const { data: userData } = useSession();

  const { data: response } = useGetAnswers({
    userId: userData?.user.id,
  });

  const score = 80;

  return (
    <Card>
      <Dialog>
        <CardHeader>Latest Screening Result</CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col items-center justify-start">
            <ProgressIndicator percentage={score} />
          </div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <CalculatorIcon className="w-5 h-5 text-primary" />
              <Text>Screening Date</Text>
            </div>
            <Text variant="muted">March 23, 2025 </Text>
          </div>

          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <ActivityIcon className="w-5 h-5 text-primary" />
              <Text>Result Status</Text>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircleIcon className="w-6 h-6 text-green-500" />
              <Text variant="muted" className="!text-green-500">
                Normal
              </Text>
            </div>
          </div>
        </CardContent>

        <CardFooter className="w-full">
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full">
              Start New Screening
            </Button>
          </DialogTrigger>
        </CardFooter>
        <QuestionnaireDialog />
      </Dialog>
    </Card>
  );
}
