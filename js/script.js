function suma(){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    let result = number1 + number2;

    document.getElementById('result').value = result;
}

function resta(){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    let result = number1 - number2;

    document.getElementById('result').value = result;
}

function multiplicación(){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    let result = number1 * number2;

    document.getElementById('result').value = result;
}

function división(){
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    let result = number1 / number2;

    document.getElementById('result').value = result;
}

function raiz(){
    let number1 = parseFloat(document.getElementById('number1').value);

    let result = math.sqrt(number1);

    document.getElementById('result').value = result;
}

function clearAll() {
    let display = document.querySelector('input');
    display.value = '';
  }