// console.dir(document);
// // EXAMINE THE DOCUMENT OBJECT //
// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all [10]);
// document.all[10].textContent = 'Hello';
// var headerTitle = document.getElementById('header-title');
// var header= document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';


// get element by class name
var items= document.getElementsByClassName('list-group-item');
// items[0].style.fontWeight="bold"
// items[1].style.fontWeight="bold"
// items[2].style.fontWeight="bold"
// items[2].style.backgroundColor="Green"
// items[3].style.fontWeight="bold"
for (var i=0; i< items.length;i++){
    items[i].style.fontWeight="bold"
}


// GETELEMENTSBYTAGNAME it simply do the same as doing above //
// var li= document.getElementsByTagName('li');
// console.log(li);
// console.log(11[1]);
// li[1].textContent 'Hello 2¹;
// li[1].style.fontweight = "bold";
// 11[1].style.backgroundColor = "yellow";
// // Gives error
// //items.style.backgroundColor="#f4f4f4";
// for(var i = 0; i < li.length; i++){
// li[i].style.backgroundColor='#f4f4f4';
// )
// QUERYSELECTOR //
var header= document.querySelector('main-header')
var input= document.querySelector('input')
input.value='hello'
var seconditem = document.querySelector('.list-group-item:nth-child(2)');
seconditem.style.backgroundColor='green';
var thirditem = document.querySelector('.list-group-item:nth-child(3)');
thirditem.style.fontColor='white';

// QUERYSELECTORALL //
var titles = document.querySelectorAll('.title');
console.log(titles);
// titles[0].textContent 'Hello';
var odd = document.querySelectorAll('li:nth-child(odd)');
var even =document.querySelectorAll('li:nth-child(even)');
// for(var i = 0; i < odd.length; i++){
// odd[i].style.backgroundColor='#f4f4f4';
// even[i].style.backgroundColor='#ccc';
// }







