import React from "react";
import {Frontend_skill} from "../../contants/index";
import SkillsProvider from "../sub/SkillsProvider";
import SkillText from "../sub/SkillText";
const Skills = ({ref} : { ref: any })=>{
    return(
        <section
            className={'flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'}
            style={{transform:'scale(0.9)'}}
            id={'skills'}
        >
            <SkillText/>
            <div className={'flex flex-row justify-around flex-wrap mt-5 gap-5 items-center'}>
                {
                    Frontend_skill.map((map,i)=> <SkillsProvider
                        key={i}
                        src={map.Image}
                        width={map.width}
                        height={map.height}
                        index={i}
                    />)
                }
            </div>
            <div className={'w-full h-full absolute'}>
                <div className={'w-full h-full z-[10px] opacity-30 flex items-center justify-center bg-cover'}>
                    <video
                        className={'w-full h-auto'}
                        preload={'false'}
                        playsInline
                        loop
                        muted
                        autoPlay
                        src={'/cards-video.webm'}
                    />
                </div>
            </div>
        </section>
    )
}

export default Skills