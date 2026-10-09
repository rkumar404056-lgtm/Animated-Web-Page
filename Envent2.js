let form = document.querySelector("form");
let input = document.querySelectorAll("input");
let neew = document.querySelector(".new");

form.addEventListener("submit", function(details){
    details.preventDefault();

    console.log(input[0].value, input[1].value, input[2].value, input[3].value, input[4].value);

    let card = document.createElement("div");
    card.classList.add("card");
    
    let profile = document.createElement("div");
    profile.classList.add("profile");

    card.appendChild(profile);
    console.log(card);

    let img = document.createElement("img");
    img.setAttribute("src", input[3].value);

    let h3 = document.createElement("h3");
    h3.textContent = input[0].value;

    let h5 = document.createElement("h5");
    h5.textContent = input[1].value;

    let h6 = document.createElement("h6");
    h6.textContent = input[2].value;

    profile.appendChild(img);
    card.appendChild(profile);

    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(h6);
   neew.appendChild(card);

   //input.forEach(function (inp){
    //if (inp.type !== "submit") {
        //inp.value = "";
   // }
   //})

});

