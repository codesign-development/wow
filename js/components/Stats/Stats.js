import anime from 'animejs'
import statsView from './statsView.html'
import Categorias from '../Categorias'

export default ()=>{

    const statsContainer = document.createElement('div')
    statsContainer.className = 'containerStats'
    statsContainer.innerHTML = statsView
    const categorias = statsContainer.querySelector('.categorias')
    const cardMision = statsContainer.querySelectorAll('.swipperMisiones .cardMision')
    anime({
        targets: cardMision,
        opacity: 1,
        delay: anime.stagger(100) // increase delay by 100ms for each elements.
      });
    
    categorias.appendChild(Categorias())
    return statsContainer
}