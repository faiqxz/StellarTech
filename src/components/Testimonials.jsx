import React from 'react';
import { feedback } from '../constants';
import { useObserverView } from '../hooks';
import styles from '../utils/style';
import FeedbackCard from './FeedbackCard';

const Testimonials = () => {
  const { ref, inView } = useObserverView();

  return (
    <section
      id="Partners"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] w-[60%] h-[60%] -center rounded-full white__gradient" />
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          Some of the quotes <br className="sm:block hidden" /> from our partners
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Explore with us now!
          </p>
        </div>
      </div>

      <div
        ref={ref}
        className={`flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1] ${
          inView ? 'fadeInAnimationUp' : ''
        }`}
      >
        {feedback.map((card, index) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
