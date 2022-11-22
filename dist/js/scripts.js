//Elemento contenedor
const projectGrid = document.getElementById('project-grid')
const rootStyles = document.documentElement.style

projectGrid.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('project')) {
        const imageHeight = event.target.children[0].children[2].clientHeight
        console.log(imageHeight)
        rootStyles.setProperty('--transition-velocity', imageHeight / 80 + 's')
    }
})

//addEventListener('mouseover',....)

//ev.target.