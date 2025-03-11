interface LanguageTagsProps {
  languages: string[];
}

export function LanguageTags({ languages }: LanguageTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {languages.map((language, index) => (
        <span
          key={index}
          className="bg-border text-gray-800 px-2 py-1 rounded-full text-xs"
        >
          {language}
        </span>
      ))}
    </div>
  );
}
