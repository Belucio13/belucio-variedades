const autocomplete = document.querySelector('.container-autocomplete')
const input = document.querySelector('#pesquisar')

let palavra = ''



const DB = [
    {
        'nome':'celular',
        'valor':'800,00',
        'informacao':'informacoes do produto'
    },
    {
        'nome':'computador',
        'valor':'2000,00',
        'informacao':'informacoes do produto'
    },
    {
        'nome':'componente',
        'valor':'1200,00',
        'informacao':'informacoes do produto'
    },
    {
        'nome':'tablet',
        'valor':'500,00',
        'informacao':'informacoes do produto'
    },
    {
        'nome':'HD',
        'valor':'400,00',
        'informacao':'informacoes do produto'
    },
    {
        'nome':'SSD',
        'valor':'200,00',
        'informacao':'informacoes do produto'
    },
    {
        'nome':'fonte',
        'valor':'300,00',
        'informacao':'informacoes do produto'
    },
    {
        'nome':'processador',
        'valor':'500,00',
        'informacao':'informacoes do produto'
    },
    {
        'nome':'monitor',
        'valor':'200,00',
        'informacao':'informacoes do produto'
    },
    {
        'nome':'Cabo Sata',
        'valor':'10,00',
        'informacao':'informacoes do produto'
    },
    {
        'nome':'cabo USB',
        'valor':'15,00',
        'informacao':'informacoes do produto'
    },
    {
        'nome':'TV',
        'valor':'1400,00',
        'informacao':'informacoes do produto'
    },
    {
        'nome':'MAC',
        'valor':'1200,00',
        'informacao':'informacoes do produto'
    },
    {
        'nome':'mouse',
        'valor':'20,00',
        'informacao':'informacoes do produto'
    },
    {
        'nome':'teclado',
        'valor':'60,00',
        'informacao':'informacoes do produto'
    },
    {
        'nome':'cooler',
        'valor':'40,00',
        'informacao':'informacoes do produto'
    },
    {
        'nome':'headset',
        'valor':'200,00',
        'informacao':'informacoes do produto'
    },
]; 

const createAutocomplete = (nome, valor, informacao) => {
    autocomplete.style.display = 'block'
    const div = document.createElement('div')
    div.classList.add('produto-autocomplete')
    div.innerHTML += `
        <div class="nome-produto">
            <p>${nome}</p>
            <p>${valor}</p>
        </div>
        <div class="informacoes-produto">
            <p>${informacao}</p>
        </div> 
    `
    autocomplete.appendChild(div)
}

const reseteAutocomplete = () => {
    autocomplete.innerHTML = ''
}

const callAutocomplete = (event) => {
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
                createAutocomplete(produto.nome, produto.valor, produto.informacao)
            }
        })
    }

    
}

input.addEventListener('keyup', callAutocomplete)
