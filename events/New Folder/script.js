var a=document.getElementById('domid');
a.style.color="red";
a.innerText="wwwww";
// a.innerHTML="<I>wwwww</I>";

var b=document.getElementById('divid');
b.innerHTML="<I>inside div</I>";

//class name
var list=document.getElementsByClassName('list');
// console.log(list);
// list.style.color="yellow";
list[0].style.color="yellow";
list[1].style.backgroundcolor="yellow";

// tagname
var g=document.getElementsByTagName('h1');
g[1].innerText="gggg";

//query selector
var que=document.querySelector('.list');
// var que=document.querySelector('.list:last-child');
console.log(que);//only see first element
que.style.color="red";