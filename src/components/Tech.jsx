import {technologies} from "../utils/technologies.js";
import BallCanvas from "./models/Ball.jsx";

const Tech = () => {
    return (
        <div className='flex flex-row flex-wrap my-5 gap-10'>
            {technologies.map((technology) => (
                <div className='w-20 h-20' key={technology.name}>
                    <BallCanvas icon={technology.icon}/>
                </div>
            ))}
        </div>
    );
};

export default Tech