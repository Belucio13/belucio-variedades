const btn = document.querySelectorAll('#comprar')
const outroBtn = document.querySelector('#continuar')
btn.forEach((item) => {
    item.addEventListener('click', () => {
        alert('Carrinho ainda não está funcionando. Compras somente na loja :(')
    })
})
outroBtn.addEventListener('click', () => {
    alert('Carrinho ainda não está funcionando. Compras somente na loja :(')
})