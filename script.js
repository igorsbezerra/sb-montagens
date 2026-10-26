const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('#menu');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('open');
});

document.querySelectorAll('#menu a').forEach((link) => link.addEventListener('click', () => {
  menu.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
}));

const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project-card');

filters.forEach((button) => button.addEventListener('click', () => {
  const { filter } = button.dataset;
  filters.forEach((item) => {
    const active = item === button;
    item.classList.toggle('active', active);
    item.setAttribute('aria-pressed', String(active));
  });
  projects.forEach((card) => {
    card.classList.toggle('hidden', filter !== 'all' && card.dataset.category !== filter);
  });
}));

const imageDialog = document.querySelector('#image-dialog');
const dialogImage = document.querySelector('#dialog-image');
const dialogCaption = document.querySelector('#image-dialog-title');
const closeDialog = document.querySelector('.close-dialog');

document.querySelectorAll('[data-lightbox-src]').forEach((button) => button.addEventListener('click', () => {
  dialogImage.src = button.dataset.lightboxSrc;
  dialogImage.alt = button.dataset.lightboxAlt;
  dialogCaption.textContent = button.dataset.lightboxCaption;
  imageDialog.showModal();
  closeDialog.focus();
}));

closeDialog?.addEventListener('click', () => imageDialog.close());
imageDialog?.addEventListener('click', (event) => {
  if (event.target === imageDialog) imageDialog.close();
});

document.querySelector('#year').textContent = new Date().getFullYear();
