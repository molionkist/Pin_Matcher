function generatePin() {
    const pin = Math.round(Math.random() * 9000 + 1000);
    document.getElementById('display-pin').value = pin;
}
document.getElementById('key-pad').addEventListener('click', function (event) {


    const number = event.target.innerText;
    const calcInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }

    }
    else {
        const previousNumber = calcInput.value;
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;

    }


})

function verifyPin() {
    const pin = document.getElementById('display-pin').value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyError = document.getElementById('notify-fail');
    if (pin == typedNumbers) {

        notifySuccess.style.display = 'block';
        notifyError.style.display = 'none';

    }
    else {

        notifyError.style.display = 'block';
        notifySuccess.style.display = 'none';

    }
}