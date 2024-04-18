// var : global sehingga memungkinkan inisiasi terbalik yang berjmasalah

// iceCream = 12;
// var iceCream;

// let : local dan inisialisasi nilai bisa di update
let iceCream = "Chocolate";
console.log(iceCream);

iceCream = "Strawberry";
console.log(iceCream);

// const : local dan inisialisasi nilai tidak bisa diupdate

const vanilla = 10;
console.log(vanilla);

vanilla = 20;
console.log(vanilla);
