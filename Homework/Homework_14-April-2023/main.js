const Banana = {
    fruitName: "Banana",
    picture: "https://trungnguyendinh008.github.io/Study/Homework/Homework_14-April-2023/images/banana.jpg",
    nutrition: "Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi",
    price: "6$"
}
const DragonFruit = {
    fruitName: "Dragon Fruit",
    picture: "https://trungnguyendinh008.github.io/Study/Homework/Homework_14-April-2023/images/dragonFruit.jpg",
    nutrition: "Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi",
    price: "7$"
}
const Durian = {
    fruitName: "Durian",
    picture: "https://trungnguyendinh008.github.io/Study/Homework/Homework_14-April-2023/images/durian.jpg",
    nutrition: "Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi",
    price: "10$"
}
const Lychee = {
    fruitName: "Lychee",
    picture: "https://trungnguyendinh008.github.io/Study/Homework/Homework_14-April-2023/images/lychee.jpg",
    nutrition: "Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi",
    price: "6$"
}
const Mango = {
    fruitName: "Mango",
    picture: "https://trungnguyendinh008.github.io/Study/Homework/Homework_14-April-2023/images/mango.jpg",
    nutrition: "Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi",
    price: "9$"
}
const Rambutan = {
    fruitName: "Rambutan",
    picture: "https://trungnguyendinh008.github.io/Study/Homework/Homework_14-April-2023/images/rambutan.jpg",
    nutrition: "Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi",
    price: "9$"
}
const StarFruit = {
    fruitName: "Star Fruit",
    picture: "https://trungnguyendinh008.github.io/Study/Homework/Homework_14-April-2023/images/starFruit.jpg",
    nutrition: "Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi",
    price: "5$"
}
const SugarApple = {
    fruitName: "Sugar Apple",
    picture: "https://trungnguyendinh008.github.io/Study/Homework/Homework_14-April-2023/images/sugarApple.jpg",
    nutrition: "Eleifend quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices dui sapien eget mi",
    price: "4$"
}


var shop = [Banana,DragonFruit,Durian,Lychee,Mango,Rambutan,StarFruit,SugarApple]
shop.map((object) =>{
    var body = document.querySelector("#container")
    var box = document.createElement("div")
    box.className = "box"
    var shop = document.createElement("div")
    shop.className ="container"
    var name = document.createElement("h1")
    name.className = "name"
    var image = document.createElement("img")
    image.className = "fruitImage"
    image.setAttribute('src',object.picture)
    var nutrition = document.createElement("p")
    nutrition.className = "nutrition"
    var price = document.createElement("p")
    price.className ="price"
    name.innerText = object.fruitName
    nutrition.innerText = object.nutrition
    price.innerText = object.price
    var buyBtn = document.createElement("button")
    buyBtn.className = "buyBtn"
    buyBtn.innerHTML = '<p class = "Para">Add to Cart</p>'
    shop.appendChild(name)
    shop.appendChild(image)
    shop.appendChild(nutrition)
    shop.appendChild(price)
    box.appendChild(shop)
    body.appendChild(box)
    shop.appendChild(buyBtn)
    shop.style.textAlign = "center"
    shop.style.margin = "50px"
})