document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); 


        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let isValid = true;

        if (!name) {
            alert('Please enter your name.');
            isValid = false;
        }

        if (!email) {
            alert('Please enter your email address.');
            isValid = false;
        } else if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            isValid = false;
        }

        if (!message) {
            alert('Please enter a message.');
            isValid = false;
        }

        if (isValid) {
            alert('Thank you for your message!');
            this.reset(); 
        }
    });




