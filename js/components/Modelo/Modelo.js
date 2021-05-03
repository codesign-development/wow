import modeloView from './modeloWiew.html'
import Guardar from '../Guadar'
import Stats from '../Stats'
import anime from 'animejs'

export default () => {
  /* construcciòn contenedor */
  const model = document.createElement('div')
  model.className = 'model'
  model.innerHTML = modeloView
  /* Variables */
  const btnsModel = model.querySelector('.uiModel')
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
  console.log(txtCardTool);
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
        uiModel.style.opacity = 0
        uiModel.style.pointerEvents = 'none'

      } else {
        bgMenu.classList.remove('active')
        bgMenu.classList.add('unactive')
        arrowBack.style.display = 'none'
        arrowBack.style.opacity = 0
      }
    }
  })

  arrowBack.addEventListener('click', (e) => {
    e.stopPropagation()
    morphing.reverse()
    morphing.play()
    arrowBack.style.display = 'none'
    arrowBack.style.opacity = 0
    bgMenu.classList.remove('active')
    bgMenu.classList.add('unactive')
    uiModel.style.opacity = 1
    uiModel.style.pointerEvents = 'auto'
    optionMenu.removeChild(optionMenu.firstChild)
  })

  btnEnter.addEventListener('click', e =>{
    e.stopPropagation()
    welcomeModal.style.display = 'none'
    logoWowBem.style.display = 'none'
    overlay.style.backgroundColor = '#000'
    btnsModel.style.display = 'block'
    toolTip.style.display = 'block'
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
    setTimeout(()=>{
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
    }, 4000)
  })

  return model

}
