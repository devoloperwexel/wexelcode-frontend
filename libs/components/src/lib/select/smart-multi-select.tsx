'use client';

import { cn } from '@wexelcode/utils';
import { Check, ChevronsUpDown, X } from 'lucide-react';
import * as React from 'react';

import { Badge } from '../..';
import { Button } from '../button/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '../command/command';
import { Popover, PopoverContent, PopoverTrigger } from '../popover/popover';

export interface SelectOption {
  value: string;
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

interface SmartMultiSelectProps {
  options: SelectOption[];
  value: string[];
  onChange: (value: string[]) => void;
  maxItems?: number;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyText?: string;
  className?: string;
  buttonClassName?: string;
  maxDisplay?: number;
}

export function SmartMultiSelect({
  options,
  value = [],
  onChange,
  placeholder = 'Select...',
  searchPlaceholder = 'Search...',
  emptyText = 'No results found.',
  className,
  buttonClassName,
  maxDisplay = 2,
  maxItems = 6,
}: SmartMultiSelectProps) {
  const [open, setOpen] = React.useState(false);

  const handleSelect = (selectedValue: string) => {
    if (value.includes(selectedValue)) {
      onChange(value.filter((v) => v !== selectedValue));
    } else if (value.length >= maxItems) {
      value.pop();
      onChange([...value, selectedValue]);
    } else {
      onChange([...value, selectedValue]);
    }
  };

  const removeItem = (itemValue: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onChange(value.filter((v) => v !== itemValue));
  };

  const selectedItems = options.filter((option) =>
    value.includes(option.value)
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn('w-full justify-between min-h-10', buttonClassName)}
        >
          <div className="flex flex-wrap gap-1 overflow-hidden">
            {selectedItems.length === 0 && (
              <span className="text-muted-foreground">{placeholder}</span>
            )}
            {selectedItems.slice(0, maxDisplay).map((option) => (
              <Badge
                key={option.value}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {option.label}
                <X
                  className="h-3 w-3 cursor-pointer"
                  onClick={(e) => removeItem(option.value, e)}
                />
              </Badge>
            ))}
            {selectedItems.length > maxDisplay && (
              <Badge variant="secondary" className="px-2">
                +{selectedItems.length - maxDisplay} more
              </Badge>
            )}
          </div>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className={cn('w-full p-0', className)}>
        <Command>
          <CommandInput placeholder={searchPlaceholder} />
          <CommandEmpty>{emptyText}</CommandEmpty>
          <CommandGroup className="max-h-[300px] overflow-y-auto">
            {options.map((option, index) => (
              <CommandItem
                key={index}
                value={option.label}
                onSelect={() => handleSelect(option.value)}
              >
                <Check
                  className={cn(
                    'mr-2 h-4 w-4',
                    value.includes(option.value) ? 'opacity-100' : 'opacity-0'
                  )}
                />
                {option.icon && <span className="mr-2">{option.icon}</span>}
                {option.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
