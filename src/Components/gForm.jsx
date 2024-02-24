import React, { useState } from 'react';
import '../Assets/Style/gForm.css';

const GForm = () => {
    const googleFormLink = 'https://docs.google.com/forms/d/e/1FAIpQLSeoWVC4_fLTFfQ32DyqMVP3OsAswBkHyeFopjb6KVh52V-q6A/viewform?usp=sf_link/formResponse';

    const [formData, setFormData] = useState({
        name: '',
        whatsapp: '',
        email: '',
        arrival: '',
        departure: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch(googleFormLink, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                // Form submitted successfully
                console.log('Form submitted successfully');
                // You can show a success message or redirect the user to a thank you page here
            } else {
                // Handle error response
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div className="form-container">
            <iframe
        src={googleFormLink}
        title="Reservation Form"
        width="100%"
        height="600"
        frameBorder="0"
        marginHeight="0"
        marginWidth="0"
      >
        Loading...
      </iframe>

        </div>
    );
};

export default GForm;
