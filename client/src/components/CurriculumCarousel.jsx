import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow } from 'swiper/modules';
import PropTypes from 'prop-types';

import '../styles/Carousel.scss';

const CurriculumCarousel = ({ title, lessons }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-auto">
      <h2 className="subtitle">{title}</h2>

      <div className="swiper">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 80,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          className="swiper__container"
        >
          {lessons.map((lesson, index) => (
            <SwiperSlide
              key={lesson.weeks}
              className="swiper__slide"
              style={{
                opacity: index === activeIndex ? 1 : 0.3,
                transition: 'opacity 0.3s ease',
              }}
            >
              <h3 className="swiper__title">
                Weeks {lesson.weeks}
              </h3>

              <div className="swiper__content">
                {lesson.topics.map((topic, topicIndex) => (
                  <div
                    key={topicIndex}
                    className="swiper__content-item"
                  >
                    <h4 className="swiper__content-title">
                      {topic.title}
                    </h4>
                    <p className="swiper__content-description">
                      {topic.description}
                    </p>
                  </div>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

CurriculumCarousel.propTypes = {
  title: PropTypes.string.isRequired,
  lessons: PropTypes.arrayOf(
    PropTypes.shape({
      weeks: PropTypes.string.isRequired, 
      topics: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequired,
          description: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
};

export default CurriculumCarousel;
