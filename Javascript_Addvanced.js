 console.log(this);

 function z() {
    console.log(this);
}

 let obj = {
     name: "RG",
     callName: function(){
         console.log(this);
     }
 }
 obj.callName();

function CreateBuiscuits(name, price, qty, company){
    this.name = name;
    this.price = price;
    this.qty = qty;
    this.company = company;
}

let buiscuit1 = new CreateBuiscuits("Oreo", 10, 5, "Cadbury");
console.log(buiscuit1);

function Cars(company, price, color){
    this.company = company;
    this.price = price;
    this.color = color;

    this.write = function(text){
        let h1 = document.createElement("h1");
        h1.textContent = text;
        h1.style.color = color;
        document.body.append(h1);
    }
};

let Car1 = new Cars("BMW", 1500000, "black");
let car2 = new Cars("Ferrary", 1500000, "grey");

function CreatePencil(name, price, company, color){
    this.name = name;
    this.pice = price;
    this.color = color;
    this.company = company;

}

CreatePencil.prototype.write = function(txt){
        let h1 = document.createElement("h1");
        h1.textContent = txt;
        h1.style.color = this.color;
        document.body.append(h1);
    };

let p1 = new CreatePencil("Natraj", 10,  "Natraj", "Red");
let p2 = new CreatePencil("Apsara", 10, "Natraj", "Silver");



