//var a = document.getElementById("heading");
//console.log(a.textContent = "bye");

//var b = document.getElementsByClassName("paragraph");
//for(let i = 0; i < b.length; i++){
//    console.log(b[i].textContent)
//}

//var b = document.getElementsByTagName("p");
//for(let i = 0; i < b.length; i++){
  //  console.log(b[i].textContent)
//}


//var c = document.querySelectorAll(".paragraph");
//c.forEach(function(item){

  //  console.log(item.textContent);
    //item.style.color = "blue";
//});
//console.log(c);
//c.style.color = "blue";

//var clickBtn = document.getElementById("btn");

//function change(){
//var c = document.querySelectorAll(".paragraph");
//c.forEach(function(item){

 //   console.log(item.textContent);
 //   item.style.color = "blue";
//});
//}

//var d = document.getElementById("hidden");
//console.log(d.textContent);

//var e = document.querySelectorAll(".paragraph");
//e.forEach(function(item){
//  console.log(item.textContent);
//  item.classList.add("active");
//})

var clickBtn = document.getElementById("btn");
function change(){
  var e = document.querySelectorAll(".paragraph");
  e.forEach(function(item){
  console.log(item.textContent);
  item.classList.add("active");

})}

var clickBtn = document.getElementById("btn2");
function remove(){
  var e = document.querySelectorAll(".paragraph");
  e.forEach(function(item){
  console.log(item.textContent);
  item.classList.remove("active");

})}

var clickBtn = document.getElementById("btn3");
function toggle(){
  var e = document.querySelectorAll(".paragraph");
  e.forEach(function(item){
  console.log(item.textContent);
  item.classList.toggle("toggle");

})}