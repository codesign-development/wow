import modeloView from './modeloWiew.html'

export default () => {

    const model = document.createElement('div')
    model.className = 'model'
    model.innerHTML = modeloView

    
    



    return model

}