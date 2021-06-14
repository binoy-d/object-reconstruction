import React, { Suspense } from "react";
import { Canvas, useLoader } from "@react-three/fiber";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { Environment, OrbitControls} from "@react-three/drei";
import { TextureLoader } from 'three/src/loaders/TextureLoader'

export function Model(props) {
  const obj = useLoader(OBJLoader, process.env.PUBLIC_URL + "/files/final.obj");
  const [colorMap] = useLoader(TextureLoader, [ process.env.PUBLIC_URL + "/files/final.png"])
  return <primitive 
            position={[-10, -10, -30]} 
            object={obj} 
            map={colorMap}
            rotation={[-1.49, 0, -2]} />;
}

export function ModelViewer() {
  return (
    <div className="canvas-container">
      <Canvas>
        <Suspense fallback={null}>
            <ambientLight args={[0x404040]} />
            <pointLight args={[0x404040]} />
            <Model />
            <OrbitControls />
          <Environment preset="park" background />
        </Suspense>
      </Canvas>
    </div>
  );
} 


export default function LandingSection(){
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="title">3D Object Reconstruction</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                        <p className="text">Note: 3D Model may take a while to load</p>
                        <ModelViewer />
                    </div>
                </div>
                
            </div>
            
        </section>
    );
}