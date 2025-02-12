import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

import "./App.css";
import { DefineModel } from "./DefineLogo";
import { Environment, OrbitControls } from "@react-three/drei";

function App() {

  return (
    <div className="text-white bg-[#05050A] h-screen">
      <nav className="flex items-center justify-between w-full backdrop-filter backdrop-blur-md/30 py-4 px-10">
        <h1 className="font-black">Define25</h1>
        <div className="flex gap-4">
          <a href="">Features</a>
          <a href="">Company</a>
          <a href="">Resources</a>
          <a href="">Docs</a>
          <a href="">Pricing</a>
        </div>
        <button>Register</button>
      </nav>
      <section className="flex flex-col sm:flex-row w-full h-full">
        <div className="w-full h-full flex flex-col justify-center p-10 lg:p-40">
          <div className="text-white opacity-[70%] border-[1px] border-white w-fit px-2 py-1 rounded-full text-[12px] my-5">
            <span className="blur-[0.4px]">version 3.0</span>
          </div>
          <h1 className="scroll-m-20 text-[96px] font-[400px] tracking-tight  bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent leading-none">
            Define <br />
            Hackathon
          </h1>
          <p className="text-md text-[#f1f7fe] opacity-[70%]">
            Compete with the brightest minds across India, build <br />{" "}
            impactful solutions, and ignite your engineering spirit.
          </p>

          <button className="bg-white text-sm text-black rounded-full w-[146px] py-2 px-4 mt-12">
            Register Now
          </button>
        </div>
        <div className="w-full h-full">
          <Canvas
            camera={{ position: [0, 0, 0], fov: 50 }}
            gl={{ antialias: true, toneMapping: THREE.ACESFilmicToneMapping }}
          >
            <Environment environmentIntensity={0.5} files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/cyclorama_hard_light_1k.hdr" background={false} />
            <color attach="background" args={["#05050a"]} />
            <DefineModel />
            <OrbitControls />
          </Canvas>
        </div>
      </section>
    </div>
  );
}

export default App;
