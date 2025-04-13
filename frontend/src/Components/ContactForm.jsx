import DOMPurify from 'dompurify';
import { useEffect, useState } from 'react';

const ContactForm = () => {
    const [csrfToken, setCsrfToken] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false); // State to track submission

    useEffect(() => {
        const fetchCsrfToken = async () => {
            try {
                const response = await fetch('/api/csrf-token');
                const data = await response.json();
                setCsrfToken(data.csrfToken);
            } catch (error) {
                console.error('Error fetching CSRF token:', error);
            }
        };

        fetchCsrfToken();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Show spinner

        // Sanitize inputs
        const formData = new FormData(e.target);
        const sanitizedData = {
            name: DOMPurify.sanitize(formData.get('name')),
            email: DOMPurify.sanitize(formData.get('email')),
            phone: DOMPurify.sanitize(formData.get('phone')),
            message: DOMPurify.sanitize(formData.get('message')),
            preferredContactMethod: DOMPurify.sanitize(formData.get('preferredContactMethod')),
        };

        // Validate phone number length
        const phone = sanitizedData.phone.replace(/[^0-9]/g, '');
        if (phone.length !== 10) {
            alert('Phone number must be exactly 10 digits.');
            setIsSubmitting(false); // Hide spinner
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'CSRF-Token': csrfToken, // Include CSRF token in the headers
                },
                body: JSON.stringify(sanitizedData),
            });

            if (response.ok) {
                setFormSubmitted(true);
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false); // Hide spinner
        }
    };

    if (formSubmitted) {
        return (
            <div className="text-center">
                <p className="text-xl font-bold">Thank you for reaching out! We will contact you soon!</p>
                <button
                    onClick={() => window.location.href = '/'}
                    className="bg-blue-500 text-white rounded p-2 mt-4"
                >
                    Go to Home Page
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center gap-4 p-4">
                {isSubmitting && <div className="spinner border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>} {/* Spinner */}
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="border border-gray-300 rounded p-2 w-full max-w-md"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="border border-gray-300 rounded p-2 w-full max-w-md"
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="123-456-7890"
                    className="border border-gray-300 rounded p-2 w-full max-w-md"
                    onInput={(e) => {
                        let value = e.target.value.replace(/[^0-9]/g, ''); // Remove non-numeric characters
                        if (value.length > 3 && value.length <= 6) {
                            value = value.slice(0, 3) + '-' + value.slice(3); // Add dash after 3 digits
                        } else if (value.length > 6) {
                            value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10); // Add dashes after 3 and 6 digits
                        }
                        e.target.value = value;
                    }}
                />
                <select
                    name="preferredContactMethod"
                    className="border border-gray-300 rounded p-2 w-full max-w-md"
                >
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                </select>
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="border border-gray-300 rounded p-2 w-full max-w-md h-32"
                ></textarea>
                <button type="submit" className="bg-blue-500 text-white rounded p-2" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;