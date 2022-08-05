import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { BannerProject } from '../../../components/BannerProject';
import { Header } from '../../../components/Header';
import { ProjectContainer } from '../../../styles/ProjectStyles';
import { createClient } from '../../../services/prismic';
import LoadingScreen from '../../../components/LoadingSreen';

type ProjectItem = {
  title: string;
  type: string;
  description: string;
  link: {
    type_url: string;
    url: string;
  };
  slug: string;
  thumbnail: string;
};

interface ProjectProps {
  projectFormatted: ProjectItem;
}

export default function Project({ projectFormatted }: ProjectProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />;
  }

  return (
    <ProjectContainer>
      <Header />
      <BannerProject
        title={projectFormatted.title}
        type={projectFormatted.type}
        imgUrl={projectFormatted.thumbnail}
      />

      <main>
        <p>{projectFormatted.description}</p>
        <button type="button">
          <a href={projectFormatted.link.url}>Ver projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}

export async function getStaticPaths() {
  const client = createClient({});

  const pages = await client.getByType('project');

  const paths = pages.results.map(project => ({
    params: {
      slug: project.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
}

export const getStaticProps: GetStaticProps = async ({
  previewData,
  params
}) => {
  const client = createClient({ previewData });

  const { slug } = params;

  const project = await client.getByUID('project', String(slug));

  const projectFormatted = {
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.link,
    thumbnail: project.data.thumbnail.url
  };

  return {
    props: {
      projectFormatted
    },
    revalidate: 60 * 60 * 24
  };
};
