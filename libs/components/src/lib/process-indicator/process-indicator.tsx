import React, { PropsWithChildren, useEffect, useState } from 'react';

interface ProgressIndicatorProps {
  percentage: number;
  color?: string;
  label?: string;
  size?: number;
}

const ProgressIndicator = ({
  percentage,
  color = '#A51008',
  size = 160,
  children,
}: PropsWithChildren<ProgressIndicatorProps>) => {
  const radius = (size * 0.7) / 2;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const progressOffset = circumference - (circumference * percentage) / 100;
    setOffset(progressOffset);
  }, [percentage, circumference]);

  return (
    <div className="flex justify-center mb-6">
      <div className="relative">
        <svg width={size} height={size}>
          <circle
            className="text-gray-200"
            strokeWidth="10"
            stroke="currentColor"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            className="transition-all duration-500 ease-in-out"
            strokeWidth="10"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke={color}
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {children}
        </div>
      </div>
    </div>
  );
};
ProgressIndicator.displayName = 'ProgressIndicator';

export { ProgressIndicator };
