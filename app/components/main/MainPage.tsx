import React from "react";
import HeroContent from "../sub/HeroContent";
import Skills from "./Skill";
import Encryption from "./Encryption";
const MainPage=()=>{
    return(
        <div className={'relative flex flex-col h-full w-full'}>
            <video
                autoPlay
                muted
                loop
                className={'rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full objeck-cover'}
            >
                <source src={'/blackhole.webm'} type={'video/webm'} />
            </video>
            <HeroContent/>
            <Skills/>
            <Encryption/>
        </div>
    )
}

export default MainPage