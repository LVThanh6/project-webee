document.querySelector('#contact__form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let valid = true;
    const sendButton = document.querySelector('.send'); 
    const sendContainer = document.querySelector('.contact__form');

    sendButton.classList.remove('send-valid', 'send-invalid', 'no-hover');
    sendContainer.classList.remove('contact__form-valid', 'contact__form-invalid');

    const name = document.getElementById('name');
    if (name.value.trim() === '') {
        valid = false;
        name.placeholder = 'Họ và tên là bắt buộc!';
        name.style.borderColor = '#C2000C';
        setTimeout(() => {
            name.placeholder = 'Placeholder';
            name.style.borderColor = '';
        }, 2000);
    }

    const email = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email.value)) {
        valid = false;
        email.placeholder = 'Email không hợp lệ!';
        email.style.borderColor = '#C2000C';
        setTimeout(() => {
            email.placeholder = 'Placeholder';
            email.style.borderColor = '';
        }, 2000);
    }

    const phone = document.getElementById('phone');
    const phonePattern = /^[0-9]{10,11}$/; 
    if (!phonePattern.test(phone.value)) {
        valid = false;
        phone.placeholder = 'Số điện thoại không hợp lệ!';
        phone.style.borderColor = '#C2000C';
        setTimeout(() => {
            phone.placeholder = 'Placeholder';
            phone.style.borderColor = '';
        }, 2000);
    }

    const contai = document.getElementById('contai');
    if (contai.value.trim() === '') {
        valid = false;
        contai.placeholder = 'Nội dung là bắt buộc!';
        contai.style.borderColor = '#C2000C';
        setTimeout(() => {
            contai.placeholder = 'Mô tả';
            contai.style.borderColor = '';
        }, 2000);
    }

    if (valid) {
        sendButton.classList.add('send-valid', 'no-hover');  
        sendContainer.classList.add('contact__form-valid');  

        setTimeout(() => {
            sendButton.classList.remove('send-valid', 'no-hover');
            sendContainer.classList.remove('contact__form-valid');
        }, 2000);
    } else {
        sendButton.classList.add('send-invalid', 'no-hover'); 
        sendContainer.classList.add('contact__form-invalid');  

        setTimeout(() => {
            sendButton.classList.remove('send-invalid', 'no-hover');
            sendContainer.classList.remove('contact__form-invalid');
        }, 2000);
    }
});