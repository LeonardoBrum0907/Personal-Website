import Link from 'next/link';
import { NavLink } from './NavLink';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <Link href="/">
        <a>
          <img src="/favicon5.png" alt="logo" />
        </a>
      </Link>

      <ul>
        <NavLink title="Home" path="/" />
        <NavLink title="Projects" path="/projects" includes />
      </ul>
    </Container>
  );
}
