import statsView from './statsView.html'
import Categorias from '../Categorias'

export default ()=>{

    const statsContainer = document.createElement('div')
    statsContainer.className = 'containerStats'
    statsContainer.innerHTML = statsView
    const categorias = statsContainer.querySelector('.categorias')
    
    
    categorias.appendChild(Categorias())
    return statsContainer
}