import React from 'react';
import { card } from '../assets';
import { useObserverView } from '../hooks';
import styles, { layout } from '../utils/style';
import Button from './Button';

const CardDeal = () => {
  const { ref: infoRef, inView: infoInView } = useObserverView();
  const { ref: imgRef, inView: imgInView } = useObserverView();

  return (
    <section className={layout.section}>
      <div ref={infoRef} className={`${layout.sectionInfo} ${infoInView ? 'fadeInAnimationRight' : ''}`}>
        <h2 className={styles.heading2}>
          Our community <br className="sm:block hidden" /> is based in Palembang, South Sumatera.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We do research everyday for the upcoming events on our beautiful space!
        </p>
        <Button styles="mt-10" />
      </div>
      <div ref={imgRef} className={`${layout.sectionImg} ${imgInView ? 'opacity-transition' : ''}`}>
        <img src={card} alt="Card" className="w-[100%] h-[100%]" />
      </div>
    </section>
  );
};

export default CardDeal;
