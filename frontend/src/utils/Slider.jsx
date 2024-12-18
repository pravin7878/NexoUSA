import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/navigation';

// bg images
import slide1 from "../assets/img/slide1.jpg";
import slide2 from "../assets/img/slide2.jpg";
import slide3 from "../assets/img/slide3.jpg";
import slide4 from "../assets/img/slide4.jpg";
import slide5 from "../assets/img/slide5.jpg";

export const Slider = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <Swiper
            className="flex"
            speed={800}
            loop={true}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
        >
            {/* slide 1 */}
            <SwiperSlide>
                <div
                    className="relative h-[200px] md:h-[500px] w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide1})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-75"></div>

                    {/* Content: Image on the left, Text on the right */}
                    <div className="relative z-10 flex justify-between h-full items-center md:px-8">
                        {/* Image on the Left */}
                        <div className={`w-[45%] md:w-[50%] flex justify-center items-center mt-20 ${activeIndex === 0  ? 'animate-scaleUp' : ""}`}>
                            <img
                                src="https://www.nexoindia.com/wp-content/uploads/2017/09/wind-mill.png"
                                alt="Wind Mill"
                                className="max-w-full h-auto"
                            />
                        </div>

                        {/* Text Content on the Bottom Right */}
                        <div className={`w-[55%] md:w-[50%] flex flex-col items-end justify-end text-right text-yellow-500 font-bold pt-20 md:pt-40 pr-1 ${activeIndex === 0 ? 'animate-slideInRight' : ""}`}>
                            <p className="text-[8px] w-full md:text-lg">NEXO FASTENERS IS BEST FOR YOUR INDUSTRIES.</p>
                            <h3 className="text-[12px] md:text-4xl mt-2 w-full">FOR WIND MILL & REFINERY</h3>
                            <button className="text-[8px] md:text-md mt-2 md:mt-4  px-1 py-1 md:px-6 md:py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
                                MORE INFO
                            </button>
                        </div>
                    </div>
                    <div className="relative z-10 flex justify-between h-full items-center md:px-8">
                        {/* Image on the Left */}

                        {/* <div className="w-[45%] md:w-[50%] flex justify-center items-center mt-20">
                            <img
                                src="https://www.nexoindia.com/wp-content/uploads/2017/09/wind-mill.png"
                                alt="Wind Mill"
                                className="max-w-full h-auto animate-scaleUp"
                            />
                        </div> */}

                        <div className="relative z-10 flex justify-between h-full items-center md:px-8">
                            {/* Image on the Left */}
                            <div className="w-[45%] md:w-[50%] flex justify-center items-center mt-20 animate-scaleUp">
                                <img
                                    src="https://www.nexoindia.com/wp-content/uploads/2017/09/wind-mill.png"
                                    alt="Wind Mill"
                                    className="max-w-full h-auto "
                                />
                            </div>

                            {/* Text Content on the Bottom Right */}
                            <div className="w-[55%] md:w-[50%] flex flex-col items-end justify-end text-right text-yellow-500 font-bold pt-20 md:pt-40 pr-1 animate-slideInRight">
                                <p className="text-[8px] w-full md:text-lg">NEXO FASTENERS IS BEST FOR YOUR INDUSTRIES.</p>
                                <h3 className="text-[12px] md:text-4xl mt-2 w-full">FOR WIND MILL & REFINERY</h3>
                                <button className="text-[8px] md:text-md mt-2 md:mt-4 px-1 py-1 md:px-6 md:py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
                                    MORE INFO
                                </button>
                            </div>
                        </div>

                    </div>

                </div>

            </SwiperSlide>
            {/* slide 2 */}
            <SwiperSlide>
                <div
                    className="relative h-[200px] md:h-[500px] w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide2})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-75"></div>

                    {/* Content: Image on the left, Text on the right */}
                    <div className="relative z-10 flex justify-between h-full items-center md:px-8">
                        {/* Image on the Left */}
                        <div className={`w-[45%] md:w-[50%] flex justify-center items-center mt-20 ${activeIndex === 0 ? 'animate-scaleUp' : ""}`}>
                            <img
                                src="https://www.nexoindia.com/wp-content/uploads/2017/09/transmission-line.png"
                                alt="Wind Mill"
                                className="max-w-full md:h-[400px]"
                            />
                        </div>

                        {/* Text Content on the Bottom Right */}
                        <div className={`w-[55%] md:w-[50%] flex flex-col items-end justify-end text-right text-yellow-500 font-bold pt-20 md:pt-40 pr-1 ${activeIndex === 0 ? 'animate-slideInRight' : ""}`}>
                            <h3 className="text-[12px] md:text-4xl mt-2 w-full">FOR TRANSMISSION LINES</h3>
                            <p className="text-[8px] w-full md:text-[18px]">POWER TRANSMISSION SECTOR, TELE-COMMUNICATION SECTOR</p>
                            <p className="text-[6px] w-full md:text-[10px] text-white">Power Transmission and Tele-communication sector is the key feature in the progress and prosperity of any country.</p>
                            <button className="text-[8px] md:text-md mt-2 md:mt-4  px-1 py-1 md:px-6 md:py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
                                MORE INFO
                            </button>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            {/* slide 3 */}
            <SwiperSlide>
                <div
                    className="relative h-[200px] md:h-[500px] w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide3})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-75"></div>

                    {/* Content: Image on the Right, Text on the left */}
                    <div className="relative z-10 flex justify-between h-full items-center md:px-8">


                        {/* Text Content on the Bottom left */}
                        <div className="w-[55%] md:w-[50%] flex flex-col items-start justify-end text-left text-yellow-500 font-bold pt-20 md:pt-40 pr-1 pl-2">
                            <h3 className="text-[12px] md:text-4xl mt-2 w-full">FOR STRUCTURES</h3>
                            <p className="text-[8px] w-full md:text-lg">EN 15048 Non-Preload Bolt Assemblies (CE Marked)</p>
                            <p className="text-[6px] w-full md:text-[10px] text-white">Most steel structure use non-preloaded structural Bolts. For that reason Nexo keeps a complete range of stock of Structural Bolts Conforming to EN 15048. This assures you of competitive condition and fast deliveries, as and when needed by you.</p>
                            <button className="text-[8px] md:text-md mt-2 md:mt-4  px-1 py-1 md:px-6 md:py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
                                MORE INFO
                            </button>
                        </div>

                        {/* Image on the Right */}
                        <div className="w-[45%] md:w-[50%] flex justify-center items-center mt-20 p-5 md:p-10">
                            <img
                                src="https://www.nexoindia.com/wp-content/uploads/2017/09/non-preload-bolts.png"
                                alt="Wind Mill"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            {/* slide 4 */}
            <SwiperSlide>
                <div
                    className="relative h-[200px] md:h-[500px] w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide4})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-75"></div>

                    {/* Content: Image on the Right, Text on the left */}
                    <div className="relative z-10 flex justify-between h-full items-center md:px-8">


                        {/* Text Content on the Bottom left */}
                        <div className="w-[55%] md:w-[50%] flex flex-col items-start justify-end text-left text-yellow-500 font-bold pt-20 md:pt-40 pr-1 pl-2">
                            <h3 className="text-[12px] md:text-4xl mt-2 w-full">FOR RAILWAYS ELECTRICAL</h3>
                            <p className="text-[6px] w-full md:text-[10px] text-white">nexo enjoys the privilege of having registration with RDSO (Research Design and Standard Organization, Ministry of Railway) CORE (Central Organization for Railway Electrification) and DMRC (Delhi Metro Rail Corporation) and is Supplying all grades of Bolts, Nuts and</p>
                            <button className="text-[8px] md:text-md mt-2 md:mt-4  px-1 py-1 md:px-6 md:py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
                                MORE INFO
                            </button>
                        </div>

                        {/* Image on the Right */}
                        <div className="w-[45%] md:w-[50%] flex justify-center items-center mt-20 p-5 md:p-10">
                            <img
                                src="https://www.nexoindia.com/wp-content/uploads/2017/09/railway.png"
                                alt="Wind Mill"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            {/* slide 5 */}
            <SwiperSlide>
                <div
                    className="relative h-[200px] md:h-[500px] w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide5})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-75"></div>

                    {/* Content: Image on the Right, Text on the left */}
                    <div className="relative z-10 flex justify-between h-full items-center md:px-8">


                        {/* Text Content on the Bottom left */}
                        <div className="w-[55%] md:w-[50%] flex flex-col items-start justify-end text-left text-yellow-500 font-bold pt-20 md:pt-40 pr-1 pl-2">
                            <h3 className="text-[12px] md:text-4xl mt-2 w-full">FOR STEEL/WOODEN CRASH BARRIER</h3>
                            <p className="text-[6px] w-full md:text-[10px] text-white">Our products are widely accepted by major manufacturers of Guard Rails/ Road Crash Barriers from all over Europe, Middle East, Australia, Newzealand and countries of Asian sub-continent.</p>
                            <button className="text-[8px] md:text-md mt-2 md:mt-4  px-1 py-1 md:px-6 md:py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
                                MORE INFO
                            </button>
                        </div>

                        {/* Image on the Right */}
                        <div className="w-[45%] md:w-[50%] flex justify-center items-center mt-20 p-5 md:p-10">
                            <img
                                src="https://www.nexoindia.com/wp-content/uploads/2017/09/crash-barrier.png"
                                alt="Wind Mill"
                                className="max-w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </SwiperSlide>
            {/* slide 6 */}
            <SwiperSlide>
                <div
                    className="relative h-[200px] md:h-[500px] w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide3})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-75"></div>

                    {/* Content: Image on the Right, Text on the left */}
                    <div className="relative z-10 flex justify-between h-full items-center md:px-8">
                        {/* Image on the Right */}
                        <div className="w-[20%] md:w-[20%] flex justify-center items-center mt-20 p-5 md:p-10">
                            {/* <img
                                src="https://www.nexoindia.com/wp-content/uploads/2017/09/crash-barrier.png"
                                alt="Wind Mill"
                                className="max-w-full h-auto"
                            /> */}
                        </div>

                        {/* Text Content on the Bottom left */}
                        <div className="w-[70%] md:w-[80%] flex flex-col items-end justify-end text-right text-yellow-500 font-bold pt-20 md:pt-40 pr-1 pl-2">
                            <h3 className="text-[12px] md:text-4xl mt-2 w-full">FABRICATION DIVISION</h3>
                            <p className="text-[8px] w-full md:text-lg">MANUFACTURERS & SUPPLY OF TOWER MATERIAL, WIND MILLS, GUARD RAILS AND ROAD CRASH BARRIERS.</p>
                            <p className="text-[6px] w-full md:text-[10px] text-white">As per Draft National Electricity Plan, by 2012, the Power Transmission Lines in India will expand to 2,93,372 Circuit KM</p>
                            <button className="text-[8px] md:text-md mt-2 md:mt-4  px-1 py-1 md:px-6 md:py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition">
                                MORE INFO
                            </button>
                        </div>


                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};