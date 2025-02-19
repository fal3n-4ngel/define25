import InstagramIcon from "./InstagramIcon";
import LinkedInIcon from "./LinkedInIcon";
import XIcon from "./XIcon";

export default function Footer() {
  return (
    <footer className="relative px-10 pt-20 pb-5 lg:px-40">
      <div className="absolute top-0 left-1/2 h-[2px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8f8f8fab] to-transparent"></div>

      <div className="flex flex-col sm:flex-row justify-between gap-10">
        <div>
          <img src="logo-nav.png" alt="Define Logo" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <InstagramIcon className=" cursor-pointer transition duration-200 hover:fill-white" />
            <LinkedInIcon className=" cursor-pointer transition duration-200 hover:fill-white" />
            <XIcon className=" cursor-pointer transition duration-200 hover:fill-white" />
          </div>
          <p>
            Dept. of Computer Science & Engineering,
            <br /> Mar Baselios College Of Engineering & Technology,
            <br /> Nalanchira, Trivandrum.
          </p>
        </div>
        <ul className="flex flex-row sm:flex-col justify-between">
          <li><a className="hover:text-white/80 transition duration-200" href="#home">Home</a></li>
          <li><a className="hover:text-white/80 transition duration-200" href="#about">About</a></li>
          <li><a className="hover:text-white/80 transition duration-200" href="#sponsor">Sponsorship</a></li>
          <li><a className="hover:text-white/80 transition duration-200" href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="flex items-center justify-between text-xs mt-30">
        <p>Define 2025</p>
        <p>© All copyrights reserved</p>
      </div>
    </footer>
  );
}
