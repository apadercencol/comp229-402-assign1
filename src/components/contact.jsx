import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
    // State variables to hold form data
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        contactNumber: '',
        email: '',
        message: ''
    });

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // You can handle form submission logic here
        console.log(formData); // For demonstration, logging form data to console
        // Redirect the user back to the Home Page after form submission
        // You can replace '/' with the path to your Home Page
        window.location.href = '/';
    };

    // Function to handle input field changes
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div>
            <h2><u>Contact</u></h2>
            <p>I'm Allen Pader</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />

                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />

                <label htmlFor="contactNumber">Contact Number:</label>
                <input type="tel" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} required />

                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>

                <button type="submit">Submit</button>
            </form>

            {/* Link to go back to the Home Page */}
            <Link to="/">Go back to Home Page</Link>
        </div>
    );
}
