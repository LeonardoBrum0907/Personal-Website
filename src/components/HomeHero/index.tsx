import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import pictures from '../../assets/minhaFoto.png';

export function HomeHero() {
  return (
    <Container>
      <img src={pictures} alt="Minha foto" />
      <div>
        <TextContainer>
          <h1>Hello!</h1>
          <h2>I&apos;m Léo, Dev Front-end</h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">&frasl;&frasl; my presentation</span>
            <span className="purple">Infos</span> {'\u007B'}
            <div>
              Name: <span className="blue">&quot;Leonardo Brum&quot;</span>,
            </div>
            <div>
              Age: <span className="blue">&quot;20 years&quot;</span>,
            </div>
            <div>
              City: <span className="blue">&quot;Hortolândia-SP&quot;</span>,
            </div>
            {'\u007D'}
          </CodeItem>
          <CodeItem>
            <span className="purple">Contact</span> {'\u007B'}
            <div>
              Phone Number:{' '}
              <span className="blue">&quot;(19) 99965-5577&quot;</span>,
            </div>
            <div>
              E-mail:{' '}
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
