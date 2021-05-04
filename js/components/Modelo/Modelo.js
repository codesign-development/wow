import modeloView from './modeloWiew.html'
import Guardar from '../Guadar'
import Stats from '../Stats'
import Misiones from '../Misiones'
import anime from 'animejs'

export default () => {
  /* construcciòn contenedor */
  const model = document.createElement('div')
  model.className = 'model'
  model.innerHTML = modeloView
  /* Variables */
  const btnsModel = model.querySelector('.uiModel')
  const uiUser = model.querySelector('.uiUser')
  const bgMenu = model.querySelector('#morph')
  const menuMorph = model.querySelector('.menuMorph')
  const arrowBack = model.querySelector('.arrowBack')
  const optionMenu = model.querySelector('.optionMenu')
  const btnEnter = model.querySelector('.btnEnter')
  const overlay = model.querySelector('.overlay')
  const welcomeModal = model.querySelector('.welcomeModal')
  const logoWowBem = model.querySelector('.logoWowBen')
  const toolTip = model.querySelector('.toolTip')
  const iconNav = model.querySelector('.iconNav')
  const iconPointer = model.querySelector('.iconPointer')
  const iconNavB = model.querySelector('.iconNav2')
  const iconPointerB = model.querySelector('.iconPointer2')
  const txtCardTool = model.querySelector('.cardTool p')
  const toolTipLat = model.querySelector('.toolTipLat')
  const txtBullet = model.querySelector('.containerBullet p')
  const menuLat = model.querySelector('.wrapperMenu')
  const notification = model.querySelector('.notification')
  const notificationComplete = model.querySelector('.notificationComplete')
  const btnCloseWelcome = model.querySelector('.btnXWelcome')
  const btnClose = model.querySelector('.btnXtool')
  const btnCloseLeft = model.querySelectorAll('.btnXLeft')
  const modales = model.querySelector('.wrapperModales')
  /* Morphing bgMenu */
  let morphing = anime({
    targets: menuMorph,
    d: [
      /* {value:'M1058,0H556.9c-25.5,68.8-68.3,250.8-35.5,428c41,221.5,48.5,485.5-71.5,649H1058V0z'},  */
      {
        value: 'M1057.5,0H0.5C120.5,163.5,113,427.5,72,649c-32.8,177.2,10,359.2,35.5,428h950V0z'
      },
    ],
    easing: 'easeOutQuint',
    duraton: 100,
    loop: false,
    autoplay: false
  })
  /* Click counter */
  let clickUI = 0

  function countClick() {
    clickUI++
  }
  /* despelgando morphing menu lateral */
  function reverseMenu() {
    morphing.reverse()
    morphing.play()
  }
  /* ListenersUI */
  btnsModel.addEventListener('click', e => {
    e.stopPropagation()
    if (e.target.id === 'btnHelp') {
      if (bgMenu.classList.contains('active')) {
        bgMenu.classList.remove('active')
        bgMenu.classList.add('unactive')
        arrowBack.style.display = 'none'
        arrowBack.style.opacity = 0
        reverseMenu()
      }
    }

    if (e.target.id === 'btnSave') {
      if (clickUI > 0) {
        reverseMenu()
      } else {
        morphing.restart()
      }
      countClick();
      optionMenu.appendChild(Guardar())
    }

    if (e.target.id === 'btnStats') {
      if (clickUI > 0) {
        reverseMenu()
      } else {
        morphing.restart()
      }
      countClick();
      optionMenu.appendChild(Stats())
    }

    if (e.target.id === 'btnStats' || e.target.id === 'btnSave') {
      if (bgMenu.classList.contains('unactive')) {
        bgMenu.classList.remove('unactive')
        bgMenu.classList.add('active')
        arrowBack.style.display = 'block'
        arrowBack.style.opacity = 1
        btnsModel.style.opacity = 0
        btnsModel.style.pointerEvents = 'none'

      } else {
        bgMenu.classList.remove('active')
        bgMenu.classList.add('unactive')
        arrowBack.style.display = 'none'
        arrowBack.style.opacity = 0
      }
    }
  })

  arrowBack.addEventListener('click', () => {
    morphing.reverse()
    morphing.play()
    arrowBack.style.display = 'none'
    arrowBack.style.opacity = 0
    bgMenu.classList.remove('active')
    bgMenu.classList.add('unactive')
    btnsModel.style.opacity = 1
    btnsModel.style.pointerEvents = 'auto'
    optionMenu.removeChild(optionMenu.firstChild)
  })

  function initUI() {
    toolTipLat.style.display = 'none'
    btnsModel.style.pointerEvents = 'auto'
    uiUser.style.opacity = 1
    uiUser.style.display = 'block'
    menuLat.style.display = 'block'

    welcomeModal.style.display = 'none'
    logoWowBem.style.display = 'none'
    overlay.style.display = 'none'
    btnsModel.style.display = 'block'
    toolTip.style.display = 'none'
    modales.removeChild(toolTipLat)
    openNotification()
    //openNotificationComplete ()
  }

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

  function openNotificationComplete() {
    anime({
      targets: notificationComplete,
      translateX: -280,
      easing: 'easeInOutQuad',
      duration: 2000,
    })
    setTimeout(() => {
      anime({
        targets: notificationComplete,
        translateX: 0,
        easing: 'easeInOutQuad',
        duration: 2000,
      })
    }, 8000)
  }

  function closeWelcome() {
    modales.removeChild(welcomeModal)
    modales.removeChild(logoWowBem)
  }

  btnCloseLeft[0].addEventListener('click', () => {
    openMisiones()
    closeWelcome()
  })

  btnCloseWelcome.addEventListener('click', () => {
    openToolTip()
    closeWelcome()
  })

  btnClose.addEventListener('click', () => {
    openMisiones()
    closeWelcome()
  })

  function openMisiones() {
    modales.removeChild(toolTipLat)
    modales.removeChild(toolTip)
    modales.appendChild(Misiones())
    uiUser.style.opacity = 1
    uiUser.style.display = 'block'
    overlay.style.backgroundColor = '#6550E2'
  }
  /* Animación tooltip */
  function openToolTip() {
    overlay.style.backgroundColor = '#000'
    btnsModel.style.display = 'block'
    toolTip.style.display = 'block'
    closeWelcome()
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
  }



  /* Listener bienvenida */
  btnEnter.addEventListener('click', e => {
    openToolTip()
  })

  return model

}
