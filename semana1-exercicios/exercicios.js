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
  { id: 1, name: "Aspirador de pó", price: 9, categoryId: 1 },
  { id: 1, name: "Aspirador de pêra", price: 9, categoryId: 1 },
)

const produtosEletronicos = produtos.filter((value) => value.categoryId === 2)
produtosEletronicos.forEach((value) => console.log(value.name))

produtos.filter((value) => value.price < 10)
.forEach((item) => console.log(item.name))

const categoriasInativas = categoriasDeProdutos.filter((value) => value.status === "inativa")
categoriasInativas.forEach((categoria) => {
  produtos.forEach((value) => {
    if (categoria.id === value.categoryId) {
      console.log(value.name)
    }
  })
})

let productsQuantity = 0

categoriasDeProdutos.forEach((categoria) => {
  produtos.forEach((produto) => {
    if (categoria.id === produto.categoryId) {
      categoria.products = productsQuantity + 1
      productsQuantity = categoria.products
    }
  })

  productsQuantity = 0
})

console.log(categoriasDeProdutos)

// 5

var list = []
const databaseInsert = function (data, callback) {​​​​​​​
    setTimeout(function () {​​​​​​​
        list.push(data);
        if (callback) {​​​​​​​
            callback();
        }​​​​​​​
    }​​​​​​​, 0);
}​​​​​​​;

databaseInsert("teste", function() { console.log(list) });
console.log("lista: ", list);