document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // For now, just log the input values to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    alert('Thank you for your message! We will get back to you soon.');

    // Clear the form
    this.reset();
});
