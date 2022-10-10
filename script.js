'use strict';
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const close = document.querySelector('.close-modal');
const show = document.querySelectorAll('.show-modal');

const closeUp = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const openUp = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < show.length; i++) show[i].addEventListener('click', openUp);

close.addEventListener('click', closeUp);
overlay.addEventListener('click', closeUp);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeUp();
  }
});
