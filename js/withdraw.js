
document.getElementById('withdrawBtn').addEventListener('click',function(){

// console.log('hello')

const withdrawInput=document.getElementById('withdrawInput')
const withdrawInputValue=withdrawInput.value
const wthdrawString=parseFloat(withdrawInputValue)
withdrawInput.value=wthdrawString

// second step work is start

const withdraw=document.getElementById('withdrawAmount')
const withdrawText=withdraw.innerText;
const withdrawfloat=parseFloat(withdrawText)
const withdrawAdded=withdrawfloat+wthdrawString
withdraw.innerText=withdrawAdded

// third step work is start

const withdrawBalance=document.getElementById('balanceItem')
const withdrawGet=withdrawBalance.innerText
const withdrawNumber=parseFloat(withdrawGet)
const withdrawReduce=withdrawNumber-wthdrawString
withdrawBalance.innerText=withdrawReduce



withdrawInput.value=''
// withdraw.innerText=withdrawfloat
})



