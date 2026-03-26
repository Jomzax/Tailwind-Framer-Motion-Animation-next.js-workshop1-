import { GiHamburgerMenu } from "react-icons/gi"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
const Navbar = () => {

  const [sidebar, setSidebar] = useState(false);

  return (
    <>
      <nav className="absolute top-0 left-0 w-full pt-8  z-40">
        <div className="container">

          <div className="flex items-center justify-between px-10">

            {/* Logo */}
            <motion.h1
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.3
              }}
              className="text-2xl font-semibold uppercase tracking-wide">
              <span className="text-primary">Montion</span> Workshop
            </motion.h1>

            {/* Hamburger Menu */}
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 10,
                delay: 0.5
              }}
            >
              <GiHamburgerMenu
                onClick={() => setSidebar(!sidebar)}
                className="text-2xl cursor-pointer "
              />
            </motion.div>

          </div>
        </div>

      </nav>

      <AnimatePresence>
        {sidebar && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.3
            }}
            className="absolute top-0 right-0 w-[140px] h-full bg-gradient-to-b from-primary/80 to-primaryDark/80 backdrop-blur-sm z-20">

            <div className="w-full h-full justify-content items-center ">
              <div className="flex flex-col items-center justify-center gap-6 h-full">

                {/*Line */}
                <div className="w-[1px] h-[70px] bg-white/50" />

                {/* social media */}
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <FaFacebookF />
                  </Link>
                </div>

                {/* social icon1*/}
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </Link>
                </div>

                {/* social icon1*/}
                <div className="inline-block p-2 rounded-full cursor-pointer border border-white">
                  <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                  </Link>
                </div>


                <div className="w-[1px] h-[70px] bg-white/50" />

              </div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
