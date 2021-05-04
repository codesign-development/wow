import idiomasView from './idiomasView.html'
import Modelo from '../Modelo'

export default () => {

  const selectIdiomas = document.createElement('div')
  selectIdiomas.className = "selectIdiomas"
  selectIdiomas.innerHTML = idiomasView

  const root = document.querySelector('#root')
  const btnGroup = selectIdiomas.querySelector('.btnGroup')
  const logoSales = document.querySelector('.logoSales')
 
  btnGroup.addEventListener('click', e=>{
    selectIdiomas.style.display = 'none'
    root.removeChild(root.firstElementChild)
    root.appendChild(Modelo())

  })



  return selectIdiomas

  
}
