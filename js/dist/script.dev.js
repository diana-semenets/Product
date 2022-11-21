"use strict";

document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;

function sliderLeft() {
  var polosa = document.getElementById('polosa');
  left = left - 380;

  if (left < -1150) {
    left = 0;
  }

  polosa.style.left = left + 'px';
} //практика
//    удаление картинок...

/* const adv = document.querySelectorAll('.img-product');
adv.forEach(item => {
  item.remove();
})
*/
//    смена текста на фоне...

/*  const poster = document.querySelector('.quick__container'),
      genre = poster.querySelector('.quick__inner-title');
      movieList = document.querySelector('.support__content-items');

genre.textContent = 'change';

//    очистка элемента...
movieList.innerHTML = '';

*/
// форма

/*const addForm = document.querySelector('form.footer__form');
const addInput = addForm.querySelector('.form-input');
const checkbox = addForm.querySelector('[type="checkbox"]');

addForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const newFilm = addInput.value;
  const favorite = checkbox.checked;

  event.target.reset();

}
)*/