import { Questionnaire } from '@wexelcode/types';
import { ClipboardListIcon } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface QuestionsNavigationMenuProps {
  local: string;
  questionnaires: Questionnaire[];
  currentIndex: number;
  onSelect: (index: number) => void;
}

export default function QuestionsNavigationMenu({
  local,
  currentIndex,
  questionnaires,
  onSelect,
}: QuestionsNavigationMenuProps) {
  const tabsContainerRef = useRef<HTMLDivElement>(null);
  const activeTabRef = useRef<HTMLButtonElement>(null);

  const scrollTabIntoView = (index: number) => {
    if (activeTabRef.current && tabsContainerRef.current) {
      activeTabRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
    }
  };
  useEffect(() => {
    scrollTabIntoView(currentIndex);
  }, [currentIndex]);

  return (
    <div className="max-w-screen-xl">
      <div className="w-full h-2">
        <div
          className="bg-primary h-full transition-all duration-300 ease-in-out"
          style={{
            width: `${((currentIndex + 1) / questionnaires.length) * 100}%`,
          }}
        />
      </div>

      <div
        ref={tabsContainerRef}
        className="flex overflow-x-auto border-b border-gray-200  no-scrollbar"
      >
        {questionnaires.map((questionnaire, index) => (
          <button
            key={questionnaire.id}
            ref={currentIndex === index ? activeTabRef : null}
            onClick={() => onSelect(index)}
            className={`
              px-4 py-3 text-sm sm:text-base font-medium whitespace-nowrap
              transition-all duration-200 ease-in-out
              flex items-center gap-2 flex-shrink-0
              ${
                currentIndex === index
                  ? 'text-primary-600 border-b-2 border-primary bg-white'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
              }
            `}
            aria-selected={currentIndex === index}
            role="tab"
          >
            <ClipboardListIcon className="w-4 h-4" />
            {questionnaire.name[local]}
          </button>
        ))}
      </div>
    </div>
  );
}
