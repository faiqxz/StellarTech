import React from "react";
import { apple, bill, google, mac, windows } from "../assets";
import { useObserverView } from "../hooks";
import styles, { layout } from "../utils/style";

const Billing = () => {
  const { ref: infoRef, inView: infoInView } = useObserverView();
  const { ref: imgRef, inView: imgInView } = useObserverView();

  return (
    <section id="Download" className={layout.sectionReverse}>
      <div className={layout.sectionImgReverse}>
        <img
          ref={imgRef}
          src={bill}
          alt="Billing"
          className={`w-[100%] h-[100%] relative z-[5] ${
            imgInView ? "opacity-transition" : ""
          }`}
        />
        <div className="absolute z-[0] w-[80%] h-[60%] -right-[100%] rounded-full red__gradient" />
        <div className="absolute z-[0] -left-1/2 bottom-0 w-[80%] h-[50%] rounded-full blue__gradient"/>
        <div className="absolute z-[0] -right-1/2 bottom-0 w-[60%] h-[80%] rounded-full red__gradient"/>
      </div>
      <div
        ref={infoRef}
        className={`${layout.sectionInfo} ${
          infoInView ? "fadeInAnimationLeft" : ""
        }`}
      >
        <h2 className={styles.heading2}>
          Available on <br className="sm:block hidden" /> All Platforms!
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          There is no excuse for not going on an exploration, do your searching on any platform you are using from mobile to computers.
        </p>
        <div className="flex flex-row justify-between flex-wrap sm:mt-10 mt-6">
          <img
            src={apple}
            alt="App Store"
            className="w-[128px] h-[42px] object/contain cursor-pointer"
          />
          <img
            src={google}
            alt="Google Play"
            className="w-[128px] h-[42px] object/contain cursor-pointer"
          />
          <img
            src={mac}
            alt="Mac OS"
            className="w-[110px] h-[42px] object/contain cursor-pointer"
          />
          <img
            src={windows}
            alt="Windows"
            className="w-[110px] h-[42px] object/contain cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;
