import { lighten } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.div`
  width: 100%;
  padding-left: 2rem;

  display: flex;
  align-items: center;
  height: 4rem;
  border-bottom: 1px solid ${({ theme }) => theme.backgroundLight};

  img {
    width: 40px;
  }

  ul {
    display: flex;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps>`
  a {
    text-transform: uppercase;
    color: ${props =>
      props.isActive ? props.theme.primary : props.theme.textHighlight};
    transition: 0.3s;

    &:hover {
      color: ${props =>
        props.isActive
          ? lighten(0.3, props.theme.primary)
          : lighten(0.3, props.theme.textHighlight)};
    }
  }
`;
