// donate noakhali
document.getElementById('donate-btn-1').addEventListener('click', function (event) {
    event.preventDefault()
    const donateAmount = getInputValueById('donate-noakhali');
    if(isNaN(donateAmount)){
        alert('Invalid Number')
        return;
    };
    const currentAmount = getTextValueById('donate-amount');
    const newBalance = donateAmount + currentAmount;
    const myBalance = getMyBalance('my-balance');
    const myNewBalance = myBalance - donateAmount;
    if (myNewBalance < 0){
        alert('Insufficient Balance.Please recharge your account.')
        return;
    };
        document.getElementById('donate-amount').innerText = newBalance;
    document.getElementById('donate-noakhali').value = '';
    document.getElementById('my-balance').innerText = myNewBalance;
})

// donate feni
document.getElementById('donate-btn-2').addEventListener('click', function (event) {
    event.preventDefault()
    const donateAmount = getInputValueById('donate-feni');
    if(isNaN(donateAmount)){
        alert('Invalid Number')
        return;
    };
    const currentAmount = getTextValueById('donate-amount-2');
    const newBalance = donateAmount + currentAmount;
    const myBalance = getMyBalance('my-balance');
    const myNewBalance = myBalance - donateAmount;
    if (myNewBalance < 0){
        alert('Insufficient Balance.Please recharge your account.')
        return;
    };
    document.getElementById('donate-amount-2').innerText = newBalance;
    document.getElementById('donate-feni').value = '';
    document.getElementById('my-balance').innerText = myNewBalance;
});

// donate quota movement

document.getElementById('donate-btn-3').addEventListener('click', function (event) {
    event.preventDefault()
    const donateAmount = getInputValueById('donate-quota-movement');
    if(isNaN(donateAmount)){
        alert('Invalid Number')
        return;
    };
    const currentAmount = getTextValueById('donate-amount-3');
    const newBalance = donateAmount + currentAmount;
    const myBalance = getMyBalance('my-balance');
    const myNewBalance = myBalance - donateAmount;
    if (myNewBalance < 0){
        alert('Insufficient Balance.Please recharge your account.')
        return;
    };
    document.getElementById('donate-amount-3').innerText = newBalance;
    document.getElementById('donate-quota-movement').value = '';
    document.getElementById('my-balance').innerText = myNewBalance;
});

// button-color
document.getElementById('nav-history-btn').addEventListener('click',function(){
    backgroundSet('nav-history-btn');
    showElement('history-section');
    // const p = document.createElement('p')
    // p.innerHTML = `<h3>hello</h3>`
    // document.getElementById('history-section').appendChild(p)
})
document.getElementById('nav-donate-btn').addEventListener('click',function(){
    backgroundSet('nav-donate-btn');
    showElement('main-section');
})