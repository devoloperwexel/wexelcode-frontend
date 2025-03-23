import React, { useEffect, useState } from 'react';

interface ProgressIndicatorProps {
  percentage: number;
  color?: string;
  label?: string;
  size?: number;
}

const ProgressIndicator = ({
  percentage,
  color = '#A51008',
  label = 'Score',
  size = 160,
}: ProgressIndicatorProps) => {
  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const [offset, setOffset] = useState(circumference);

  useEffect(() => {
    const progressOffset = circumference - (circumference * percentage) / 100;
    setOffset(progressOffset);
  }, [percentage, circumference]);

  return (
    <div className="flex justify-center mb-6">
      <div className="relative">
        <svg className="w-40 h-40" width={size} height={size}>
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
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="text-3xl font-bold">{percentage}%</span>
          <p className="text-sm text-gray-600">{label}</p>
        </div>
      </div>
    </div>
  );
};
ProgressIndicator.displayName = 'ProgressIndicator';

export { ProgressIndicator };
