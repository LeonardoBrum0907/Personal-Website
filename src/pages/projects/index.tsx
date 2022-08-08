import { GetStaticProps } from 'next';
import Head from 'next/head';
import { Header } from '../../components/Header';
import { ProjectsBox } from '../../components/ProjectsBox';
import { ProjectsContainer } from '../../styles/ProjectsStyles';
import { createClient } from '../../services/prismic';

type Project = {
  title: string;
  type: string;
  slug: string;
  thumbnail: string;
};

interface ProjectsProps {
  projectFormatted: Project[];
}

export default function Projects({ projectFormatted }: ProjectsProps) {
  return (
    <ProjectsContainer>
      <Head>
        <title>Projetos | Léo Brum</title>

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
            imgUrl={project.thumbnail}
          />
        ))}
      </main>
    </ProjectsContainer>
  );
}

export const getStaticProps: GetStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  const page = await client.getByType('project');

  const projectFormatted = page.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.link.link_type,
    thumbnail: project.data.thumbnail.url
  }));

  return {
    props: {
      projectFormatted
    },
    revalidate: 60 * 60 * 24 * 7 // 1 week
  };
};
