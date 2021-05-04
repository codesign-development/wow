import misionesView from './misionesView.html'

export default ()=>{

    const misionModal = document.createElement('div')
    misionModal.className = 'misionModal'
    misionModal.innerHTML = misionesView
    
    return misionModal
    
}