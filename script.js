document.getElementById("investment-form").addEventListener('submit', function(event) {

    event.preventDefault();

    const initialAmount = parseFloat(document.getElementById('initial-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value / 100);
    const years = parseInt(document.getElementById('years').value);

    const finalAmount = initialAmount * Math.pow((1 + interestRate), years);

    document.getElementById('result').textContent =  `R$ ${finalAmount.toFixed(2)}`;
});

