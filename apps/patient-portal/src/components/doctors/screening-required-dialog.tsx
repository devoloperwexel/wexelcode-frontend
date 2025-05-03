import { AlertCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
interface MedicalScreeningDialogProps {
  onCancel: () => void;
  onCompleteScreening: () => void;
}
export default function ScreeningRequiredDialog({
  onCancel,
  onCompleteScreening,
}: MedicalScreeningDialogProps) {
  const t = useTranslations('doctors.doctorPage.screeningRequiredDialog');
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div
        className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 animate-in fade-in duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-title"
      >
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 text-amber-500">
            <AlertCircle size={24} />
          </div>
          <div className="flex-1">
            <h2
              id="dialog-title"
              className="text-lg font-medium text-gray-900 mb-2"
            >
              {t("title")}
            </h2>
            <p className="text-gray-600 mb-6">
            {t("text")}
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={onCancel}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {t("cancel")}
              </button>
              <button
                onClick={onCompleteScreening}
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/80 transition-colors"
              >
                {t("complete")}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
