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
            {/* <h2 className="form-title">Reservation</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" className="form-input" value={formData.name} onChange={handleChange} required />

                <label htmlFor="whatsapp">WhatsApp:</label>
                <input type="tel" id="whatsapp" name="whatsapp" className="form-input" value={formData.whatsapp} onChange={handleChange} required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" className="form-input" value={formData.email} onChange={handleChange} required />

                <label htmlFor="arrival">Arrival flight details:</label>
                <input type="text" id="arrival" name="arrival" className="form-input" value={formData.arrival} onChange={handleChange} />

                <label htmlFor="departure">Departure flight details:</label>
                <input type="text" id="departure" name="departure" className="form-input" value={formData.departure} onChange={handleChange} />

                <button type="submit" className="form-submit">Submit</button>
            </form> */}
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
