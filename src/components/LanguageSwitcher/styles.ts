import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 100%;
  margin-right: 5%;

  button {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textLight};
    border: none;
    border-radius: 3px;
    transition: 0.3s;

    width: 100%;
    padding: 0.2rem 0.2rem;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
