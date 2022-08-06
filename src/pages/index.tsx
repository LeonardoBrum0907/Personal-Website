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
import { createClient } from '../services/prismic';

interface Project {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
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
        <title>Home | Léo Brum Social</title>

        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
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
    revalidate: 60 * 60 * 24 // 24 hours
  };
}
