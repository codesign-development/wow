import anime from 'animejs'

import categoriasView from './categoriasView.html'

export default ()=>{

    const categoriaContainer = document.createElement('div')
    categoriaContainer.className = 'containercategoria'
    categoriaContainer.innerHTML = categoriasView

    const iconContent = categoriaContainer.querySelectorAll('.wrapperIconsCat .IconContent')
    anime({
        targets: iconContent,
        opacity: 1,
        delay: anime.stagger(200) // increase delay by 100ms for each elements.
      });

    return categoriaContainer
}