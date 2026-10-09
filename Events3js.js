let square = document.querySelector("#square");

square.addEventListener("mouseover", function(){
    square.style.backgroundColor = "red";
});

square.addEventListener("mouseout", function(){
    square.style.backgroundColor ="orange";
});

let move = document.querySelector("#square");
window.addEventListener("mousemove", function(details){
   move.style.top = details.clientY + "px";
   move.style.left = details.clientX + "px";          
});




