import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../SectionTitle';
import { Form } from './Form';
import { Container } from './styles';

export function FormContact() {
  const { t } = useTranslation();

  return (
    <Container>
      <SectionTitle
        title={
          <>
            {t('do-you-need')} <br /> {t('my-services')}
          </>
        }
        description={
          <>
            {t('fill-out-form')} <br /> {t('i-will-return')}
          </>
        }
      />
      <Form />
    </Container>
  );
}
