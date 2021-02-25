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