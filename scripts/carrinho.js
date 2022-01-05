let produtos = JSON.parse(localStorage.getItem('BelucioVariedades'))

const updateLocalStorege = () => localStorage.setItem('BelucioVariedades', JSON.stringify(produtos))

const carrinhoIntoDOM = ({nomeProduto, preco, img}) => {
    const div = document.createElement('div')
    div.classList.add('produto-carrinho')
    div.innerHTML = `
        <div class="carrinho-wrap">
        <div class="info-carrinho">
            <div class="image-carrinho">
                <img src="${img}" alt="">
            </div>
            <div class="nome-produto">
                <p>${nomeProduto}</p>
                <p>${preco}</p>
            </div>
        </div>
        <div class="buttons">
            <button class="excluir" onClick="excluirDoCarrinho()">Excluir</button>
            <button id="comprar">Comprar Agora</button>
        </div>
    </div>
    `
    document.querySelector('.carrinho').appendChild(div)
}

const totalPreco = (valor) => {
    const div = document.createElement('div')
    div.classList.add('preco-fixed')
    div.innerHTML = `
        <h1>Total da compra</h1>
        <div class="valor">
            R$ ${valor}
        </div>
        <div class="continuar-compra">
            <button id="continuar">Continuar compra</button>
        </div>
    `
    document.querySelector('.preco-total').appendChild(div)
}


const callPrecoTotal = () => {
    const mult = produtos.reduce((acumulator, {preco}) => {
        p = preco.slice(3,preco.length).replace(',', '.')
        return acumulator + Number(p)
    }, 0)
    totalPreco(mult)
}

const clearTela = () => {
    document.querySelector('.carrinho').innerHTML = ''
    document.querySelector('.preco-total').innerHTML = ''

}

const excluirDoCarrinho = () => {
    const produtoExcluir = event.path[2].children[0].children[1].children[0].innerText
    produtos = produtos.filter(({nomeProduto}) =>  nomeProduto !== produtoExcluir)
    renderProduto()
    updateLocalStorege()
    callPrecoTotal()
}

const quantidadeDeItems = () => {
    const quantidade = produtos.length
    document.querySelector('.numero').innerHTML = `
        Carrinho(${quantidade})
    `
}

const renderProduto = () => {
    clearTela()
    if(produtos.length === 0){
        document.querySelector('.carrinho').innerHTML = '<div class="vazio">Carrinho vazio!</div>'
    }
    quantidadeDeItems()
    produtos.forEach(carrinhoIntoDOM)
}


renderProduto()
callPrecoTotal()