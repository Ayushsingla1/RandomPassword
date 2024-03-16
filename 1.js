let length=document.getElementById("length");
let button=document.getElementById("submit");
let show=document.getElementById("output");

let upperchar="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerchar="abcdefghijklmnopqrstuvwxyz";
let numbers="0123456789";
let symbols="~-_@#!&?";



function CreatePassword(length,uppercase,lowercase,number,symbol){
let allowed="";
let answer="";
    answer+=uppercase?upperchar:"";
    answer+=lowercase?lowerchar:"";
    answer+=number?numbers:"";
    answer+=symbol?symbols:"";

    for(let i=0;i<length;i++){
        let a=Math.floor(Math.random() * (answer.length) )
        allowed+=answer[a];
    }
    return allowed;
}
button.addEventListener('click',function(){
show.textContent="";
length=parseInt(document.getElementById("length").value);
let uppercase=document.getElementById("Upper").checked;
let lowercase=document.getElementById("Lower").checked;
let number=document.getElementById("Number").checked;
let symbol=document.getElementById("Symbol").checked;
if(!(uppercase || lowercase || number || symbol)){
    window.alert("Please select atleast one Checkbox");
}
else{
    show.textContent="Password is : " + CreatePassword(length,uppercase,lowercase,number,symbol);
}
})