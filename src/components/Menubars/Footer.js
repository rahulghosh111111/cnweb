import React from "react";
import {
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";
import { AnimatedTooltipPreview } from "../Landing/Contribution";

const Footer = () => {
  // Store content in arrays for easier management
  const quickLinks = [
    { title: "About", url: "/about" },
    { title: "Home", url: "/" },
    { title: "Members", url: "/members" },
    { title: "Events", url: "/events" },
  ];

  const contactInfo = [
    { title: "Email", value: "queries.codingninjaskiitchapter@gmail.com", icon: <Mail size={16} /> },
    { title: "KIIT UNIVERSITY", value: "", icon: <MapPin size={16} /> },
    { title: "BHUBANESHWAR - 751024", value: "" },
    { title: "ODISHA, INDIA", value: "" },
  ];

  const socialLinks = [
    { icon: <Instagram size={20} strokeWidth={2} />, url: "#" },
    { icon: <Twitter size={20} strokeWidth={2} />, url: "#" },
    { icon: <Linkedin size={20} strokeWidth={2} />, url: "#" },
  ];

  return (
    <footer className="relative w-full bg-gradient-to-b from-[#DC8068] via-[#C2463C] to-[#8D0E0E] text-white pt-6 sm:px-[5%] px-0 overflow-hidden min-h-[600px] shadow-lg">
      <div className="flex flex-wrap justify-between md:justify-center lg:gap-16 relative z-10 pb-[120px] max-w-7xl mx-auto">
        <div className="flex-1 min-w-[280px] sm:mr-8 lg:mb-8 p-6 rounded-lg">
          <h2 className="text-[clamp(1.8rem,4vw,2.5rem)] mb-6 font-bold text-white">
            Unleash Your Questions
            <br />
            Like a Ninja!
          </h2>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="flex justify-center items-center w-10 h-10 rounded-full bg-white/20 text-white transition-all duration-200 hover:bg-white/30"
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="flex sm:gap-12 gap-6 flex-wrap p-6 rounded-lg">
          <div className="min-w-[180px] sm:mb-6">
            <h3 className="text-xl mb-4 font-bold">QUICK LINKS</h3>
            <ul className="list-none p-0 m-0">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <a
                    href={link.url}
                    className="text-white no-underline hover:underline"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-[180px] sm:mb-6">
            <h3 className="text-xl mb-4 font-bold">CONTACT US</h3>
            <ul className="list-none p-0 m-0">
              {contactInfo.map((item, index) => (
                <li key={index} className="mb-2 flex items-center gap-2">
                  {item.icon && (
                    <span className="inline-flex">{item.icon}</span>
                  )}
                  <span>
                    {item.title} {item.value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full z-10">
        <Image
          width={2000}
          height={1000}
          src="/FooterImg.png"
          alt="Ninja characters"
          className="sm:w-full w-auto h-[130px] sm:h-auto block"
        />
      </div>
        <div className="absolute -mt-12 lg:mt-14 xl:mt-28 w-full left-0 z-[500] flex justify-center items-end ">
        <AnimatedTooltipPreview />
      </div>
    </footer>
  );
};

export default Footer;
