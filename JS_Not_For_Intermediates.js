// Design Patterns:-

// 1.Module Pattern:

let fnc = (function(){
    let b = 20000;
    let n = 9000;

    return {
        b,
        n,
    };
})();

// 2.Revealing Pattern:

let data = (function(){
    let hero = 19000;
    let heroic = 9999;

    return { // her is diff btw these Modules
    h1: hero,
    h2: heroic,
    };
})();

// 3,Factory Function Pattrn

function CreateProduct(name, price){
    let = stock = 10;
    return {
        name,
        price,
        buy(qty){
            if(qty <= stock){
                stock -= qty;
                console.log(`${qty} booked and ${stock} pieces are left`);
            }
            else {
                console.error(`We only have ${stock} pieces left`);
            }
        },
        refill(qty){
            stock += qty;
            console.log(`refilled the stock - ${stock} pieces now.`);
        },
    };
}

let iphone = CreateProduct("iphone", 99999);
iphone.buy(2);

// Callback

function ABC(fnc) {
    setTimeout(fnc, Math.floor(Math.random()* 20)* 1000);
}
ABC(function(){
    console.log("Hi");
});
