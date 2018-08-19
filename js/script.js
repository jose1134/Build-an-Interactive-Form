$('#name').focus(); // while using jquery this makes sure the name input field is the first one in focus when the page starts up 

//this function creates the elements of the fieldset and the text area and places them before the shirt div and hides the elements until its called
function otherOptionElement(){
	const shirtClass = document.querySelector('.shirt');
	const formElement = document.querySelector('.shirt').parentNode;
	const textField = document.createElement('fieldset');
	textField.id = 'other-title';
	formElement.insertBefore(textField, shirtClass);
	const optionText = document.createElement('textarea');
	document.querySelector('#other-title').appendChild(optionText);
	optionText.placeholder = 'Your Job Role';
	document.querySelector('#other-title').style.display = 'none';
}

//this calls the function for the element creator
otherOptionElement();


//using this event handler it will read the value of the selection and if other is chosen then the text area is shown if not then it disappears 
document.querySelector('#title').onchange = function (){
	const jobValues = document.getElementById('title').value;
	if (jobValues === 'other'){	
		document.querySelector('#other-title').style.display = 'block';
	} else{
		document.querySelector('#other-title').style.display = 'none';
	}
};

//this takes the shirt color options and stores it into a variable
const colorOption = $('#color');

//these variables consist the options given for the puns and love shirts 
const jsPuns = $('<option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option><option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> <option value="gold">Gold (JS Puns shirt only)</option> ');
const jsLove = $('<option value="tomato">Tomato (I &#9829; JS shirt only)</option><option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> ');


//this hides the color option until the deisgn function goes into effect 
document.querySelector('#colors-js-puns').style.display = 'none';

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


// these variables take the values of the inputs that are on the form
const activity = $('input:checkbox').val();
const email = $('#mail').val();
const name = $('#name').val();
const cc = $('#cc-num').val();
const zip = $('#zip').val();
const cvv = $('#cvv').val();

//these variables, using jquery, are created for the errors. in which they will be appended when they are called
const emailError = $('<span>Please Enter A Valid Email Address</span>').css('color', 'red');
const nameError = $('<span>Please Enter Your Name</span>').css('color', 'red');
const activityError = $('<span>Please choose at least one activity</span>').css('color', 'red');
const ccNumber = $('<span> Please enter a number that is at least 13-16 digits long</span>').css('color', 'red');
const ccZip = $('<span>Pleas enter a 5 digit zip code</span>').css('color', 'red');
const cvvError = $('<span>Please enter a 3-4 digit cvv</span>').css('color', 'red');

//this function makes sure the email entered is a valid email 
function checkValidEmail(checkemail) {
	let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(checkemail);
}
// this function returns a boolean, in which if false the error message will appear 
function emailValidate(email){
	if (checkValidEmail(email)){
		return true;
	} else {
		$('#mail').before(emailError);
		return false;
	}
}
// this function makes sure a name is inputed if not a error message will appear 
function nameValidate(name){
	if (name === ''){
		$('#name').before(nameError);
		return false;
	} else {
		nameError.hide();
		return true;
	}
}
//this function makes sure an acitivity at least one is chosen unless a error message appears 
function activityValidate(activity){
	if (activity === 'checked'){
		return true;
	} else {
		$('.activities').prepend(activityError);
		return false;
	}
}
// this makes sure a valid email is entered unless an error message will appear
function ccValidate(cc){
	if (cc.length < 16 && cc.length > 13){
		return true;
	} else if (cc.length > 16 || cc.length < 13 ){
		$('#cc-num').before(ccNumber);
		return false;
	} else if (typeof email === 'number'){
		$('#cc-num').before(ccNumber);
		return false;
	}
}
// this makes sure a valid zip code is entered unless an error message will appear 
function zipValidate(zip){
	if (zip.length === 5){
		return true;
	} else {
		$('#zip').before(ccZip)
		return false;
	}
}
// this makes sure a valid cvv code is entered unless an error message will appear 
function cvvValidate(cvv){
	if (cvv.length > 3 && cvv.length <= 4){
		return true;
	} else {
		$('#cvv').before(cvvError);
		return false;
	}	
}
// this function runs the validation functions and returns a boolean value
function formValiation(){
	return emailValidate(email) && nameValidate(name)&&
	activityValidate(activity)&&ccValidate(cc)&&zipValidate(zip)&&
	cvvValidate(cvv)
}

// this event runs a functions that checks the boolean of the form validation function and then checks if its true or false 
// after that depending on what is the boolean value the if statement will run
$('button').click(function(e){
	e.preventDefault();
	if (formValiation() === true){
		$('button').unbind('click');
		emailError.hide();
		nameError.hide();
		activityError.hide();
		ccError.hide();
		ccNumber.hide();
		ccZip.hide();
		cvvError.hide();
	} else {
		emailValidate(email);
		nameValidate(name);
		activityValidate(activity);
		ccValidate(cc);
		zipValidate(zip);
		cvvValidate(cvv);
	}
});
