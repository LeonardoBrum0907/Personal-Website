import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Head from 'next/head';
import { HomeContainer } from '../styles/HomeStyles';

import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
// import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Knowledge } from '../components/Knowledge';
import { FormContact } from '../components/FormContact';
import { Footer } from '../components/Footer';
import { createClient } from '../services/prismicio';

interface Project {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  galery: string[];
}

interface HomeProps {
  projectFormatted: Project[];
}

export default function Home({ projectFormatted }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <HomeContainer>
      <Head>
        <title>Home | Léo Brum</title>

        <meta
          name="description"
          content="Olá, sou o Léo Brum! Aqui vou falar um pouco sobre mim e mostrar alguns dos meus trabalhos como Dev Front-end."
        />
        <meta property="og:image" content="/ogimageHome.png" />
        <meta property="og:image:secure_url" content="/ogimageHome.png" />
        <meta name="twitter:image" content="/ogimageHome.png" />
        <meta name="twitter:image:src" content="/ogimageHome.png" />
        <meta
          property="og:description"
          content="Olá, sou o Léo Brum! Aqui vou falar um pouco sobre mim e mostrar alguns dos meus trabalhos como Dev Front-end."
        />
      </Head>

      <Header />

      <main className="container">
        <HomeHero />
        {/* <Experience /> */}
        <Projects projects={projectFormatted} />
        <Knowledge />
        <FormContact />
        <Footer />
      </main>
    </HomeContainer>
  );
}

export async function getStaticProps({ previewData }) {
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
      description: project.data.description,
      link: project.data.link.link_type,
      galery: obj.map(res => (res.url ? res.url : null))
    };
  });

  return {
    props: {
      projectFormatted
    },
    revalidate: 60 * 60 * 24 * 7 // 1 week
  };
}
