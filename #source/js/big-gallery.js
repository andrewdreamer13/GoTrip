// Slider
bigGallery();
function bigGallery(){
  const slider = document.querySelector('.big-gallery');
  const nextBtn = document.querySelector('.next-button');
  const prevBtn = document.querySelector('.prev-button');
  const images = document.querySelectorAll('.big-gallery__item');
  const dots = document.querySelectorAll('.card');
  
  let count = 0;
  let index = 0;
  
  // Next button control
  nextBtn.addEventListener('click', function () {
  
    count = count + 100;
    index++;
    images.forEach((image,i) => {
      if (index >= images.length -1) {
        // index--;
        // count = count - 100;
        nextBtn.style.display = 'none';
      }
      prevBtn.style.display = 'flex';
      image.style.transform = 'translate(-' + count + '%)';
    })
  
  })
  
  // Prev button control
  prevBtn.addEventListener('click', function () {
  count = count - 100;
  index--;
  images.forEach((image, i) => {
    if (index <= 0) {
      index = 0;
      count = 0;
      prevBtn.style.display = 'none';
    }
    nextBtn.style.display = 'flex';
    image.style.transform = 'translate(-' + count + '%)';
  })
  })
  
// dots control
dots.forEach((dot,dotIndex)=>{
  dot.addEventListener('click',()=>{
    count = 100 * dotIndex;
    index = dotIndex;
    images.forEach((image)=>{
      image.style.transform = 'translate(-' + count + '%)';
    })
  })

})
}
