import { CheckCircle } from 'lucide-react';

export default function AppointmentSuccessPageContent() {
  return (
    <div className="flex flex-col items-center justify-center h-full space-y-6">
      <div className="text-center space-y-6 animate-[fade-in_0.5s_ease-out]">
        <CheckCircle className="w-24 h-24 text-green-500 mx-auto" />
        <div className="space-y-2">
          <h1 className="text-4xl font-semibold text-foreground">Success!</h1>
          <p className="text-xl text-muted-foreground">
            Your appointment has been confirmed
          </p>
        </div>
      </div>
    </div>
  );
}
