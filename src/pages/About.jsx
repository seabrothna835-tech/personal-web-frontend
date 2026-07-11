import picDeveloper from "../assets/images/pic_as_developer.png"
import faceBook from "../assets/socail_media/communication.png"
import tiktok from "../assets/socail_media/tiktok.png"
import instagram from "../assets/socail_media/instagram.png"
import telegram from "../assets/socail_media/telegram.png"

function About() {
    const viewFacebook = ()=>{
        window.open("https://www.facebook.com/share/1HSNovuqV2/","_blank")
    }
    const viewTelegram = ()=>{
        window.open("https://t.me/+855965668263","_blank")
    }
    const viewInstagram = ()=>{
        window.open("https://www.instagram.com/aura449260?igsh=d2U5dHZoaTZzZzZ4","_blank")
    }
    const viewTiktok = ()=>{
        window.open("tiktok.com/@ahnold30","_blank")
    }
    return (
        <div className="w-full text-white px-4 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-7xl mx-auto">
                {/* Left Side */}
                <div className="flex flex-col items-center">
                    <img
                        src={picDeveloper}
                        alt=""
                        className="w-full max-w-[300px] h-auto rounded-2xl hover:scale-102 duration-300 hover:animate-pulse"
                    />
                    <div className="flex justify-center gap-4 mt-4 bg-black/30 backdrop-blur-md p-3 rounded-2xl">
                        <div className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600 hover:scale-105 duration-300">
                            <button onClick={viewFacebook}>
                                <img src={faceBook} alt="Facebook" />
                            </button>
                        </div>
                        <div className="bg-blue-500 p-2 rounded-lg hover:bg-blue-600 hover:scale-105 duration-300">
                            <button onClick={viewTelegram}>
                                <img src={telegram} alt="Telegram" />
                            </button>
                        </div>
                        <div className="bg-orange-500 p-2 rounded-lg hover:bg-orange-600 hover:scale-105 duration-300">
                            <button onClick={viewInstagram}>
                                <img src={instagram} alt="Instagram" />
                            </button>
                        </div>
                        <div className="bg-gray-900 p-2 rounded-lg hover:bg-black hover:scale-105 duration-300">
                            <button onClick={viewTiktok}>
                                <img className="w-6 h-6 rounded-lg" src={tiktok} alt="TikTok" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className="w-full text-center lg:text-left">
                    <h1 className="uppercase text-3xl md:text-4xl font-bold mb-8">
                        About Me
                    </h1>
                    <p className="text-base md:text-lg leading-8 text-gray-200">
                        I am a person who prefers coding and enjoys solving problems,
                        so I decided to study Information Technology and focus on
                        Front-End Development. In the future, I hope to become a
                        Full Stack Developer, improve my Database skills, and learn
                        Networking as well.
                    </p>
                    <div className="mt-8 flex justify-center lg:justify-start">
                        <a
                            href="/Rothna_CV.pdf"
                            download="RothnaCV.pdf"
                        >
                            <button className="moving-border bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-lg hover:scale-105 duration-300">
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;