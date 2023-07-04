// Modal Social
const modalSocial = document.getElementById('modalSocial');
const modalSocialOpen = document.getElementById('modalSocialOpen');
const modalSocialClose = document.querySelectorAll('.close');



// Search Popup
const blur = document.getElementById('blur'); // Фон попап окна
const searchPopup = document.getElementById('searchPopup'); // Само окно
const toggleSearchPopupButtons = document.querySelectorAll('.search-popup-btn'); // Кнопки для показа окна
const closeSearchPopupButtons = document.querySelectorAll('.search-close');




// Cart Popup
const cartPopup = document.querySelector('.cart-popup');
const openCartPopupButton = document.querySelectorAll('.cart-popup-btn');
const closeCartPopupButton = document.querySelectorAll('.cart-popup-top-close');

const menuBtn = document.getElementById('menuBtn');
const header = document.getElementById('header');
const navFrame = document.getElementById('navFrame');
const body = document.getElementById('body');


// MODAL AUTHOR
const modalAuthorization = document.getElementById('modalAuthorization');
const modalAuthorizationOpen = document.getElementById('modalAuthorizationOpen');
const authorizationPopupButton = document.querySelectorAll('.authorization-popup-btn');


authorizationPopupButton.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      modalAuthorizationOpen.classList.toggle('active');
  })
});


modalAuthorizationOpen.onclick = function(e) {
  e.preventDefault();
  modalAuthorization.classList.toggle('active');
  modalAuthorizationOpen.classList.remove('active');
}


// MODAL SOCIAL
modalSocialOpen.onclick = function() {
  modalSocial.classList.add('active');
}

modalSocialClose.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      modalSocial.classList.remove('active'); // И для самого окна
      modalAuthorization.classList.remove('active'); // И для самого окна
  })
});



// SEARCH POPUP
toggleSearchPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      searchPopup.classList.toggle('active'); // И для самого окна
      blur.classList.toggle('active');
      body.classList.toggle('no-scroll');
  })
});

closeSearchPopupButtons.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      searchPopup.classList.remove('active');
      blur.classList.remove('active');
      body.classList.remove('no-scroll');
  })
});



// CART POPUP
openCartPopupButton.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      cartPopup.classList.add('active'); // И для самого окна
      body.classList.add('no-scroll');
  })
});

closeCartPopupButton.forEach((button) => { // Перебираем все кнопки
  button.addEventListener('click', (e) => { // Для каждой вешаем обработчик событий на клик
      e.preventDefault(); // Предотвращаем дефолтное поведение браузера
      cartPopup.classList.remove('active'); // И для самого окна
      body.classList.remove('no-scroll');
  })
});




menuBtn.onclick = function() {
  this.classList.toggle('active');
  header.classList.toggle('active');
  navFrame.classList.toggle('active');
  body.classList.toggle('no-scroll');
}




window.onclick = function(event) {
  if (event.target == modalAuthorization) {
    modalAuthorization.classList.remove('active');
  }

  if (event.target.id == 'modalSocial') {
    modalSocial.classList.remove('active');
  }

  if (event.target == blur) {
    searchPopup.classList.remove('active'); // И для самого окна
    blur.classList.remove('active');
    body.classList.remove('no-scroll');
  }

  if (event.target == cartPopup) {
    cartPopup.classList.remove('active');
    body.classList.remove('no-scroll');
  }
}


// 
// 
// ADD TO CART
// 
// 


// Функция для сохранения элементов корзины в Local Storage
function saveCartItemsToLocalStorage() {
const cartItems = document.querySelectorAll('.cart-popup-item');
const cartItemsData = [];

cartItems.forEach(cartItem => {
  const itemInfo = cartItem.querySelector('.cart-popup-item__info');
  const itemName = itemInfo.querySelector('.cart-popup-item__content-name').textContent;
  const itemSize = itemInfo.querySelector('.size').textContent;
  const itemPrice = itemInfo.querySelector('.price-item').textContent;
  const itemCount = itemInfo.querySelector('.cart-popup-item-count').value;

  cartItemsData.push({
    name: itemName,
    size: itemSize,
    price: itemPrice,
    count: itemCount
  });
});

localStorage.setItem('cartItems', JSON.stringify(cartItemsData));
}

// Функция для загрузки элементов корзины из Local Storage
function loadCartItemsFromLocalStorage() {
const cartItemsData = localStorage.getItem('cartItems');

if (cartItemsData) {
  const cartItems = JSON.parse(cartItemsData);

  cartItems.forEach(itemData => {
    // Создание и добавление элементов корзины на основе данных
    const newItem = document.createElement('div');
    newItem.classList.add('cart-popup-item');

    const newItemImage = document.createElement('div');
    newItemImage.classList.add('cart-popup-item__image');
    const newImage = document.createElement('img');
    newImage.src = '../../images/product-page/nike-air-jordan-1-retro-high-og-skyline/1.png';
    newImage.alt = '';
    newItemImage.appendChild(newImage);
    newItem.appendChild(newItemImage);

    const newItemInfo = document.createElement('div');
    newItemInfo.classList.add('cart-popup-item__info');

    const newItemName = document.createElement('h4');
    newItemName.classList.add('cart-popup-item__content-name');
    newItemName.textContent = itemData.name;
    newItemInfo.appendChild(newItemName);

    const newSize = document.createElement('div');
    newSize.classList.add('size');
    newSize.textContent = itemData.size;
    newItemInfo.appendChild(newSize);

    const newPriceItem = document.createElement('p');
    newPriceItem.style.display = 'none';
    newPriceItem.classList.add('price-item');
    newPriceItem.textContent = itemData.price;
    newItemInfo.appendChild(newPriceItem);

    const newContentPrice = document.createElement('p');
    newContentPrice.classList.add('cart-popup-item__content-price');
    newContentPrice.textContent = itemData.price;
    newItemInfo.appendChild(newContentPrice);

    const newCounter = document.createElement('div');
    newCounter.classList.add('cart-popup-item-counter');

    const newMinusBtn = document.createElement('button');
    newMinusBtn.classList.add('uil', 'uil-minus', 'cart-popup-item-counter__minus');
    newCounter.appendChild(newMinusBtn);

    const newCountInput = document.createElement('input');
    newCountInput.classList.add('cart-popup-item-count');
    newCountInput.type = 'number';
    newCountInput.min = '1';
    newCountInput.max = '10';
    newCountInput.value = itemData.count;
    newCounter.appendChild(newCountInput);

    const newPlusBtn = document.createElement('button');
    newPlusBtn.classList.add('uil', 'uil-plus', 'cart-popup-item-counter__plus');
    newCounter.appendChild(newPlusBtn);

    newItemInfo.appendChild(newCounter);

    const newTrashBtn = document.createElement('div');
    newTrashBtn.classList.add('cart-popup-item-trash');
    const newDeleteBtn = document.createElement('button');
    newDeleteBtn.classList.add('uil', 'uil-trash');
    newTrashBtn.appendChild(newDeleteBtn);
    newItemInfo.appendChild(newTrashBtn);

    newItem.appendChild(newItemInfo);

    const cartPopupWrapper = document.querySelector('.cart-popup-wrapper');
    cartPopupWrapper.appendChild(newItem);
  });

  updateTotalPrice();
  updateItemCount();
}
}

const addToCartLinks = document.querySelectorAll('.add-to-cart');
const cartPopupWrapper = document.querySelector('.cart-popup-wrapper');
const countElement = document.querySelector('.cart-popup-count');
const finalPriceElement = document.querySelector('.cart-popup-finalprice__value');

addToCartLinks.forEach(addToCartLink => {
  addToCartLink.addEventListener('click', (event) => {
    event.preventDefault(); // Предотвращаем переход по ссылке

    // Получаем информацию о товаре из соответствующих элементов
    const productImage = event.currentTarget.getAttribute('data-image');
    const productName = document.querySelector('.product-title-block h1');
    const sizeBlock = document.querySelector('.size-block.active');

    // Проверяем наличие активного блока размеров
    if (sizeBlock) {
      const productSize = sizeBlock.querySelector('.size-number');
      const productPrice = sizeBlock.querySelector('.size-price');

      // Создаем новый элемент для добавления в корзину
      const newItem = document.createElement('div');
      newItem.classList.add('cart-popup-item');

      const newItemImage = document.createElement('div');
      newItemImage.classList.add('cart-popup-item__image');
      const newImage = document.createElement('img');
      newImage.src = productImage;
      newImage.alt = '';
      newItemImage.appendChild(newImage);
      newItem.appendChild(newItemImage);

      const newItemInfo = document.createElement('div');
      newItemInfo.classList.add('cart-popup-item__info');

      const newItemName = document.createElement('h4');
      newItemName.classList.add('cart-popup-item__content-name');
      newItemName.textContent = productName.textContent;
      newItemInfo.appendChild(newItemName);

      const newSize = document.createElement('div');
      newSize.classList.add('size');
      newSize.textContent = productSize.textContent;
      newItemInfo.appendChild(newSize);

      const newPriceItem = document.createElement('p');
      newPriceItem.style.display = 'none';
      newPriceItem.classList.add('price-item');
      newPriceItem.textContent = productPrice.textContent;
      newItemInfo.appendChild(newPriceItem);

      const newContentPrice = document.createElement('p');
      newContentPrice.classList.add('cart-popup-item__content-price');
      newContentPrice.textContent = productPrice.textContent;
      newItemInfo.appendChild(newContentPrice);

      const newCounter = document.createElement('div');
      newCounter.classList.add('cart-popup-item-counter');

      const newMinusBtn = document.createElement('button');
      newMinusBtn.classList.add('uil', 'uil-minus', 'cart-popup-item-counter__minus');
      newCounter.appendChild(newMinusBtn);

      const newCountInput = document.createElement('input');
      newCountInput.classList.add('cart-popup-item-count');
      newCountInput.type = 'number';
      newCountInput.min = '1';
      newCountInput.max = '10';
      newCountInput.value = '1';
      newCounter.appendChild(newCountInput);

      const newPlusBtn = document.createElement('button');
      newPlusBtn.classList.add('uil', 'uil-plus', 'cart-popup-item-counter__plus');
      newCounter.appendChild(newPlusBtn);

      newItemInfo.appendChild(newCounter);

      const newTrashBtn = document.createElement('div');
      newTrashBtn.classList.add('cart-popup-item-trash');
      const newDeleteBtn = document.createElement('button');
      newDeleteBtn.classList.add('uil', 'uil-trash');
      newTrashBtn.appendChild(newDeleteBtn);
      newItemInfo.appendChild(newTrashBtn);

      newItem.appendChild(newItemInfo);

      // Добавляем новый элемент в корзину
      cartPopupWrapper.appendChild(newItem);

      updateTotalPrice();
      updateItemCount();

      // Сохраняем информацию о товаре в Local Storage
      saveCartItemToLocalStorage(newItem);
    }
  });
});

cartPopupWrapper.addEventListener('click', (event) => {
  const target = event.target;
  if (target.classList.contains('cart-popup-item-counter__minus')) {
    const itemCountInput = target.nextElementSibling;
    let count = parseInt(itemCountInput.value);
    if (count > 1) {
      count--;
      itemCountInput.value = count;
      updateItemPrice(target);
      updateTotalPrice();
    }
  } else if (target.classList.contains('cart-popup-item-counter__plus')) {
    const itemCountInput = target.previousElementSibling;
    let count = parseInt(itemCountInput.value);
    if (count < 10) {
      count++;
      itemCountInput.value = count;
      updateItemPrice(target);
      updateTotalPrice();
    }
  } else if (target.classList.contains('uil-trash')) {
    const cartItem = target.closest('.cart-popup-item');
    cartItem.remove();
    updateTotalPrice();
    updateItemCount();
    // Удаляем информацию о товаре из Local Storage
    removeCartItemFromLocalStorage(cartItem);
  }
});

cartPopupWrapper.addEventListener('input', (event) => {
  const target = event.target;
  if (target.classList.contains('cart-popup-item-count')) {
    let count = parseInt(target.value);
    if (isNaN(count) || count < 1) {
      count = 1;
    } else if (count > 10) {
      count = 10;
    }
    target.value = count;
    updateItemPrice(target);
    updateItemCount();
  }
});

function updateItemPrice(element) {
  const itemInfo = element.closest('.cart-popup-item__info');
  const itemCountInput = itemInfo.querySelector('.cart-popup-item-count');
  const itemPrice = itemInfo.querySelector('.price-item');
  const itemContentPrice = itemInfo.querySelector('.cart-popup-item__content-price');

  const count = parseInt(itemCountInput.value);
  const price = parseFloat(itemPrice.textContent.replace(/\D/g, ''));
  const totalPrice = count * price;

  itemContentPrice.textContent = totalPrice.toLocaleString() + 'р';
}

function updateTotalPrice() {
  const itemPrices = document.querySelectorAll('.cart-popup-item__content-price');
  let total = 0;

  itemPrices.forEach(itemPrice => {
    const price = parseFloat(itemPrice.textContent.replace(/\D/g, ''));
    total += price;
  });

  finalPriceElement.textContent = total.toLocaleString() + 'р';
}

function updateItemCount() {
  const cartItems = document.querySelectorAll('.cart-popup-item');
  countElement.textContent = cartItems.length.toString();
}

function saveCartItemToLocalStorage(cartItem) {
  const itemInfo = cartItem.querySelector('.cart-popup-item__info');
  const itemName = itemInfo.querySelector('.cart-popup-item__content-name').textContent;
  const itemSize = itemInfo.querySelector('.size').textContent;
  const itemPrice = itemInfo.querySelector('.price-item').textContent;
  const itemCount = itemInfo.querySelector('.cart-popup-item-count').value;
  const itemImage = cartItem.querySelector('.cart-popup-item__image img').src;

  const cartItemData = {
    name: itemName,
    size: itemSize,
    price: itemPrice,
    count: itemCount,
    image: itemImage
  };

  // Получаем данные из Local Storage
  const savedItems = localStorage.getItem('cartItems');

  if (savedItems) {
    // Если уже есть сохраненные данные, добавляем новый товар в массив
    const cartItems = JSON.parse(savedItems);
    cartItems.push(cartItemData);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  } else {
    // Если данных еще нет, создаем новый массив и сохраняем в Local Storage
    const cartItems = [cartItemData];
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }
}

function removeCartItemFromLocalStorage(cartItem) {
  const itemInfo = cartItem.querySelector('.cart-popup-item__info');
  const itemName = itemInfo.querySelector('.cart-popup-item__content-name').textContent;
  const itemSize = itemInfo.querySelector('.size').textContent;

  // Получаем данные из Local Storage
  const savedItems = localStorage.getItem('cartItems');

  if (savedItems) {
    // Если есть сохраненные данные, находим и удаляем соответствующий товар из массива
    const cartItems = JSON.parse(savedItems);
    const index = cartItems.findIndex(item => item.name === itemName && item.size === itemSize);
    if (index !== -1) {
      cartItems.splice(index, 1);
      localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }
  }
}

// Восстанавливаем товары при загрузке страницы
window.addEventListener('load', () => {
  const savedItems = localStorage.getItem('cartItems');

  if (savedItems) {
    const cartItems = JSON.parse(savedItems);

    cartItems.forEach(itemData => {
      const newItem = document.createElement('div');
      newItem.classList.add('cart-popup-item');

      const newItemImage = document.createElement('div');
      newItemImage.classList.add('cart-popup-item__image');
      const newImage = document.createElement('img');
      newImage.src = itemData.image;
      newImage.alt = '';
      newItemImage.appendChild(newImage);
      newItem.appendChild(newItemImage);

      const newItemInfo = document.createElement('div');
      newItemInfo.classList.add('cart-popup-item__info');

      const newItemName = document.createElement('h4');
      newItemName.classList.add('cart-popup-item__content-name');
      newItemName.textContent = itemData.name;
      newItemInfo.appendChild(newItemName);

      const newSize = document.createElement('div');
      newSize.classList.add('size');
      newSize.textContent = itemData.size;
      newItemInfo.appendChild(newSize);

      const newPriceItem = document.createElement('p');
      newPriceItem.style.display = 'none';
      newPriceItem.classList.add('price-item');
      newPriceItem.textContent = itemData.price;
      newItemInfo.appendChild(newPriceItem);

      const newContentPrice = document.createElement('p');
      newContentPrice.classList.add('cart-popup-item__content-price');
      newContentPrice.textContent = itemData.price;
      newItemInfo.appendChild(newContentPrice);

      const newCounter = document.createElement('div');
      newCounter.classList.add('cart-popup-item-counter');

      const newMinusBtn = document.createElement('button');
      newMinusBtn.classList.add('uil', 'uil-minus', 'cart-popup-item-counter__minus');
      newCounter.appendChild(newMinusBtn);

      const newCountInput = document.createElement('input');
      newCountInput.classList.add('cart-popup-item-count');
      newCountInput.type = 'number';
      newCountInput.min = '1';
      newCountInput.max = '10';
      newCountInput.value = itemData.count;
      newCounter.appendChild(newCountInput);

      const newPlusBtn = document.createElement('button');
      newPlusBtn.classList.add('uil', 'uil-plus', 'cart-popup-item-counter__plus');
      newCounter.appendChild(newPlusBtn);

      newItemInfo.appendChild(newCounter);

      const newTrashBtn = document.createElement('div');
      newTrashBtn.classList.add('cart-popup-item-trash');
      const newDeleteBtn = document.createElement('button');
      newDeleteBtn.classList.add('uil', 'uil-trash');
      newTrashBtn.appendChild(newDeleteBtn);
      newItemInfo.appendChild(newTrashBtn);

      newItem.appendChild(newItemInfo);

      cartPopupWrapper.appendChild(newItem);
    });

    updateTotalPrice();
    updateItemCount();
  }
});





// 
// Phone mask
// 

mask('[data-tel-input]');

// Удаляем '+' если больше ничего не введено, чтобы показать placeholder
const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input)=>{
	input.addEventListener('input', ()=>{
		if (input.value == '+') input.value = '';
	})
	input.addEventListener('blur', ()=>{
		if (input.value == '+') input.value = '';
	})
});


// // ОБРАБОТКА ВВОДА
// cartPopupWrapper.addEventListener('input', (event) => {
//   const target = event.target;
//   if (target.classList.contains('cart-popup-item-count')) {
//     let count = parseInt(target.value);
//     if (isNaN(count) || count < 1) {
//       count = 1;
//     } else if (count > 10) {
//       count = 10;
//     }
//     target.value = count;
//     updateItemPrice(target);
//     updateItemCount();
//   }
// });
