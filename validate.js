const form = document.getElementById('frmRegister');

form.addEventListener('submit', (a) => {
    a.preventDefault();

    if(!validateName(form.name.value)){
        alert('Please enter a valid name')
    } else if(!validateEmail(form.email.value)){
        alert('Please enter a valid email address')
    } else if(!validateAge(form.age.value)){
        alert('Please enter a valid age between 18 and 45')
    } else if(!validateGender(form.gender.value)){
        alert('Please select a gender')
    } else if(!validateTerms(form.terms.checked)){
        alert('Please agree to terms and conditions')
    } else {
        form.submit()
    }
});

function validateName(name){
    return name.trim() != '';
}

function validateEmail(email){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return pattern.test(email);
}

function validateAge(age){
    return age >= 18 && age <= 45;
}

function validateGender(gender){
    return gender != '';
}

function validateTerms(checked){
    return checked;
}