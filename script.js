//parentNode//

// let itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);


//parentElement//

// let itemList = document.querySelector('#items');
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);


//childNodes//

// let itemList = document.querySelector('#items');
// console.log(itemList.childNodes);
//When selecting nodes with the childNode selector it also selects the white space in between the elements so instead use the 'children' selector//


//children//

// let itemList = document.querySelector('#items');
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'yellow';


//firstChild//

// let itemList = document.querySelector('#items');
// console.log(itemList.firstChild);
//This is similar to childNodes where it will select white space before the desired element and lod it first//


//firstElementChild//

// let itemList = document.querySelector('#items');
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';


//lastChild//

// let itemList = document.querySelector('#items');
// console.log(itemList.lastChild);
//This is similar to childNodes where it will select white space before the desired element and lod it first//


//lastElementChild//

// let itemList = document.querySelector('#items');
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';


//nextSibling//

// let itemList = document.querySelector('#items');
// console.log(itemList.nextSibling);


//nextElementSibling//

// let itemList = document.querySelector('#items');
// console.log(itemList.nextElementSibling);


//previousSibling//

// let itemList = document.querySelector('#items');
// console.log(itemList.previousSibling);
//This is similar to childNodes where it will select white space before the desired element and lod it first//


//previousElementSibling//
// let itemList = document.querySelector('#items');
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';

/////////////////////////////////////////////////////////////////////////////
//CREATING ELEMENTS//


//createElement//
//create div//

let newDiv = document.createElement('div');
//Add class
newDiv.className = 'hello';
//Add ID
newDiv.id = 'hello1';
//Add attribute
newDiv.setAttribute('title', 'Hello Div');
//Create text node
let newDivText = document.createTextNode('Hello World');
//Add text to div
newDiv.appendChild(newDivText);

let container = document.querySelector('header .container')
let h1 = document.querySelector('header h1');
console.log(newDiv);
newDiv.style.fontSize = '30px';
container.insertBefore(newDiv, h1);