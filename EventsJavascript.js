
let h1 = document.querySelector("h1");
h1.style.boxShadow = "2px 2px 20px red"
h1.style.textAlign = "center";

h1.addEventListener("click", function(){
    h1.style.color = "orange";
    h1.style.boxShadow = "2px 2px 20px orange";
});

h1.addEventListener("dblclick", function(){
    h1.style.boxShadow = "2px 2px 20px red";
});

let h2 = document.querySelector("h2");
h2.style.boxShadow = "2px 2px 20px lightblue"
h2.style.color + "lightblue";

h2.addEventListener("click", function(){
    h2.style.boxShadow = "2px 2px 20px pink";
    h2.style.textAlign = "center";
    h2.style.color = "pink";
});

h2.addEventListener("dblclick", function(){
    h2.style.boxShadow = "2px 2px 20px lightblue";
});

let inp = document.querySelector("#in1");

inp.addEventListener("input", function(Word){
    if(Word.data !== null) {
        console.log(Word.data);
    }
});

let input2 = document.querySelector("#in");

input2.addEventListener("input", function(input2){
    if(input2.data !== null) {
        console.log(input2.data);
    }
});

let Class = document.querySelector("#h3");
let select = document.querySelector("select");

select.addEventListener("change", function(Sel){
  console.log(Sel.target.value);   
  Class.textContent = `${Sel.target.value} Selected`;
});

//

let h100 = document.querySelector(".h1");

window.addEventListener("keydown", function (details){
   if (details.key === " ") {
   h100.textContent = "Space";
   }
   else {
    h100.textContent = details.key;
   }
});

let btn = document.querySelector("#button");
let in100 = document.querySelector("#inp");

btn.addEventListener("click", function() {
    in100.click();
});

in100.addEventListener("change", function(details){
    const file = details.target.files[0];
    if(file) {
    btn.textContent = file.name;
    }
});



