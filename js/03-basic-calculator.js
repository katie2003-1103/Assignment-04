// ADD A FUNCTION CALLED CALCULATE
function calculate(x, y, operation)
// COLLECT FIRST NUMBER FROM USER
Let x = number(prompt('Please enter your first number'))
// COLLECT SECOND NUMBER FROM USER
Let y = number(prompt('Please enter your second number'))
// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
Let operation = prompt('What operation would you like to perform: add, subtract, divide, or multiply?') 
// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
Let result = calculate (x, y, operation) 
	If (operation == 'add') {
	return x + y 
	} else if (operation == 'subtract') {
	return x - y 
	} else if (operation == 'divide') {
	return x / y
	} else (operation == 'multiply') {
	return x * y
alert( `The calculation was $[result}`)}