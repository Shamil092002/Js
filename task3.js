let name = prompt('Enter the name of product');
let unitPrice = prompt('Enter the unit price');
let quantity = prompt('Enter the quantity');
let participation = prompt('Is product participate in the promotion');

function costOfProduct() {
    if (quantity >= 5) {
        alert('10% discount : ' + (unitPrice = unitPrice - unitPrice * 0.1))
    }
    if (participation == 1) {
        alert('15% discount : ' + (unitPrice = unitPrice - unitPrice * 0.15))
    }
    if (quantity >= 5 && participation == 1) {
        alert('25% discount : ' + (unitPrice = unitPrice - unitPrice * 0.25))
    }
    for(i = 0; i <= quantity; i++){
        unitPrice = unitPrice * i;
        console.log(i);
    }
}
costOfProduct()