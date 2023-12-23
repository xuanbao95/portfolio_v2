import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Project = ()=>{
    return(
        <section id={'projects'} className={'flex flex-col items-center justify-center py-20'}>
            <h1 className={'text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'}>
                My Projects
            </h1>
            <div className={'h-full w-full flex flex-col md:flex-row gap-10 px-10'}>
                <ProjectCard
                    src={'/upos.png'}
                    title={'UPOS-Manage Online Sales'}
                    description={'Managing order sources, placing orders in online business.'}
                    url={'banhang'}
                />
                <ProjectCard
                    src={'/nike.png'}
                    title={'Modern Next Js portfolio'}
                    description={'Website about shoes and clothing fashion.'}
                    url={'nike'}
                />
                <ProjectCard
                    src={'/tix.png'}
                    title={'Interactive Wedsite Card'}
                    description={'Movie ticket booking website.'}
                    url={'tix'}
                />

            </div>
        </section>
    )
}

export default Project