import { SectionTitle } from '../SectionTitle';
import { Form } from './Form';
import { Container } from './styles';

export function FormContact() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Precisa dos <br /> meus serviços
          </>
        }
        description={
          <>
            preencha o formulário abaixo <br /> irie retornar em breve
          </>
        }
      />
      <Form />
    </Container>
  );
}
