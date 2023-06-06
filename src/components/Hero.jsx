import React from 'react'
import {styles} from "../utils/styles.js";
import {Tech} from "./components.js";

const Hero = () => {
    return (<>
            <div
                className={`${styles.paddingX} absolute top-1/2 -translate-y-1/2 inset-0 z-10 max-w-7xl mx-auto flex flex-row  gap-5`}>
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
                    <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
                </div>
                <div>
                    <h1 className={`${styles.heroHeadText} sm:mb-5 text-white`}>Hi. I'm <span
                        className="text-[#915eff]">Yordan 🚀</span></h1>

                    <div className="mt-4 max-w-4xl">
                        <p className="text-secondary text-[15px] sm:text-[17px] leading-[30px]">
                            A striving software developer who loves creating efficient and user-friendly solutions
                            that
                            meet the needs
                            of businesses and individuals.
                            I recently completed Java Full-Stack Program at SoftUni and took an internship in Rewe
                            Digital Bulgaria, where I gained a solid foundation
                            in programming and software development principles. <span className="text-white">Let's build something cool!</span>
                        </p>
                    </div>
                    <Tech />
                    <div className="mt-8 flex gap-8">
                        <h3 className={`${styles.sectionHeadText}`}>
                            <a className="cursor-pointer text-[#915eff]"
                               href="mailto:yordan.y.stoyanov@gmail.com">.mail</a>
                        </h3>
                        <h3 className={`${styles.sectionHeadText}`}>
                            <a className="cursor-pointer "
                               href="https://github.com/yo-stoya">.github</a>
                        </h3>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Hero