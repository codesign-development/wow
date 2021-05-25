import gamesView from './index.html'

export default ()=>{

    const gamesContainer = document.createElement('div')
    gamesContainer.className = 'gamesContainer'
    gamesContainer.innerHTML = gamesView
   
    return gamesContainer
}