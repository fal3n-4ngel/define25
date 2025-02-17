import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="backdrop-blur-md/30 z-50 mx-auto flex w-full items-center justify-between p-4 backdrop-filter lg:max-w-[70vw] lg:pt-12 lg:pb-8">
      <img src="logo-nav.png" alt="Define Logo" />
      <button
        className="group sm:hidden h-20 w-20 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="grid justify-items-center gap-1.5">
          <span
            className={`h-1 w-8 rounded-full bg-white transition ${
              isOpen ? "translate-y-2.5 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-8 rounded-full bg-white transition ${
              isOpen ? "scale-x-0" : ""
            }`}
          ></span>
          <span
            className={`h-1 w-8 rounded-full bg-white transition ${
              isOpen ? "-translate-y-2.5 -rotate-45" : ""
            }`}
          ></span>
        </div>
      </button>

      <div className="text-md hidden items-center gap-4 text-white opacity-[70%] sm:flex">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#sponsorship">Sponsorship</a>
        <a href="#contact">Contact</a>
        <button className="cursor-pointer rounded-full bg-white px-[22px] py-2 text-[16px] text-black">
          Register Now
        </button>
      </div>

      <div
        className={`absolute top-0 left-0 z-40 flex h-screen w-full flex-col items-center justify-center space-y-6 bg-black/80 text-xl text-white transition-transform duration-500 ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } md:hidden`}
      >
        <a href="#home" onClick={() => setIsOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="#sponsorship" onClick={() => setIsOpen(false)}>
          Sponsorship
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
        <button className="z-10 cursor-pointer rounded-full bg-white px-[22px] py-2 text-[16px] text-black">
          Register Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
