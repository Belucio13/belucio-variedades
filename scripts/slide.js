const containerSlide = document.querySelectorAll('.slide')
containerSlide.forEach((item) => {
    if(item.children.length > 3){
        item.children[0].style.display = 'flex'
        item.children[3].style.display = 'flex'
    }
})

const right = document.querySelectorAll('.right-slide')
right.forEach((item) => {
    item.addEventListener('click', () => {
        let container = item.parentElement
        container.insertBefore( container.children[1], container.children[3] )
    })
})

const left = document.querySelectorAll('.left-slide')
left.forEach((item) => {
    item.addEventListener('click', () => {
        let container = item.parentElement
        container.insertBefore( container.children[1], container.children[3] )
    })
})


document.querySelector('.btn-carrinho').addEventListener('click', () => {
    alert('Carrinho ainda não está funcionando. Compras somente na loja :(')
})