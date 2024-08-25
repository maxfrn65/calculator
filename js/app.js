const numberKeys = document.querySelectorAll('.number')
const operatorKeys = document.querySelectorAll('.operator')
const acKey = document.querySelector('.ac')
const equalsKey = document.querySelector('.equals')

let output = document.querySelector('.output')
let operation = []
let currentNb = ""

acKey.addEventListener("click", () => {
  if (currentNb !== 0) {
    currentNb = ""
    operation = []
    output.textContent = "0"
    acKey.textContent = "AC"
  }
})

equalsKey.addEventListener("click", handleOperation)

numberKeys.forEach((element) => {
  element.addEventListener("click", handleOutput)
})

operatorKeys.forEach((element) => {
  element.addEventListener("click", handleArray)
})

function handleOutput (event) {
  acKey.textContent = "C"
  currentNb += event.target.textContent
  output.textContent = currentNb
  console.log(currentNb)
}

function handleArray (event) {
  operation.push(parseInt(currentNb), event.target.textContent)
  output.textContent = currentNb
  currentNb = ""
  console.log(operation)
}

function handleOperation () {
  operation.push(parseInt(currentNb))
  currentNb = ""
  let total = operation[0]
  for (let i = 0; i <= operation.length; i += 2) {
    if (!operation[i + 1]) {
      console.log(total)
      output.textContent = total.toString()
      return;
    }
    switch (operation[i + 1]) {
      case "+":
        total = total + operation[i + 2]
        console.log(total)
        break
      case "-":
        total = total - operation[i + 2]
        break
      case "×":
        total = total * operation[i + 2]
        break
      case "÷":
        total = total / operation[i + 2]
    }
  }
  output.textContent = total.toString()
}
