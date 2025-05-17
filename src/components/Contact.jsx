import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_2f8gmkv',       // ✅ your service ID
      'template_gmawhsk',       // 🔁 replace with your actual template ID
      form.current,
      'Ci78OYl8wHesi9Pgi'        // 🔁 replace with your EmailJS public key
    )
    .then(() => {
      alert('Message sent successfully!');
      form.current.reset();
    })
    .catch((error) => {
      alert('Failed to send message.');
      console.error(error);
    });
  };

  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">Let's Talk</h3>
            <p>I'm open to discussing web development projects or partnership opportunities.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 mr-2" />
              <a href="mailto:honey.dhruv55@gmail.com" className="hover:underline">honey.dhruv55@gmail.com</a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 mr-2" />
              <span>+91 9711165767</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 mr-2" />
              <span>New Delhi, India</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2">Your Name</label>
                <input type="text" name="name" required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input type="email" name="email" required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email" />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea name="message" required
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Enter Your Message" />
              </div>
              <button type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
