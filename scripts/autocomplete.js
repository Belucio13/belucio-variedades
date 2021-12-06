const autocomplete = document.querySelector('.container-autocomplete')
const input = document.querySelector('#pesquisar')

let palavra = ''

const DB = [
    {
        'img': 'image/mini-capa.jpg',
        'nome':'celular',
        'valor':'800,00',
        'link':'#'
    },
    {
        'img': 'image/mini-capa.jpg',
        'nome':'computador',
        'valor':'2000,00',
    },
    {
        'img': 'image/mini-capa.jpg',
        'nome':'componente',
        'valor':'1200,00',
    },
    {
        'img': 'image/mini-capa.jpg',
        'nome':'tablet',
        'valor':'500,00',
    },
    {
        'img': 'image/mini-capa.jpg',
        'nome':'HD',
        'valor':'400,00',
    },
    {
        'img': 'image/mini-capa.jpg',
        'nome':'SSD',
        'valor':'200,00',
    },
    {
        'img': 'image/mini-capa.jpg',
        'nome':'fonte',
        'valor':'300,00',
    },
    {
        'img': 'image/mini-capa.jpg',
        'nome':'processador',
        'valor':'500,00',
    },
    {
        'img': 'image/mini-capa.jpg',
        'nome':'monitor',
        'valor':'200,00',
    },
    {
        'img': 'image/mini-capa.jpg',
        'nome':'Cabo Sata',
        'valor':'10,00',
    },
    {
        'img': 'image/mini-capa.jpg',
        'nome':'cabo USB',
        'valor':'15,00',
    },
    {
        'img': 'image/mini-capa.jpg',
        'nome':'TV',
        'valor':'1400,00',
    },
    {
        'img': 'image/mini-capa.jpg',
        'nome':'MAC',
        'valor':'1200,00',
    },
    {
        'img': 'image/mini-capa.jpg',
        'nome':'mouse',
        'valor':'20,00',
    },
    {
        'img': 'image/mini-capa.jpg',
        'nome':'teclado',
        'valor':'60,00',
    },
    {
        'img': 'image/mini-capa.jpg',
        'nome':'cooler',
        'valor':'40,00',
    },
    {
        'img': 'image/mini-capa.jpg',
        'nome':'headset',
        'valor':'200,00',
    },
]; 


const createAutocomplete = (nome, valor,img) => {
    autocomplete.style.display = 'block'
    const div = document.createElement('div')
    div.classList.add('produto-autocomplete')
    div.innerHTML += `
        <a href="#">
            <div class="mini-img"><img src="${img}"></div>
            <div class="nome-produto">
                <p class="nome">${nome}</p>
                <p>R$ ${valor}</p>
            </div>
        </a>
    `
    autocomplete.appendChild(div)
}

const reseteAutocomplete = () => {
    autocomplete.innerHTML = ''
    autocomplete.style.display = 'none'
}

const callAutocomplete = (event) => {console.log('dsad')
    if(event.key.length <= 1){
        palavra += event.key
    }
    if(event.key === 'Backspace'){
        palavra = palavra.substr(0, palavra.length - 1)
    }
    if(palavra.length == 0){
        reseteAutocomplete();
    }else{
        reseteAutocomplete()
        DB.forEach(produto => {
            if(produto.nome.slice(0, palavra.length) == palavra){
                createAutocomplete(produto.nome, produto.valor, produto.img)
            }
        })
    }
}

input.addEventListener('keyup', callAutocomplete)
document.querySelector('#pesquisar-mobile').addEventListener('keyup', callAutocomplete)