function hoverUlCards() {

const cardUl = document.querySelector('.cardsArtists ul')
const itensUl = cardUl.querySelectorAll('li')
const itensUlPLastChild = cardUl.querySelectorAll('p:last-child')

function addClassAtivoP(index) {
  itensUlPLastChild.forEach(itensUlPLastChild => {
    itensUlPLastChild.classList.remove('active')
  })
  itensUlPLastChild[index].classList.add('active')
}

itensUl.forEach((itemUl, index) => {
  itemUl.addEventListener('mouseenter', () => {
    addClassAtivoP(index)
  })
})

function removeClassAtivoP(index) {
  itensUlPLastChild.forEach(itensUlPLastChild => {
    itensUlPLastChild.classList.remove('active')
  })
  itensUlPLastChild[index].classList.remove('active')
}

itensUl.forEach((itemUl, index) => {
  itemUl.addEventListener('mouseleave', () => {
    removeClassAtivoP(index)
  })
})

}

hoverUlCards()  