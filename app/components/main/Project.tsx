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
                    title={'Modern Next Js portfolio'}
                    description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '}
                    url={'nike'}
                />
                <ProjectCard
                    src={'/tix.png'}
                    title={'Interactive Wedsite Card'}
                    description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '}
                    url={'tix'}
                />
                <ProjectCard
                    src={'/nike.png'}
                    title={'Space Themed Website'}
                    description={'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '}
                    url={'banhang'}
                />
            </div>
        </section>
    )
}

export default Project