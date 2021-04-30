import guardarView from './guardarView.html'
import Categorias from '../Categorias'

export default ()=>{

    const saveContainer = document.createElement('div')
    saveContainer.className = 'containerSave'
    saveContainer.innerHTML = guardarView
   

    const categorias = saveContainer.querySelector('.categorias')
    
    
    categorias.appendChild(Categorias())
    
    
    

    return saveContainer
}