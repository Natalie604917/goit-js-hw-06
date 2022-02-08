const formRef = document.querySelector('.login-form')
formRef.addEventListener('submit', onFormSubmit)

function onFormSubmit(event) {
event.preventDefault()
const formElements = event.currentTarget.elements

const mail = formElements.email.value
const password = formElements.password.value

const formData = {
mail,
password,
}

if (!mail) {
    alert('полe ввода email должно быть заполнено.')
    }
    
    if (!password) {
    alert('полe ввода password должно быть заполнено.')
    }
    
    console.log(formData)
    // event.currentTarget.reset();
    
}



