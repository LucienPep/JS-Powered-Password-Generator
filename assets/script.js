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

	var lengtht = parseInt(character)
	if (lengtht < 8 || lengtht > 128) {
		alert("Invalid Selection\nPlease Try Again")
	} else {
		casel = prompt("Include Lowercase?\nYes or No")
	}

	console.log(lengtht)

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
		
	console.log(special)
	
	//Random Password generation 

	function passwordgen() {
		var passwordtype = "";
		if (lowercase) passwordtype += "abcdefghijklmnopqrstuvwxyz";
		if (uppercase) passwordtype += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
		if (numeric) passwordtype += "0123456789";
		if (special) passwordtype += "!@#$%^&*()";

	let passwordfinal = "";
	
	for (let i = 0; i < lengtht; i++) {
	  const passran = Math.floor(Math.random() * passwordtype.length);
	  passwordfinal += passwordtype[passran];
	}
	
	console.log(passwordfinal);

	var passwordText = document.querySelector("#password");

	passwordText.value = passwordfinal;

	}

	//Final Output

	if (lowercase == false && uppercase == false && numeric == false && special == false){
		alert("Invalid\nYou Must Selected 'Yes' For At least One Parameter\nPlease Try Again")
	}else{
		passwordgen()
	}
}

// Add event listener to generate button

generateBtn.addEventListener("click", startPassword);




