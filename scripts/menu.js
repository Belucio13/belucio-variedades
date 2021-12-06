const lines = document.querySelectorAll('.line')


const classIsAdd = () => {
    return document.querySelector('.menu').classList.contains('on')
}

const controlMenu = () => {
    document.querySelector('.menu').classList.toggle('on')
    document.querySelector('.hamburguer').classList.toggle('close')
    lines.forEach((item, index) => {
        item.classList.toggle(`l${index}`)
    })
}


document.querySelectorAll('.menu li').forEach((item) => {
    item.addEventListener('click', () => {
        controlMenu()
    })
})

document.querySelector('.hamburguer')
    .addEventListener('click', controlMenu)