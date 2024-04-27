import React from "react";
import { Events } from "../constants";
import { useObserverView } from "../hooks";
import styles, { animations, layout } from "../utils/style";
import Button from "./Button";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index != Events.length ? "mb-6" : "mb-0"
    } feature-card hover:${animations.scale}`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimOrange`}
    >
      <img src={icon} alt="Icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-[18px] leading-[23px] mb-3">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => {
  const { ref: sectionInfoRef, inView: infoInView } = useObserverView();
  const { ref, inView } = useObserverView();

  return (
    <section id="Events" className={layout.section}>
      <div
        ref={sectionInfoRef}
        className={`${layout.sectionInfo} ${
          infoInView ? "fadeInAnimationRight" : ""
        }`}
      >
        <h2 className={styles.heading2}>
          Unlock the Cosmos, <br className="sm:block hidden" /> We'll Guide Your
          Journey.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With our curated event series, delve into the celestial wonders and
          unravel the mysteries of the universe. Let us be your cosmic compass
          as you navigate the stars.
        </p>
        <Button styles="mt-10" />
      </div>
      <div
        ref={ref}
        className={`${layout.sectionImg} flex-col ${
          inView ? "fadeInAnimationLeft" : ""
        }`}
      >
        {Events.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Business;
