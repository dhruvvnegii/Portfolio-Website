import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaPaperPlane, FaSpinner, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();
  const [formStatus, setFormStatus] = useState('idle');
  const [focused, setFocused] = useState(null);
  const [values, setValues] = useState({ name: '', email: '', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();
    setFormStatus('sending');

    emailjs.sendForm(
      'service_2f8gmkv',       // ✅ service ID
      'template_gmawhsk',       // ✅ template ID
      form.current,
      'Ci78OYl8wHesi9Pgi'        // ✅ EmailJS public key
    )
    .then(() => {
      setFormStatus('success');
      form.current.reset();
      setValues({ name: '', email: '', message: '' });
      setTimeout(() => setFormStatus('idle'), 5000);
    })
    .catch((error) => {
      setFormStatus('error');
      console.error(error);
      // Hide error state after 5 seconds
      setTimeout(() => setFormStatus('idle'), 5000);
    });
  };

  return (
    <section id="contact" className="py-24 bg-[#030712] relative overflow-hidden bg-grid-pattern">
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
        <div className="bg-cosmic-glow bg-teal-500 w-[350px] h-[350px] left-[5%] bottom-[10%] animate-pulse-glow" />
        <div className="bg-cosmic-glow bg-purple-600 w-[380px] h-[380px] right-[10%] top-[15%] animate-blob-orbit-1" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16 reveal">
          <span className="text-sm font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-4 py-1.5 rounded-full">
            Get in touch
          </span>
          <h2 className="mt-4 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Contact Me
          </h2>
          <div className="mt-3 w-16 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6 reveal reveal-delay-100">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-teal-400 mb-4">
                Let's Talk
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm open to discussing web development projects, full-time engineering roles, or collaborative partnership opportunities. Drop a line!
              </p>

              {/* Direct Info List */}
              <div className="space-y-6">
                
                {/* Email Card */}
                <a
                  href="mailto:honey.dhruv55@gmail.com"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-indigo-500/20 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 rounded-xl text-xl group-hover:scale-110 transition-transform">
                    <FaEnvelope />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Email Me</p>
                    <p className="text-sm font-semibold text-white group-hover:underline">honey.dhruv55@gmail.com</p>
                  </div>
                </a>

                {/* Phone Card */}
                <a
                  href="tel:+919711165767"
                  className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/20 hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="p-3 bg-purple-500/10 border border-purple-500/20 text-purple-400 rounded-xl text-xl group-hover:scale-110 transition-transform">
                    <FaPhone />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Call Me</p>
                    <p className="text-sm font-semibold text-white group-hover:underline">+91 9711165767</p>
                  </div>
                </a>

                {/* Location Card */}
                <div className="flex items-center space-x-4 p-4 rounded-xl bg-white/5 border border-white/5">
                  <div className="p-3 bg-teal-500/10 border border-teal-500/20 text-teal-400 rounded-xl text-xl">
                    <FaMapMarkedAlt />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium">My Location</p>
                    <p className="text-sm font-semibold text-white">New Delhi, India</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 reveal reveal-delay-200">
            <div className="glass-card p-8 rounded-2xl relative overflow-hidden">
              
              {/* Form header message */}
              <p className="text-sm text-gray-400 mb-6">Required fields are marked *</p>

              <form ref={form} onSubmit={sendEmail} className="space-y-6">
                
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={values.name}
                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                    onFocus={() => setFocused('name')}
                    onBlur={() => setFocused(null)}
                    className="w-full px-4 pt-7 pb-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none text-white transition-colors duration-300"
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-4 transition-all duration-300 origin-left pointer-events-none ${
                      focused === 'name' || values.name
                        ? 'scale-75 top-2 text-indigo-400'
                        : 'scale-100 top-5 text-gray-400'
                    }`}
                  >
                    Your Name *
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={values.email}
                    onChange={(e) => setValues({ ...values, email: e.target.value })}
                    onFocus={() => setFocused('email')}
                    onBlur={() => setFocused(null)}
                    className="w-full px-4 pt-7 pb-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none text-white transition-colors duration-300"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 transition-all duration-300 origin-left pointer-events-none ${
                      focused === 'email' || values.email
                        ? 'scale-75 top-2 text-indigo-400'
                        : 'scale-100 top-5 text-gray-400'
                    }`}
                  >
                    Email Address *
                  </label>
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows="5"
                    value={values.message}
                    onChange={(e) => setValues({ ...values, message: e.target.value })}
                    onFocus={() => setFocused('message')}
                    onBlur={() => setFocused(null)}
                    className="w-full px-4 pt-7 pb-3 rounded-xl bg-white/5 border border-white/10 focus:border-indigo-500 focus:outline-none text-white transition-colors duration-300 resize-none"
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-4 transition-all duration-300 origin-left pointer-events-none ${
                      focused === 'message' || values.message
                        ? 'scale-75 top-2 text-indigo-400'
                        : 'scale-100 top-5 text-gray-400'
                    }`}
                  >
                    Your Message *
                  </label>
                </div>

                {/* Action button & states */}
                <div className="flex flex-col sm:flex-row items-center sm:justify-between gap-4">
                  <button
                    type="submit"
                    disabled={formStatus === 'sending'}
                    className="w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg hover:shadow-indigo-500/20 flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {formStatus === 'sending' ? (
                      <>
                        <FaSpinner className="animate-spin text-lg" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <FaPaperPlane />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Inline Toast Dialogs */}
                  {formStatus === 'success' && (
                    <div className="flex items-center space-x-2 text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-xl text-sm font-semibold">
                      <FaCheckCircle className="text-base" />
                      <span>Message sent successfully!</span>
                    </div>
                  )}

                  {formStatus === 'error' && (
                    <div className="flex items-center space-x-2 text-rose-400 bg-rose-500/10 border border-rose-500/20 px-4 py-2 rounded-xl text-sm font-semibold">
                      <FaExclamationCircle className="text-base" />
                      <span>Failed to send message.</span>
                    </div>
                  )}
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
