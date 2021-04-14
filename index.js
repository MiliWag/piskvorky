'use strict';

const circlePlay = document.querySelector('#circle-player');
const crossPlay = document.querySelector('#cross-player');
const buttons = document.querySelectorAll('button');

//změna ikony hráče v horní navigaci, vložení kolečka/křížku do hracího pole

for (let i = 0; i < buttons.length; i += 1) {
  const button = buttons[i];

  button.addEventListener('click', () => {
    circlePlay.classList.toggle('circle-not-play');
    crossPlay.classList.toggle('cross-play');

    if (circlePlay.className === 'circle-play') {
      button.classList.toggle('playfield__box--content--cross');
      button.disabled = 'true';
    } else {
      button.classList.toggle('playfield__box--content--circle');
      button.disabled = 'true';
    }
  });
}
