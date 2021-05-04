import toolTipsView from './toolTipsView.html'
import Misiones from '../Misiones'
import anime from 'animejs'

export default () => {

  const toolTips = document.createElement('div')
  toolTips.className = 'wrapperToolTips'
  toolTips.innerHTML = toolTipsView

  const toolTip = toolTips.querySelector('.toolTip')
  const iconNav = toolTips.querySelector('.iconNav')
  const iconPointer = toolTips.querySelector('.iconPointer')
  const iconNavB = toolTips.querySelector('.iconNav2')
  const iconPointerB = toolTips.querySelector('.iconPointer2')
  const txtCardTool = toolTips.querySelector('.cardTool p')
  const toolTipLat = toolTips.querySelector('.toolTipLat')
  const txtBullet = toolTips.querySelector('.containerBullet p')
  const btnClose = toolTips.querySelector('.btnXtool')
  const btnCloseLeft = toolTips.querySelectorAll('.btnXLeft')

  anime({
    targets: iconPointer,
    translateX: 120,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
    duration: 2000,
  })
  anime({
    targets: iconNav,
    translateX: 120,
    direction: 'alternate',
    loop: true,
    easing: 'easeInOutQuad',
    duration: 2000,
  })
  setTimeout(() => {
    iconNav.style.display = 'none'
    iconPointer.style.display = 'none'
    iconNavB.style.display = 'block'
    iconPointerB.style.display = 'block'
    txtCardTool.textContent = 'Puede explorar el entorno, navegando a través de las flechas'
    anime({
      targets: iconPointerB,
      scale: .8,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad',
      duration: 2000,
    })
    anime({
      targets: iconNavB,
      scale: .8,
      direction: 'alternate',
      loop: true,
      easing: 'easeInOutQuad',
      duration: 2000,
    })
    setTimeout(() => {
      toolTip.style.display = 'none'
      toolTipLat.style.display = 'block'

      setTimeout(() => {
        txtBullet.textContent = 'Este botón guarda tu progreso durante la sesión'
        anime({
          targets: toolTipLat,
          translateY: 100,
          easing: 'linear',
        })
        setTimeout(() => {
          txtBullet.textContent = 'Este botón muestra tus logros y misiones'
          anime({
            targets: toolTipLat,
            translateY: 180,
            easing: 'linear',
          })
          setTimeout(() => {

            openMisiones()
          }, 4000)
        }, 4000)
      }, 4000)
    }, 5000)
  }, 4000)



  btnCloseLeft[0].addEventListener('click', () => {
    openMisiones()
    console.log('entra x left');
  })



  btnClose.addEventListener('click', () => {
    openMisiones()

  })
  
  function openMisiones(){
    const modales = document.querySelector('.wrapperModales')
    const uiUser = document.querySelector('.uiUser')
    const overlay = document.querySelector('.overlay')
    modales.removeChild(toolTips)
    modales.appendChild(Misiones())
    uiUser.style.opacity = 1
    uiUser.style.display = 'block'
    overlay.style.backgroundColor = '#6550E2'
  }

  return toolTips
}
