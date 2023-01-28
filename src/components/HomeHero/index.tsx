import { useTranslation } from 'react-i18next';
import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import pictures from '../../assets/minhaFoto.png';

export function HomeHero() {
  const { t } = useTranslation();

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
              <span className="blue">&quot;Leonardo Brum&quot;</span>,
            </div>
            <div>
              {t('age')}
              <span className="blue">&quot;20{t('years')}</span>,
            </div>
            <div>
              {t('city')}
              <span className="blue">&quot;Hortolândia-SP&quot;</span>,
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">{t('contact')}</span> {'\u007B'}
            <div>
              {t('phone-number')}
              <span className="blue">&quot;(19) 99965-5577&quot;</span>,
            </div>
            <div>
              email:{' '}
              <span className="blue">
                &quot;leonardobrum.dev@gmail.com&quot;
              </span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
