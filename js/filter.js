// FILTER
const toggleFilter = document.getElementById("toggleFilter");
const catalogBlock = document.getElementById("catalogBlock");
const filterBtnShow = document.querySelector(".filter-btn-show")
const filterBtnClose = document.querySelector(".filter-btn-close");

if (toggleFilter) {
  toggleFilter.onclick = function() {
    catalogBlock.classList.toggle('active');
    filterBtnShow.classList.toggle('active');
    filterBtnClose.classList.toggle('active');
  }
}

let accHead = document.getElementsByClassName('acc-head');

for (let i = 0; i < accHead.length; i++) {
  accHead[i].addEventListener('click', function() {
    let accBody = this.nextElementSibling;
    let accIco = this.querySelector('.acc-ico');
    accIco.classList.toggle('active');
    accBody.classList.toggle('active');
  });
}

const filterAvailabilityLabel = document.querySelector('.filter-availability-label');
const filterParam = document.getElementsByClassName('filter-param');


for (let i = 0; i < filterParam.length; i++) {
  filterParam[i].addEventListener('click', function() {
    filterParam[i].classList.toggle('active');
  });
}

if (filterAvailabilityLabel) {
  filterAvailabilityLabel.onclick = function() {
    this.classList.toggle('active');
  }
}

// PAGINATIOM
const paginationNumbers = document.getElementById("pagination-numbers");
const paginatedList = document.getElementById("paginated-list"); // yes
const listItems = paginatedList.querySelectorAll(".product-item");
const nextButton = document.getElementById("next-button");
const prevButton = document.getElementById("prev-button");

const paginationLimit = 12;
const pageCount = Math.ceil(listItems.length / paginationLimit);
let currentPage = 1;

const disableButton = (button) => {
  button.classList.add("disabled");
  button.setAttribute("disabled", true);
};

const enableButton = (button) => {
  button.classList.remove("disabled");
  button.removeAttribute("disabled");
};

const handlePageButtonsStatus = () => {
  if (currentPage === 1) {
    disableButton(prevButton);
  } else {
    enableButton(prevButton);
  }

  if (pageCount === currentPage) {
    disableButton(nextButton);
  } else {
    enableButton(nextButton);
  }
};

const handleActivePageNumber = () => {
  document.querySelectorAll(".pagination-number").forEach((button) => {
    button.classList.remove("active");
    const pageIndex = Number(button.getAttribute("page-index"));
    if (pageIndex == currentPage) {
      button.classList.add("active");
    }
  });
};

const appendPageNumber = (index) => {
  const pageNumber = document.createElement("button");
  pageNumber.className = "pagination-number";
  pageNumber.innerHTML = index;
  pageNumber.setAttribute("page-index", index);
  pageNumber.setAttribute("aria-label", "Page " + index);

  paginationNumbers.appendChild(pageNumber);
};

const getPaginationNumbers = () => {
  for (let i = 1; i <= pageCount; i++) {
    appendPageNumber(i);
  }
};

const setCurrentPage = (pageNum) => {
  currentPage = pageNum;

  handleActivePageNumber();
  handlePageButtonsStatus();
  
  const prevRange = (pageNum - 1) * paginationLimit;
  const currRange = pageNum * paginationLimit;

  listItems.forEach((item, index) => {
    item.classList.add("hidden");
    if (index >= prevRange && index < currRange) {
      item.classList.remove("hidden");
    }
  });
};

window.addEventListener("load", () => {
  getPaginationNumbers();
  setCurrentPage(1);

  prevButton.addEventListener("click", () => {
    setCurrentPage(currentPage - 1);
  });

  nextButton.addEventListener("click", () => {
    setCurrentPage(currentPage + 1);
  });

  document.querySelectorAll(".pagination-number").forEach((button) => {
    const pageIndex = Number(button.getAttribute("page-index"));

    if (pageIndex) {
      button.addEventListener("click", () => {
        setCurrentPage(pageIndex);
      });
    }
  });
});

// 
// Сортировка по возрастанию/убыванию цены
// 

const sortButton = document.querySelector('.uil-sort-amount-down');
const productItems = document.querySelectorAll('.product-item');

sortButton.addEventListener('click', function() {
  this.classList.toggle('active');

  const itemsArray = Array.from(productItems);

  if (this.classList.contains('active')) {
    itemsArray.sort((a, b) => {
      const priceA = getPrice(a);
      const priceB = getPrice(b);
      return priceA - priceB;
    });
  } else {
    itemsArray.sort((a, b) => {
      const priceA = getPrice(a);
      const priceB = getPrice(b);
      return priceB - priceA;
    });
  }

  const productContainer = document.querySelector('.product-container');
  productContainer.innerHTML = '';

  itemsArray.forEach(item => {
    productContainer.appendChild(item);
  });
});

function getPrice(item) {
  const priceElement = item.querySelector('.price');
  const priceText = priceElement.textContent.trim();
  const price = parseInt(priceText.replace(/\D/g, ''));
  return price;
}


