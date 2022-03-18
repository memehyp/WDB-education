const calculator = document.querySelector('.calc')
const keys = calculator.querySelector('.calc-rows')
const display = calculator.querySelector('.result-screen')


var arr = []
var temp = ""
var first
var second
var val

keys.addEventListener('click', event => {
  if (!event.target.closest('button')) return

  const key = event.target
  const keyValue = key.textContent
  var type
  const displayValue = display.textContent
  if (key.id === "last-buttons") {
	  type = "op"
  } else if (key.id === "c-button") {
	  type = "clear"
  } else if (key.id === "equal") {
	  type = "equal"
  } else if (key.id === "del") {
	  type = "del"
  }	else {
	  type = "num"
  }
  if (arr.length != 0) {
	  temp = arr[arr.length-1]
  }
  arr.push(type)
  

  if (type === 'num') {
    if (
	  displayValue === '0' ||
      temp === 'op'
    ) {
	  display.textContent = keyValue
	  second = keyValue
    } else {
	  display.textContent = displayValue + keyValue
	  second = displayValue + keyValue
	  
    }
  }

  if (type === 'op') {
    first = displayValue
	val = keyValue
	display.textContent = first 
  }

  if (type === 'equal') {
	display.textContent = calculate(first, val, second)
	console.log("content", display.testContent)
	arr = []
	temp = ""
  }
  
  if (type === 'del') {
	var screen = display.textContent
	console.log('100', screen)
	display.textContent = screen.substr(0, screen.length - 1);
  }

  if (type === 'clear') {
    display.textContent = '0'
	arr = []
	temp = ""
  }
})

function calculate (firstNumber, op, secondNumber) {
  first = parseInt(first)
  second = parseInt(second)
  console.log("first", first)
  console.log("second", second)
  console.log("op", op)

  if (op === '+') return first + second
  if (op === '-') return first - second
  if (op === 'x') return first * second
  if (op === '÷') return first / second
}