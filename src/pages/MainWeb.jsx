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
            const response = await axios.post("http://localhost:8000/api/advices",formData);
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
            <header className=" fixed top-2 w-full h-16 rounded-2xl p-2 overflow-hidden z-50 ">
                {/* Animated Border */}
                <div className="absolute inset-0 animated-border rounded-lg">
                    <div className="relative h-full bg-black/30 backdrop-blur-md rounded-lg flex items-center px-4 text-white justify-between">
                        <div className="flex justify-center items-center gap-2">
                            <span className="md:text-3xl xl:text-6xl sm:text-2xl"><GiBeamsAura /></span>
                            <h1 className="md:text-2xl xl:text-3xl sm:text-lg font-bold">AURA</h1>
                        </div>
                        <div className="uppercase text-sm sm:text-base md:text-lg  xl:text-xl flex justify-center items-center gap-5">
                            <div className=" flex gap-3">
                                <a className="hover:text-blue-600" href="#">Home</a>
                                <a className="hover:text-blue-600" href="#about">ABOUT</a>
                                <a className="hover:text-blue-600" href="#education">education</a>
                                <a className="hover:text-blue-600" href="#skills">skills</a>
                                <a className="hover:text-blue-600" href="#contact">contact</a>
                            </div>
                            <div className="moving-border inline-block rounded-md  hover:scale-105 transition">
                                <button className="bg-blue-800 text-white px-4 py-2 rounded-md uppercase text-lg" onClick={showModalResponsive}>
                                    advice
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <section
                className="h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="fixed top-26 right-4 w-[18%] overflow-hidden bg-black/10 backdrop-blur-md rounded-lg px-2 z-40">
                    <h2 className="marquee text-2xl text-red-400 whitespace-nowrap">
                        ថ្ងៃ {dayName} ទី{dayNumber} ខែ {monthName} ឆ្នាំ {year} ម៉ោង {hours}:{minutes}:{seconds} វិនាទី
                    </h2>
                </div>
                <h1 className={`text-5xl font-bold text-center pt-30 uppercase drop-shadow-text mb-30 ${
                    active ? "animate-color" : "typewriter"
                    }`}>Welcome to My website</h1>
                <div className=" bg-white/10 backdrop-blur-md shadow-lg rounded-2xl w-[70%] ml-[15%] h-90 sticky z-30 grid grid-cols-2 gap-4">
                    <img
                        className="absolute z-50 w-100 -mt-20"
                        src="src/assets/images/myPic_skinwhite_removebg.png"
                        alt=""
                    />
                    <div className="absolute text-2xl ml-150 mt-10 text-gray-300">
                        <p className="uppercase text-4xl font-semibold">Hi, I'm <p className="text-gray-300">ROTHNA SEAB</p></p>
                        <p className="ml-10 flex gap-2 items-center"><span className="text-red-500"><SiSimplenote /></span>Full Stack Web Developer </p>
                        <p className="focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-opacity-50">I build modern websites using React, Laravel, and PostgreSQL.</p>
                        <div className="gap-4 flex mt-10">
                            <div className="moving-border inline-block rounded-md  hover:scale-105 transition">
                                <button className="bg-blue-800 text-white px-4 py-2 rounded-md text-lg capitalize">learn more</button>
                            </div>
                            <div className="moving-border inline-block rounded-md  hover:scale-105 transition">
                                <button onClick={ClickHireMe} className="bg-blue-800 text-white px-4 py-2 rounded-md text-lg capitalize">hire me</button>
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