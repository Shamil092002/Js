let name = prompt('Enter the name of product');
let unitPrice = prompt('Enter the unit price');
let quantity = prompt('Enter the quantity');
let participation = prompt('Is product participate in the promotion');
let product = unitPrice * 0.1;
let product2 = unitPrice * 0.15;
let product3 = unitPrice * 0.25;
function costOfProduct() {
    if (quantity >= 5) {
        alert('10% discount : ' + (unitPrice - product))
    }
    if (participation == 1) {
        alert('15% discount : ' + (unitPrice - product2))
    }
    if (quantity >= 5 && participation == 1) {
        alert('25% discount : ' + (unitPrice - product3))
    }
}
costOfProduct()