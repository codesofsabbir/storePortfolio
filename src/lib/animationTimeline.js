import gsap from "gsap";
const globalTimeline = gsap.timeline({onComplete: () => {
        setTimeout(() => setLoading(false), 100);
      },});
export default globalTimeline;