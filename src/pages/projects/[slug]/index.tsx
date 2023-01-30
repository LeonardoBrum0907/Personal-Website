import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
// import { RichText } from 'prismic-dom';
import { BannerProject } from '../../../components/BannerProject';
import { Header } from '../../../components/Header';
import { ProjectContainer } from '../../../styles/ProjectStyles';
import { createClient } from '../../../services/prismicio';
import LoadingScreen from '../../../components/LoadingSreen';

type ProjectItem = {
  title: string;
  type: string;
  description: string;
  descriptiontest: string;
  subtitle: string;
  link: {
    type_url: string;
    url: string;
  };
  slug: string;
  thumbnail: string;
  galery: string[];
};

interface ProjectProps {
  projectFormatted: ProjectItem;
}

export default function Project({ projectFormatted }: ProjectProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <LoadingScreen />;
  }

  // const serializer = (projectFormatted.descriptionTest) => {
  //   switch (type) {
  //     case 'paragraph': {
  //       return { element: 'p', text }
  //     }
  //   }
  // }

  return (
    <ProjectContainer>
      <Head>
        <title>{projectFormatted.title} | Léo Brum</title>

        <meta name="description" content={projectFormatted.description} />
        <meta property="og:image" content={projectFormatted.thumbnail} />
        <meta
          property="og:image:secure_url"
          content={projectFormatted.thumbnail}
        />
        <meta name="twitter:image" content={projectFormatted.thumbnail} />
        <meta name="twitter:image:src" content={projectFormatted.thumbnail} />
        <meta
          property="og:description"
          content={projectFormatted.description}
        />
      </Head>

      <Header />

      {projectFormatted.galery.map(url => (
        <BannerProject
          key={url}
          title={projectFormatted.title}
          type={projectFormatted.type}
          imgUrl={url}
        />
      ))}

      {/* <BannerProject
        title={projectFormatted.title}
        type={projectFormatted.type}
        imgUrl={projectFormatted.thumbnail}
      /> */}

      {/* {projectFormatted.galery.map(img => (
        <img
          src={img.url}
          alt=""
          style={{ height: '100px', width: '100px', border: '1px solid red' }}
        />
      ))} */}

      <main>
        <p>{projectFormatted.description}</p>
        <button type="button">
          <a href={projectFormatted.link.url} target="_blank" rel="noreferrer">
            Ver projeto online
          </a>
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

  const obj = project.data.galery.flatMap((response: object) =>
    Object.values(response)
  );

  const projectFormatted = {
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    // descriptiontest: RichText.asHtml(project.data.descriptiontest),
    link: project.data.link,
    thumbnail: project.data.thumbnail.url,
    galery: obj.map(res => res.url)
  };

  // console.log(projectFormatted.galery);

  return {
    props: {
      projectFormatted
    },
    revalidate: 60 * 60 * 24 * 7 // 1 week
  };
};
