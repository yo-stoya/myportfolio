import React from 'react'
import {Html, useProgress} from "@react-three/drei";

const Loader = () => {
    const {progress} = useProgress();
    const htmlStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    }
    const pStyle = {
        fontSize: 14,
        color: "#F1F1F1",
        fontWeight: 800,
        marginTop: 40,
    }

    return (
        <Html style={ htmlStyle }
              as='div'
              center
        >
            <span className='canvas-loader'></span>
            <p style={ pStyle }>
                { progress.toFixed(2) }%
            </p>
        </Html>
    )
}

export default Loader