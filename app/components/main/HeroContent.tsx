'use client'
import React from "react";
import {motion} from "framer-motion";
import {slideInFromLeft, slideInFromRight, slideInFromTop} from "../../utils/motion";
import {SparklesIcon} from "@heroicons/react/24/solid";
import Image from 'next/image'
const HeroContent = ()=>{
    return(
        <motion.div
            initial={'hidden'}
            animate={'visible'}
            className={'flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'}
        >
            <div className={'h-full w-full flex flex-col gap-5 justify-center m-auto text-start'}>
                <motion.div
                    variants={slideInFromTop}
                    className={'Welcome-box py-[8px] px-[4px] border border-[#7042f88b] opacity-[0.9]'}
                >
                    <SparklesIcon className={'text-[#b49bff] mr-[10px] h-5 w-5'} />
                    <h1 className={'Welcome-text text-[13px]'}>
                        Frontend Developer
                    </h1>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className={'flex flex-row gap-6 items-center mt-6 text-3xl text-bold text-white max-w-[600px] w-auto h-auto'}
                >
                    <span className={'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'}>
                        Hi! I&apos;m Xuan Bao
                    </span>
                    <div className={'rounded-full w-[100px] h-[100px] border border-3 border-gray-500'}>
                        <Image
                            src={'/avatar.jpg'}
                            alt={'avatar'}
                            width={100}
                            height={100}
                            className={'rounded-full'}
                        />
                    </div>
                </motion.div>

                <motion.p
                    variants={slideInFromLeft(0.8)}
                    className={'text-lg text-gray-400 my-5 max-w-[600]'}
                >
                    I&apos;m a Frontend Developer with experience in Website.
                    Check out my project and skills
                </motion.p>
                <motion.a
                    variants={slideInFromLeft(0.5)}
                    className={'py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'}
                >
                    Learn More!
                </motion.a>
            </div>
            <motion.div
                variants={slideInFromRight(0.8)}
                className={'w-full h-full flex justify-center items-center'}
             >
                <Image
                    src="/mainIconsdark.svg"
                    width={650}
                    height={650}
                    alt="work icon"
                />
            </motion.div>
        </motion.div>
    )
}

export default HeroContent