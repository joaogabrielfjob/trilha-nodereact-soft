// 1
const categoriasDeProdutos = []

categoriasDeProdutos.push(
  { id: 1, name: "Eletrodomésticos" }, 
  { id: 2, name: "Eletrônicos" },
  { id: 3, name: "Eletroportáteis" },
  { id: 4, name: "Saúde" },
  { id: 5, name: "Limpeza" }
)

categoriasDeProdutos.forEach((value) => console.log(value.name))
console.log(categoriasDeProdutos.find((value) => value.name === "Eletrônicos"))

// 2
const categoriasDeProdutos = []
const produtos = []

categoriasDeProdutos.push(
  { id: 1, name: "Eletrodomésticos", status: "inativa" }, 
  { id: 2, name: "Eletrônicos", status: "inativa" },
  { id: 3, name: "Eletroportáteis", status: "ativa" },
  { id: 4, name: "Saúde", status: "inativa" },
  { id: 5, name: "Limpeza", status: "ativa" }
)

produtos.push(
  { id: 1, name: "Celular", price: 777.7, categoryId: 2 },
  { id: 1, name: "Alvejante", price: 4.7, categoryId: 5 },
  { id: 1, name: "Aspirador de pó", price: 99, categoryId: 1 },
)

const produtosEletronicos = produtos.filter((value) => value.categoryId === 2)
produtosEletronicos.forEach((value) => console.log(value.name))

const produtosAte10 = produtos.filter((value) => value.price < 10)
const nomeCategoriasComProdutosAte10 = []
produtosAte10.forEach((value) => {
  categoriasDeProdutos.forEach((categoria) => {
    if (categoria.id === value.categoryId) {
      nomeCategoriasComProdutosAte10.push(categoria.name)
    }
  })
})
nomeCategoriasComProdutosAte10.forEach((value) => console.log(value))

const categoriasDesativadas = categoriasDeProdutos.filter((value) => value.status === "inativa")
const produtosComCategoriasInativas = []
categoriasDesativadas.forEach((categoria) => {
  produtos.forEach((value) => {
    if (categoria.id === value.categoryId) {
      produtosComCategoriasInativas.push(value.name)
    }
  })
})
produtosComCategoriasInativas.forEach((value) => console.log(value))

let productsQuantity = 0

produtos.forEach((produto) => {
  categoriasDeProdutos.forEach((categoria) => {
    if (produto.categoryId === categoria.id) {
      categoria.products = productsQuantity + 1
      productsQuantity = categoria.products
    }
  })

  productsQuantity = 0
})

console.log(categoriasDeProdutos)