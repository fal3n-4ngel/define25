function Navbar() {
  return (
    <nav className="flex items-center justify-between backdrop-filter backdrop-blur-md/30 pb-8 pt-12   bg-transparent z-10 ">
      <div className="w-[70vw] mx-auto flex flex-row px-10 items-center justify-between">
        <img src="logo-nav.png" alt="Define Logo" />
        <div className="flex gap-4 text-[12px] text-white opacity-[70%]">
          <a href="#home">Home</a>
          <a href="#about">Coming Soon</a>
          <a href="#sponsorship">Coming Soon</a>
          <a href="#contact">Coming Soon</a>
        </div>
        {/* <button className="text-black bg-white px-[22px] py-2 text-[16px] rounded-full z-10 cursor-pointer">
          Coming Soon
        </button> */}
      </div>
    </nav>
  );
}

export default Navbar;
