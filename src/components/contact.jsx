/*
Assignment1
Allen Pader
300593768
05/20/24
*/

import './contact.css';

export default function ContactPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const formData = {
            firstName: event.target.firstName.value,
            lastName: event.target.lastName.value,
            contactNumber: event.target.contactNumber.value,
            email: event.target.email.value,
            message: event.target.message.value
        };
        
        console.log(formData);
        window.location.href = '/';
    };

    return (
        <div>
            <h2><u>Contact</u></h2>
            <div>
                <p>Allen Pader</p>
                <p>Call Me: 416-289-5000</p>
                <p>Email apader@my.centennialcollege.ca</p>
            </div>
           
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Leave me a message</legend>
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" name="firstName" required />

                    <label htmlFor="lastName">Last Name:</label>
                    <input type="text" id="lastName" name="lastName" required />

                    <label htmlFor="contactNumber">Contact Number:</label>
                    <input type="tel" id="contactNumber" name="contactNumber" required />

                    <label htmlFor="email">Email Address:</label>
                    <input type="email" id="email" name="email" required />

                    <label htmlFor="message">Message:</label>
                    <textarea id="message" name="message" rows="5" required></textarea> {/* Added rows="5" to make it bigger */}

                    <button type="submit">Submit</button>
                </fieldset>
            </form>
        </div>
    );
}
