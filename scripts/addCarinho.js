const buttons = document.querySelectorAll('.btn-carrinho')

let valid = true

const localStoregeProduto = JSON.parse(localStorage.getItem('BelucioVariedades'))
let produtos = localStorage.getItem('BelucioVariedades') !== null ? localStoregeProduto : []

const updateLocalStorege = () => localStorage.setItem('BelucioVariedades', JSON.stringify(produtos))


const addBank = event => {
    const nome = event.path[1].children[1].children[0].innerText
    const preco = event.path[1].children[1].children[1].innerText
    const image = event.path[1].children[0].children[1].src

    produtos.forEach(item => {{
        if(item.nomeProduto == nome){
            valid = false
        }
    }})
    if(valid == true){
        produtos.push({
            nomeProduto: nome,
            preco: preco,
            img: image
        })
        updateLocalStorege()
    }
    valid = true
}

buttons.forEach((button) => {
    button.addEventListener('click', addBank)
})