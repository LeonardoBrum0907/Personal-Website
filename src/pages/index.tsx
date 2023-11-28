import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';
import { useEffect } from 'react';
import { HomeContainer } from '../styles/HomeStyles';

import { createClient } from '../../prismicio';
import { Footer } from '../components/Footer';
import { FormContact } from '../components/FormContact';
import { Header } from '../components/Header';
import { HomeHero } from '../components/HomeHero';
import { Knowledge } from '../components/Knowledge';
import { Projects } from '../components/Projects';

interface Project {
  slug: string;
  title: string;
  type: string;
  description: string;
  link_online: string;
  link_github: string;
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
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-W65K1NCREH"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-W65K1NCREH', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />

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
      link_github: project.data.link_github.link_type,
      link_online: project.data.link_online.link_type,
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
