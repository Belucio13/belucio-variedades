const menu = document.querySelectorAll('.item p');
const container_produtos = document.querySelectorAll('.todos-produtos');

 
const limparProdutos = () => {
    container_produtos.forEach(produtos => {
        produtos.style.display = 'none';
    })
}

const resetarMenuBorda = () => {
    menu.forEach(menu => {
        menu.style.borderBottom = 'none';        
        menu.style.borderTop = 'none';        
    })
}

const showProdutos = (event) => {
    limparProdutos();
    resetarMenuBorda();
    container_produtos.forEach(produto => {
        if(produto.id == event.target.innerHTML){
            produto.style.display = 'flex';
            menu.forEach(menu => {
                if(produto.id == menu.innerHTML){
                    menu.style.borderBottom = '1px solid green'
                    menu.style.borderTop = '1px solid white'
                }
            })
        }
    })
}


 
menu.forEach(produto => {
     produto.addEventListener('click', showProdutos);
})