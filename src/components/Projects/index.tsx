import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from '../SectionTitle';
import { ProjectItem } from './ProjectItem';
import { Container } from './styles';

interface Project {
  slug: string;
  title: string;
  type: string;
  link_online: string;
  link_github: string;
  galery: string[];
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
        {projects.slice(2, 4).map(project => (
          <ProjectItem
            key={project.slug}
            img={project.galery[0]}
            title={project.title}
            type={project.type}
            slug={project.slug}
          />
        ))}
      </section>
      <button type="button">
        <Link href="/projects" legacyBehavior>
          <a>{t('all-projects')}</a>
        </Link>
      </button>
    </Container>
  );
}
