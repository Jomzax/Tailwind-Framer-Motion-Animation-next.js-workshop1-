"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ProductType {
    id: number;
    title: string;
    subtitle: string;
    price: number;
    image: string;
}


const Product = () => {

    const productData: ProductType[] = [
        {
            id: 1,
            title: "Premium Quality Coffee",
            subtitle: "Experience the finest taste",
            price: 19.99,
            image: "/assets/coffee1.png",
        },
        {
            id: 2,
            title: "Premium Quality Coffee",
            subtitle: "Experience the finest taste",
            price: 19.99,
            image: "/assets/coffee3.png",
        },
        {
            id: 3,
            title: "Premium Quality Coffee",
            subtitle: "Experience the finest taste",
            price: 19.99,
            image: "/assets/coffee1.png",
        }
    ];
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                    delay: 0.3,
                }}
                className="container my-16 space-y-4">
                {/* section header */}
                <Header />

                {/*card section */}
                <Card product={productData} />

            </motion.div>
        </>
    );
};

export default Product;

function Header() {
    return (
        <>
            <div className="text-center max-w-lg mx-auto space-y-2">
                <motion.h1
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.2,
                    }}
                    className="text-3xl font-bold text-lightGray "
                >
                    Our Products
                    <span className="text-primary"> Test Coffee</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 10,
                        delay: 0.4,
                    }}
                    className="text-sm opacity-50">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum quibusdam quo sapiente cum nulla minus suscipit facere nihil harum tempora.</motion.p>
            </div>
        </>
    )
}

interface CardProps {
    product: ProductType[];
}

const Card = ({ product }: CardProps) => {
    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {product.map((item) => (
                    <div
                        key={item.id}
                        className="flex= flex-col space-y-4 items-center justify-center"
                    >
                        <Image
                            className="img-shadow2 max-w-[200px] mx-auto hover:scale-110 transition-all duration-300 cursor-pointer"
                            src={item.image}
                            alt={item.title}
                            width={200}
                            height={100}
                        />
                        <div className="flex  flex-col items-center justify-center py-4 ">
                            <h2 className="text-2xl  font-bold text-primary">{item.title}</h2>
                            <p>{item.subtitle}</p>
                            <p className="text-xl font-bold">${item.price.toFixed(2)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
