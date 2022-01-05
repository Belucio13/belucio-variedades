const buttons = document.querySelectorAll('.btn-carrinho')

let valid = true

const localStoregeProduto = JSON.parse(localStorage.getItem('BelucioVariedades'))
let produtos = localStorage.getItem('BelucioVariedades') !== null ? localStoregeProduto : []

const updateLocalStorege = () => localStorage.setItem('BelucioVariedades', JSON.stringify(produtos))

const adicionarPop = (text, classe) =>{
    const div = document.createElement('div')
    div.classList.add('pop')
    div.innerHTML = text

    document.querySelector('footer').appendChild(div)
    div.classList.add(classe)

    setTimeout(() => {
        document.querySelector('footer').innerHTML = "© copyright | todos direitos reservados"
    }, 2000)
}

const addBank = event => {
    const nome = event.path[1].children[1].children[0].innerText
    const preco = event.path[1].children[1].children[1].innerText
    const image = event.path[1].children[0].children[1].src

    produtos.forEach(item => {{
        if(item.nomeProduto == nome){
            valid = false
        }
    }})
    adicionarPop('Quantidade de produtos limite atingido', 'fail')
    if(valid == true){
        produtos.push({
            nomeProduto: nome,
            preco: preco,
            img: image
        })
        adicionarPop('Produto adicionado ao carrinho', 'add')
        updateLocalStorege()
    }
    valid = true
}

buttons.forEach((button) => {
    button.addEventListener('click', addBank)
})