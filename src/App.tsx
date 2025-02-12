import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

import "./App.css";
import { DefineModel } from "./DefineLogo";
import { Environment, OrbitControls } from "@react-three/drei";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="text-white  min-h-screen z-0">
      <Navbar />
      <section className="flex flex-col sm:flex-row w-full h-full bg-gradient-to-b from-[#05050A] via-[#05050af7] to-[#05050A] min-h-screen">
        <div className="w-full h-full flex flex-col justify-center p-10 lg:p-40">
          <div className="text-white opacity-[70%] border-[1px] border-white w-fit px-2 py-1 rounded-full text-[12px] my-5">
            <span className="blur-[0.4px]">version 3.0</span>
          </div>
          <h1 className="scroll-m-20 text-[96px] font-[400px] tracking-none  bg-gradient-to-r from-white via-gray-100 to-gray-400 bg-clip-text text-transparent leading-none">
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
            <Environment
              environmentIntensity={0.5}
              files="https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/cyclorama_hard_light_1k.hdr"
              background={false}
            />
            <color attach="background" args={["#05050a"]} />
            <DefineModel />
            <OrbitControls />
          </Canvas>
        </div>
      </section>
      <section className="flex flex-col w-full h-full bg-[#05050A] justify-center items-center">
        <div className="overflow-hidden relative border border-white/10 px-52 py-24 rounded-[24px] shadow-2xl flex justify-center items-center">
          <img
            src="Logo Faded.png"
            alt="Define Logo"
            className="absolute top-0 pl mx-auto"
          />
          <h1 className="font-extralight tracking-tight leading-[117px] text-[56px] text-white">
            24 Hours.&nbsp;&nbsp;&nbsp; Endless Possibilities.
          </h1>
        </div>
      </section>
      <section className="flex flex-col w-full h-full bg-[#05050A] justify-center items-center min-h-screen gap-[28px]">
        <h1 className="text-[48px] font-light tracking-[-1.4px] bg-gradient-to-r from-[#ffffff80] via-white to-[#ffffff80] bg-clip-text text-transparent">
          Define isn't just another hackathon.
        </h1>
        <h2 className="text-center font-extralight text-[20px] leading-[27px] tracking-[0.6px] text-[#F1F7FEBD] ">
          What does innovation mean to you? A groundbreaking app? A clever
          solution to a real-world <br />
          problem? At DefineHack, we challenge you to define it. Join us for 24
          intense hours of coding, <br />
          collaboration, and creation. Transform your wildest ideas into
          tangible projects, surrounded by <br /> a community of passionate
          engineers. This isn't just a hackathon; it's an experience.
        </h2>{" "}
      </section>
    </div>
  );
}

export default App;
