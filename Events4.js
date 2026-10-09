let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function(details){
    details.preventDefault();

    if (nm.value.length <= 2){
        document.querySelector("#hide").style.display = "initial";
    }
    else {
        document.querySelector("#hide").style.display = "none";
    }
})

let time = "Hi"
 
setTimeout(function(){
    console.log(time);
}, 2000);

let count = 3;

let interval = setInterval(function(){
    if (count >= 1){
         console.log(count);
        count--;
       
    }
    else clearInterval(interval);

}, 1000);

localStorage.setItem("Name", "RG");

localStorage.getItem("Name");

localStorage.removeItem("Name");

document.cookie = "Roll: 100";

localStorage.setItem("id", JSON.stringify([19, 21, 38, 40]));
