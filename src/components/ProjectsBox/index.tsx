import Link from 'next/link';
import { Container } from './styles';

interface ProjectsBoxProps {
  title: string;
  type: string;
  imgUrl: string;
  slug: string;
}

export function ProjectsBox({ title, type, imgUrl, slug }: ProjectsBoxProps) {
  return (
    <Container imgUrl={imgUrl}>
      <Link href={`/projects/${slug}`}>
        <a>
          <div className="overlay" />
          <section>
            <h1>{title}</h1>
            <h2>{type}</h2>
          </section>
        </a>
      </Link>
    </Container>
  );
}
