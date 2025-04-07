'use client';

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
} from '@wexelcode/components';
import { useRouter } from 'next/navigation';
import { useLocale, useTranslations } from 'next-intl';

interface LanguageItem {
  language: string;
  country: string;
}

interface LocalSwitcherProps {
  languages: LanguageItem[];
}

const LanguageSwitchItem = ({ language, country }: LanguageItem) => {
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

const LanguageSwitch = ({ languages }: LocalSwitcherProps) => {
  const router = useRouter();
  const activeLocale = useLocale();

  const changeLanguage = (newLocale: string) => {
    // TODO: Add a function to change the language in the app
  };

  const activeLocalItem =
    languages.find((locale) => locale.language === activeLocale) ||
    languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'}>
          <LanguageSwitchItem
            language={activeLocalItem.language}
            country={activeLocalItem.country}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={activeLocale}
          onValueChange={changeLanguage}
        >
          {languages.map((language) => (
            <DropdownMenuRadioItem
              value={language.language}
              key={language.language}
            >
              <LanguageSwitchItem
                language={language.language}
                country={language.country}
              />
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { LanguageSwitch };
