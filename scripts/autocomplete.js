const autocomplete = document.querySelector('.container-autocomplete')
const input = document.querySelector('#pesquisar')

let palavra = ''

const DB = [
    {
        'img': 'image/eletronicos/IMG-20211221-WA0083.jpg',
        'nome':'Caixa de som + Microfone (Grande)',
        'valor':'200,00',
        'link': 'pages/caixas-de-som.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0056.jpg',
        'nome':'Caixa de som + Microfone (Pequeno)',
        'valor':'140,00',
        'link': 'pages/caixas-de-som.html' 
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0058.jpg',
        'nome':'Caixa de som + Microfone (Dupla)',
        'valor':'190,00',
        'link': 'pages/caixas-de-som.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0038.jpg',
        'nome':'Caixa de som P/ PC G33',
        'valor':'50,00',
        'link': 'pages/caixas-de-som.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0069.jpg',
        'nome':'Caixa de som P/ PC YST - 1021',
        'valor':'45,00',
        'link': 'pages/caixas-de-som.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0045.jpg',
        'nome':'Caixa de som (Grande)',
        'valor':'150,00',
        'link': 'pages/caixas-de-som.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0064.jpg',
        'nome':'Caixa de som (Média)',
        'valor':'140,00',
        'link': 'pages/caixas-de-som.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0077.jpg',
        'nome':'Caixa de som (Pequena)',
        'valor':'35,00',
        'link': 'pages/caixas-de-som.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0049.jpg',
        'nome':'Caixa de som (JBL Pequena)',
        'valor':'120,00',
        'link': 'pages/caixas-de-som.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0046.jpg',
        'nome':'Mini caixa de som',
        'valor':'80,00',
        'link': 'pages/caixas-de-som.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0040.jpg',
        'nome':'Abajur P/ leitura (Pequeno)',
        'valor':'25,00',
        'link': 'pages/abajur.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0042.jpg',
        'nome':'Teclado P/ Computador (Grande)',
        'valor':'60,00',
        'link': 'pages/componentes-de-computador.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0052.jpg',
        'nome':'Teclado P/ Computador (Pequeno)',
        'valor':'30,00',
        'link': 'pages/componentes-de-computador.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0052.jpg',
        'nome':'Mouse P/ Computador (Com Fio)',
        'valor':'15,00',
        'link': 'pages/componentes-de-computador.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0055.jpg',
        'nome':'Mouse P/ Computador (Sem Fio)',
        'valor':'25,00',
        'link': 'pages/componentes-de-computador.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0084.jpg',
        'nome':'Suporte P/ Mouse - mousepad',
        'valor':'20,00',
        'link': 'pages/componentes-de-computador.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0053.jpg',
        'nome':'Antena de Wi-fi P/ Computador',
        'valor':'20,00',
        'link': 'pages/componentes-de-computador.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0073.jpg',
        'nome':'HDD P/ Computador de 2,5 P',
        'valor':'40,00',
        'link': 'pages/componentes-de-computador.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0080.jpg',
        'nome':'Cabo Auxiliar P/ Som (3,5M)',
        'valor':'15,00',
        'link': 'pages/cabos.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0065.jpg',
        'nome':'Cabo Auxiliar P/ Som (5M)',
        'valor':'25,00',
        'link': 'pages/cabos.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0070.jpg',
        'nome':'Cabo Auxiliar P/ Som e DVD',
        'valor':'25,00',
        'link': 'pages/cabos.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0088.jpg',
        'nome':'Calculadora (Média)',
        'valor':'20,00',
        'link': 'pages/calculadoras.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0048.jpg',
        'nome':'Cabos Séries Várias Entradas',
        'valor':'30,00',
        'link': 'pages/cabos.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0051.jpg',
        'nome':'PenDrive 4GB',
        'valor':'30,00',
        'link': 'pages/pendrive.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0085.jpg',
        'nome':'PenDrive 8GB',
        'valor':'45,00',
        'link': 'pages/pendrive.html'
    },
    {
        'img': 'image/eletronicos/IMG-20211221-WA0087.jpg',
        'nome':'PenDrive 16GB',
        'valor':'60,00',
        'link': 'pages/pendrive.html'
    },







    {
        'img': 'image/acessorios/IMG-20211221-WA0094.jpg',
        'nome':'Capa de Celular Bumber Silicone',
        'valor':'10,00',
        'link': 'pages/capa-de-celular.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0095.jpg',
        'nome':'Capa Dura',
        'valor':'20,00',
        'link': 'pages/capa-de-celular.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0103.jpg',
        'nome':'Capa Transparente',
        'valor':'15,00',
        'link': 'pages/capa-de-celular.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0099.jpg',
        'nome':'Película Simples',
        'valor':'10,00',
        'link': 'pages/peliculas.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0098.jpg',
        'nome':'Película 9D',
        'valor':'15,00',
        'link': 'pages/peliculas.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0109.jpg',
        'nome':'Película 3D',
        'valor':'20,00',
        'link': 'pages/peliculas.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0099.jpg',
        'nome':'Carregador Simples (1 Porta)',
        'valor':'15,00',
        'link': 'pages/carregadores.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0111.jpg',
        'nome':'Carregador Simples (2 Portas)',
        'valor':'18,00',
        'link': 'pages/carregadores.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0105.jpg',
        'nome':'Carregador Rápido (2 Portas)',
        'valor':'20,00',
        'link': 'pages/carregadores.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0113.jpg',
        'nome':'Carregador Turbo (4 Portas)',
        'valor':'25,00',
        'link': 'pages/carregadores.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0102.jpg',
        'nome':'Carregador Universal',
        'valor':'20,00',
        'link': 'pages/carregadores.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0142.jpg',
        'nome':'Carregador Portátil (5000mAh)',
        'valor':'50,00',
        'link': 'pages/carregadores.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0139.jpg',
        'nome':'Carregador Portátil (10000mAh)',
        'valor':'70,00',
        'link': 'pages/carregadores.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0107.jpg',
        'nome':'Cabeça de Carregador (2 Porta)',
        'valor':'20,00',
        'link': 'pages/carregadores.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0096.jpg',
        'nome':'Cabeça de Carregador (4 Porta)',
        'valor':'25,00',
        'link': 'pages/carregadores.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0106.jpg',
        'nome':'Cabo USB (2,5M)',
        'valor':'25,00',
        'link': 'pages/cabos-para-celular.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0092.jpg',
        'nome':'Cabo USB (1,5M)',
        'valor':'20,00',
        'link': 'pages/cabos-para-celular.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0110.jpg',
        'nome':'Cabo USB Turbo',
        'valor':'25,00',
        'link': 'pages/cabos-para-celular.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0093.jpg',
        'nome':'Cabo USB (3 em 1)',
        'valor':'25,00',
        'link': 'pages/cabos-para-celular.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0101.jpg',
        'nome':'Cabo USB De Aço',
        'valor':'25,00',
        'link': 'pages/cabos-para-celular.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0130.jpg',
        'nome':'Cabo Auxiliar (3,5M)',
        'valor':'15,00',
        'link': 'pages/cabos-para-celular.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0123.jpg',
        'nome':'Cabo P/ Antena de Celular',
        'valor':'10,00',
        'link': 'pages/cabos-para-celular.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0114.jpg',
        'nome':'Fone de Ouvido (Sem Fio – JBL)',
        'valor':'100,00',
        'link':'pages/fones-de-ouvido.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0116.jpg',
        'nome':'Fone de Ouvido (Sem Fio – JBL)',
        'valor':'80,00',
        'link':'pages/fones-de-ouvido.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0091.jpg',
        'nome':'Fone de Ouvido (Sem Fio)',
        'valor':'50,00',
        'link':'pages/fones-de-ouvido.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0127.jpg',
        'nome':'Fone de Ouvido + Cabo Auxiliar',
        'valor':'35,00',
        'link':'pages/fones-de-ouvido.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0100.jpg',
        'nome':'Fone de Ouvido (Com Fio – Estéreo)',
        'valor':'20,00',
        'link':'pages/fones-de-ouvido.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0118.jpg',
        'nome':'Fone de Ouvido (Com Fio – Leon Gts)',
        'valor':'20,00',
        'link':'pages/fones-de-ouvido.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0115.jpg',
        'nome':'Fone de Ouvido (Com Fio – Turbo)',
        'valor':'20,00',
        'link':'pages/fones-de-ouvido.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0124.jpg',
        'nome':'Cartão de Memória + Adap. (16GB)',
        'valor':'60,00',
        'link':'pages/cartoes.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0128.jpg',
        'nome':'Cartão de Memória + Adap. (8GB)',
        'valor':'45,00',
        'link':'pages/cartoes.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0112.jpg',
        'nome':'Cartão de Memória + Adap. (4GB)',
        'valor':'30,00',
        'link':'pages/cartoes.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0121.jpg',
        'nome':'Adaptador P/ Fone e Microfone',
        'valor':'20,00',
        'link':'pages/adaptador.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0136.jpg',
        'nome':'Tripé P/ Celular (Médio)',
        'valor':'20,00',
        'link':'pages/tripe.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0131.jpg',
        'nome':'Suporte P/ Capa de Celular',
        'valor':'15,00',
        'link':'pages/capas-de-celular.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0138.jpg',
        'nome':'Pau de Selfie',
        'valor':'20,00',
        'link':'pages/pau-de-selfie.html'
    },
    {
        'img': 'image/acessorios/IMG-20211221-WA0133.jpg',
        'nome':'Controle Gamepad',
        'valor':'100,00 e 120,00',
        'link':'pages/controle.html'
    },






    
    {
        'img': 'image/papelaria/IMG-20211221-WA0226.jpg',
        'nome':'Lápis Preto',
        'valor':'0,50',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0219.jpg',
        'nome':'Lápis verde',
        'valor':'0,75',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0200.jpg',
        'nome':'Lápis P/ Desenho (2B)',
        'valor':'1,25',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0155.jpg',
        'nome':'Caneta Bic (Preta)',
        'valor':'1,20',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0220.jpg',
        'nome':'Caneta Bic (Azul)',
        'valor':'1,20',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0154.jpg',
        'nome':'Caneta Bic (Vermelha)',
        'valor':'1,20',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0152.jpg',
        'nome':'Caneta Compactor07',
        'valor':'1,20',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0169.jpg',
        'nome':'Caneta Compactor07 (pink)',
        'valor':'1,20',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0218.jpg',
        'nome':'Caneta Cis Happy',
        'valor':'2,00',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0174.jpg',
        'nome':'Caneta Cis Duo',
        'valor':'2,20',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0163.jpg',
        'nome':'Caneta Cis Candy',
        'valor':'2,50',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0209.jpg',
        'nome':'Caneta Cis Grande',
        'valor':'2,50',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0201.jpg',
        'nome':'Marcador de Texto Jocar Office (M)',
        'valor':'3,00',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0149.jpg',
        'nome':'Pincel Marcador Compactor',
        'valor':'6,00',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0153.jpg',
        'nome':'Marcador P/ Quadro Bic',
        'valor':'7,50',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0229.jpg',
        'nome':'Borracha Mercur Dupla',
        'valor':'1,30',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0227.jpg',
        'nome':'Borracha P/ Lápis',
        'valor':'0,50',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0175.jpg',
        'nome':'Corretivo VMP',
        'valor':'2,50',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0177.jpg',
        'nome':'Corretivo Mercur',
        'valor':'3,50',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0181.jpg',
        'nome':'Apontador (Carinha - Cis)',
        'valor':'4,00',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA01192.jpg',
        'nome':'Apontador (Taça)',
        'valor':'2,00',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0203.jpg',
        'nome':'Apontador (Prata)',
        'valor':'2,50',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0195.jpg',
        'nome':'Cola P/ Papel',
        'valor':'3,00',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0197.jpg',
        'nome':'Estilete Largo',
        'valor':'4,00',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0143.jpg',
        'nome':'Tesoura',
        'valor':'4,00',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0173.jpg',
        'nome':'Régua de Plástico (Grande)',
        'valor':'7,50',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0214.jpg',
        'nome':'Capa P/ Identidade',
        'valor':'2,00',
        'link':'pages/capas-para-documentos.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0158.jpg',
        'nome':'Capa P/ CNH',
        'valor':'2,00',
        'link':'pages/capas-para-documentos.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0187.jpg',
        'nome':'Capa P/ Crachá',
        'valor':'2,00',
        'link':'pages/capas-para-documentos.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0206.jpg',
        'nome':'Bloco de Notas (P)',
        'valor':'4,00',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0159.jpg',
        'nome':'Bloco de Notas (M)',
        'valor':'6,00',
        'link':'pages/para-escola.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0146.jpg',
        'nome':'Fita Durex Pequena',
        'valor':'2,50',
        'link':'pages/fitas.html' 
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0145.jpg',
        'nome':'Fita Durex Grossa (45mmx40m)',
        'valor':'5,00',
        'link':'pages/fitas.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0223.jpg',
        'nome':'Fita Durex Grossa (48mmx100m)',
        'valor':'12,00',
        'link':'pages/fitas.html'
    },
    {
        'img': 'image/papelaria/IMG-20211221-WA0147.jpg',
        'nome':'Fita Durex Grossa Escura',
        'valor':'3,00',
        'link':'pages/fitas.html'
    },
    {
        'img': 'image/papelaria/tekbond.jpg',
        'nome':'TekBond',
        'valor':'10,00',
        'link':'pages/para-escola.html'
    },
    

]; 


const createAutocomplete = (nome, valor,img, link) => {
    document.querySelector('.autocomplete').style.display = 'flex'
    autocomplete.style.display = 'block'
    const div = document.createElement('div')
    div.classList.add('produto-autocomplete')
    div.innerHTML += `
        <a href="${link}">
            <div class="mini-img"><img src="${img}"></div>
            <div class="nome-produto">
                <p class="nome">${nome}</p>
                <p>R$ ${valor}</p>
            </div>
            <div class="container-fita">
                <div class="fita"></div>
            </div>
        </a>
    `
    autocomplete.appendChild(div)
}

const reseteAutocomplete = () => {
    autocomplete.innerHTML = ''
    autocomplete.style.display = 'none'
}

const callAutocomplete = () => {
    reseteAutocomplete()
    let limiteDeItemsNoAutocomplete = 0
    let inputValue = document.querySelector('#pesquisar').value.toLowerCase()
    DB.forEach((item) => {
        let itemNome = item.nome.toLowerCase()
        if(limiteDeItemsNoAutocomplete >= 10){
            return
        }
        if(itemNome.includes(inputValue)){
            limiteDeItemsNoAutocomplete++
            createAutocomplete(item.nome, item.valor, item.img, item.link)
        }
    })
    limiteDeItemsNoAutocomplete = 0

    if(inputValue.length == 0)
        reseteAutocomplete();
}

const autocompleteMobile = (e) => {
    e.preventDefault()
    reseteAutocomplete()
    let limiteDeItemsNoAutocomplete = 0
    let inputMobile = document.querySelector('#pesquisar-mobile').value.toLowerCase()
    DB.forEach((item) => {
        let itemNome = item.nome.toLowerCase()
        if(limiteDeItemsNoAutocomplete >= 5){
            return
        }
        if(itemNome.includes(inputMobile)){
            limiteDeItemsNoAutocomplete++
            createAutocomplete(item.nome, item.valor, item.img, item.link)
        }
    })
    limiteDeItemsNoAutocomplete = 0

    if(inputMobile.length == 0)
        reseteAutocomplete();
}


input.addEventListener('keyup', callAutocomplete)
document.querySelector('#form').addEventListener('submit', (e) => {
    e.preventDefault();
})
document.addEventListener('click', (e) => {
    let  i = 0
    e.path.forEach((item) => {  
        if(item.id === 'autocomplete'){
           i++
        }
    })
    if(i != 1){
        i = 0
        input.value = ''
        reseteAutocomplete()
    }
})

document.querySelector('#form-mobile').addEventListener('submit', autocompleteMobile)
document.querySelector('.xis').addEventListener('click', ()=> {
    document.querySelector('#pesquisar-mobile').value = ''
})