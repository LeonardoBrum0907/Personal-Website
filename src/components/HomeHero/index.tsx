import { useTranslation } from 'react-i18next';
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import pictures from '../../assets/minhaFoto.png';

const PERSONAL_DATA = {
  name: 'Leonardo Brum',
  birthDate: '2002-07-09', // Formato: YYYY-MM-DD
  city: 'Hortolândia-SP',
  phone: '(19) 99965-5577',
  email: 'leonardobrum.dev@gmail.com',
};

function calculateAge(birthDate: string): number {
  const birth = new Date(birthDate);
  const today = new Date();
  
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
}

export function HomeHero() {
  const { t } = useTranslation();
  const age = calculateAge(PERSONAL_DATA.birthDate);

  return (
    <Container data-aos="fade-up">
      <img src={pictures} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>{t('welcome')}</h1>
        </TextContainer>
        <InfosContainer>
          <span className="spanAnimation1">
            {t('welcome-subtitle')}
            <span className="text-white">Front-end</span>.
          </span>
          <CodeItem>
            <span className="comment">{t('my-presentation')}</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              {t('name')}
              <span className="blue">&quot;{PERSONAL_DATA.name}&quot;</span>,
            </div>
            <div>
              {t('age')}
              <span className="blue">&quot;{age}{t('years')}&quot;</span>,
            </div>
            <div>
              {t('city')}
              <span className="blue">&quot;{PERSONAL_DATA.city}&quot;</span>,
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">{t('contact')}</span> {'\u007B'}
            <div>
              {t('phone-number')}
              <span className="blue">&quot;{PERSONAL_DATA.phone}&quot;</span>,
            </div>
            <div>
              email:{' '}
              <span className="blue">
                &quot;{PERSONAL_DATA.email}&quot;
              </span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
