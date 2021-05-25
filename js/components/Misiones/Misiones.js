import misionesView from './misionesView.html'
import anime from 'animejs'

console.log(localStorage.getItem('test'));
export default ()=>{

    const misionModal = document.createElement('div')
    misionModal.className = 'misionModal'
    misionModal.innerHTML = misionesView
    
    const btnSig = misionModal.querySelector('.btnSig')
    const wrapperModales = document.querySelector('.wrapperModales')
    const overlay = document.querySelector('.overlay')
    const btnsModel = document.querySelector('.uiModel')
    const menuLat = document.querySelector('.wrapperMenu')
    const notification = document.querySelector('.notification')
    
    
    btnSig.addEventListener('click',()=>{
        wrapperModales.removeChild(misionModal)
        btnsModel.style.pointerEvents = 'auto'
        overlay.style.display = 'none'
        menuLat.style.display = 'block'
        openNotification()
    })


    function openNotification() {
        anime({
          targets: notification,
          translateX: 280,
          easing: 'easeInOutQuad',
          duration: 2000,
        })
        setTimeout(() => {
          anime({
            targets: notification,
            translateX: 0,
            easing: 'easeInOutQuad',
            duration: 2000,
          })
        }, 8000)
      }

    return misionModal

}