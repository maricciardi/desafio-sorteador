const form = document.querySelector("form")
const sortButton = document.getElementById("sortButton")
const numberQuantity = document.getElementById("quantity")
const fromNumber = document.getElementById("first")
const toNumber = document.getElementById("last")
let numbersPossible = []

//previne comportamento padrão de recarregar a página
form.onsubmit = (event) => {
    event.preventDefault()
}

sortButton.addEventListener("click", () => {
    //console.log(numberQuantity.value, fromNumber.value, toNumber.value)
    calculateNumbers()

    console.log(numbersPossible)

    console.log("O número sorteado é " + numbersPossible[Math.floor(Math.random() * numbersPossible.length)])

    formClear()
})

//calcula quais os números possíveis para serem sorteados e coloca na variavel numbersPossible
function calculateNumbers() {
    for(i = Number(fromNumber.value); i <= toNumber.value; i++) {
        numbersPossible.push(i)
    }
}

//limpar informações do formulário após submit
function formClear() {
    numberQuantity.value = ""
    fromNumber.value = ""
    toNumber.value = ""
    numbersPossible = []

    numberQuantity.focus()
}

