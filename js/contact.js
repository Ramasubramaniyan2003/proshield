class ContactCustomer {
    constructor() {
        emailjs.init("WRZ_Bg0EBwWJlj2tJ");
        this.eventListeners();
    }

    sendMail(formData) {
        emailjs.send("service_hhiz2lh", "template_qmhwukk", formData)
            .then(function(response) {
                console.log("SUCCESS!", response.status, response.text);
                document.getElementById("msgSubmit").innerHTML = "✅ Message Sent!";
            }, function(error) {
                console.log("FAILED...", error);
                document.getElementById("msgSubmit").innerHTML = "❌ Failed to send. Try again.";
            });
    }

    eventListeners() {
        const form = document.getElementById("contactForm");

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            console.log('called1')
            // Collect form values
            const formData = {
                fname: document.getElementById("fname").value,
                lname: document.getElementById("lname").value,
                phone: document.getElementById("phone").value,
                email: document.getElementById("email").value,
                message: document.getElementById("message").value
            };

            if(!formData?.fname || formData?.fname?.length == 0 ) return;
            if(!formData?.lname || formData?.lname?.length == 0 ) return;
            if(!formData?.phone || formData?.phone?.length == 0 ) return;
            if(!formData?.email || formData?.email?.length == 0 ) return;
            if(!formData?.message || formData?.message?.length == 0 ) return;


            this.sendMail(formData);
            console.log('called')
        });
    }
}

const contactCustomer = new ContactCustomer();
