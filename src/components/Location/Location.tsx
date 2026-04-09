"use client"

import { motion } from "framer-motion";

const Location = () => {
    return (
        <>
            <div className="container my-36 rounded-xl">
                <div className="flex flex-col justify-center items-center md:flex-row  gap-14">

                    {/* form section */}
                    <Form />


                    {/* GPS section */}
                    <GPS />


                </div>
            </div>
        </>
    )
}

export default Location

function Form() {
    return (
        <>
            <div className="space-y-8">
                <motion.h1
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.3,
                    }}
                    className="text-xl font-bold text-gray-600">
                    buy our coffee at
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.3,
                    }}

                    className="flex items-center gap-4">
                    <input
                        placeholder="Name"
                        type="text"
                        className="input-style w-full lg:w-[150px] focus:outline-none border focus:border-primary"
                    />

                    <input
                        placeholder="Email"
                        type="email"
                        className="input-style w-full  focus:outline-none border focus:border-primary "
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.5,
                    }}
                    className="flex items-center gap-4">
                    <input
                        placeholder="Country"
                        type="text"
                        className="input-style w-full  focus:outline-none border focus:border-primary"
                    />

                    <input
                        placeholder="Zipcode"
                        type="text"
                        className="input-style w-full lg:w-[150px] focus:outline-none border focus:border-primary "
                    />
                </motion.div>

                <motion.button
                    initial={{ opacity: 0,  y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.1,
                    }}

                    className="primary-btn w-full shadow-xl  hover:scale-110 transition-all duration-100 cursor-pointer">
                    สั่งเลย
                </motion.button>
            </div>
        </>
    )
}

function GPS() {
    const lat = 9.962800;
    const lng = 98.802960;

    const zoom = 17;
    const lang = "th";
    const src = `https://www.google.com/maps?q=${lat},${lng}&hl=${lang}&z=${zoom}&output=embed`;

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.7,
                }}

            >
                <iframe
                    title="maps"
                    src={src}
                    width={600}
                    height={450}
                    className="rounded-xl w-full sm:w-[300px] sm:h-[300px]  md:h-[250px] overflow-hidden shadow-2xl mx-auto"
                    style={{ border: 2, borderRadius: "1rem" }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>

            </motion.div>
        </>


    );
}

