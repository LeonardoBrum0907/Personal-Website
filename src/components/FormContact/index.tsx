import { SectionTitle } from '../SectionTitle';
import { Form } from './Form';
import { Container } from './styles';

export function FormContact() {
  return (
    <Container>
      <SectionTitle
        title={
          <>
            Do you need <br /> my services?
          </>
        }
        description={
          <>
            Fill out the form below, <br /> I will return soon.
          </>
        }
      />
      <Form />
    </Container>
  );
}
