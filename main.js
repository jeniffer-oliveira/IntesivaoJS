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
        preco: 60,
        nomeArquivoImagem: 'product-3.jpg',
        feminino: false 
    }, 
    { 
        id: 4, 
        marca: 'Zara', 
        nome: 'Sobretudo em Mescla de Lã', 
        preco: 160, 
        nomeArquivoImagem: 'product-4.jpg',
        feminino: false 
    }, 
    { 
        id: 5, 
        marca: 'Zara', 
        nome: 'Camisa Larga Acolchoada de Veludo Cotelê', 
        preco: 110, 
        nomeArquivoImagem: 'product-5.jpg', 
        feminino: false
    },
    { 
        id: 6, 
        marca: 'Zara', 
        nome: 'Casaco de Lã com Botões', 
        preco: 170, 
        nomeArquivoImagem: 'product-6.jpg', 
        feminino: true
    }, 
    { 
        id: 7, 
        marca: 'Zara', 
        nome: 'Casaco com Botões', 
        preco: 75, 
        nomeArquivoImagem: 'product-7.jpg', 
        feminino: true 
    }, 
    { 
        id: 8, 
        marca: 'Zara', 
        nome: 'Colete Comprido com Cinto', 
        preco: 88, 
        nomeArquivoImagem: 'product-8.jpg', 
        feminino: true 
    }
]

for(const produtoCatalago of catalago){
    const cartaoProduto = `<div id="card-produto-1">
<img class="card-img" src="/assets/img/${produtoCatalago.nomeArquivoImagem}" alt="Produto do Magazine Hashtag">
<p>${produtoCatalago.marca}</p>
<p>${produtoCatalago.nome}</p>
<p>${produtoCatalago.preco}</p>
<button>Adicionar ao carrinho</button>
</div>`

document.getElementById('container-produto').innerHTML += cartaoProduto
} 



 