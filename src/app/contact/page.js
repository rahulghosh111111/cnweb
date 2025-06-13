"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Instagram, Linkedin, Twitter, Send, User, MessageSquare } from 'lucide-react';
import Image from 'next/image';
import { SparklesCore } from '@/ui/sparkles';
import { BackgroundBeams } from '@/ui/background-beams';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="relative min-h-screen lg:pt-14 pt-10 bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="contact-sparkles"
          background="transparent"
          minSize={0.4}
          maxSize={1.2}
          particleColor="#fa5935"
          particleDensity={50}
          speed={0.5}
        />
      </div>
      <BackgroundBeams className="absolute inset-0" />
      
      
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#fa5935]/20 to-transparent blur-[120px]"></div>
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 rounded-full bg-gradient-to-br from-[#FF8820]/20 to-transparent blur-[120px]"></div>

      <div className="relative z-10 min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 
              className="text-5xl sm:text-6xl  font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#fa5935] to-[#FF8820]"
              style={{ fontFamily: "'Gang of Three', Arial, sans-serif" }}
            >
              CONTACT US
            </h1>
            <p className="text-xl text-[#bfbfbd] max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let&apos;s start a conversation.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            
            {/* Left Side - Contact Info & Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Team Image */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#fa5935] to-[#FF8820] rounded-3xl blur opacity-40 group-hover:opacity-60 transition duration-1000"></div>
                <div className="relative bg-[#1a1616] p-4 rounded-3xl">
                  <Image
                    src="/Rectangle 8.png"
                    alt="Team collaboration"
                    width={600}
                    height={400}
                    className="w-full h-64 sm:h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Contact Information Cards */}
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gradient-to-br from-[#1a1616]/90 to-[#0c0c0c]/90 backdrop-blur-xl rounded-2xl p-4 px-6 border border-gray-800/50 hover:border-[#fa5935]/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-gradient-to-r from-[#fa5935] to-[#FF8820] rounded-full">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Email Us</h3>
                      <p className="text-[#bfbfbd]">codingninjas@gmail.com</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="bg-gradient-to-br from-[#1a1616]/90 to-[#0c0c0c]/90 backdrop-blur-xl rounded-2xl p-4 px-6 border border-gray-800/50 hover:border-[#fa5935]/50 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="p-2 bg-gradient-to-r from-[#8d0e0e] to-[#fa5935] rounded-full">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">Visit Us</h3>
                      <p className="text-sm text-[#bfbfbd]">KIIT UNIVERSITY</p>
                      <p className="text-sm text-[#bfbfbd]">ODISHA, INDIA</p>
                    </div>
                  </div>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="bg-gradient-to-br from-[#1a1616]/90 to-[#0c0c0c]/90 backdrop-blur-xl rounded-2xl p-5 border border-gray-800/50"
                >
                  <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/cnkiit?igsh=OGxuOXJuOTcwZTNn"
                      className="group p-3 bg-[#1a1616]/60 rounded-full hover:bg-gradient-to-r hover:from-[#fa5935] hover:to-[#FF8820] transition-all duration-300 transform hover:scale-110 border border-gray-700/50 hover:border-[#fa5935]/50"
                    >
                      <Instagram className="w-6 h-6 text-white group-hover:animate-pulse" />
                    </a>
                    <a 
                      href="https://www.linkedin.com/company/coding-ninjas-kiit/"
                      className="group p-3 bg-[#1a1616]/60 rounded-full hover:bg-gradient-to-r hover:from-[#8d0e0e] hover:to-[#fa5935] transition-all duration-300 transform hover:scale-110 border border-gray-700/50 hover:border-[#8d0e0e]/50"
                    >
                      <Linkedin className="w-6 h-6 text-white group-hover:animate-pulse" />
                    </a>
                    <a 
                      href="#"
                      className="group p-3 bg-[#1a1616]/60 rounded-full hover:bg-gradient-to-r hover:from-gray-700 hover:to-[#8d0e0e] transition-all duration-300 transform hover:scale-110 border border-gray-700/50 hover:border-gray-400/50"
                    >
                      <Twitter className="w-6 h-6 text-white group-hover:animate-pulse" />
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#fa5935] to-[#FF8820] rounded-3xl blur opacity-20"></div>
              <div className="relative bg-gradient-to-br from-[#1a1616]/95 to-[#0c0c0c]/95 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-gray-800/50">
                
                <h2 className="text-3xl font-bold text-white mb-2">Send Your Message</h2>
                <p className="text-[#bfbfbd] mb-8">We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.</p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name Field */}
                  <motion.div
                    // initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <label htmlFor="name" className="block text-lg text-white mb-3 font-medium">
                      Your Name
                    </label>
                    <div className="flex items-center space-x-2">
                      <div className="p-3 bg-gradient-to-r from-[#fa5935] to-[#FF8820] rounded-xl">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-4 bg-[#0d0d0d]/60 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fa5935]/50 focus:border-[#fa5935]/50 transition-all duration-300"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                  </motion.div>

                  {/* Email Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <label htmlFor="email" className="block text-lg text-white mb-3 font-medium">
                      Your Email
                    </label>
                    <div className="flex items-center space-x-2">
                      <div className="p-3 bg-gradient-to-r from-[#fa5935] to-[#FF8820] rounded-xl">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="flex-1 px-4 py-4 bg-[#0d0d0d]/60 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fa5935]/50 focus:border-[#fa5935]/50 transition-all duration-300"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                  </motion.div>

                  {/* Message Field */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <label htmlFor="message" className="block text-lg text-white mb-3 font-medium">
                      Your Message
                    </label>
                    <div className="flex items-start space-x-2">
                      <div className="p-3 bg-gradient-to-r from-[#fa5935] to-[#FF8820] rounded-xl">
                        <MessageSquare className="w-5 h-5 text-white" />
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={6}
                        className="flex-1 px-4 py-4 bg-[#0d0d0d]/60 backdrop-blur-sm border border-gray-700/50 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#fa5935]/50 focus:border-[#fa5935]/50 transition-all duration-300 resize-none"
                        placeholder="Tell us about your project or inquiry..."
                        required
                      />
                    </div>
                  </motion.div>

                  {/* Submit Button */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                  >
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group relative w-full overflow-hidden bg-gradient-to-r from-[#fa5935] to-[#FF8820] hover:from-[#FF8820] hover:to-[#fa5935] text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-[#fa5935]/50 focus:ring-offset-2 focus:ring-offset-gray-800 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-[#fa5935]/25"
                    >
                      <span className="relative z-10 flex items-center justify-center space-x-2">
                        {isSubmitting ? (
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        ) : (
                          <>
                            <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                            <span>Send Message</span>
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-[#FF8820] to-[#fa5935] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </motion.div>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom gradient line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8d0e0e] via-[#fa5935] to-[#FF8820]"></div>
    </div>
  );
}
