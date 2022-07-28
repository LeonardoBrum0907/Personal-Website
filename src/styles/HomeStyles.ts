import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%auto;

  > main {
    /* will get the <main> that is directly inside it, it will not get all the <main> tags */
    display: flex;
    flex-direction: column;
    gap: 8rem;
  }
`;
