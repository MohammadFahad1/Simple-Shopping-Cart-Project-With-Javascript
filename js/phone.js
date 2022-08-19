function updatePhoneNumber(isIncrease) {
    const numberField = document.getElementById('phone-number-field');
    const numberAmount = parseInt(numberField.value);

    let newNumber;
    if (isIncrease) {
        newNumber = numberAmount + 1;
    } else {
        newNumber = numberAmount - 1;
    }
    numberField.value = newNumber;

    return newNumber;
}

function updateTotalPhonePrice(newNumber) {
    const totalPrice = newNumber * 1219;
    const totalElement = document.getElementById('phone-total');
    totalElement.innerText = totalPrice;
}

document.getElementById('btn-phone-plus').addEventListener('click', function () {
    const newNumber = updatePhoneNumber(true);
    updateTotalPhonePrice(newNumber);
    calculateSubTotal();
});

document.getElementById('btn-phone-minus').addEventListener('click', function () {
    const newNumber = updatePhoneNumber(false);
    updateTotalPhonePrice(newNumber);
    calculateSubTotal();
});