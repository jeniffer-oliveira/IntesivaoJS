import { inicializarCarrinho } from "./src/menuCarrinho"

const catalago = [
    {
        id: 1,
        marca: 'Zara',
        nome: 'Camisa Larga com Bolsos',
        preco: 'R$ 70,00',
        nomeArquivoImagem: 'product-1.jpg',
        feminino: false
    },
    {
        id: 2,
        marca: 'Zara',
        nome: 'Casaco Reto com Lã',
        preco: 'R$ 85,00',
        nomeArquivoImagem: 'product-2.jpg',
        feminino: true
    },
    { 
        id: 3, 
        marca: 'Zara',
        nome: 'Jaqueta com Efeito Camurça',
        preco: 'R$ 60,00',
        nomeArquivoImagem: 'product-3.jpg',
        feminino: false 
    }, 
    { 
        id: 4, 
        marca: 'Zara', 
        nome: 'Sobretudo em Mescla de Lã', 
        preco: 'R$ 160,00', 
        nomeArquivoImagem: 'product-4.jpg',
        feminino: false 
    }, 
    { 
        id: 5, 
        marca: 'Zara', 
        nome: 'Camisa Larga Acolchoada de Veludo Cotelê', 
        preco: 'R$ 110,00', 
        nomeArquivoImagem: 'product-5.jpg', 
        feminino: false
    },
    { 
        id: 6, 
        marca: 'Zara', 
        nome: 'Casaco de Lã com Botões', 
        preco: 'R$ 170,00', 
        nomeArquivoImagem: 'product-6.jpg', 
        feminino: true
    }, 
    { 
        id: 7, 
        marca: 'Zara', 
        nome: 'Casaco com Botões', 
        preco: 'R$ 75,00', 
        nomeArquivoImagem: 'product-7.jpg', 
        feminino: true 
    }, 
    { 
        id: 8, 
        marca: 'Zara', 
        nome: 'Colete Comprido com Cinto', 
        preco: 'R$ 88,00', 
        nomeArquivoImagem: 'product-8.jpg', 
        feminino: true 
    }
]

for(const produtoCatalago of catalago){
    const cartaoProduto = `<div class="border-solid border-2 border-sky-500 w-40 my-2 mx-2" id="card-produto-${produtoCatalago.id}">
<img class="card-img" src="/assets/img/${produtoCatalago.nomeArquivoImagem}" alt="Produto do Magazine Hashtag">
<p class="marca">${produtoCatalago.marca}</p>
<p>${produtoCatalago.nome}</p>
<p>${produtoCatalago.preco}</p>
<button>Adicionar ao carrinho</button>
</div>`

document.getElementById('container-produto').innerHTML += cartaoProduto
} 

inicializarCarrinho();

 