import { t } from 'i18next';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';
import { TbBrandNextjs } from 'react-icons/tb';
import { SectionTitle } from '../SectionTitle';
import { KnowledgeItem } from './KnowledgeItem';
import { Container } from './styles';

export function Knowledge() {
  return (
    <Container>
      <SectionTitle title={t('knowledges')} />
      <section>
        <KnowledgeItem title="NextJS" icon={<TbBrandNextjs />} />
        <KnowledgeItem title="ReactJS" icon={<FaReact />} />
        <KnowledgeItem title="Typescript" icon={<SiTypescript />} />
        <KnowledgeItem title="HTML" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="CSS" icon={<FaCss3Alt />} />
        <KnowledgeItem title="Sass" icon={<IoLogoSass />} />
      </section>
    </Container>
  );
}
