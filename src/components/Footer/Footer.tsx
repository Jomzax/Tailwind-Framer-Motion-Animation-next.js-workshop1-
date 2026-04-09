"use client"

import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaGoogle,
    FaPhone,
    FaTelegram,
} from "react-icons/fa";

import { FaMapLocation } from "react-icons/fa6";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {


    return (
        <>
            <div className="bg-gradient-to-t from-primary to-primary py-12 text-white">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* company details */}
                        <CompanyDetails />
                        {/* Link Details */}
                        <FooterLinks />
                        {/* social details */}
                        <SocialMedia />

                    </div>
                </div>

                <p className="text-white text-center mt-8 pt-8 border-t-2">
                    Copyright &copy; 2026 Montion Code. All rights reserved.
                </p>
            </div>
        </>

    )
}

export default Footer

function CompanyDetails() {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                    delay: 0.2,
                    duration: 0.6,
                    ease: "easeInOut",

                }}

                className="space-y-6">
                <h1 className="text-3xl font-bold uppercase">
                    Montion Code
                </h1>
                <p className="text-sm max-w-[300px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sapiente nihil, rem expedita harum adipisci ad vero culpa voluptas placeat.</p>
                <div className="space-y-2">
                    <p>
                        <FaMapLocation className="flex items-center gap-2" />
                        123 Main Street, City, Country
                    </p>
                    <p>
                        <FaPhone className="flex items-center gap-2" />
                        +1 (123) 456-7890
                    </p>
                    <p>
                        <FaTelegram className="flex items-center gap-2" />
                        @motioncode
                    </p>

                </div>
            </motion.div>
        </>
    );
}

function FooterLinks() {

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                    delay: 0.4,
                    duration: 0.6,
                    ease: "easeInOut",
                }}
                className="space-y-6">
                <h1 className="text-3xl font-bold uppercase tracking-wide">
                    Quick Links
                </h1>
                <div className="grid grid-cols-2 gap-3">

                    <div>
                        <ul className="space-y-2">
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Contact Us</li>
                            <li>Privacy Policy</li>
                        </ul>
                    </div>

                    <div>
                        <ul className="space-y-2">
                            <li>Terms of Service</li>
                            <li>Shipping Policy</li>
                            <li>Returns & Exchanges</li>
                            <li>FAQ</li>
                        </ul>
                    </div>

                </div>
            </motion.div>
        </>
    );
}

function SocialMedia() {

    const creditCardImg = "/assets/creditCard.png";
    const scbImg = "/assets/scb.png";
    const kbankImg = "/assets/kbank.png";

    return (
        <>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                    delay: 0.6,
                    duration: 0.6,
                    ease: "easeInOut",
                }}
                className="space-y-6 font-bold uppercase tracking-wide">
                <h1>
                    Follow Us
                </h1>
                <div className="flex items-center gap-4">
                    <FaFacebook className="text-3xl hover:scale-110 duration-300" />
                    <FaTwitter className="text-3xl hover:scale-110 duration-300" />
                    <FaInstagram className="text-3xl hover:scale-110 duration-300" />
                    <FaGoogle className="text-3xl hover:scale-110 duration-300" />
                </div>

                {/* payment */}
                <div className="space-y-2">
                    <div>
                        <p>Payment method</p>
                    </div>

                    <div className="flex items-center gap-4">
                        <Image
                            src={creditCardImg}
                            alt="Credit Card"
                            width={60}
                            height={60}
                        />
                        <Image
                            src={scbImg}
                            alt="SCB"
                            width={60}
                            height={60}
                        />
                        <Image
                            src={kbankImg}
                            alt="K-Bank"
                            width={60}
                            height={60}
                        />
                    </div>
                </div>
            </motion.div>


        </>
    );
}