import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from '../LanguageSwitcher';
import { NavLink } from './NavLink';
import { Container } from './styles';

export function Header() {
  const { t } = useTranslation();

  return (
    <Container>
      <Link href="/" legacyBehavior>
        <a>
          <img src="/favicon5.png" alt="logo" />
        </a>
      </Link>

      <ul>
        <NavLink title={t('home-header')} path="/" />
        <NavLink title={t('projects-header')} path="/projects" includes />
      </ul>

      <LanguageSwitcher />
    </Container>
  );
}
