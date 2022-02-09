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

if ( mail=== '' || password === '') {
    alert('все поля должны быть заполнены.');
    return;
}

console.log(formData)
formRef.reset();

}





