// import { useTranslation } from 'react-i18next';
import { useContext } from 'react';
import { ButtonContainer } from './styles';
import { LanguageOptionsContext } from '../../context/LanguageOptionsContext';

// const languageOptions = [
//   {
//     name: 'PT',
//     value: 'ptBR'
//   },
//   {
//     name: 'EN',
//     value: 'en'
//   }
// ];
export function LanguageSwitcher() {
  // const { i18n } = useTranslation();
  const { languageOptions, setLanguage } = useContext(LanguageOptionsContext);

  return (
    <ButtonContainer>
      {languageOptions.map(language => (
        <button
          key={language.name}
          type="button"
          onClick={() => setLanguage(language.value)}
        >
          {language.name}
        </button>
      ))}
    </ButtonContainer>
  );
}
