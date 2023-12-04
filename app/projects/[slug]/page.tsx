'use client'
import React from "react";
import {useParams} from "next/navigation";
import {PAGE_PROJECT} from "../../contants/index";
import {motion} from 'framer-motion'
import {slideInFromLeft, slideInFromRight} from "../../utils/motion";
import Image from 'next/image'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './page.css'
export default function Projects() {
    const {slug} = useParams()
    const data = !!slug ? PAGE_PROJECT[slug] : ''

    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        autoplay: true
    };

    return (
        <motion.div
            initial={'hidden'}
            animate={'visible'}
            className={'pt-[80px] w-full h-auto flex flex-row items-center px-20 relative z-[2]'}
        >
            <div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className={'max-w-[600px] w-auto h-auto'}
                >
                    <span className={'text-white text-[15px]'}>Project Name:{' '}</span>
                    <span
                        className={'text-[21px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'}>{data?.name}</span>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className={'max-w-[600px] w-auto h-auto'}
                >
                    <span className={'text-white text-[15px]'}>Link:{' '}</span>
                    <a
                        className={'text-[21px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 cursor-pointer'}
                        href={data?.link}
                        target={'_blank'}
                    >{data?.link}</a>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className={'max-w-[600px] w-auto h-auto'}
                >
                    <span className={'text-white text-[15px]'}>Team Work:{' '}</span>
                    <span
                        className={'text-[21px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'}>{data?.teamWork || 0}</span>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className={'max-w-[600px] w-auto h-auto'}
                >
                    <span className={'text-white text-[15px]'}>Position in team:{' '}</span>
                    <span
                        className={'text-[21px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'}>Front End</span>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className={'max-w-[600px] w-auto h-auto'}
                >
                    <span className={'text-white text-[15px]'}>Description:{' '}</span>
                    <span
                        className={'text-[21px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'}>{data?.description}</span>
                </motion.div>
            </div>
            <div
                className={'max-w-[600px] w-auto h-auto pl-[20px]'}
            >
                <motion.div
                    variants={slideInFromRight(0.5)}
                    className={'w-full h-full'}
                >
                    <Slider
                        {...settings}
                        className={'h-[300px]'}
                    >
                        {
                            data.image?.map((map, i) => <Image
                                key={i}
                                src={map}
                                width={500}
                                height={500}
                                alt={'avatar'}
                            />)
                        }
                    </Slider>
                </motion.div>

            </div>
        </motion.div>
    )
}