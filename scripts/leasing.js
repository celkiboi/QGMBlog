const currencySymbols = {
    USD: '$',
    EUR: '€',
    GBP: '£'
};

function updateCurrencySymbol() {
    const selectedCurrency = document.getElementById('currency').value;

    document.querySelectorAll('.currencySymbol').forEach(element => {
        element.innerHTML = currencySymbols[selectedCurrency];
    });

    document.getElementById('selectedCurrencyResult').innerText = currencySymbols[selectedCurrency];
    document.getElementById('currencySymbolCarPrice').innerText = currencySymbols[selectedCurrency];
    document.getElementById('currencySymbolDownPayment').innerText = currencySymbols[selectedCurrency];
}

function calculateLease() {
    const carPrice = parseFloat(document.getElementById('carPrice').value);
    const downPayment = parseFloat(document.getElementById('downPayment').value);
    const loanTerm = parseInt(document.getElementById('loanTerm').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value);

    const loanAmount = carPrice - downPayment;
    const monthlyInterestRate = (interestRate / 100) / 12;
    const monthlyPayment = (loanAmount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -loanTerm));

    if (!isNaN(monthlyPayment)) {
        document.getElementById('monthlyPayment').innerText = monthlyPayment.toFixed(2);
    }
    else {
        document.getElementById('monthlyPayment').innerText = 0;
    }
}
