function About() {
    const viewFacebook = ()=>{
        window.open("https://www.facebook.com/?ref=homescreenpwa","_blank")
    }
    const viewTelegram = ()=>{
        window.open("https://t.me/+855965668263","_blank")
    }
    const viewInstagram = ()=>{
        window.open("https://t.me/+855965668263","_blank")
    }
    const viewTiktok = ()=>{
        window.open("https://www.tiktok.com/en/","_blank")
    }

    return (
        <div className="flex flex-col items-center justify-center w-full text-white">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mt-20">
                <div className="w-[40%] rounded-2xl ml-[50%]">
                    <img className="rounded-2xl hover:scale-102 duration-300 hover:animate-pulse" src="src\assets\images\pic_as_developer.png" alt="" />
                    <div className="flex justify-around mt-2 ml-10 mr-10 bg-black/30 backdrop-blur-md p-2 rounded-2xl">
                        <div className="bg-blue-500 rounded-lg p-2 justify-center items-center flex hover:bg-blue-600 hover:scale-105 duration-300"><button onClick={viewFacebook}><img src="src\assets\socail_media\communication.png" alt="" /></button></div>
                        <div className="bg-blue-500 rounded-lg p-2 justify-center items-center flex hover:bg-blue-600 hover:scale-105 duration-300"><button onClick={viewTelegram}><img src="src\assets\socail_media\telegram.png" alt="" /></button></div>
                        <div className="bg-orange-500 rounded-lg p-2 justify-center items-center flex hover:bg-orange-600 hover:scale-105 duration-300"><button onClick={viewInstagram}><img src="src\assets\socail_media\instagram.png" alt="" /></button></div>
                        <div className="bg-gray-900 rounded-lg p-2 justify-center items-center flex hover:bg-black hover:scale-105 duration-300"><button onClick={viewTiktok}><img className="w-6 h-6 rounded-lg" src="src\assets\socail_media\tiktok.png" alt="" /></button></div>
                    </div>
                </div>
                <div className=" w-[50%] mr-40%">
                    <div className="mb-10">
                        <h1 className="uppercase text-center text-3xl font-bold">about me</h1>
                    </div>
                    <h1>I am a person who prefer coding and like to solution of problem so I decided to study IT and 
                        focus on Front-end development and the future I also hope reach back-end ,Database, and try learning networking if I can.
                    </h1>
                    <div className="moving-border inline-block hover:scale-105 duration-300 ml-[30%] mt-5">
                        <a
                            href="/Rothna_web_CV.pdf"
                            download="RothnaCV.pdf"
                        >
                            <button className="text-lg bg-blue-500 px-4 py-2 rounded-lg">
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