import React, {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import {
    Decal,
    Float,
    OrbitControls,
    Preload,
    useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl]);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25}/>
            <directionalLight position={[0, 0, 0.05]}/>
            <mesh castShadow receiveShadow scale={2}>
                <icosahedronGeometry args={[1, 1]}/>
                <meshStandardMaterial
                    color='#aaa6c3'
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1.5}
                    map={decal}
                    premultipliedAlpha={2}
                    flatShading
                />
            </mesh>


        </Float>
    );
};

const BallCanvas = ({icon}) => {
    return (
        <Canvas
            shadows
            frameloop='demand'
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [0, 3, 6],
            }}
        >
            <Suspense fallback={<CanvasLoader/>}>
                <OrbitControls enableZoom={false}
                               autoRotate
                               autoRotateSpeed={5}
                               maxPolarAngle={Math.PI / 2}
                               minPolarAngle={Math.PI / 2}/>
                <Ball imgUrl={icon}/>
            </Suspense>

            <Preload all/>
        </Canvas>
    );
};

export default BallCanvas;