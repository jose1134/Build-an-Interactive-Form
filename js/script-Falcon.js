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


const totalLabel = $('<label>Total:</label>');
const activitiesClass = $('.activities');

activitiesClass.append(totalLabel);
totalLabel.hide();

$('input:checkbox').on('change', function (){
	const checkedArray = $('.activities > label > input');
	let totalCost = 0;
	let checkedBox = $('input:checked');
	
	for (let i = 0; i < checkedBox.length; i ++){
		let inputIndex = checkedArray.index(checkedBox[i]);
		if (inputIndex === 0){
			totalCost += 200;
		} else {
			totalCost += 100;
		} 
	}
	totalLabel.text('Total: $' + totalCost);
	totalLabel.show();
	if (totalCost === 0){
		totalLabel.hide();
	}

	// let indexNumber = checkedArray.index(this);
	// if (this.checked){
	// 	switch(indexNumber){

	// 	}
	// }
	
});


function disable(index){
	$('.activities > label:nth-child('+ index +') > input').attr('disabled', 'disabled');
	$('.activities > label:nth-child('+ index +') > input').parent().css('color', 'gray');	
}


disable(4);















