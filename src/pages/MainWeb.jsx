import { useState, useEffect } from "react";
import bgImage from "../assets/images/IT_Code_image.jpg";
import About from "./About";
import Home from "./Home"
import Skills from "./Skills";
import { GiBeamsAura } from "react-icons/gi";
import { SiSimplenote } from "react-icons/si";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import { Button, Modal,message } from 'antd';
import axios from 'axios';
import picNobg from "../assets/images/myPic_skinwhite_removebg.png"
import { FaBars, FaTimes } from "react-icons/fa";

const defaultStyles = {
    root: {
        backgroundColor: '#f6ffed',
        border: '2px solid #95de64',
        borderRadius: 16,
        boxShadow: '4px 4px 0 #d9f7be',
    },
    icon: {
        color: '#237804',
    },
    title: {
        color: '#237804',
        fontWeight: 600,
    },
    };
    const stylesFn = ({ props }) => {
    if (props.type === 'error') {
        return {
        root: {
            ...defaultStyles.root,
            backgroundColor: '#fff2f0',
            borderColor: '#ffccc7',
            boxShadow: '4px 4px 0 #ffccc7',
        },
        icon: {
            color: '#cf1322',
        },
        title: {
            color: '#cf1322',
            fontWeight: 600,
        },
        };
    }
    return defaultStyles;
    };

function App() {
    const [active, setActive] = useState(false);
    const [openResponsive, setOpenResponsive] = useState(false);
    const [now, setNow] = useState(new Date());
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
        setActive(true);
        }, 5000);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
        setNow(new Date());
        }, 10);

        return () => clearInterval(timer);
    }, []);

    const khmerDays = [
        "អាទិត្យ",
        "ច័ន្ទ",
        "អង្គារ",
        "ពុធ",
        "ព្រហស្បតិ៍",
        "សុក្រ",
        "សៅរ៍"
    ];

    const khmerMonths = [
        "មករា",
        "កុម្ភៈ",
        "មីនា",
        "មេសា",
        "ឧសភា",
        "មិថុនា",
        "កក្កដា",
        "សីហា",
        "កញ្ញា",
        "តុលា",
        "វិច្ឆិកា",
        "ធ្នូ"
    ];

    const dayName = khmerDays[now.getDay()];
    const monthName = khmerMonths[now.getMonth()];
    const dayNumber = now.getDate();
    const year = now.getFullYear();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const ClickHireMe = ()=>{
        window.open("https://t.me/+855965668263","_blank");
    }
    const showModalResponsive = () => {
        setOpenResponsive(true);
    };
    const handleOkResponsive = () => {
        setOpenResponsive(false);
    };
    const handleCancelResponsive = () => {
        setOpenResponsive(false);
        setFormData({
            name: "",
            title: "",
            phone: "",
            email: "",
            description: "",
        });
    };
    const [formData, setFormData] = useState({
        name: "",
        title: "",
        phone: "",
        email: "",
        description: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async () => {
        try {
            const response = await axios.post("http://localhost:3000/api/advices",formData);
            const data = await response.data;
                setFormData({
                    name: "",
                    title: "",
                    phone: "",
                    email: "",
                    description: "",
                });
                showObjectStyle();
                setOpenResponsive(false);
        } catch (error) {
            console.error(error);
            showFunctionStyle();
        }
    };
    const [messageApi, contextHolder] = message.useMessage();
    const showObjectStyle = () => {
        messageApi.open({
        type: 'success',
        content: 'Submitted successfully!',
        styles: defaultStyles,
        });
    };
    const showFunctionStyle = () => {
        messageApi.open({
        type: 'error',
        content: 'Sending failed. Please try again.',
        styles: stylesFn,
        });
    };
    return (
        <div className="font-sans scroll-smooth">
            {contextHolder}
            <header className="fixed top-2 w-full h-16 rounded-2xl p-2 z-50">
            <div className="absolute inset-0 animated-border rounded-lg">
                <div className="relative h-full bg-black/30 backdrop-blur-md rounded-lg flex items-center px-4 text-white justify-between">

                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <span className="text-2xl md:text-3xl xl:text-6xl">
                            <GiBeamsAura />
                        </span>
                        <h1 className="text-lg md:text-2xl xl:text-3xl font-bold">
                            AURA
                        </h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex uppercase text-sm md:text-lg xl:text-xl items-center gap-5">
                        <div className="flex gap-3">
                            <a className="hover:text-blue-600" href="#">Home</a>
                            <a className="hover:text-blue-600" href="#about">About</a>
                            <a className="hover:text-blue-600" href="#education">Education</a>
                            <a className="hover:text-blue-600" href="#skills">Skills</a>
                            <a className="hover:text-blue-600" href="#contact">Contact</a>
                        </div>

                        <div className="moving-border inline-block rounded-md hover:scale-105 transition">
                            <button
                                className="bg-blue-800 text-white px-4 py-2 rounded-md uppercase"
                                onClick={showModalResponsive}
                            >
                                Advice
                            </button>
                        </div>
                    </div>
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>
            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="md:hidden mt-15 mr-0 ml-[60%] bg-black/40 backdrop-blur-md rounded-xl p-4 text-white">
                    <div className="flex flex-col gap-4 uppercase text-center">
                        <div className="p-1.5 ml-2 mr-2 hover:bg-gray-400 hover:rounded-xl active:bg-gray-600">
                            <a href="#" onClick={() => setMenuOpen(false)}>Home</a>
                        </div>
                        <div className="p-1.5 ml-2 mr-2 -mt-5 hover:bg-gray-400 hover:rounded-xl active:bg-gray-600">
                            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
                        </div>
                        <div className="p-1.5 ml-2 mr-2 -mt-5 hover:bg-gray-400 hover:rounded-xl active:bg-gray-600">
                            <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
                        </div>
                        <div className="p-1.5 ml-2 mr-2 -mt-5 hover:bg-gray-400 hover:rounded-xl active:bg-gray-600">
                            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
                        </div>
                        <div className="p-1.5 ml-2 mr-2 -mt-5 hover:bg-gray-400 hover:rounded-xl active:bg-gray-600">
                            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                        </div>
                        <button
                            className="bg-blue-400 px-4 py-2 rounded-xl ml-2 mr-2 hover:bg-blue-600 active:bg-blue-800"
                            onClick={showModalResponsive}
                        >
                            Advice
                        </button>
                    </div>
                </div>
            )}
        </header>
            <section
            className="min-h-screen bg-cover bg-center pb-10"
            style={{ backgroundImage: `url(${bgImage})` }}
            >
            <div
                className="
                fixed top-24 right-2 md:right-4
                w-[50%] sm:w-[10%] md:w-[40%] lg:w-[25%]
                overflow-hidden bg-black/10 backdrop-blur-md
                rounded-lg px-2 z-40
                "
            >
                <h2 className="marquee text-sm md:text-lg lg:text-2xl text-red-500 whitespace-nowrap">
                ថ្ងៃ {dayName} ទី{dayNumber} ខែ {monthName} ឆ្នាំ {year}
                ម៉ោង {hours}:{minutes}:{seconds} វិនាទី
                </h2>
            </div>
            <h1
                className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl
                font-bold text-center pt-24 md:pt-30 uppercase
                drop-shadow-text mb-10 md:mb-20 ${
                active ? "animate-color" : "typewriter"
                }`}
            >
                Welcome to My Website
            </h1>
            <div
                className="
                bg-white/10
                backdrop-blur-md
                shadow-lg
                rounded-2xl
                w-[90%]
                md:w-[85%]
                lg:w-[80%]
                mx-auto
                p-0
                z-30
                "
            >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="flex justify-center">
                    <img
                    className="
                        w-[180px]
                        sm:w-[250px]
                        md:w-[320px]
                        lg:w-[420px]
                        xl:w-[500px]
                        h-auto
                    "
                    src={picNobg}
                    alt="Profile"
                    />
                </div>
                <div className="text-gray-300 text-center lg:text-left">

                    <h1 className="uppercase text-2xl md:text-3xl lg:text-4xl font-semibold">
                    Hi, I'm
                    </h1>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2">
                    ROTHNA SEAB
                    </h2>

                    <p className="flex justify-center lg:justify-start items-center gap-2 mt-4 text-lg md:text-xl">
                    <span className="text-red-500">
                        <SiSimplenote />
                    </span>
                    Full Stack Web Developer
                    </p>

                    <p className="mt-4 text-sm md:text-lg leading-relaxed">
                    I build modern websites using React, Laravel, and PostgreSQL.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

                    <button
                        className="
                        moving-border
                        bg-blue-800
                        text-white
                        px-6
                        py-3
                        ml-3
                        mr-3
                        rounded-md
                        hover:scale-102
                        transition
                        "
                    >
                        Learn More
                    </button>

                    <button
                        onClick={ClickHireMe}
                        className="
                        moving-border
                        bg-blue-800
                        text-white
                        px-6
                        py-3
                        ml-3
                        mr-3
                        rounded-md
                        hover:scale-102
                        transition
                        "
                    >
                        Hire Me
                    </button>

                    </div>
                </div>

                </div>
            </div>
            </section>
            <section className="bg-gray-700" id="about">
                <About />
            </section>
            <section className=" bg-gray-700 " id="education">
                <Education />
            </section>
            <section className="bg-gray-700" id="skills">
                <Skills />
            </section>
            <section className="bg-gray-700 pb-10" id="contact">
                <Contact />
            </section>
            <Footer />

            {/* =================Modal ======================= */}
            <Modal
                title={
                    <h2 className="text-start uppercase text-2xl font-bold text-blue-600">
                        Give me some advices
                    </h2>
                }
                centered
                open={openResponsive}
                onOk={handleSubmit}
                onCancel={handleCancelResponsive}
                width={1000}
            >
                <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4">
                    <div>
                        <label className="font-medium">Your Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border-none bg-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="font-medium">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={formData.title}
                            onChange={handleChange}
                            className="w-full border-none bg-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="Enter your title"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Phone</label>
                        <input
                            type="text"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border-none bg-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="Enter your phone"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full border-none bg-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="font-medium">Description</label>
                        <textarea
                            rows="4"
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            className="w-full border-none bg-gray-300 rounded-lg p-2 mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                            placeholder="Write your advice here..."
                        />
                    </div>
                </div>
            </Modal>
        </div>
    );
}

export default App;