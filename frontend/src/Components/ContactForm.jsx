import DOMPurify from 'dompurify';
import { useState } from 'react';

const ContactForm = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [consentChecked, setConsentChecked] = useState(false);
    const [marketingChecked, setMarketingChecked] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsSubmitting(true);

        if (!consentChecked) {
            setError('You must agree to the data processing policy.');
            setIsSubmitting(false);
            return;
        }

        // Sanitize inputs
        const formData = new FormData(e.target);
        const sanitizedData = {
            name: DOMPurify.sanitize(formData.get('name')),
            email: DOMPurify.sanitize(formData.get('email')),
            phone: DOMPurify.sanitize(formData.get('phone')),
            message: DOMPurify.sanitize(formData.get('message')),
            preferredContactMethod: DOMPurify.sanitize(formData.get('preferredContactMethod')),
            consent: true,
            marketing: marketingChecked,
        };

        // Validate phone number length
        const phone = sanitizedData.phone.replace(/[^0-9]/g, '');
        if (phone.length !== 10) {
            setError('Phone number must be exactly 10 digits.');
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sanitizedData),
            });

            if (response.ok) {
                setFormSubmitted(true);
            } else {
                setError('Failed to send message.');
            }
        } catch {
            setError('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
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
                {isSubmitting && <div className="spinner border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>}
                {error && <div className="text-red-500">{error}</div>}
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    className="border border-gray-300 rounded p-2 w-full max-w-md"
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="border border-gray-300 rounded p-2 w-full max-w-md"
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="border border-gray-300 rounded p-2 w-full max-w-md"
                    required
                    onInput={(e) => {
                        let value = e.target.value.replace(/[^0-9]/g, '');
                        if (value.length > 3 && value.length <= 6) {
                            value = value.slice(0, 3) + '-' + value.slice(3);
                        } else if (value.length > 6) {
                            value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
                        }
                        e.target.value = value;
                    }}
                />
                <select
                    name="preferredContactMethod"
                    className="border border-gray-300 rounded p-2 w-full max-w-md"
                    required
                >
                    <option value="Email">Email</option>
                    <option value="Phone">Phone</option>
                </select>
                <textarea
                    name="message"
                    placeholder="Your Message"
                    className="border border-gray-300 rounded p-2 w-full max-w-md h-32"
                    required
                ></textarea>
                <div className="flex flex-col gap-2 w-full max-w-md">
                    <label className="flex items-start gap-2 relative group">
                        <input
                            type="checkbox"
                            checked={consentChecked}
                            onChange={e => setConsentChecked(e.target.checked)}
                            required
                        />
                        <span className="cursor-pointer underline decoration-dotted">
                            Consent to Contact
                            <span className="absolute left-0 top-6 z-10 hidden group-hover:block bg-gray-800 text-white text-xs rounded p-2 w-72 shadow-lg">
                                I agree to the processing and storage of my data as described below. My information will be sent to Madrigal IT Web Solutions for the purpose of responding to my inquiry. My data will not be sold or shared with third parties except for email delivery.
                            </span>
                        </span>
                    </label>
                    <label className="flex items-start gap-2">
                        <input
                            type="checkbox"
                            checked={marketingChecked}
                            onChange={e => setMarketingChecked(e.target.checked)}
                        />
                        <span>
                            I would like to receive marketing emails about new services and offers from Madrigal IT Web Solutions.
                        </span>
                    </label>
                </div>
                <div className="text-xs text-gray-500 w-full max-w-md mt-2 relative group">
                    <span className="underline decoration-dotted cursor-pointer">
                        How we process your data
                        <span className="absolute left-0 top-5 z-10 hidden group-hover:block bg-gray-800 text-white text-xs rounded p-2 w-80 shadow-lg">
                            When you submit this form, your information is sent to Madrigal IT Web Solutions via email. We use your data only to respond to your inquiry and, if you opt in, to send you marketing emails. Your data is not shared with third parties except for email delivery.
                        </span>
                    </span>
                </div>
                <button type="submit" className="bg-blue-500 text-white rounded p-2" disabled={isSubmitting}>
                    {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;