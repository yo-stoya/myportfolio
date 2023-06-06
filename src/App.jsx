import {Hero, StarsModel} from "./components/components.js";
import React from "react";

function App() {

    return (<>
            <div className="relative z-10">
                <Hero/>
                <div className='relative z-0 w-full h-screen overflow-hidden'>
                    <StarsModel/>
                </div>
            </div>
        </>
    )
}

export default App
