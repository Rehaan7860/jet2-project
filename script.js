const openModal = document.querySelector('.open__button');
const modalButtons = document.querySelector('.buttons');
const dialog = document.querySelector('dialog');

openModal.addEventListener('click', () => {
    dialog.showModal();
  });

modalButtons.addEventListener('click', () => {
    dialog.close();
});