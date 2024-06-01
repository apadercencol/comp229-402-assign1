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
            <p>I'm Allen Pader</p>
            <p>here's how you ca reac me 12312312323</p>
            <p>or email allen@email</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" required />

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" required />

                <label htmlFor="contactNumber">Contact Number:</label>
                <input type="tel" id="contactNumber" name="contactNumber" required />

                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
