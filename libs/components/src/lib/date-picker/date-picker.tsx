'use client';

import { cn } from '@wexelcode/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import * as React from 'react';

import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../..';

interface DatePickerProps {
  initialDate?: Date;
  onSelect?: (date?: Date) => void;
}

export function DatePicker({ initialDate, onSelect }: DatePickerProps) {
  const [date, setDate] = React.useState<Date | undefined>(initialDate);

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-full justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon />
          {date ? format(date, 'PPP') : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => {
            setDate(date);
            onSelect?.(date);
          }}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
