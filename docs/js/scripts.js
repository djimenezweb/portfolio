//Elemento contenedor
// const projectGrid = document.getElementById('project-grid')
// const rootStyles = document.documentElement.style

// projectGrid.addEventListener('mouseover', (event) => {
//     if (event.target.classList.contains('project')) {
//         const imageHeight = event.target.children[0].children[2].clientHeight
//         console.log(imageHeight)
//         rootStyles.setProperty('--transition-velocity', imageHeight / 50 + 's')
//     }
// })
//addEventListener('mouseover',....)
//ev.target.

const formElement = document.getElementById('form')
const formSubmitElement = document.getElementById('form-submit')

formSubmitElement.addEventListener('click', () => {
    formElement.submit()
}
)