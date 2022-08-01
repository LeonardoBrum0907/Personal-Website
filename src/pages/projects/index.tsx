import { Header } from '../../components/Header';
import { ProjectsBox } from '../../components/ProjectsBox';
import { ProjectsContainer } from '../../styles/ProjectsStyles';
import pictures from '../../assets/minhaFoto.png';

export default function Projects() {
  return (
    <ProjectsContainer>
      <Header />
      <main className="container">
        <ProjectsBox
          title="Project 1"
          type="website"
          slug="project01"
          imgUrl={pictures}
        />
        <ProjectsBox
          title="Project 1"
          type="website"
          slug="project01"
          imgUrl={pictures}
        />
        <ProjectsBox
          title="Project 1"
          type="website"
          slug="project01"
          imgUrl={pictures}
        />
      </main>
    </ProjectsContainer>
  );
}
