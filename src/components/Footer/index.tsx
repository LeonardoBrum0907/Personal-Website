import { useTranslation } from 'react-i18next';
import {
  AiOutlineGithub,
  AiFillLinkedin,
  AiOutlineInstagram
} from 'react-icons/ai';

import { Container } from './styles';

export function Footer() {
  const { t } = useTranslation();

  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          {t('back-up')} 👆
        </button>
        <section>
          <AiOutlineInstagram
            onClick={() =>
              handleRedirect('https://www.instagram.com/brum_leo_/')
            }
          />
          <AiOutlineGithub
            onClick={() =>
              handleRedirect('https://github.com/LeonardoBrum0907')
            }
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect(
                'https://www.linkedin.com/in/leonardobrum-almeida/'
              )
            }
          />
        </section>
      </div>
    </Container>
  );
}
