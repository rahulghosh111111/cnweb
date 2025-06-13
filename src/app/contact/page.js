"use client";
import React, {useState} from 'react'

function Page() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Add form submission logic here
    // alert('Message sent successfully!');
    setFormData({ name: '', email: '', message: '' });
  };


  return (
    <div className=" min-h-screen bg-gradient-to-b from-[#312D2D] to-red-900 text-white">
      {/* Header */}
      <div className="pb-0 pt-18 flex justify-center item-centre p-8 w-full">
        <h1 className='text-4xl sm:text-[80px] md:text-[100px] text-center justify-center md:text-left font-bold text-red-500/50  mb-4'>CONTACT US</h1>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 pb-16">
        {/* Left Side - Image and Contact Info */}
        <div className="space-y-0">
          {/* Team Image */}
          <div className="relative hidden lg:block  ml-8">
            <img 
              src="\Rectangle 8.png"
              alt="Team collaboration"
              className="w-full h-168 shadow-2xl"
            />
          </div>

          {/* Contact Information */}
        <div className="hidden lg:block p-8 rounded-lg text-white font-sans text-left">
              <h2 className="text-4xl font-extrabold mb-2">Contact</h2>
              <p className="text-lg tracking-wider mb-6">codingninjas@gmail.com</p>
              <div className="mb-8">
                <p className="text-sm text-gray-200">Found Us At</p>
                <p className="text-base font-semibold">KIIT UNIVERSITY</p>
                <p className="text-base font-semibold">ODISHA</p>
              </div>
              <div className="flex space-x-8">
                
                <a href="https://www.instagram.com/cnkiit?igsh=OGxuOXJuOTcwZTNn" className="py-3 hover:text-pink-400">
                  <img 
                  src="\insta-logo.png" 
                  alt="Description of image"
                />
                </a>
                
                <a href="#" className=" py-5 hover:text-blue-400">
                  <img 
                  src="\X.png" 
                  alt="Description of image"
                />
                </a>
                
                <a href="https://www.linkedin.com/company/coding-ninjas-kiit/" className="py-4 hover:text-blue-500">
                  <img 
                  src="\linkedin.png" 
                  alt="Description of image"
                />
                </a>
              </div>
            </div>
        </div>

        {/* Right Side - Contact Form */}
        <div className=" text-left  p-8 border-t-4 border-l-4 border-red-500/50">
          <h3 className="text-2xl font-semibold mb-8 text-white">Send Your Message.</h3>
          
          <div className="space-y-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-lg text-gray-300 mb-3">
                Your name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full  px-4 py-4 bg-[#FFFAC2]/40 border border-gray-600 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-lg text-gray-300 mb-3">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-4 bg-[#FFFAC2]/40 border border-gray-600 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-transparent transition-all duration-300"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label htmlFor="message" className="block text-lg text-gray-300 mb-3">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full h-50 px-4 py-4 bg-[#FFFAC2]/40 border border-gray-600 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-transparent transition-all duration-300 resize-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-red-500/80 hover:bg-red-500 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-800"
              >Send Message</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
