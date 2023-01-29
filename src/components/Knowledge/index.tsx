import { t } from 'i18next';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { SectionTitle } from '../SectionTitle';
import { KnowledgeItem } from './KnowledgeItem';
import { Container } from './styles';

export function Knowledge() {
  return (
    <Container>
      <SectionTitle title={t('knowledges')} />
      <section>
        <KnowledgeItem title="HTML" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="CSS" icon={<FaCss3Alt />} />
        <KnowledgeItem title="javascript" icon={<IoLogoJavascript />} />
        <KnowledgeItem title="Reactjs" icon={<FaReact />} />
      </section>
    </Container>
  );
}
