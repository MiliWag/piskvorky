'use strict';

const circlePlay = document.querySelector('#crossPlayer');
const crossPlay = document.querySelector('#circlePlayer');
const buttons = document.querySelectorAll('button');

//změna ikony hráče v horní navigaci

for (let i = 0; i < buttons.length; i += 1) {
  const button = buttons[i];

  button.addEventListener('click', () => {
    crossPlay.classList.toggle('circle--play');
    circlePlay.classList.toggle('cross--play');

    if (circlePlay.className === 'cross-play') {
      button.innerHTML = `<img src="images/cross.svg" alt="čtvereček" />`;
    } else {
      button.innerHTML = `<img src="images/circle.svg" alt="kolecko" />`;
    }
  });
}
