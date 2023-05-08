import { useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import theme from '../../styles/theme';
import { FormContainer, Input, TextArea } from './styles';

interface ContactForm extends HTMLFormElement {
  user_name: HTMLInputElement;
  user_email: HTMLInputElement;
  message: HTMLTextAreaElement;
}

export function Form() {
  const { t } = useTranslation();
  const form = useRef<ContactForm>();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = e => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    if (!name.trim() || !email.trim() || !message.trim()) {
      toast('Preencha todos os campos!', {
        style: {
          background: theme.error,
          color: '#fff'
        }
      });
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(
        'service_ehcd366',
        'template_sgv5ka8',
        form.current,
        '2wMhWC-a7Z0UMyeJR'
      )
      .then(
        result => {
          console.log(result.text);
          toast('Mensagem enviada com sucesso!', {
            style: {
              background: theme.success,
              color: '#fff'
            }
          });
          setIsLoading(false);
          form.current.user_name.value = '';
          form.current.user_email.value = '';
          form.current.message.value = '';
        },
        error => {
          console.log(error.text);
          setIsLoading(false);
        }
      );
  };

  return (
    <FormContainer data-aos="fade-up" ref={form} onSubmit={sendEmail}>
      <Input name="user_name" placeholder={t('name')} />
      <Input name="user_email" placeholder="e-mail:" type="email" />
      <TextArea name="message" placeholder={t('message')} />
      <button type="submit" disabled={isLoading}>
        {isLoading
          ? t('loading').toLocaleUpperCase()
          : t('submit').toLocaleUpperCase()}
      </button>
    </FormContainer>
  );
}
