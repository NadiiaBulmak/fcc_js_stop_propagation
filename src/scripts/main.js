'use strict';

document.querySelector('.modal-overlay').addEventListener('click', () => {
  document.querySelector('.modal-overlay').style.display = 'none';
  // console.log('Modal closed by clicking outside');
});

document.querySelector('.modal-content').addEventListener('click', (event) => {
  event.stopPropagation();
});

document.querySelector('.close-btn').addEventListener('click', (event) => {
  event.stopPropagation();
  document.querySelector('.modal-overlay').style.display = 'none';
  // console.log('Modal closed with button');
});

document.querySelector('.submit-btn').addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
  // console.log('Form submitted!');
});
