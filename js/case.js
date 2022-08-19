function updateCaseNumber(isIncrease) {
    const numberField = document.getElementById('case-number-field');
    const numberAmount = parseInt(numberField.value);

    let newNumber = numberAmount;
    if (isIncrease) {
        numberField.value = numberAmount + 1;
        newNumber = numberAmount + 1;
    } else {
        if (newNumber > 0) {
            numberField.value = newNumber - 1;
            newNumber = numberAmount - 1;
        } else {
            numberField.value = 0;
            newNumber = 0;
        }
    }
    return newNumber;
}

function updateTotalPrice(newNumber) {
    const totalPrice = newNumber * 59;
    const totalElement = document.getElementById('case-total');
    totalElement.innerText = totalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click', function () {
    const newNumber = updateCaseNumber(true);
    updateTotalPrice(newNumber);
});

document.getElementById('btn-case-minus').addEventListener('click', function () {
    const newNumber = updateCaseNumber(false);
    updateTotalPrice(newNumber);
});