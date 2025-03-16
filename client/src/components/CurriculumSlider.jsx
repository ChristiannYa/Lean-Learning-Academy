import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow } from 'swiper/modules';
import PropTypes from 'prop-types';

const CurriculumSlider = ({
  title,
  lessons,
  themeColor = 'var(--color-primary)',
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-auto" style={{ '--slider-theme-color': themeColor }}>
      {/* Replace the subtitle class with custom styling */}
      <h2
        className="font-leagueSpartan font-bold text-3xl max-md:text-2xl text-center mb-2"
        style={{ color: themeColor }}
      >
        {title}
      </h2>

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
              key={lesson.id}
              className="swiper__slide"
              style={{
                opacity: index === activeIndex ? 1 : 0.3,
                transition: 'opacity 0.3s ease',
              }}
            >
              <h3 className="swiper__title">{lesson.title}</h3>

              <div className="swiper__content">
                {lesson.topics.map((topic, topicIndex) => (
                  <div key={topicIndex} className="swiper__content-item">
                    <h4 className="swiper__content-title">{topic.title}</h4>
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

CurriculumSlider.propTypes = {
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
  themeColor: PropTypes.string,
};

export default CurriculumSlider;
