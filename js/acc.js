let accHead = document.getElementsByClassName('acc-head');

for (let i = 0; i < accHead.length; i++) {
  accHead[i].addEventListener('click', function() {
    let accBody = this.nextElementSibling;
    let accIco = this.querySelector('.acc-ico');
    accIco.classList.toggle('active');
    accBody.classList.toggle('active');
  });
}