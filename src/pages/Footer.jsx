import React from "react";
import { FaGithub, FaFacebook, FaTelegram, FaEnvelope } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 pt-10">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
            <h1 className="text-2xl font-bold text-white">Seab Rothna</h1>
            <p className="mt-3 text-sm text-gray-400">
                Frontend Developer passionate about building modern web applications
                using React, Tailwind, and JavaScript.
            </p>
            </div>

            {/* Quick Links */}
            <div>
            <h2 className="text-lg font-semibold text-white mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Home</a></li>
                <li><a href="#about" className="hover:text-white">About</a></li>
                <li><a href="#education" className="hover:text-white">Education</a></li>
                <li><a href="#skills" className="hover:text-white">Skills</a></li>
                <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
            </div>

            {/* Contact + Social */}
            <div>
            <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
            
            <p className="text-sm flex items-center gap-2">
                <FaEnvelope /> seabrothna0@gmail.com
            </p>

            <div className="flex gap-4 mt-4 text-xl">
                <a href="https://github.com/" target="_blank" rel="noreferrer"
                className="hover:text-white">
                <FaGithub />
                </a>

                <a href="https://facebook.com/" target="_blank" rel="noreferrer"
                className="hover:text-blue-500">
                <FaFacebook />
                </a>

                <a href="https://t.me/" target="_blank" rel="noreferrer"
                className="hover:text-sky-400">
                <FaTelegram />
                </a>
            </div>
            </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Seab Rothna. All rights reserved.
        </div>
        </footer>
    );
}

export default Footer;