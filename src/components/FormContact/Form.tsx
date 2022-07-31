import { FormContainer, Input, TextArea } from './styles';

export function Form() {
  return (
    <FormContainer>
      <Input placeholder="nome" required />
      <Input placeholder="email" type="email" required />
      <TextArea placeholder="mensagem" required />
      <button type="submit">Enviar</button>
    </FormContainer>
  );
}
