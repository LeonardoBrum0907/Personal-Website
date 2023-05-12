import styled from 'styled-components';

interface ContainerProps {
  imgUrl: string;
}

export const Container = styled.div<ContainerProps>`
  background-image: url(${props => props.imgUrl});
  width: 100%;
  height: 26rem;
  position: relative;
  padding: 0.5rem 5rem;
  display: flex;
  align-items: flex-end;
  gap: 2rem;

  section {
    z-index: 2;
    width: 30%;
    h1 {
      color: ${({ theme }) => theme.primary};
      font-size: 3rem;
    }
    h2 {
      color: ${({ theme }) => theme.secondary};
      font-weight: 300;
      font-size: 2rem;
    }
  }
  > div.overlay {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) => theme.gradient};
    opacity: 0.9;
    transition: 0.5s;
  }

  .swiper {
    width: 100%;
    height: 100%;
    transition: 0.3s;

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .swiper-button-next,
    .swiper-button-prev {
      color: ${({ theme }) => theme.primary};
    }

    .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {
      background-color: ${({ theme }) => theme.primary};
    }
  }

  &:hover {
    > div.overlay {
      opacity: 0.85;
    }

    .swiper {
      transform: scale(1.02);
      cursor: grab;
    }
  }

  @media (max-width: 700px) {
    padding: 2rem 1rem;
    height: 20rem;
    section {
      position: absolute;

      h1 {
        font-size: 1.8rem;
      }
      h2 {
        font-size: 1.2rem;
      }
    }
  }
`;
