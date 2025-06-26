import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";

const Preloader = ({ onFinish }) => {
  const [hideLoader, setHideLoader] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  const containerRef = useRef(null);
  const counterRef = useRef(null);

  const progressChunks = [
    [0, 0],
    [2, 7],
    [4, 2],
    [6, 5],
    [9, 8],
    [9, 9],
  ];

  gsap.registerPlugin(CustomEase);
  CustomEase.create("hop", "0.9, 0, 0.1, 1");

  useEffect(() => {
    const counts = counterRef.current.querySelectorAll(".count");
    const tl = gsap.timeline({ onComplete: animateOut });

    const enterDuration = 0.3;
    const exitDuration = 0.2;
    const stagger = 0.075;
    const waitTimeAfterEnter = 0.1;

    counts.forEach((count, index) => {
      const digits = count.querySelectorAll(".digit h1");

      const totalStaggerTime = stagger * (digits.length - 1);

      const startTime =
        index * (enterDuration + exitDuration + waitTimeAfterEnter + 0.2);

      // Enter
      tl.to(
        digits,
        {
          y: "0%",
          duration: enterDuration,
          stagger: stagger,
          ease: "power2.out",
        },
        startTime
      );

      // Exit
      tl.to(
        digits,
        {
          y: "-100%",
          duration: exitDuration,
          stagger: stagger,
          ease: "power2.in",
        },
        startTime + enterDuration + waitTimeAfterEnter
      );
    });

    function animateOut() {
      const tl2 = gsap.timeline({
        onComplete: () => {
          setHideLoader(true);
          onFinish();
        },
      });

      tl2.to(containerRef.current, {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
      });
    }
  }, [onFinish]);

  if (hideLoader) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 bg-[#0c0c0c] flex items-center justify-center z-50"
    >
      <div
        className="counter absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        ref={counterRef}
      >
        {progressChunks.map((pair, i) => (
          <div
            key={i}
            className="count flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
          >
            {pair.map((digit, j) => (
              <div
                key={j}
                className="digit overflow-hidden h-[70px] md:h-[170px] w-[50px] md:w-[90px] flex items-center justify-center"
              >
                <h1
                  className="text-white text-[70px] md:text-[170px] font-bold font-main"
                  style={{ transform: "translateY(100%)" }}
                >
                  {digit}
                </h1>
              </div>
            ))}
          </div>
        ))}
      </div>
      <div className="spinner-container absolute left-1/2 -translate-x-1/2 bottom-1/4">
        <div className="spinner w-[30px] md:w-[50px] h-[30px] md:h-[50px] border-[2px] border-white border-t-[#404040] rounded-[50%] animate-spin"></div>
      </div>
    </div>
  );
};

export default Preloader;
