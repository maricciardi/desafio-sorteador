const form = document.querySelector("form")
const sortButton = document.getElementById("sortButton")
const sortAgain = document.getElementById("sortAgain")
const numberQuantity = document.getElementById("quantity")
const fromNumber = document.getElementById("first")
const toNumber = document.getElementById("last")
const resultList = document.querySelector("ul")
const checkbox = document.getElementById("switch")

let numbersPossible = []
let sortNumbers = []

//previne comportamento padrão de recarregar a página
form.onsubmit = (event) => {
    event.preventDefault()
}

//o que acontece quando clico no botão para submeter
sortButton.addEventListener("click", () => {
    calculateNumbers()

    if (checkbox.checked) {
        sortNumbers = sortMachine(numbersPossible, numberQuantity.value) 
    } else {
        sortNumbers = sortMachineRepeat(numbersPossible, numberQuantity.value)
    }

    console.log(sortNumbers)
    
    addNumber()
    formClear()
    updatePage()
})

//calcula quais os números possíveis para serem sorteados e coloca na variavel numbersPossible
function calculateNumbers() {
    for(i = Number(fromNumber.value); i <= toNumber.value; i++) {
        numbersPossible.push(i)
    }
}

//sorteia os numeros podendo repetir:
function sortMachineRepeat(array, quantity) {
    const luckyNumbers = []

    for (let i = 0; i < quantity; i++) {
        luckyNumbers.push(array[Math.floor(Math.random() * array.length)])
    }

    return luckyNumbers
}

//sorteia os numeros sem repetir:
function sortMachine(array, quantity) {
    const luckyNumbers  = new Set()

    while (luckyNumbers.size < quantity) {
        luckyNumbers.add(array[Math.floor(Math.random() * array.length)])
    }

    return [...luckyNumbers]
}

//limpar informações do formulário após submit
function formClear() {
    numberQuantity.value = ""
    fromNumber.value = ""
    toNumber.value = ""
    numbersPossible = []
}

//aparecer a section result e sumir a section sort
function updatePage() {
    const sort = document.getElementById("sort")
    sort.classList.toggle("display-none")

    const result = document.getElementById("result")
    result.classList.toggle("display-none")
}

//o que acontece quando clico para sortear novamente
sortAgain.addEventListener("click", () => {
    updatePage()
    numberQuantity.focus()
})

//adiciona um novo número na lista de resultados
function addNumber() {
    if (sortNumbers == undefined) {
        alert("Por favor, preenche todos os campos")

    } else {
        resultList.innerHTML = ''

        sortNumbers.forEach(sortNumber => {
            const resultItem = document.createElement("li")
            resultItem.textContent = sortNumber
            resultList.appendChild(resultItem)
        })
    }
}