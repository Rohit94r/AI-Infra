"use client";

import { useEffect } from "react";
import gsap from "gsap";

export function useGsapReveal() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-gsap-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { autoAlpha: 0, y: 28 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: undefined
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
}
