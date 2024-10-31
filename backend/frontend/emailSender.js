const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form data
    const formData = new FormData(form);
    const name = formData.get("name");
    const email = formData.get("email");
    const address = formData.get("address");
    const phone = formData.get("phone");
    const message = formData.get("message");

    // Compose email using SMTP.js (smtpjs.com)
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "YOUR_EMAIL_USERNAME", // Replace with your email username
        Password: "YOUR_EMAIL_PASSWORD", // Replace with your email password
        To: 'recipient@example.com', // Replace with recipient email address
        From: email,
        Subject: `Message from ${name} via Contact Form`,
        Body: `
            Name: ${name}
            Email: ${email}
            Address: ${address}
            Phone: ${phone}
            
            Message:
            ${message}
        `,
    }).then(function (message) {
        alert("Message sent successfully");
        form.reset(); // Optional: Clear form inputs after successful submission
    }).catch(function (error) {
        console.error(error.message);
        alert("Message not sent. Please try again later.");
    });
});