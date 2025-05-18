// Help from https://www.youtube.com/watch?v=lRFh7Ep35lc
function sendEmail() {
    const templateParams = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        description: document.querySelector("#description").value,
    }

    emailjs.send("service_jdtp77y", "template_s1hdz2j", templateParams)
    .then(() => {
        alert("Email sent successfully.")
    })
    .catch((error) => {
        console.log("Error sending email: ", error)
        alert("Failed to send email. Please try again.");
    })
}