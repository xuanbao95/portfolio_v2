'use client'
import React from "react";
import Image from 'next/image'
import {useRouter} from "next/navigation";
interface Props {
    src: string,
    title: string,
    description: string,
    url: string,
}
const ProjectCard = ({src, title, description, url}: Props)=>{
    const router = useRouter()
    return(
        <div
            className={'relative overflow-hidden rounded-lg shadow-lg border border-[#2a0e61] cursor-pointer'}
            onClick={()=>{
                router.push(`/projects/${url}`)
            }}
        >
            <Image
                src={src}
                alt={'title'}
                width={100}
                height={100}
                className={'w-full object-contain'}
            />
            <div className={'relative p-4'}>
                <h1 className={'text-2xl font-semibold text-white'}>{title}</h1>
                <p className={'mt-2 text-gray-300'}>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard