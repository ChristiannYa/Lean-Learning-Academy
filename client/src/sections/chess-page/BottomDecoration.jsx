import { useEffect } from 'react';

import { chessPiecesArray } from '../../constants/courses/chess/';

const BottomDecoration = () => {
  useEffect(() => {
    const scrollers = document.querySelectorAll('.scroller');

    const addAnimation = () => {
      scrollers.forEach((scroller) => {
        scroller.setAttribute('data-animated', true);
        const scrollerInner = scroller.querySelector('.scroller__inner');
        const scrollerContent = Array.from(scrollerInner.children);

        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute('aria-hidden', true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    };

    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      addAnimation();
    }
  }, []);

  return (
    <section className="scroller-container colflex-center">
      <div className="scroller" data-direction="left" data-speed="slow">
        <div className="tag-list scroller__inner">
          {chessPiecesArray.map((piece) => (
            <img key={piece.id} src={piece.src} alt={piece.alt} width={56} height={56} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BottomDecoration;
