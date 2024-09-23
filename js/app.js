document.getElementById('donate-btn-1').addEventListener('click',function(event){
    event.preventDefault()
   const donateAmount = getInputValueById('donate-noakhali');
   const currentAmount = getTextValueById('donate-amount');
   const newBalance = donateAmount + currentAmount;
   document.getElementById('donate-amount').innerText = newBalance;
   document.getElementById('donate-noakhali').value = '';
})