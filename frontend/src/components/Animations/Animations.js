import gsap from 'gsap';

export const landingImageAnimations = () => {
   const timeLine = gsap.timeline();
   timeLine.from('#trophy', { y: 50, duration: 0.8, opacity: 0 }, 'start');
   timeLine.from(
      '#girl',
      { x: -150, duration: 0.8, delay: 0.7, opacity: 0 },
      'start'
   );
   timeLine.from(
      '#boy',
      { x: 100, y: -50, duration: 0.8, delay: 0.7, opacity: 0 },
      'start'
   );
};

export const modalAnimation = () => {
   const timeLine = gsap.timeline({ defaults: { ease: 'bounce.out' } });
   timeLine.from('#tournamentModal', { y: -150, duration: 0.4 });
};
