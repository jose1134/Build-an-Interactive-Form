$('#name').focus(); // while using jquery this makes sure the name input field is the first one in focus when the page starts up 

//this hides the input text area until the other option is selected
document.querySelector('#other-title').style.display = 'none';
//using this event handler it will read the value of the selection and if other is chosen then the text area is shown if not then it disappears 
document.querySelector('#title').onchange = function (){
	const jobValues = document.getElementById('title').value;
	if (jobValues === 'other'){	
		document.querySelector('#other-title').style.display = 'block';
	} else{
		document.querySelector('#other-title').style.display = 'none';
	}
};

//these variables consist the options given for the puns and love shirts 
const jsPuns = $('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> <option value="gold">Gold (JS Puns shirt only)</option> ');
const jsLove = $('<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> ');


//this hides the color option until the deisgn function goes into effect 
document.querySelector('#colors-js-puns').style.display = 'none';

//this takes the shirt color options and stores it into a variable
const colorOption = $('#color');

//this event handler will trigger based on what design is chosen and then it seperates the options based on the design 
document.querySelector('#design').onchange = function (){
	const designValue = document.querySelector('#design').value; //this stores the design value into a variable 
	colorOption.empty(); // this removes all the options from the color selction list 
	//when the value of which ever design the user chooses it will append the option to the element and show the element 
	if (designValue === 'js puns'){ // 
		document.querySelector('#colors-js-puns').style.display = 'block';
		colorOption.append(jsPuns);
	}else  if (designValue === 'heart js'){
		document.querySelector('#colors-js-puns').style.display = 'block';
		colorOption.append(jsLove);
	} else {
		// when the user does not choose a theme it hides the color selection until a design is chosen 
		document.querySelector('#colors-js-puns').style.display = 'none';
	}
};


const totalLabel = $('<label>Total:</label>');  //this creates the total element for which this is going under the activites and adding up the total 
const activitiesClass = $('.activities'); // this takes the activities class and adds it into a variable

activitiesClass.append(totalLabel); //this appends the total label to the activities list 
totalLabel.hide();// this hides the total label until its called 

$('input:checkbox').on('change', function (){  // this event takes place when one of the checkboxes are checked
	const checkedArray = $('.activities > label > input');
	let totalCost = 0;
	let checkedBox = $('input:checked');
	
	//this loop takes the checked activity and finds its array index number  
	//then using an if statement, it figures out what price needs to be put into the totalcost variable  
	for (let i = 0; i < checkedBox.length; i ++){
		let inputIndex = checkedArray.index(checkedBox[i]);
		if (inputIndex === 0){
			totalCost += 200;
		} else {
			totalCost += 100;
		} 
	}

	// the total cost variable then gets added to the total element and when there is an amount to show
	//it will show the element using jquery 
	totalLabel.text('Total: $' + totalCost);
	totalLabel.show();
	if (totalCost === 0){
		totalLabel.hide();
	}

	// this portion checks which checked box was checked and takes its index number and stores it into a variable 
	// after that using the switch statement, it reads which index number it is and calls upon the functions that were created down below 
	let indexNumber = checkedArray.index(this);
	if (this.checked){
		switch(indexNumber){
			case 1:
				disable(5);
				break;
			case 2:
				disable(6);
				break;
			case 3:
				disable(3);
				break;
			case 4:
				disable(4);
				break;
		}
	} else {
		switch(indexNumber){
			case 1:
				enable(5);
				break;
			case 2:
				enable(6);
				break;
			case 3:
				enable(3);
				break;
			case 4:
				enable(4);
				break;
		}
	}
	
});

// these functions enable and disable the desired checkboxes based on which one was chosen and if it were interferring with the other times 
function disable(index){
	$('.activities > label:nth-child('+ index +') > input').not(this).attr('disabled', 'true');
	$('.activities > label:nth-child('+ index +') > input').not(this).parent().css('color', 'gray');	
}
function enable(index){
	$('.activities > label:nth-child('+ index +') > input').not(this).removeAttr('disabled');
	$('.activities > label:nth-child('+ index +') > input').not(this).parent().css('color', 'black');	
}


// this event makes sure the credit card option is selected as soon as the page starts
$('option[value="credit card"]').focus().prop('selected', 'selected');
//this event hides the paypal and bitcoin options until its call 
$('#credit-card').nextAll().hide();

//this event triggers when one of the options are selected and then their payment options are shown
$('#payment').on('change', function (){
	const paymentValue = $('#payment').val();
	if (paymentValue === 'paypal'){
		$('#credit-card').hide();
		$('#credit-card').next().show();
		$('#credit-card').next().next().hide();
	} else if (paymentValue === 'bitcoin'){
		$('#credit-card').hide();
		$('#credit-card').next().hide();
		$('#credit-card').next().next().show();
	} else {
		$('#credit-card').show();
		$('#credit-card').next().hide();
		$('#credit-card').next().next().hide();
	}
});




//these variables, using jquery, are created for the errors. in which they will be appended when they are called
const emailError = $('<span>Please Enter A Valid Email Address</span>').css('color', 'red');
const nameError = $('<span>Please Enter Your Full First Name and Last Name</span>').css('color', 'red');
const activityError = $('<span>Please choose at least one activity</span>').css('color', 'red');
const ccNumberError = $('<span> Please enter a number that is at least 13-16 digits long</span>').css('color', 'red');
const ccZipError = $('<span>Pleas enter a 5 digit zip code</span>').css('color', 'red');
const cvvError = $('<span>Please enter a 3-4 digit cvv</span>').css('color', 'red');
const paymentError = $('<span>Please Select A Method Of Payment</span>').css('color', 'red');

//this function makes sure the email entered is a valid email
//it also returns a boolean, in which if false the error message will appear 
function checkValidEmail() {
	const email = $('#mail').val();
	let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(email) === true){
		emailError.hide();
		return true;
	} else{
		$('#mail').before(emailError);
		return false;
	}	
}
// this function makes sure a name is inputed if not a error message will appear 
function nameValidate(){
	name = $('#name').val();
	if (name === ''){
		$('#name').before(nameError);
		return false;
	} else {
		nameError.hide();
		return true;
	}
}
//this function makes sure an acitivity at least one is chosen unless a error message appears 
function activityValidate(){
	let checkedBox = $('input:checked').length;
	if (!checkedBox){
		$('.activities').append(activityError);
		return false;
	} else {
		activityError.hide();
		return true;
	}
}
// this makes sure a valid email is entered unless an error message will appear
function ccValidate(){
	const paymentValue = $('#payment').val();
	const cc = $('#cc-num').val();
	if (isNaN(cc)){
		$('#cc-num').before(ccNumberError);
		return false;
	} else if (cc.length < 16 && cc.length > 13 || paymentValue === 'paypal' || paymentValue === 'bitcoin'){
		ccNumberError.hide();
		return true;
	}else if (cc.length > 16 || cc.length < 13 ){
		$('#cc-num').before(ccNumberError);
		return false;
	}
}
// this makes sure a valid zip code is entered unless an error message will appear 
function zipValidate(){
	const paymentValue = $('#payment').val();
	zip = $('#zip').val();
	if (isNaN(zip)){
		$('#zip').before(ccZipError)
		return false;
	} else if (zip.length === 5 ||paymentValue === 'paypal' || paymentValue === 'bitcoin'){
		ccZipError.hide();
		return true;
	} else if (zip.length > 5 || zip === ''){
		$('#zip').before(ccZipError)
		return false;
	}else {
		return true;
	}
}
// this makes sure a valid cvv code is entered unless an error message will appear 
function cvvValidate(){
	const paymentValue = $('#payment').val();
	cvv = $('#cvv').val();
	if (isNaN(cvv)){
		$('#cvv').before(cvvError);
		return false;
	} else if (cvv.length === 3 || cvv.length === 4 || paymentValue === 'paypal' || paymentValue === 'bitcoin'){
		cvvError.hide()
		return true;
	} else if (cvv.length > 4 || cvv === ''){
		$('#cvv').before(cvvError);
		return false;
	}
}

// this function checks the payment selection and determines what selection is chosen
// then it returns true or false for when the form validation needs to run
// it also displays an error message for when its on select method 
function paymentValidation(){
	const paymentValue = $('#payment').val();
	if (paymentValue === 'paypal' || paymentValue === 'bitcoin'){
		paymentError.hide();
		return true;
	} else if (paymentValue === 'select_method'){
		$('#payment').nextAll().hide();
		$('#payment').after(paymentError);
		return false;
	} else {
		paymentError.hide();
		return true;
	}
}

// this event runs when the payment selection is changed 
// an error message will pop up if it goes on select method
$('#payment').change(function(){
	paymentValidation();
});

// this function runs the validation functions and returns a boolean value
function formValiation(){	
	return checkValidEmail()&&
	nameValidate()&&
	activityValidate()&&
	ccValidate()&&
	zipValidate()&&
	cvvValidate()&&
	paymentValidation();
}


// this event checks the value for the email and runs it in the check valid email function
// this checks if the email is valid, if it is, it does not display the error message. else it will display the error message
$('#mail').change(function(){
	if (checkValidEmail() === false){
		$('#mail').before(emailError);
		emailError.show();
	} else if (checkValidEmail() === true){
		emailError.hide();
	}
});





// this event triggers when it is clicked, after it is clicked it checks if the form validation function is true or false
// if false, it checks all the valid input functions in which it will show an error message to the ones that needs to be fixed before submitting
$('button').click(function(e){
	if (formValiation() === false){
		e.preventDefault();
		checkValidEmail();
		nameValidate();
		activityValidate();
		ccValidate();
		zipValidate();
		cvvValidate();
	} else {
		$('button').bind('click');	
	}
});












