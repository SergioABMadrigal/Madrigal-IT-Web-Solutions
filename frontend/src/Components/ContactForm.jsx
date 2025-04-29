import DOMPurify from 'dompurify';

const ContactForm = () => {
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Sanitize inputs
        const formData = new FormData(e.target);
        const sanitizedData = {
            name: DOMPurify.sanitize(formData.get('name')),
            email: DOMPurify.sanitize(formData.get('email')),
            phone: DOMPurify.sanitize(formData.get('phone')),
            message: DOMPurify.sanitize(formData.get('message')),
            preferredContactMethod: DOMPurify.sanitize(formData.get('preferredContactMethod')),
        };

        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(sanitizedData),
            });

            if (response.ok) {
                alert('Message sent successfully!');
            } else {
                alert('Failed to send message.');
            }
        } catch (error) {
            console.error('Error sending message:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col items-center justify-center gap-4 p-4">
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
                    placeholder="Your Phone Number"
                    className="border border-gray-300 rounded p-2 w-full max-w-md"
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
                <button type="submit" className="bg-blue-500 text-white rounded p-2">
                    Send Message
                </button>
            </div>
        </form>
    );
};

export default ContactForm;