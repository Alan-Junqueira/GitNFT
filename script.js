const cards = document.querySelector('.cards');
const card = cards.querySelectorAll('li');

card.forEach((card) => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('ativo');
    card.querySelector('span').classList.add('ativo');
  });
});

card.forEach((card) => {
  card.addEventListener('mouseleave', () => {
    card.classList.remove('ativo');
    card.querySelector('span').classList.remove('ativo');
  });
});
