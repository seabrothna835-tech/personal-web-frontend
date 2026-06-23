import React, { useRef, useState } from "react";
import { MdLocationOff, MdPhoneCallback, MdEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";

function Contact() {
    const form = useRef();
    const [status, setStatus] = useState("");

    const contactDetails = [
        { icon: <MdLocationOff />, type: "Location", value: "Phnom Penh, Cambodia" },
        { icon: <MdEmail />, type: "Email", value: "seabrothna835@gmail.com" },
        { icon: <MdPhoneCallback />, type: "Phone", value: "093 444 534" }
    ];

    const sendEmail = (e) => {
        e.preventDefault();
        setStatus("Sending...");

        emailjs.sendForm(
            "service_lf03wy6",
            "template_xfu219c",
            form.current,
            "06iSfigLaq6RGa0SN"
        )
        .then(() => {
            setStatus("Message sent successfully");
            form.current.reset();
        })
        .catch((error) => {
            console.log(error);
            setStatus("Failed to send");
        });
    };

    return (
        <div className="pt-20">
            <p className="uppercase text-3xl text-white font-bold text-center">
                Contact me
            </p>

            <p className="text-white text-center mt-4 ml-[20%] mr-[20%]">
                Thank you for visiting my website. Feel free to contact me.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 mt-10 mr-[20%] ml-[20%] pt-5 bg-gray-800 rounded-lg">

                {/* CONTACT DETAILS */}
                <div className="p-5">
                    <p className="text-2xl text-white font-bold mb-4">
                        Contact details
                    </p>

                    {contactDetails.map((detail, index) => (
                        <div key={index} className="text-white mb-3">
                            <p className="font-bold flex items-center gap-2 text-lg">
                                {detail.icon} {detail.type}:
                            </p>
                            <p className="text-lg ml-6">{detail.value}</p>
                        </div>
                    ))}
                </div>

                {/* FORM */}
                <div className="p-5">
                    <p className="text-2xl text-white font-bold mb-4">
                        Send me a message
                    </p>

                    <form ref={form} className="space-y-4" onSubmit={sendEmail}>

                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            required
                            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            required
                            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Your Message"
                            required
                            className="w-full px-3 py-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button
                            type="submit"
                            className="bg-blue-800 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;