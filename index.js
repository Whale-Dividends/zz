let deposit=document.getElementById("makeme");
let mylogin=document.getElementById("mylogin");

deposit.addEventListener("click", clickme);

function clickme(){
 if(mylogin.style.visibility=="hidden"){
    mylogin.style.visibility="visible"

 }
 else{
    mylogin.style.visibility="hidden";
 }
}



let mydeposit=document.getElementById("mydeposit");
let paused=document.getElementById("paused");

mydeposit.addEventListener("click", clickmee);

function clickmee(){
 if(paused.style.visibility=="hidden"){
    paused.style.visibility="visible"

 }
 else{
    paused.style.visibility="hidden";
 }
}



let mywithdraw=document.getElementById("mywithdraw");
let withdrawall=document.getElementById("withdrawall");
mywithdraw.addEventListener("click",allwith);

function allwith(){
   if(withdrawall.style.visibility=="hidden"){
    withdrawall.style.visibility="visible"
   }
   else{
    withdrawall.style.visibility="hidden"

   }
}

let butt=document=document.getElementById("button");
let input5=document=document.getElementById("input5");
butt.addEventListener("click",clickall);
function clickall(){
   alert("")
}