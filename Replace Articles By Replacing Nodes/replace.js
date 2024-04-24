const body = document.body

const cardsTitles = [{
        title : "british shorthair",
        description : "The British Short hair is a medium/large-sized cat breed with a broad chest, short, muscular legs, round paws and a thick tail. Its head is round with large eyes and a short but broad nose."
    },{
        title : "Australian Mist",
        description : "The Australian Mist is popular with first-time cat buyers because of its moderate appearance with no extremes. Its eyes are expressive, its face is broad and its cheeks are plump."
    },{
        title : "Chinchilla Cat",
        description : "Chinchilla cats are large cats with luxurious pure white coats named after the South African Rodent. While some claim that the cat is a silver Persian because of its Persian like qualities others argue that the Chinchilla is a separate breed. They do have Persian-like features because the Chinchilla was developed in the quest to breed a silver Persian."
    }
    ,{
        title : "Exotic Shorthair",
        description : "Exotic Shorthair cats are similar in many ways to Persian, but they have short fur. While there fur is short by Persian standards, it’s not as short as many other short haired breeds. The Exotic Shorthair has a relatedly large round in comparison to the rest of their body."
    }
]
const Cards = []

for (const card in cardsTitles) {
    const CardContainer = document.createElement("dl")
    const CardTitle = document.createTextNode("dt")
    const CardText = document.createTextNode("dd")
    const image = document.createElement("img")

    CardTitle.textContent = cardsTitles[card].title
    CardText.textContent = cardsTitles[card].description
    image.src = `./images/${cardsTitles[card].title}.jpg` 
    CardContainer.appendChild(CardTitle)
    CardContainer.appendChild(image)
    CardContainer.appendChild(CardText)
    Cards.push(CardContainer)
}

body.appendChild(Cards[0])

const button = document.createElement("button")
button.textContent = "Go Next !"

button.addEventListener("click", ()=> {
    const currentNode =  body.querySelector("dl")
    const nextNodeIndex = (Cards.indexOf(currentNode) + 1) % Cards.length
    body.replaceChild(Cards[nextNodeIndex], currentNode)
})

body.appendChild(button)
