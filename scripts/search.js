


const hiddenSearch = () => {
    document.querySelector('.logo-mobile').style.display = 'block'
    document.querySelector('.hamburguer').style.display = 'block'
    document.querySelector('#pesquisar-mobile').style.backgroundColor = 'rgba(0,0,0,0)'
    document.querySelector('.search-mobile i').style.color = 'white'
    document.querySelector('.search-mobile .xis').style.right = '93%'
    document.querySelector('.search-mobile .xis').style.display = 'none'
    document.querySelector('.search-mobile i').style.left = '23%'
    document.querySelector('.search-mobile').style.width = '8%'
    document.querySelector('.search-mobile input').style.width = '10%'
    document.querySelector('#pesquisar-mobile').disabled = true
}

document.querySelector('.fa-search')
    .addEventListener('click', () => {
    document.querySelector('.logo-mobile').style.display = 'none'
    document.querySelector('.hamburguer').style.display = 'none'
    document.querySelector('#pesquisar-mobile').style.backgroundColor = 'white'
    document.querySelector('.search-mobile i').style.color = 'black'
    document.querySelector('.search-mobile .xis i').style.color = 'black'
    document.querySelector('.search-mobile .xis').style.right = '7%'
    document.querySelector('.search-mobile .xis').style.display = 'block'
    document.querySelector('.search-mobile i').style.left = '2%'
    document.querySelector('.search-mobile').style.width = '100%'
    document.querySelector('.search-mobile input').style.width = '100%'
    document.querySelector('#pesquisar-mobile').disabled = false
    document.querySelector('#pesquisar-mobile').focus()
})

document.querySelector('.xis i').addEventListener('click', hiddenSearch)