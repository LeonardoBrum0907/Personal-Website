import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  div {
    width: 50%;
  }

  > img {
    width: 30rem;
    height: 30rem;
  }

  @media (max-width: 1000px) {
    > img {
      width: 15rem;
      height: 15rem;
    }

    > div {
      flex: 1;
    }
  }
  @media (max-width: 700px) {
    flex-direction: column-reverse;
    > img {
      width: 10rem;
      height: 10rem;
    }
    > div {
      width: 90%;
    }
  }
`;

export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%auto;

  h1 {
    font-size: 7rem;
    color: ${({ theme }) => theme.secondary};
    text-shadow: 1vw 1vw 1vw #000, 0 0 2vw ${({ theme }) => theme.primary},
      0 0 2vw ${({ theme }) => theme.primary},
      0 0 2vw ${({ theme }) => theme.primary};
  }
  h2 {
    font-size: 2rem;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
  }

  @media (max-width: 1000px) {
    h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 2rem;
    }
  }

  @media (max-width: 700px) {
    h1 {
      font-size: 3rem;
    }

    h2 {
      font-size: 1rem;
    }
  }
`;

export const InfosContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const CodeItem = styled.pre`
  background: ${({ theme }) => theme.gradient};
  border-radius: 3px;
  padding: 2rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 300;
  color: #fff;
  width: 24rem;
  align-self: flex-start;
  transition: 1s !important;

  @media (max-width: 1000px) {
    width: 18rem;
    padding: 1.5rem;
    font-size: 0.8rem;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
  &:hover {
    filter: brightness(1.2);
  }
  &:last-child {
    align-self: flex-end;
  }
  > div {
    margin: 0.2rem 0;
    margin-left: 1rem;
  }
  span.purple {
    color: #c38cdd;
  }
  span.blue {
    color: #7ac7e3;
  }
  span.comment {
    color: ${({ theme }) => theme.text};
    margin-bottom: 1rem;
    display: block;
  }
`;
