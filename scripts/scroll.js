window.addEventListener('scroll', () => {
    if(window.top.scrollY > 75){
        document.querySelector('.preco-fixed').style.position = 'fixed'
        document.querySelector('.preco-fixed').style.top = '20px'
        return
    }
    document.querySelector('.preco-fixed').style.position = 'relative'
    document.querySelector('.preco-fixed').style.top = '0'
})