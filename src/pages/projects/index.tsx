import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Header } from '../../components/Header';
import { ProjectsBox } from '../../components/ProjectsBox';
import { ProjectsContainer } from '../../styles/ProjectsStyles';
import { createClient } from '../../../prismicio';

type Project = {
  title: string;
  type: string;
  slug: string;
  galery: string[];
};

interface ProjectsProps {
  projectFormatted: Project[];
}

export default function Projects({ projectFormatted }: ProjectsProps) {
  return (
    <ProjectsContainer>
      <Head>
        <title>Projects | Léo Brum</title>

        <meta name="description" content="Esses são alguns dos meus projetos" />
        <meta property="og:image" content="/ogimageProjects.png" />
        <meta property="og:image:secure_url" content="/ogimageProjects.png" />
        <meta name="twitter:image" content="/ogimageProjects.png" />
        <meta name="twitter:image:src" content="/ogimageProjects.png" />
        <meta
          property="og:description"
          content="Esses são alguns dos meus projetos"
        />
      </Head>

      <Header />
      <main className="container">
        {projectFormatted.map(project => (
          <ProjectsBox
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            imgUrl={project.galery[0]}
          />
        ))}
      </main>
    </ProjectsContainer>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const page = await client.getByType('project');

  const projectFormatted = page.results.map(project => {
    const obj = project.data.galery.flatMap((response: object) =>
      Object.values(response)
    );

    return {
      slug: project.uid,
      title: project.data.title,
      type: project.data.type,
      link_online: project.data.link_online.link_type,
      link_github: project.data.link_github.link_type,
      galery: obj.map(res => (res.url ? res.url : null))
    };
  });

  return {
    props: {
      projectFormatted
    },
    revalidate: 60 * 60 * 24 * 7 // 1 week
  };
};
