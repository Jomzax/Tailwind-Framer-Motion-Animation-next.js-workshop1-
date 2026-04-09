"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plaster } from "next/font/google";

const Banner = () => {

    const BannerImg = "/assets/coffee-cover.jpg";
    const AppStore = "/assets/app_store.png";
    const PlayStore = "/assets/play_store.png";

    const BannerStyle = {
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
    }

    const MotionImage = motion(Image);

    return (
        <>
            <div className="container my-14">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.2,
                    }}
                    style={BannerStyle}
                    className="sm:min-h-[400px] flex items-center justify-center md:justify-end bg-center px-4 py-6 sm:px-8 sm:py-12 rounded-xl shadow-md"
                >
                    <div className="">
                        <div className="max-w-xl space-y-4 lg:space-y-6">
                            <motion.h1
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.3,
                                }}
                                className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-center"
                            >
                                Download the app
                            </motion.h1>

                            <motion.p
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 10,
                                    delay: 0.4,
                                }}
                                className="text-center text-gray-600 sm:px-10 md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, reprehenderit?
                            </motion.p>

                            <div className="flex justify-center items-center gap-4">
                                {/* logo 1 */}
                                <Link
                                    href="#"
                                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]  hover:scale-110 transition-all duration-300 cursor-pointer"
                                >
                                    <MotionImage
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 10,
                                            delay: 0.9,
                                        }}

                                        src={AppStore}
                                        alt="App Store"
                                        width={200}
                                        height={200}
                                    />
                                </Link>

                                {/* logo 2 */}
                                <Link
                                    href="#"
                                    className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]  hover:scale-110 transition-all duration-300 cursor-pointer"
                                >
                                    <MotionImage
                                        initial={{ opacity: 0, y: 100 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 10,
                                            delay: 0.5,
                                        }}

                                        src={PlayStore}
                                        alt="Play Store"
                                        width={200}
                                        height={200}
                                    />
                                </Link>
                            </div>

                        </div>
                    </div>
                </motion.div>
            </div>

        </>

    )

}

export default Banner
