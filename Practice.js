

let button = document.querySelector(".div1");
let file = document.querySelector("#file");

button.addEventListener("click", function(){
    file.click();
}); //target.value

file.addEventListener("change", function(details){
    const upload = details.target.files[0];
    if(upload){
        button.textContent = upload.name;
    }
});

fetch("https://randomouser.me/api/")
.then((rawdata) => { // rawdata is unreadable;
    return rawdata.json(); // .jason converts it into radable;
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(err);
});