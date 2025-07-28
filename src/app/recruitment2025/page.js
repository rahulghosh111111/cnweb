"use client";

import React, { useState } from "react";
import { Toaster, toast } from "react-hot-toast";

const RegistrationForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    RollNo: "",
    Phone: "",
    Year: "",
    Domain: "",
    Email: "",
    GitHubLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbyUxfAXBBs_laW5goqx6qRjyfpbnNov27rAKDFpdm9O1UtiIHVPtZ0zSAZCZLv0TfZRTQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      toast.success("Registration submitted successfully!");
      setFormData({
        Name: "",
        RollNo: "",
        Phone: "",
        Year: "",
        Domain: "",
        Email: "",
        GitHubLink: "",
      });
    } catch (error) {
      toast.error("Error submitting form.");
      console.error("Submission error:", error);
    }

    setIsSubmitting(false);
  };

  return (
    <div
      className="relative min-h-screen flex items-center justify-center bg-[url('/RecruitmentBg.png')] bg-cover bg-[position:center_1px] bg-no-repeat px-4 sm:px-6"
    >
      <img
        src="/CodingNinjas.png"
        alt="Logo"
        className="absolute top-4 left-4 h-auto z-20 w-[190px]"
      />

      {/* Optional overlay for readability */}
      <div className="absolute inset-0 bg-black/10 z-0" />
      <div className="relative z-10 flex flex-col items-center w-full md:max-w-sm max-w-md px-4 sm:px-6 pt-20 ">
        {/* Banner at the top */}
        <img
          src="/Recruitment.png"
          alt="Registration Banner"
          className="w-[190px] h-auto object-contain drop-shadow-lg mb-[-40px]"
        />
        {/* Card */}
        <div className=" bg-white/70 backdrop-blur-md rounded-2xl shadow-xl pt-10 pb-8 px-6 w-full">
          <Toaster />
          <div className="text-center mb-6">
            <h2 className="text-orange-600 font-extrabold text-[18px] tracking-wide uppercase bungee-font">
              Registration Form
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="space-y-2 overflow-y-auto max-h-[75vh] sm:max-h-full">

            {[
              { label: "Name", name: "Name", type: "text" },
              { label: "Roll Number", name: "RollNo", type: "text" },
              { label: "Phone Number", name: "Phone", type: "text" },
              // Removed Year from here to add dropdown below
              // Removed Domain from here to add dropdown below
              { label: "Email", name: "Email", type: "email" },
            ].map((field) => (
              <div key={field.name}>
                <label className="text-sm block font-bold text-gray-700 mt-1 mb-1">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  className="w-full text-black border-b border-gray-400 focus:border-[#ee6220] outline-none px-2 py-1 transition"
                  required
                />
              </div>
            ))}

            {/* Year dropdown */}
            <div>
              <label className="text-sm block font-bold text-gray-700 mt-1 mb-1">
                Year
              </label>
              <select
                name="Year"
                value={formData.Year}
                onChange={handleChange}
                className="w-full text-black border-b border-gray-400 focus:border-[#ee6220] outline-none px-2 py-1 transition"
                required
              >
                <option value="" disabled>
                  Select your year
                </option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
              </select>
            </div>

            {/* Domain dropdown */}
            <div>
              <label className="text-sm block font-bold text-gray-700 mt-1 mb-1">
                Domain
              </label>
              <select
                name="Domain"
                value={formData.Domain}
                onChange={handleChange}
                className="w-full text-black border-b border-gray-400 focus:border-[#ee6220] outline-none px-2 py-1 transition"
                required
              >
                <option value="" disabled>
                  Select your domain
                </option>
                <option value="Admin">Admin</option>
                <option value="Design & Branding">Design & Branding</option>
                <option value="Public Relations">Public Relations</option>
                <option value="Web Development">Web Development</option>
                <option value="Cyber Security">Cyber Security</option>
                <option value="App Development">App Development</option>
                <option value="Social">Social</option>
                <option value="Competitive Programming">Competitive Programming</option>
                <option value="Marketing">Marketing</option>
                <option value="Machine Learning">Machine Learning</option>
              </select>
            </div>

            <div>
              <label className="text-sm block font-bold text-gray-700 mt-1 mb-1">
                GitHub URL
              </label>
              <input
                type="url"
                name="GitHubLink"
                value={formData.GitHubLink}
                onChange={handleChange}
                className="w-full text-black border-b border-gray-400 focus:border-[#ee6220] outline-none px-2 py-1 transition"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-fit px-6 mt-6 py-2 rounded-full bg-gray-900 text-white font-semibold text-sm tracking-wide shadow hover:bg-gray-800 transition block mx-auto"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
