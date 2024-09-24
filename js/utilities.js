function getInputValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = Number(inputValue);
    return inputNumber;
}

function getTextValueById(id) {
    const inputText = document.getElementById(id).innerText;
    const inputNumber = Number(inputText);
    return inputNumber;
}

function getMyBalance(id) {
    const innerText = document.getElementById(id).innerText;
    const inputNumber = Number(innerText);
    return inputNumber;
}

function backgroundSet(id) {
    document.getElementById('nav-donate-btn').classList.remove('bg-primary');
    document.getElementById('nav-history-btn').classList.remove('bg-primary');
    document.getElementById(id).classList.add('bg-primary');
}

function showElement(id) {
    document.getElementById('main-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');
    document.getElementById(id).classList.remove('hidden')
}
function timeShow(){
    const currentDate = new Date();
    return currentDate;
};