import { SectionTitle } from '../SectionTitle';
import ExperienceItem from './ExperienceItem';
import { Container } from './styles';

export function Experience() {
  return (
    <Container>
      <SectionTitle title="05 anos" description="de experiencia" />

      <section>
        <ExperienceItem
          year="1 ano"
          title="dev front"
          description="dev front react muito bom"
        />
        <ExperienceItem
          year="1 ano"
          title="dev front"
          description="dev front react muito bom"
        />
        <ExperienceItem
          year="1 ano"
          title="dev front"
          description="dev front react muito bom"
        />
        <ExperienceItem
          year="1 ano"
          title="dev front"
          description="dev front react muito bom"
        />
      </section>
    </Container>
  );
}
