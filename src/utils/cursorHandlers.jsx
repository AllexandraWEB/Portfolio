import { gsap } from "gsap";

export const handleSmallerCursorEnter = () =>
  gsap.to("#cursor", { scale: 4, duration: 0.3 });

export const handleCursorEnter = () =>
  gsap.to("#cursor", { scale: 8, duration: 0.3 });

export const handleCursorLeave = () =>
  gsap.to("#cursor", { scale: 1, duration: 0.3 });
