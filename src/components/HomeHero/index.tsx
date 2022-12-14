import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import pictures from '../../assets/minhaFoto.png';

export function HomeHero() {
  return (
    <Container data-aos="fade-up">
      <img src={pictures} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Hi!</h1>
        </TextContainer>
        <InfosContainer>
          <span className="spanAnimation1">
            I&apos;m Léo, Dev <span className="text-white">Front-end</span>.
          </span>
          <CodeItem>
            <span className="comment">&frasl;&frasl; my presentation</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              name: <span className="blue">&quot;Leonardo Brum&quot;</span>,
            </div>
            <div>
              age: <span className="blue">&quot;20 years&quot;</span>,
            </div>
            <div>
              city: <span className="blue">&quot;Hortolândia-SP&quot;</span>,
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Contact</span> {'\u007B'}
            <div>
              phoneNumber:{' '}
              <span className="blue">&quot;(19) 99965-5577&quot;</span>,
            </div>
            <div>
              email:{' '}
              <span className="blue">
                &quot;leonardobrum.dev@gmail.com&quot;
              </span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
