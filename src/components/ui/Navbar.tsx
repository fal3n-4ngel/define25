function Navbar() {
  return (
    <nav className="flex items-center justify-between backdrop-filter backdrop-blur-md/30 pb-8 pt-12   bg-[#05050A] ">
      <div className="w-[70vw] mx-auto flex flex-row px-10 items-center justify-between">
        <img src="logo-nav.png" alt="Define Logo" />
        <div className="flex gap-4 text-[12px] text-white opacity-[70%]">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#sponsorship">Sponsorship</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="text-black bg-white px-[22px] py-2 text-[16px] rounded-full">
          Register Now
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
