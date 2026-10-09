// DOM Manipulation

// let h1 = document.querySelector("h1"); 
// h1.innerHTML = "I am here";

// getAttribute
// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));

// removeAttribute
let a = document.querySelector("a");
a.removeAttribute("href");

console.log("hi");
//alert("Wellcome");                  

console.log(document.head);

// Select With id:

let h1 = document.getElementById("hm");
console.dir(h1);

let h2 = document.querySelector("h2");
h2.textContent = "I Am Good";

let img = document.querySelector("img");
img.setAttribute("src", "https://images.com");

let b = document.querySelector("a");
console.log(a.getAttribute("href"));

let h3 = document.createElement("h3");
h3.textContent = "Hello How Are You?";
document.querySelector("body").append(h3);

let h = document.querySelector("h1");
h1.style.color = "red";
h1.style.backgroundColor = "khaki";
h1.style.textAlign = "center";

let id = document.getElementById("id");
id.textContent = "Welcome To My Website";
id.style.color = "Cyan";

let heading = document.querySelector("#hm2");
heading.textContent = "Feed Back Me With Your Address";

// Select all <li> elements and print thier ext using a loop.

let list = document.querySelectorAll("li");
list.forEach(function(val) {
    console.log(val.textContent);
    
});

// or

let list1 = document.querySelectorAll("li");
for(let i = 0; i<list1.length; i++) {
    console.log(list1[i].textContent);
}

// Select a paragraph and replace its content with: <b>Update</b> by Javascripts.

let para = document.querySelector("#p");
para.innerHTML = "<b>Update</b> by Javascripts.";

// Select a link and update its href to point to https://sheriyans.com.

let a1 = document.querySelector("a");
a1.href = "https://sheriyans.com";
a1.textContent = "Sheriyans Coding";

// Add a title attribut to a div dynamically.

let div = document.querySelector("div");
div.setAttribute("title", "Lorem");

// Remove the disabled attribute from a button.

let btn = document.querySelector("button");
btn.removeAttribute("disabled");

// Create a new list item <li>New Tast</li> and add it to the end of a <ul>.

let ul = document.querySelector("ul");
let list2 = document.createElement("li");



list2.textContent = "New Task";

ul.appendChild(list2);







