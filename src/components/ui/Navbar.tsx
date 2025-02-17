function Navbar() {
  return (
    <nav className="backdrop-blur-md/30 z-10 mx-auto flex w-full max-w-[70vw] items-center justify-between backdrop-filter lg:pt-12 lg:pb-8">
      <img src="logo-nav.png" alt="Define Logo" />
      <div className="text-md hidden gap-4 text-white opacity-[70%] md:flex">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#sponsorship">Sponsorship</a>
        <a href="#contact">Contact</a>
      </div>
      <button className="z-10 cursor-pointer rounded-full bg-white px-[22px] py-2 text-[16px] text-black">
        Register Now
      </button>
    </nav>
  );
}

export default Navbar;
