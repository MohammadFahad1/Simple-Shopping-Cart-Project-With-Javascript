function getTextElementValueById(elementId) {
    const totalElement = document.getElementById(elementId);
    const totalAmount = parseInt(totalElement.innerText);
    return totalAmount;
}

function setTextElementValueById(elementId, value) {
    const subTotalElement = document.getElementById(elementId);
    subTotalElement.innerText = value;
}

function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total', currentSubTotal.toFixed(2));

    // Calculate Tax
    const taxAmount = currentSubTotal * 0.1;
    setTextElementValueById('tax-amount', taxAmount.toFixed(2));

    const finalAmount = currentSubTotal + taxAmount;
    setTextElementValueById('final-total', finalAmount.toFixed(2));
}