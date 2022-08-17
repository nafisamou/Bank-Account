// step-1: add evenListener to the deposit button

document.getElementById('btn-deposit').addEventListener('click',function(){ 

// step-2: get deposit amount from the deposit-field
// always remember to use .value to get text from an input-field.
const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField.value;
const newDepositAmount = Math.abs(parseFloat(newDepositAmountString));

//step-3: clear the deposit field:
depositField.value = '';

if(isNaN(newDepositAmount)){
    alert('Please provide a valid number');
    return;
    }

// step-4: get the current total deposit
// For non-input (text-area) : use innerText to get the text from text-area
const previoustDeposit = document.getElementById('previous-deposit');
const previousTotalDepositString = previoustDeposit.innerText;
const previousTotalDeposit = parseFloat(previousTotalDepositString);


//step-5: add numbers to set the total deposit:
const currentTotalAmount = newDepositAmount + previousTotalDeposit;
previoustDeposit.innerText = currentTotalAmount;

//step-6: get balance current total:
const balanceTotal = document.getElementById('balance-total');
const balanceTotalString = balanceTotal.innerText;
const balanceTotalAmount = parseFloat(balanceTotalString);

// step-7: calculate current total bank balance:
const currentTotalBalance = balanceTotalAmount + newDepositAmount;
balanceTotal.innerText = currentTotalBalance;
console.log(currentTotalBalance);

/* // clear the deposit field:
depositField.value = '';
 */
})