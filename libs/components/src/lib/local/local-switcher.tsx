'use client';

import { usePathname } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';
import { useMemo } from 'react';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../..';

interface LocalItem {
  language: string;
  country: string;
}

interface LocalSwitcherProps {
  locales: LocalItem[];
}

const LocalSwitcherItem = ({ language, country }: LocalItem) => {
  const t = useTranslations('language');

  return (
    <div className="flex items-center space-x-2">
      <Avatar className="w-8 h-8">
        <AvatarImage
          src={`https://flagcdn.com/w40/${country}.png`}
          alt={country}
        />
        <AvatarFallback>{language.toUpperCase()}</AvatarFallback>
      </Avatar>

      <span>{t(language)}</span>
    </div>
  );
};

const LocalSwitcher = ({ locales }: LocalSwitcherProps) => {
  const pathname = usePathname();

  const currentLocale = useLocale();

  const currentLocaleItem = useMemo(
    () => locales.filter((locale) => locale.language === currentLocale)[0],
    [currentLocale, locales]
  );

  const handleLocaleChange = (locale: string) => {
    const newPath = pathname.replace(`/${currentLocale}`, `/${locale}`);
    window.location.href = newPath;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'}>
          <LocalSwitcherItem
            language={currentLocaleItem.language}
            country={currentLocaleItem.country}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={currentLocale}
          onValueChange={handleLocaleChange}
        >
          {locales.map((locale) => (
            <DropdownMenuRadioItem
              value={locale.language}
              key={locale.language}
            >
              <LocalSwitcherItem
                language={locale.language}
                country={locale.country}
              />
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
LocalSwitcher.displayName = 'LocalSwitcher';

export { LocalSwitcher };
