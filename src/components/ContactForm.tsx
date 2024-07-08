// src/components/ContactForm.tsx
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic (e.g., send the data to an API)
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700">Nom</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    required
                />
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded-lg"
                    rows={5}
                    required
                ></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                Envoyer
            </button>
        </form>
    );
};

export default ContactForm;
