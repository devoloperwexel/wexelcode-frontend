'use client';

import { cn } from '@wexelcode/utils';
import { format } from 'date-fns';
import { de, enGB } from 'date-fns/locale';
import { CalendarIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../..';

interface DatePickerProps {
  initialDate?: Date;
  local?: string;
  onSelect?: (date?: Date) => void;
}

export function DatePicker({
  initialDate,
  onSelect,
  local = 'en',
}: DatePickerProps) {
  const [date, setDate] = useState<Date | undefined>(initialDate);
  const t = useTranslations('datePicker');

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
          {date ? (
            format(date, 'PPP', { locale: local === 'de' ? de : enGB })
          ) : (
            <span>{t('pickDate')}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={date}
          local={local}
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
