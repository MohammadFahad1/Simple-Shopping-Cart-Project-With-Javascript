function getTextElementValueById(elementId) {
    const totalElement = document.getElementById(elementId);
    const totalAmount = parseInt(totalElement.innerText);
    return totalAmount;
}

function calculateSubTotal() {
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');
    const currentSubTotal = currentPhoneTotal + currentCaseTotal;

    const subTotalElement = document.getElementById('sub-total');
    subTotalElement.innerText = currentSubTotal;
}