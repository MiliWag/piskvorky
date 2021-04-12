'use strict';

const circlePlay = document.querySelector('#crossPlayer');
const crossPlay = document.querySelector('#circlePlayer');
const buttons = document.querySelectorAll('button');

//změna ikony hráče v horní navigaci, vložení kolečka/křížku do hracího pole

for (let i = 0; i < buttons.length; i += 1) {
  const button = buttons[i];

  button.addEventListener('click', () => {
    crossPlay.classList.toggle('circle--play');
    circlePlay.classList.toggle('cross--play');

    if (circlePlay.className === 'cross-play') {
      button.innerHTML = `<img class ="playfield__box--content" src="images/cross.svg" alt="čtvereček" />`;
      button.disabled = 'true';
    } else {
      button.innerHTML = `<img class ="playfield__box--content" src="images/circle.svg" alt="kolecko" />`;
      button.disabled = 'true';
    }
  });
}
