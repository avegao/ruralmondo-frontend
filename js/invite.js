'use strict';

// Variables

const usernameLogin = document.querySelector('#username');
const passwordLogin = document.querySelector('#password');
const passwordLogin1 = document.querySelector('#password1');
const formularioLogin = document.querySelector('#formularioLogin');
const spiner = document.querySelector('#spiner');

spiner.style.display = 'none';

// Event Listeners
formularioLogin.addEventListener('submit', e => {
  e.preventDefault();

  if (usernameLogin.value === '' || passwordLogin.value === '' || passwordLogin1.value === '') {
    const error = document.createElement('p');
    error.innerHTML = `Por favor, no dejes ningún apartado sin rellenar`;
    error.classList = 'alert alert-danger text-center';

    formularioLogin.appendChild(error);

    setTimeout(() => {
      error.remove();
    }, 2000);
  } else {
    spiner.style.display = 'flex';

    const welcome = document.createElement('h5');
    welcome.innerHTML = `¡Tus datos son correctos!`;
    welcome.classList = 'text-center';

    setTimeout(() => {
      spiner.style.display = 'none';
      formularioLogin.appendChild(welcome);

      setTimeout(() => {
        welcome.remove();
      }, 3000);
    }, 2000);
  }
});
