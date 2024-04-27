import React from "react";
import styles from "../utils/style";
import { moon } from "../assets";
import { useObserverView } from "../hooks";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div
      className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
    >
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">Join </span> the{" "}
          <span className="text-white">StellarTech</span> Community
        </p>
      </div>
      <div className="flex flex-row justify-between align-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
          Have Fun <br className="sm:block hidden" />{" "}
          <span className="text-gradient">Exploring Space</span>
        </h1>
      </div>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Search informations about your planet here
      </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
      <img
        src={moon}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      {/* gradient start */}
      <div className="absolute z-[0] w-[40%] h-[35%] top-0 white__gradient" />
      <div className="absolute z-[1] w-[80%] h-[80%] rounded-full red__gradient bottom-40" />
      <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 orange__gradient" />
      {/* gradient end */}
    </div>
  </section>
);

export default Hero;
