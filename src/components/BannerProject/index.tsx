import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Navigation } from 'swiper';
import { Container } from './styles';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

interface BannerProjectProps {
  title: string;
  type: string;
  imgUrl: string[];
}

export function BannerProject({ title, type, imgUrl }: BannerProjectProps) {
  return (
    <Container imgUrl={imgUrl[0]}>
      <div className="overlay" />
      <section>
        <h1>{title}</h1>
        <h2>{type}</h2>
      </section>
      <Swiper
        pagination={{
          type: 'progressbar'
        }}
        navigation
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {imgUrl.map(
          url =>
            url && (
              <SwiperSlide key={url}>
                <img src={url} alt="" />
              </SwiperSlide>
            )
        )}
      </Swiper>
    </Container>
  );
}
