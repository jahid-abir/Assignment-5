document.getElementById('donate-btn-1').addEventListener('click',function(event){
    event.preventDefault()
   const donateAmount = getInputValueById('donate-noakhali')
   console.log(donateAmount);
})