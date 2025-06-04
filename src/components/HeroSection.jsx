import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

function HeroSection(){
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                I am ijaz <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">{" "} full stack <br/>developer</span>
            </h1>
            <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">With 7+ years of experience in PHP and Laravel, I have successfully developed platforms like carz.sa, savvysmis.com, and other custom web applications.</p>
            <div className="flex justify-center my-10">
                <button className="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 mx-3 rounded-md">Contact Now</button>
                <button className="py-3 px-4 rounded-md border mx-3">Meeting</button>
            </div>
            <div className="flex mt-10 justify-center space-x-6">
                <video autoPlay muted loop className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400">
                    <source src={video1} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
                <video autoPlay muted loop className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400">
                    <source src={video2} type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>
            </div>
        </div>
    );
}

export default HeroSection;