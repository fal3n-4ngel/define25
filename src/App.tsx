import * as THREE from "three";
import { Canvas } from "@react-three/fiber";

import "./App.css";
import { DefineModel } from "./DefineLogo";
import { Environment, OrbitControls } from "@react-three/drei";
import Navbar from "./components/Navbar";

function App() {
  const bentoSections = [
    {
      id: 1,
      title: "Beyond the Code",
      subtitle: "DefineHack is more than just coding.",
      size: "large",
    },
    {
      id: 2,
      title: "Expanding Your Skillsets",
      subtitle:
        "Learn new technologies, refine your coding abilities, and gain practical experience.",
      size: "medium",
    },
    {
      id: 3,
      title: "Expanding Your Skillsets",
      subtitle:
        "Learn new technologies, refine your coding abilities, and gain practical experience.",
      size: "medium",
    },
    {
      id: 4,
      title: "Expanding Your Skill",
      subtitle:
        "Learn new technologies, refine your coding abilities, and gain practical experience.",
      size: "small",
    },
    {
      id: 5,
      title: "Expanding Your Skillsets",
      subtitle:
        "Learn new technologies, refine your coding abilities, and gain practical experience.",
      size: "small",
    },
  ];

  return (
    <div className="text-white  min-h-screen overflow-x-hidden w-full">
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
        </h2>
      </section>
      <section className="flex flex-col w-full h-full bg-[#05050A] justify-center items-center min-h-screen gap-[28px]">
        <h1 className="text-[48px] font-light tracking-[-1.4px] bg-gradient-to-r from-[#ffffff80] via-white to-[#ffffff80] bg-clip-text text-transparent">
          Beyond the Code
        </h1>
        <h2 className="text-[#f1f7fe] opacity-[70%] font-light text-[20px]">
          DefineHack is more than just coding.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-[200px] w-[60vw] mx-auto">
          {bentoSections.map((section) => (
            <a
              href="#"
              key={section.id}
              className={`group relative rounded-xl bg-white/[0.01] p-6 transition-all duration-300 hover:bg-zinc-800 border-[0.1px] border-[#ffffff10]
              ${
                section.id === 1
                  ? "col-span-1 row-span-2"
                  : section.id == 2
                  ? "col-span-2 row-span-1"
                  : section.id == 4
                  ? "md:col-span-1 md:row-span-2"
                  : section.id == 5
                  ? "md:col-span-2 md:row-span-1"
                  : ""
              }
             
            `}
            >
              <div className="relative h-full w-full">
                <div className="flex flex-col gap-2">
                  <h2
                    className="text-[24px] leading-[10px] mb-4">
                    {section.title}
                  </h2>
                  <p className="text-gray-400 text-[12px] leading-[16px]">{section.subtitle}</p>
                </div>
              </div>
              <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 transition-all duration-300 group-hover:ring-white/20" />
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
