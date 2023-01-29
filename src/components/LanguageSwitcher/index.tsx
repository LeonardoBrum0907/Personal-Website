import { useTranslation } from 'react-i18next';
import { ButtonContainer } from './styles';

const languageOptions = [
  {
    name: 'PT',
    value: 'ptBR'
  },
  {
    name: 'EN',
    value: 'en'
  }
];
export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <ButtonContainer>
      {languageOptions.map(language => (
        <button
          type="button"
          onClick={() => {
            i18n.changeLanguage(language.value);
          }}
        >
          {language.name}
        </button>
      ))}
    </ButtonContainer>
  );
}
