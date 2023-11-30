'use client'
import React from "react";
import {useParams} from "next/navigation";
import {PAGE_PROJECT} from "../../contants/index";
import {motion} from 'framer-motion'
import {slideInFromLeft, slideInFromRight} from "../../utils/motion";
import Image from 'next/image'
export default function Projects() {
    const {slug} = useParams()
    const data = !!slug ? PAGE_PROJECT[slug] : ''
    return(
        <div
            className={'pt-[80px] w-full h-auto flex flex-row px-20 relative z-[2]'}
        >
            <div
                variants={slideInFromLeft(0.5)}
                className={'max-w-[600px] w-auto h-auto'}
            >
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className={'max-w-[600px] w-auto h-auto'}
                >
                    <span className={'text-white text-[15px]'}>Project Name:{' '}</span>
                    <span className={'text-[21px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'}>{data?.name}</span>
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
                    <span className={'text-[21px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'}>{data?.teamWork || 0}</span>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className={'max-w-[600px] w-auto h-auto'}
                >
                    <span className={'text-white text-[15px]'}>Position in team:{' '}</span>
                    <span className={'text-[21px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'}>{data?.position}</span>
                </motion.div>
                <motion.div
                    variants={slideInFromLeft(0.5)}
                    className={'max-w-[600px] w-auto h-auto'}
                >
                    <span className={'text-white text-[15px]'}>Description:{' '}</span>
                    <span className={'text-[21px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'}>{data?.description}</span>
                </motion.div>
            </div>
            <div
                className={'max-w-[600px] w-auto h-auto'}
            >
                <motion.div
                    variants={slideInFromRight(0.5)}
                >
                    <Image
                        src={'/avatar.jpg'}
                        width={100}
                        height={100}
                    />
                </motion.div>

            </div>
        </div>
    )
}