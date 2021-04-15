export const navigationControl = () => {
   const icons = document.querySelectorAll('.NavIcon');
   icons[0].classList.add('activeIcon');

   icons.forEach((item, id) => {
      item.addEventListener('click', () => {
         window.scrollTo({
            top: id * window.innerHeight,
            behavior: 'smooth',
         });
      });
   });

   window.addEventListener('scroll', () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      if (scrollY < windowHeight) {
         icons.forEach((item, id) => {
            id === 0
               ? item.classList.add('activeIcon')
               : item.classList.remove('activeIcon');
         });
      }
      if (scrollY > windowHeight * 0.8) {
         icons.forEach((item, id) => {
            id === 1
               ? item.classList.add('activeIcon')
               : item.classList.remove('activeIcon');
         });
      }
      if (scrollY > 2 * windowHeight * 0.8) {
         icons.forEach((item, id) => {
            id === 2
               ? item.classList.add('activeIcon')
               : item.classList.remove('activeIcon');
         });
      }
      if (scrollY > 3 * windowHeight - 100) {
         icons.forEach((item, id) => {
            id === 3
               ? item.classList.add('activeIcon')
               : item.classList.remove('activeIcon');
         });
      }
   });
};
