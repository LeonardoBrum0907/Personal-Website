import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../SectionTitle';
import { ProjectItem } from './ProjectItem';
import { Container } from './styles';

interface Project {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectProps) {
  const { t } = useTranslation();

  return (
    <Container>
      <SectionTitle title={t('main-projects')} />
      <section>
        {projects.slice(0, 2).map(project => (
          <ProjectItem
            key={project.slug}
            img={project.thumbnail}
            title={project.title}
            type={project.type}
            slug={project.slug}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projects">
          <a>{t('all-projects')}</a>
        </Link>
      </button>
    </Container>
  );
}
