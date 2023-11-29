import React from "react";
import {INFORMATION} from "../../contants/index";

export default function AboutMe() {
    return(
        <section
            id={'about-me'}
            className={'flex flex-row items-start justify-between px-20 w-full h-[600px] mt-[40px]'}
        >
            <div className={'w-2/4'}>
                {
                    INFORMATION.map(map=> <div key={map.id}>
                        <span
                            className={'text-white text-[13px]'}
                        >
                            {map.title}:{' '}
                        </span>
                        <span
                            className={'text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 text-[20px]'}
                        >
                            {map.label}
                        </span>
                    </div>)
                }
            </div>
            <div
                className={"bg-[url('/avatar.jpg')] bg-top bg-no-repeat bg-contain w-2/4 h-[600px] rounded-lg"}
            />


        </section>
    )
}