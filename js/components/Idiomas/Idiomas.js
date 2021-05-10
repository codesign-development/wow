import idiomasView from './idiomasView.html'
import Modelo from '../Modelo'
export var setLan = {}
export default () => {

  const selectIdiomas = document.createElement('div')
  selectIdiomas.className = "selectIdiomas"
  selectIdiomas.innerHTML = idiomasView

  const root = document.querySelector('#root')
  const btnGroup = selectIdiomas.querySelector('.btnGroup')
  const logoSales = document.querySelector('.logoSales')

 

  btnGroup.addEventListener('click', e => {
    const url = '../../../json'
    switch (e.target.id) {
      case 'es':
        fetch(url)
          .then(respuesta => respuesta.json())
          .then(resultado => cargarIdioma(resultado[0].es))
        break;
      case 'en':
        fetch(url)
          .then(respuesta => respuesta.json())
          .then(resultado => cargarIdioma(resultado[1].en))
        break;
      case 'fr':
        fetch(url)
          .then(respuesta => respuesta.json())
          .then(resultado => cargarIdioma(resultado[2].fr))
        break;
      case 'pt':
        fetch(url)
          .then(respuesta => respuesta.json())
          .then(resultado => cargarIdioma(resultado[3].pt))
          .then((obtenerLan) => {localStorage.setItem('test', JSON.stringify(obtenerLan)); setLan=obtenerLan })
          
        break;
      default:
        break;
    }

   

   /*  selectIdiomas.style.display = 'none'
    root.removeChild(root.firstElementChild)
    root.appendChild(Modelo())
 */
  })

  

  return selectIdiomas


}

function cargarIdioma({bienvenida, categorias, misiones, tooltip, ui}){
   
  let idioma = {
      bienvenida,
      categorias,
      misiones,
      tooltip,
      ui,

    } 
   return idioma
}



