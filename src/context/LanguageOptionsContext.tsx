import { ReactNode, createContext, useState } from 'react';
import i18n from '../i18n';

interface LanguageOptionsProps {
  name: string;
  value: string;
}

type LanguageOptionsContextType = {
  language: string;
  setLanguage: (language: string) => void;
  languageOptions: LanguageOptionsProps[];
};

interface LanguageOptionContextProviderProps {
  children: ReactNode;
}

export const LanguageOptionsContext = createContext<LanguageOptionsContextType>(
  {} as LanguageOptionsContextType
);

export function LanguageOptionContextProvider({
  children
}: LanguageOptionContextProviderProps) {
  const [language, setLanguage] = useState('ptBR');
  const languageOptions: LanguageOptionsProps[] = [
    {
      name: 'PT',
      value: 'ptBR'
    },
    {
      name: 'EN',
      value: 'en'
    }
  ];

  const handleLanguage = (newLanguage: string) => {
    setLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
  };

  return (
    <LanguageOptionsContext.Provider
      value={{ languageOptions, language, setLanguage: handleLanguage }}
    >
      {children}
    </LanguageOptionsContext.Provider>
  );
}
