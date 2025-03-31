import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import React, { useState } from 'react';

interface CalendarProps {
  initialDate?: Date;
  selectedDates?: string[]; // Array of dates in 'YYYY-MM-DD' format
  onDateSelect?: (dateStr: string) => void;
  onMonthChange?: (year: number, month: number) => void;
}

const Calendar: React.FC<CalendarProps> = ({
  initialDate = new Date(),
  selectedDates = [],
  onDateSelect,
  onMonthChange,
}) => {
  const [currentMonth, setCurrentMonth] = useState<Date>(initialDate);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  const prevMonth = () => {
    const newMonth = new Date(year, month - 1);
    setCurrentMonth(newMonth);
    onMonthChange && onMonthChange(newMonth.getFullYear(), newMonth.getMonth());
  };

  const nextMonth = () => {
    const newMonth = new Date(year, month + 1);
    setCurrentMonth(newMonth);
    onMonthChange && onMonthChange(newMonth.getFullYear(), newMonth.getMonth());
  };

  const formatDate = (year: number, month: number, day: number) => {
    return `${year}-${String(month + 1).padStart(2, '0')}-${String(
      day
    ).padStart(2, '0')}`;
  };

  const isDateSelected = (day: number) => {
    const dateStr = formatDate(year, month, day);
    return selectedDates.includes(dateStr);
  };

  const handleDayClick = (day: number) => {
    const dateStr = formatDate(year, month, day);
    onDateSelect && onDateSelect(dateStr);
  };

  // Generate calendar cells
  const renderCalendarCells = () => {
    const cells = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      cells.push(<div key={`empty-${i}`} className="h-10 p-1" />);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const selected = isDateSelected(day);

      cells.push(
        <div
          key={day}
          onClick={() => handleDayClick(day)}
          className={`h-10 p-1 border rounded-md cursor-pointer flex items-center justify-center
            ${
              selected
                ? 'bg-primary text-white'
                : 'border-gray-200 hover:bg-gray-100'
            }
            transition-colors`}
        >
          <span className="text-center">{day}</span>
        </div>
      );
    }

    return cells;
  };

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">
          {monthNames[month]} {year}
        </h3>
        <div className="flex space-x-2">
          <button
            onClick={prevMonth}
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label="Previous month"
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </button>
          <button
            onClick={nextMonth}
            className="p-1 rounded-full hover:bg-gray-100"
            aria-label="Next month"
          >
            <ChevronRightIcon className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-2">
        {dayNames.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-600 py-1"
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">{renderCalendarCells()}</div>
    </div>
  );
};

export default Calendar;
