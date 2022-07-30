import Link from 'next/link';
import { SectionTitle } from '../SectionTitle';
import { ProjectItem } from './ProjectItem';
import { Container } from './styles';
import pictures from '../../assets/minhaFoto.png';

export function Projects() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" />
      <section>
        <ProjectItem
          img={pictures}
          title="Projeto 01"
          type="website"
          slug="teste"
        />
        <ProjectItem
          img={pictures}
          title="Projeto 01"
          type="website"
          slug="teste"
        />
        <ProjectItem
          img={pictures}
          title="Projeto 01"
          type="website"
          slug="teste"
        />
        <ProjectItem
          img={pictures}
          title="Projeto 01"
          type="website"
          slug="teste"
        />
      </section>
      <button type="button">
        <Link href="/projects">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
