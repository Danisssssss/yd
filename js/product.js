let swiper = new Swiper(".thumbs-image-slider", {
    slidesPerView: 4,
    watchSlidesProgress: true,
});

let swiper2 = new Swiper(".main-image-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
    loop: true,
    effect: "fade",
    simulateTouch: true,
});



// 
// Табы размеров
// 

const tabBtns = document.querySelectorAll('.tab-btn');
const tabBodies = document.querySelectorAll('.tab-body');

tabBtns.forEach((tabBtn, index) => {
  tabBtn.addEventListener('click', () => {
    // Удаляем класс "active" у всех кнопок и табов
    tabBtns.forEach(btn => btn.classList.remove('active'));
    tabBodies.forEach(body => body.classList.remove('active'));

    // Добавляем класс "active" к текущей кнопке и отображаем соответствующий таб
    tabBtn.classList.add('active');
    tabBodies[index].classList.add('active');
  });
});



// 
// Табы описания
// 

const descrBtns = document.querySelectorAll('.description-btn');
const descrBodies = document.querySelectorAll('.description-body');

descrBtns.forEach((descrBtn, index) => {
  descrBtn.addEventListener('click', () => {
      // Удаляем класс "active" у всех кнопок и табов
      descrBtns.forEach(btn => btn.classList.remove('active'));
      descrBodies.forEach(body => body.classList.remove('active'));

      // Добавляем класс "active" к текущей кнопке и отображаем соответствующий таб
      descrBtn.classList.add('active');
      descrBodies[index].classList.add('active');
  });
});


// 
// Выбор размера и цены
// 

window.addEventListener('load', function() {
  let sizeBlock = document.querySelector('.size-block');
  let sizePrice = sizeBlock.querySelector('.size-price');
  let productInfoPrice = document.querySelector('.product-info-price');
  
  productInfoPrice.textContent = sizePrice.textContent;
});

const sizeBlocks = document.querySelectorAll('.size-block');
const offerSize = document.querySelector('.offer-size');

sizeBlocks.forEach(sizeBlock => {
  sizeBlock.addEventListener('click', () => {
    sizeBlocks.forEach(block => block.classList.remove('active'));
    sizeBlock.classList.add('active');
    
    const sizeNumber = sizeBlock.querySelector('.size-number').textContent;
    offerSize.textContent = sizeNumber;

    let sizePrice = sizeBlock.querySelector('.size-price');
    let productInfoPrice = document.querySelector('.product-info-price');

    productInfoPrice.textContent = sizePrice.textContent;
  });
});


// 
// Копирование артикула
// 

function copyText(element) {
  // Получаем текст из предыдущего элемента span
  let text = element.previousElementSibling.innerText;

  // Создаем временный textarea элемент для копирования текста
  let textarea = document.createElement('textarea');
  textarea.value = text;
  document.body.appendChild(textarea);

  // Выполняем команду копирования
  textarea.select();
  document.execCommand('copy');

  // Удаляем временный textarea элемент
  document.body.removeChild(textarea);
}