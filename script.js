let inputs = document.querySelectorAll('input')

console.log(inputs)




inputs.forEach(element => element.addEventListener('change', (event) => {
    if (!event.target.checkValidity())
    {
        event.target.classList.add('invalid')
    }
    else
    {
        event.target.classList.remove('invalid')
    }
} ))


passwordInput1 = document.querySelectorAll('[name="password1"]')
passwordInput2 = document.querySelectorAll('[name="password2"]')
passwordInputs = document.querySelectorAll('[type="password"]')

passwordInputs.forEach(element => element.addEventListener('onkeyup', (event)=>{
    if (passwordInput1.value != passwordInput2.value)
    {
        console.log('false')
    }
    
}))
 
var check = function() {
    if (document.getElementById('password1').value ==
      document.getElementById('password2').value) {
      document.getElementById('message').style.color = 'green';
      document.getElementById('message').innerHTML = 'matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').innerHTML = 'not matching';
    }
  }