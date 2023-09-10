
async function Slider() {
  const response = await fetch('http://localhost:3000/slider');
  const sliderData = await response.json();

  const swiperWrapper = document.querySelector('.swiper-wrapper');
  swiperWrapper.innerHTML = '';

  sliderData.forEach(item => {
    const swiperSlide = document.createElement('div');
    swiperSlide.classList.add('swiper-slide');

    const card = document.createElement('div');
    card.classList.add('card3', 'w-full', 'md:w-1/2', 'lg:w-1/4', 'p-4');

    const image = document.createElement('img');
    image.src = item.img;
    image.classList.add('rounded');
    card.appendChild(image);

    const text = document.createElement('p');
    text.textContent = item.text;
    text.classList.add('text-lg', 'font-semibold', 'my-2');
    card.appendChild(text);

    const coast = document.createElement('p');
    coast.textContent = item.coast;
    coast.classList.add('text-gray-500', 'text-sm');
    card.appendChild(coast);

    swiperSlide.appendChild(card);
    swiperWrapper.appendChild(swiperSlide);
  });

  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
    
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

export default Slider();