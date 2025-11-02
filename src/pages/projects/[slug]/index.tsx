import { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { useContext } from 'react';
import { t } from 'i18next';
import { PrismicRichText } from '@prismicio/react';
import type { RichTextField } from '@prismicio/types';
import { BannerProject } from '../../../components/BannerProject';
import { Header } from '../../../components/Header';
import {
   ButtonContainer,
   ProjectContainer
} from '../../../styles/ProjectStyles';
import { createClient } from '../../../../prismicio';
import LoadingScreen from '../../../components/LoadingSreen';
import { LanguageOptionsContext } from '../../../context/LanguageOptionsContext';
import { FaExclamationTriangle } from 'react-icons/fa';

interface Description {
   text: string;
}

type ProjectItem = {
   title: string;
   type: string;
   description_en: RichTextField | Description;
   description_ptBR: RichTextField | Description;
   subtitle: string;
   link_online: {
      type_url: string;
      url: string;
   };
   link_github: {
      type_url: string;
      url: string;
   };
   slug: string;
   thumbnail: string;
   galery: string[];
   notice_en: string;
   notice_ptBR: string;
};

interface ProjectProps {
   projectFormatted: ProjectItem;
}

export default function Project({ projectFormatted }: ProjectProps) {
   const router = useRouter();
   const { language } = useContext(LanguageOptionsContext);

   if (router.isFallback) {
      return <LoadingScreen />;
   }

   return (
      <ProjectContainer>
         <Head>
            <title>{projectFormatted.title}</title>

            <meta name="description" content={projectFormatted.description_ptBR[0].text} />
            <meta property="og:image" content={projectFormatted.thumbnail} />
            <meta
               property="og:image:secure_url"
               content={projectFormatted.thumbnail}
            />
            <meta name="twitter:image" content={projectFormatted.thumbnail} />
            <meta name="twitter:image:src" content={projectFormatted.thumbnail} />
            <meta
               property="og:description"
               content={projectFormatted.description_ptBR[0].text}
            />
         </Head>

         <Header />

         <BannerProject
            title={projectFormatted.title}
            type={projectFormatted.type}
            imgUrl={projectFormatted.galery}
         />

         <main>
            {
               projectFormatted.notice_en && projectFormatted.notice_ptBR ? (
                  language === 'en' ? (
                  <span className="notice"><FaExclamationTriangle /> {projectFormatted.notice_en}</span>
                  ) : (
                     <span className="notice"><FaExclamationTriangle /> {projectFormatted.notice_ptBR}</span>
                  )
               ) : null
            }

            {
               language === 'en' ? (
                  <PrismicRichText field={projectFormatted.description_en as RichTextField} />
               ) : (
                  <PrismicRichText field={projectFormatted.description_ptBR as RichTextField} />
               )
            }

            <ButtonContainer>
               <button type="button" disabled={!projectFormatted.link_online.url}>
                  <a
                     href={projectFormatted.link_online.url}
                     target="_blank"
                     rel="noreferrer"
                  >
                     {t('project-online')}
                  </a>
               </button>
               <button type="button" disabled={!projectFormatted.link_github.url}>
                  <a
                     href={projectFormatted.link_github.url}
                     target="_blank"
                     rel="noreferrer"
                  >
                     {t('project-github')}
                  </a>
               </button>
            </ButtonContainer>
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

   const objGalery = project.data.galery.flatMap((response: object) =>
      Object.values(response)
   );

   const projectFormatted = {
      slug: project.uid,
      title: project.data.title,
      type: project.data.type,
      description_en: project.data.description_en,
      description_ptBR: project.data.description_ptbr,
      notice_en: project.data.notice_en,
      notice_ptBR: project.data.notice_ptbr,
      link_github: project.data.link_github,
      link_online: project.data.link_online,
      galery: objGalery.map(res => (res.url ? res.url : null))
   };

   return {
      props: {
         projectFormatted
      },
      revalidate: 60 * 60 * 24 * 7 // 1 week
   };
};
