/* 
1. add evenlistener button withdraw button
2. get the withdraw amount from withdraw input field
2.5. also make sure to convert the input into a number by using parseFloat
3. clear the withdraw field:
4. get total previous withdraw.
5. get previous balance total amount.
6. calculate total withdraw amount & set total withdrawa amount.
7. calculate total balance after withdraw & set previous balance total .

*/
// step-1: 
document.getElementById('btn-withdraw').addEventListener('click',function(){

 // step-2:
const withdrawField = document.getElementById('withdraw-field');
const withdrawFieldString = withdrawField.value;
// step-2.5:
const newWithdraw = Math.abs(parseFloat(withdrawFieldString));
// step-3:
withdrawField.value = '';

if(isNaN(newWithdraw)){
alert('Please provide a valid number');
return;
}

// step-4:
const previousWithdraw = document.getElementById('previous-withdraw');
const previousWithdrawString = previousWithdraw.innerText;
const totalPreviousWithdraw = parseFloat(previousWithdrawString);
/* // step-5:
const totalWithdraw = totalPreviousWithdraw + newWithdraw;
previousWithdraw.innerText = totalWithdraw;
 */
// step-5:
const previousBalanceTotal = document.getElementById('balance-total');
const previousBalanceTotalString = previousBalanceTotal.innerText;
const previousBalanceTotalAmount = parseFloat(previousBalanceTotalString);



if(newWithdraw > previousBalanceTotalAmount){
alert('Amar ato taka nai vai');
return;
}

// step-6:
const totalWithdraw = totalPreviousWithdraw + newWithdraw;
previousWithdraw.innerText = totalWithdraw;

// step-7:
const currentTotalBalance = previousBalanceTotalAmount - newWithdraw;
previousBalanceTotal.innerText = currentTotalBalance;
console.log(currentTotalBalance);

/* // step-7:
withdrawField.value = ''; */
})