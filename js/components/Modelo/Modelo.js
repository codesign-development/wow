import modeloView from './modeloWiew.html'
import anime from 'animejs'

export default () => {

  const model = document.createElement('div')

  model.className = 'model'
  model.innerHTML = modeloView
  const btnsModel = model.querySelector('.uiModel')
  const bgMenu = model.querySelector('#morph')
  const menuMorph = model.querySelector('.menuMorph')
  const arrowBack = model.querySelector('.arrowBack')
   
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
    autoplay: true
  })
 
  arrowBack.addEventListener('click',() =>{
    morphing.reverse()
    morphing.play()
  })
  console.log(bgMenu);
  
  btnsModel.addEventListener('click', e => {
    e.stopPropagation()
    bgMenu.style.opacity = 1
    console.log(bgMenu);
    if (e.target.id === 'btnHelp') {
       
      console.log('ayuda');
    }
    if (e.target.id === 'btnSave') {
        arrowBack.style.display = 'block'
        arrowBack.style.opacity = 1
        morphing.reverse()
        morphing.play()
        console.log('entra save');
    }

    if (e.target.id === 'btnStats') {
        morphing.reverse()
        morphing.play()
        
      console.log('misiones');
    } 
  })

  

  return model

}

