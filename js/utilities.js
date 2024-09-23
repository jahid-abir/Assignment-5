function getInputValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = Number(inputValue);
    return inputNumber;
}

function getTextValueById(id){
    const inputText = document.getElementById(id).innerText;
    const inputNumber = Number(inputText);
    return inputNumber;
}

function getMyBalance(id){
    const innerText = document.getElementById(id).innerText;
    const inputNumber = Number(innerText);
    return inputNumber;
}