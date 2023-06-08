const pricePerDroid = 800;
const orderedQuantity = 6;
const deliveryFee = 50;
const totalPrice = pricePerDroid * orderedQuantity + deliveryFee;

const message = `You ordered droids worth ${totalPrice}. Delivery ${deliveryFee} credits is included total price`;
console.log(message);
