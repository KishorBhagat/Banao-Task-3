console.log("script added");

let currentPage = 1

const carouselItem = document.querySelectorAll('.item');
const carousel = document.querySelector('.carousel')

// const dotClick = (page) => {
//     console.log(page-1)
//     carouselItem.forEach(item => {
//         item.style.transform = `translateX(-${(page-1)*100}vw)`
//       });
// }

// carousel.addEventListener('wheel', (event) => {
//   const deltaY = event.deltaY;
//   if(deltaY > 0) {
//     if(currentPage < 7) {
//         currentPage = currentPage + 1;
//         dotClick(currentPage);
//     }
//   }
//   else if (deltaY < 0) {
//     if(currentPage > 1) {
//         currentPage = currentPage - 1;
//         dotClick(currentPage);
//     }
//   }
//   console.log(currentPage)
// });