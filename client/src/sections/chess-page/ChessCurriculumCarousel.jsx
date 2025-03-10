import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, EffectCoverflow } from 'swiper/modules';

import lessons from '../../constants/chess-lessons';

const ChessCurriculumCards = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-auto">
      <h2 className="subtitle">6-Month Chess Curriculum</h2>

      <div className="font-leagueSpartan">
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
          pagination={{
            clickable: true,
            renderBullet: (_, className) => {
              return `<span class="${className}" style="background-color: var(--color-primary);"></span>`;
            },
          }}
          modules={[EffectCoverflow, Pagination]}
          onSlideChange={(swiper) => {
            setActiveIndex(swiper.realIndex);
          }}
          className="space-y-4"
        >
          {lessons.map((lesson, index) => (
            <SwiperSlide
              key={lesson.weeks}
              className="border border-white/15 rounded-lg p-4 bg-white/10"
              style={{
                opacity: index === activeIndex ? 1 : 0.3,
                transition: 'opacity 0.3s ease',
              }}
            >
              <h3 className="text-2xl max-md:text-xl text-neutral-white font-medium text-center mb-4">
                Weeks {lesson.weeks}
              </h3>

              <div className="space-y-3 overflow-y-auto">
                {lesson.topics.map((topic, topicIndex) => (
                  <div
                    key={topicIndex}
                    className="border-l-4 border-primary pl-4"
                  >
                    <h4 className="text-neutral-white text-xl max-sm:text-lg">
                      {topic.title}
                    </h4>
                    <p className="text-neutral-white/70 mt-1 text-lg max-sm:text-md">
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

export default ChessCurriculumCards;
