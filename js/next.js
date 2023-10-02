// document.getElementById('deposit-btn').addEventListener('click',function(){

// const inputFieldWork=document.getElementById('input-field-work');
// const inputFieldWorkValue=inputFieldWork.value;
// const inputOutputAmount=parseFloat(inputFieldWorkValue)

// // console.log(typeof(inputOutputAmount));

// const depositAmount=document.getElementById('depositAmount');
// const depositAmountTaka=depositAmount.innerText
// // depositAmount.innerText=inputFieldWorkValue;
// // console.log(typeof(depositAmountTaka))
// const amountDepositTaka=parseFloat(depositAmountTaka)
// // console.log(amountDepositTaka)
// depositAmount.innerText=inputOutputAmount
// const 
// // inputFieldWorkValue.value=' '
// inputFieldWork.value=''
// })

document.getElementById('deposit-btn').addEventListener('click',function(){

// step one work btn click is done

// step 2 catch the input value

const inputvalue=document.getElementById('input-field-work')

const inputOutput=inputvalue.value;

const inputOutputParse=parseFloat(inputOutput)
inputvalue.value=inputOutputParse

// step -3 deposit work is start now


const deposit=document.getElementById('depositAmount')

const setDeposit=deposit.innerText

const depositParse=parseFloat(setDeposit)
const added=depositParse+inputOutputParse

// step 4 withdraw work 

deposit.innerText=added
// console.log(typeof(setDeposit),setDeposit)


// step 5 balance item work is start

const balanceEquality=document.getElementById('balanceItem')
const balanceOutput=balanceEquality.innerText
const balanceFloat=parseFloat(balanceOutput)
const balanceResult=balanceFloat+inputOutputParse

balanceEquality.innerText=balanceResult
inputvalue.value=''

console.log(typeof(inputOutputParse),inputOutputParse)
// console.log(typeof(inputOutput),inputOutput)
})



