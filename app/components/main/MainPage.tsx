import React, {useRef} from "react";
import Skills from "./Skill";
import Encryption from "./Encryption";
import Project from "./Project";
import HeroContent from "./HeroContent";
import AboutMe from "./AboutMe";
const MainPage=()=>{
    return(
        <div className={'relative flex flex-col h-full w-full'}>
            <video
                autoPlay
                muted
                loop
                className={'rotate-180 absolute top-[-540px] left-0 z-[1] w-full object-cover'}
            >
                <source src={'/blackhole.webm'} type={'video/webm'} />
            </video>
            <HeroContent/>
            <AboutMe/>
            <Skills/>
            <Encryption/>
            <Project/>
        </div>
    )
}

export default MainPage