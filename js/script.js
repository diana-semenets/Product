
document.getElementById('slider-left').onclick = sliderLeft;
var left = 0;

function sliderLeft() {
    var polosa = document.getElementById('polosa');
    left = left - 380;
    if (left < -1150) {
        left = 0;
    }
    polosa.style.left = left + 'px';
}








  //практика

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
 
//  Modal

const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalCloseBtn = document.querySelector('[data-close]');

modalTrigger.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  });
});

function closeMode() {
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
};

modalCloseBtn.addEventListener('click', closeMode);

modal.addEventListener('click', (e) => {
if (e.target === modal) {
    closeMode();
  }
});

document.addEventListener('keydown', (e) => {
if (e.code === 'Escape' && modal.classList.contains('show')) {
    closeMode();
  }
});

//---------cards--------//

class MenuCard {
  constructor(title,  price, descr, parentSelector) {
      
      this.title = title;
      this.price = price;
      this.descr = descr;      
      this.parent = document.querySelector(parentSelector);      
  }

  render() {
    const element = document.createElement('div');
    element.innerHTML = `
      <div class="table__card" id="card">
      <div class="table__card-title">${this.title}</div>
      <div class="table__card-subtitle">Brief price description</div>
      <div class="table__card-price"><span class="price-price">${this.price}</span>/ month </div>
      <div class="table__card-text">
        <p>${this.descr} Operators</p>
        <p>Notifications</p>
        <p>Landing Pages</p>
      </div>
      <div class="table__card-btn"><a href="#">Order Now</a></div>
    </div>
    `;
    this.parent.append(element);
  }
}

new MenuCard (
  'Free',
  '0$',
  'Only 2',
  '.table__container-cards'
).render();

new MenuCard (
  'Standard',
  '5$',
  '5+',
  '.table__container-cards'
).render();

new MenuCard (
  'Premium',
  '10$',
  '10+',
  '.table__container-cards'
).render();
