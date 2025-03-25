'use client';

import { useEffect, useRef, useState } from 'react';

interface MultiSelectProps {
  placeholder?: string;
  options: string[];
  selected?: string[];
  onChange: (selected: string[]) => void;
}

export function MultiSelect({
  placeholder,
  options,
  selected = [],
  onChange,
}: MultiSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const toggleOption = (option: string) => {
    if (selected.includes(option)) {
      onChange(selected.filter((item) => item !== option));
    } else {
      onChange([...selected, option]);
    }
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  return (
    <div className="relative" ref={containerRef}>
      <div
        className="flex flex-wrap gap-1 min-h-10 p-2 border rounded-md cursor-pointer bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected.length > 0 ? (
          selected.map((item) => (
            <span
              key={item}
              className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-md flex items-center"
            >
              {item}
              <button
                type="button"
                className="ml-1 text-blue-600 hover:text-blue-800"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleOption(item);
                }}
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                onChange={() => {}}
              >
                &times;
              </button>
            </span>
          ))
        ) : (
          <span className="text-gray-400">
            {placeholder ?? 'Select options...'}
          </span>
        )}
      </div>
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border rounded-md shadow-lg max-h-60 overflow-auto">
          {options.map((option) => (
            <div
              key={option}
              className={`px-4 py-2 cursor-pointer ${
                selected.includes(option)
                  ? 'bg-blue-50 text-blue-700'
                  : 'hover:bg-gray-100'
              }`}
              onClick={() => toggleOption(option)}
            >
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={selected.includes(option)}
                />
                {option}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
