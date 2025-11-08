# Personal Website - Léo Brum

Portfólio desenvolvido com Next.js e TypeScript para apresentar meus projetos e habilidades como desenvolvedor. O conteúdo dinâmico é gerenciado via Prismic CMS, com suporte a internacionalização (português e inglês), animações de scrolling e integração com formulários de contato.

## Principais funcionalidades
- **Landing page** com hero, destaques de projetos, seção de conhecimento e rodapé personalizados.
- **Projetos dinâmicos** buscados do Prismic, com páginas individuais estáticas geradas via SSG e revalidação semanal.
- **Internacionalização** completa com `i18next`, alternando entre português e inglês em tempo real.
- **Formulário de contato** com envio via EmailJS e fallback para API própria conectada ao SendGrid.
- **Animações** no scroll utilizando AOS e indicadores de carregamento com `react-hot-toast`.

## Stack técnica
- [Next.js 13](https://nextjs.org/) com React 18 e TypeScript.
- [Styled-components](https://styled-components.com/) para estilização com theming.
- [Prismic](https://prismic.io/) + Slice Machine para gerenciamento de conteúdo.
- [i18next](https://www.i18next.com/) e `react-i18next` para tradução.
- [EmailJS](https://www.emailjs.com/) e [SendGrid](https://sendgrid.com/) para disparo de mensagens.
- [Axios](https://axios-http.com/), [AOS](https://michalsnik.github.io/aos/), `react-hook-form`, `react-icons`, `swiper`.


## Estrutura de pastas relevante
```
src/
  components/      # Componentes reutilizáveis (Hero, Projects, Knowledge, etc.)
  context/         # Contextos globais (ex.: linguagem)
  i18n/            # Configuração e traduções (en, ptBR)
  pages/           # Páginas Next.js, incluindo API de contato
  services/        # Serviços utilitários (envio de email)
  styles/          # Estilos globais e temas
```

---

Desenvolvido por Léo Brum.

