import idiomasView from './idiomasView.html'

export default () => {

  const selectIdiomas = document.createElement('div')
  selectIdiomas.className = "selectIdiomas"
  selectIdiomas.innerHTML = idiomasView

  return selectIdiomas

}
