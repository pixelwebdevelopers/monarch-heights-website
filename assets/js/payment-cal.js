function estimatePayment() {
    let totalPrice = +document.getElementById("purchase_price").value;
    let installmentMonths = +document.getElementById("loan_term").value || 48;

    if (totalPrice <= 0 || isNaN(totalPrice)) {
        alert("Please enter a valid Total Price.");
        return;
    }

    // Monarch Heights Payment Plan Breakdown
    // Booking: 12.5%
    // Confirmation: 12.5%
    // 48 Monthly Installments: 50% total (divided equally)
    // Half Yearly (8 payments): included in the 50%
    // Grey Structure: 12.5%
    // Possession: 12.5%

    let bookingAmount = totalPrice * 0.125;
    let confirmationAmount = totalPrice * 0.125;
    let installmentTotal = totalPrice * 0.5;
    let monthlyInstallment = installmentTotal / installmentMonths;
    let greyStructure = totalPrice * 0.125;
    let possession = totalPrice * 0.125;

    // Format numbers with commas (PKR style)
    function formatPKR(num) {
        return "Rs. " + Math.round(num).toLocaleString("en-PK");
    }

    document.getElementById("down_payment_value").textContent =
        formatPKR(bookingAmount);
    document.getElementById("monthly_payment_value").textContent =
        formatPKR(monthlyInstallment);
    document.getElementById("load_amount_value").textContent =
        formatPKR(confirmationAmount);
    document.getElementById("grey_structure_value").textContent =
        formatPKR(greyStructure);
    document.getElementById("possession_value").textContent =
        formatPKR(possession);
}