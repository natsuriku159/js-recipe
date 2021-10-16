const memoInput = document.getElementById("memo-input")
const addButton = document.getElementById("add-button")
const memoContainer = document.getElementById("memo-container")

// addButton.onclick = function() {
//     //console.dir(memoInput) //valueでmemoInputの値を取得できる
//     //console.log(memoInput.value)
//     const text = memoInput.value

//     const card = document.createElement("div")
//     card.className = "card"

//     const content = document.createElement("div")
//     content.className = "content"
//     content.textContent = text
//     card.append(content)

//     const deleteButton = document.createElement("div")
//     deleteButton.className = "delete"

//     deleteButton.onclick = function() {
//         card.remove()
//     }
//     card.append(deleteButton)

//     memoContainer.append(card)

//     memoInput.value = ""
// }

addButton.onclick = function() {
    const card = createCard(memoInput.value)
    memoContainer.append(card)
}

const createCard = function(text) {
    const card = document.createElement("div")
    card.className = "card"

    const content = document.createElement("div")
    content.className = "content"
    content.textContent = text
    card.append(content)

    const deleteButton = document.createElement("div")
    deleteButton.className = "delete"
    deleteButton.onclick = function() {
        card.remove()
    }
    card.append(deleteButton)

    memoInput.value = ""

    return card
}