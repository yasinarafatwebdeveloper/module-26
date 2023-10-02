

document.getElementById('btn-field').addEventListener ('click',function(){

const email=document.getElementById('email-field')
const emailValue=email.value
// console.log(emailValue)

const password=document.getElementById('passwordValue')
const passwordValue=password.value
console.log(emailValue,passwordValue)

if(emailValue==='yasinsahazi99@gmail.com'&& passwordValue==='19980408Y' ){
window.location.href='next.html'

}
else{
   alert('this is invalid number')
}
})



