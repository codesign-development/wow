import categoriasView from './categoriasView.html'

export default ()=>{

    const categoriaContainer = document.createElement('div')
    categoriaContainer.className = 'containercategoria'
    categoriaContainer.innerHTML = categoriasView

    return categoriaContainer
}