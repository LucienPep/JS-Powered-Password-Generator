// Assignment Code
var generateBtn = document.querySelector("#generate");

function startPassword(){
	//Character Length
	let character = prompt("Please Enter Password Length\nMinimum = 8 Maximum = 128")
	var casel = null
	var lowercase = null
	var caseu = null
	var uppercase = null
	var num = null
	var numeric = null
	var spec = null
	var special = null
	var finish = null

	var length = parseInt(character)
	if (length < 8 || length > 128) {
		alert("Invalid Selection\nPlease Try Again")
	} else {
		casel = prompt("Include Lowercase?\nYes or No")
	}

	console.log(length)

	//Lowercase

	casel = casel.toLowerCase()
	
	if (casel == "yes" || casel == "y"){
		lowercase = true
	}else if(casel == "no" || casel == "n"){
		lowercase = false
	}else{
		alert("Invalid Selection\nPlease Try Again")
	}

	if (lowercase == true || lowercase == false){
		caseu = prompt("Include Uppercase?\nYes or No")
	}
		
	console.log(lowercase)

	//Uppercase

	caseu = caseu.toLowerCase()
	
	if (caseu == "yes" || caseu == "y"){
		uppercase = true
	}else if(caseu == "no" || caseu == "n"){
		uppercase = false
	}else{
		alert("Invalid Selection\nPlease Try Again")
	}

	if (uppercase == true || uppercase == false){
		num = prompt("Include Numbers?\nYes or No")
	}
		
	console.log(uppercase)

	//Numeric

	num = num.toLowerCase()
	
	if (num == "yes" || num == "y"){
		numeric = true
	}else if(num == "no" || num == "n"){
		numeric = false
	}else{
		alert("Invalid Selection\nPlease Try Again")
	}

	if (numeric == true || numeric == false){
		spec = prompt("Include Special characters?\nYes or No")
	}
		
	console.log(numeric)

	//Special Character

	spec = spec.toLowerCase()
	
	if (spec == "yes" || spec == "y"){
		special = true
	}else if(spec == "no" || spec == "n"){
		special = false
	}else{
		alert("Invalid Selection\nPlease Try Again")
	}

	if (lowercase == false && uppercase == false && numeric == false && special == false){
		alert("Invalid\nYou Must Selected 'Yes' For At least One Parameter\nPlease Try Again")
	}
		
	console.log(special)
	
	function passwordgen(length) {
		let passwordtype = null;
		if (lowercase == true) passwordtype += "abcdefghijklmnopqrstuvwxyz";
		if (uppercase == true) passwordtype += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		if (numeric == true) passwordtype += "0123456789";
		if (special == true) passwordtype += "!@#$%^&*()";
		
		for ( let i = 0; i < length; i++ ) {
			passwordtype += lowercase.charAT(Math.floor(Math.random()*lowercase.length))
		}
	}

	passwordgen()
}



// Write password to the #password input
function writePassword() {
	var password = generatePassword();
	var passwordText = document.querySelector("#password");

	passwordText.value = password;
}


// Add event listener to generate button


document.addEventListener("click", startPassword);




