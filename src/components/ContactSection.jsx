import { useState } from 'react';
import '../styles/ContactSection.css'

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData); // Replace this with actual logic to handle data submitted
    };

    return (
        <section id='sectionThree'>
            <div className='contact-container'>
                <h2>Contact Me</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder=""
                            required
                            />
                            <label htmlFor="name">Name *</label>
                        </div>
                        
                        <div className="form-group">
                            <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder=""
                            required
                            />
                            <label htmlFor="email">Email *</label>
                        </div>
                        
                        <div className="form-group">
                            <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder=""
                            required
                            ></textarea>
                            <label htmlFor="message">Message *</label>
                        </div>
        
                    <button type="submit"><span>S</span><span>e</span><span>n</span><span>d</span>&nbsp;<span>M</span><span>e</span><span>s</span><span>s</span><span>a</span><span>g</span><span>e</span></button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;