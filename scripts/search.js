


const hiddenSearch = () => {
    document.querySelector('.logo-mobile').style.display = 'block'
    document.querySelector('.hamburguer').style.display = 'block'
    document.querySelector('#pesquisar-mobile').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('#pesquisar-mobile').style.width = '34px'
    document.querySelector('.search-mobile').style.width = '34px'
    document.querySelector('.ball-lupa').style.border = '2px solid white'
    document.querySelector('.line-lupa').style.backgroundColor = 'white'
    document.querySelector('#pesquisar-mobile').style.padding = '8px 0'
    document.querySelector('.xis').style.display = 'none'
    document.querySelector('.xis').style.right = '30px'
    document.querySelector('#pesquisar-mobile').disabled = true
}

document.querySelector('.lupa')
    .addEventListener('click', () => {
        document.querySelector('.logo-mobile').style.display = 'none'
        document.querySelector('.hamburguer').style.display = 'none'
        document.querySelector('#pesquisar-mobile').style.backgroundColor = 'white'
        document.querySelector('#pesquisar-mobile').style.width = '100%'
        document.querySelector('.search-mobile').style.width = '100%'
        document.querySelector('.ball-lupa').style.border = '2px solid black'
        document.querySelector('.line-lupa').style.backgroundColor = 'black'
        document.querySelector('#pesquisar-mobile').style.padding = '8px 34px'
        document.querySelector('.xis').style.display = 'block'
        document.querySelector('.xis').style.right = '30px'
        document.querySelector('#pesquisar-mobile').disabled = false
        document.querySelector('#pesquisar-mobile').focus()

})

document.querySelector('.xis').addEventListener('click', hiddenSearch)