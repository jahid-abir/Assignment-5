// donate noakhali
document.getElementById('donate-btn-1').addEventListener('click',function(event){
    event.preventDefault()
   const donateAmount = getInputValueById('donate-noakhali');
   const currentAmount = getTextValueById('donate-amount');
   const newBalance = donateAmount + currentAmount;
   const myBalance = getMyBalance('my-balance');
   const myNewBalance = myBalance - donateAmount;
   document.getElementById('donate-amount').innerText = newBalance;
   document.getElementById('donate-noakhali').value = '';
   document.getElementById('my-balance').innerText = myNewBalance;
})

// donate feni
document.getElementById('donate-btn-2').addEventListener('click',function(event){
    event.preventDefault()
   const donateAmount = getInputValueById('donate-feni');
   const currentAmount = getTextValueById('donate-amount-2');
   const newBalance = donateAmount + currentAmount;
   const myBalance = getMyBalance('my-balance');
   const myNewBalance = myBalance - donateAmount;
   document.getElementById('donate-amount-2').innerText = newBalance;
   document.getElementById('donate-feni').value = '';
   document.getElementById('my-balance').innerText = myNewBalance;
})

// donate quota movement

document.getElementById('donate-btn-3').addEventListener('click',function(event){
    event.preventDefault()
   const donateAmount = getInputValueById('donate-quota-movement');
   const currentAmount = getTextValueById('donate-amount-3');
   const newBalance = donateAmount + currentAmount;
   const myBalance = getMyBalance('my-balance');
   const myNewBalance = myBalance - donateAmount;
   document.getElementById('donate-amount-3').innerText = newBalance;
   document.getElementById('donate-quota-movement').value = '';
   document.getElementById('my-balance').innerText = myNewBalance;
})