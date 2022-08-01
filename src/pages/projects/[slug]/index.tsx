import { BannerProject } from '../../../components/BannerProject';
import { Header } from '../../../components/Header';
import { ProjectContainer } from './styles';
import pictures from '../../../assets/minhaFoto.png';

export default function Project() {
  return (
    <ProjectContainer>
      <Header />
      <BannerProject title="Projeto 01" type="website" imgUrl={pictures} />

      <main>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
          natus ad, sapiente earum deserunt beatae quos quis inventore fugiat
          quia quas harum dolorum, molestiae iste laboriosam quasi animi,
          voluptatibus excepturi. Lorem ipsum, dolor sit amet consectetur
          adipisicing elit. Suscipit natus ad, sapiente earum deserunt beatae
          quos quis inventore fugiat quia quas harum dolorum, molestiae iste
          laboriosam quasi animi, voluptatibus excepturi. Lorem ipsum, dolor sit
          amet consectetur adipisicing elit. Suscipit natus ad, sapiente earum
          deserunt beatae quos quis inventore fugiat quia quas harum dolorum,
          molestiae iste laboriosam quasi animi, voluptatibus excepturi.
        </p>
        <button type="button">
          <a href="#">Ver projeto online</a>
        </button>
      </main>
    </ProjectContainer>
  );
}
