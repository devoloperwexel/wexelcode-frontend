import { ChevronDown } from 'lucide-react';

import {
  Badge,
  Button,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '../..';

type DropdownOption = {
  label: string;
  value: string;
};

type DropdownSelectorProps = {
  options: DropdownOption[];
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

const DropdownSelector: React.FC<DropdownSelectorProps> = ({
  value,
  options,
  placeholder,
  onChange,
}) => {
  const selectedOption = options.find((option) => option.value === value);

  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="w-full">
          <Button
            variant="outline"
            className="w-full flex items-center justify-between"
          >
            <div className="text-sm font-normal">
              {selectedOption ? selectedOption.label : placeholder}
            </div>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-100" align="start">
          <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
            {options.map((option) => (
              <DropdownMenuRadioItem key={option.value} value={option.value}>
                {option.label}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

DropdownSelector.displayName = 'DropdownSelector';

type DropdownMultiSectorProps = {
  options: DropdownOption[];
  value?: string[];
  placeholder?: string;
  onChange: (value: string[]) => void;
};

const DropdownMultiSector: React.FC<DropdownMultiSectorProps> = ({
  value = [],
  options,
  placeholder,
  onChange,
}) => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="w-full">
          <Button
            variant="outline"
            className="w-full flex items-center justify-between"
          >
            <div className="flex space-x-2 flex-wrap text-sm font-normal">
              {value.length > 0
                ? value.map((v) => {
                    const option = options.find((o) => o.value === v);
                    return (
                      <Badge key={v} variant="secondary">
                        {option?.label ?? option?.value}
                      </Badge>
                    );
                  })
                : placeholder}
            </div>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-100" align="start">
          {options.map((option) => {
            const handleChecked = (checked: boolean) => {
              if (checked) {
                onChange([...value, option.value]);
              } else {
                onChange(value.filter((v) => v !== option.value));
              }
            };

            return (
              <DropdownMenuCheckboxItem
                key={option.value}
                checked={value.includes(option.value)}
                onCheckedChange={handleChecked}
              >
                {option.label}
              </DropdownMenuCheckboxItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

DropdownMultiSector.displayName = 'DropdownMultiSector';

export { DropdownMultiSector, DropdownSelector };
