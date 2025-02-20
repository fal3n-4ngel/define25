import InstagramIcon from "./InstagramIcon";
import LinkedInIcon from "./LinkedInIcon";
import XIcon from "./XIcon";

export default function Footer() {
  return (
    <footer id="contact" className="relative px-10 pt-20 pb-5 lg:px-40">
      <div className="absolute top-0 left-1/2 h-[2px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#8f8f8fab] to-transparent"></div>

      <div className="flex flex-col justify-between gap-10 sm:flex-row">
        <div>
          <img src="define_logo.svg" className="w-30" alt="Define Logo" />
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex gap-5">
            <a href="https://www.instagram.com/definehack/">
              <InstagramIcon className="cursor-pointer transition duration-200 hover:fill-white" />
            </a>
            <a href="https://www.linkedin.com/company/definehack/">
              <LinkedInIcon className="cursor-pointer transition duration-200 hover:fill-white" />
            </a>
            <a href="https://x.com/definehack">
              <XIcon className="cursor-pointer transition duration-200 hover:fill-white" />
            </a>
          </div>
          <div>
            <h1>Contact Us</h1>
            hash@mbcet.ac.in <br />
            +91 9405564078 (Sam Peter) <br />
            +91 9405564078 (Rhon S)
          </div>
          <p className="opacity-70">
            Dept. of Computer Science & Engineering,
            <br /> Mar Baselios College Of Engineering & Technology,
            <br /> Nalanchira, Trivandrum.
          </p>
        </div>
        <ul className="flex flex-row justify-between sm:flex-col">
          <li>
            <a
              className="transition duration-200 hover:text-white/80"
              href="#home"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="transition duration-200 hover:text-white/80"
              href="#about"
            >
              About
            </a>
          </li>
          <li>
            <a
              className="transition duration-200 hover:text-white/80"
              href="#timeline"
            >
              Timeline
            </a>
          </li>
          sponsor
          <li>
            <a
              className="transition duration-200 hover:text-white/80"
              href="#sponsor"
            >
              Sponsorship
            </a>
          </li>
        </ul>
      </div>
      <div className="mt-30 flex items-center justify-between text-xs">
        <p>Define 2025</p>
        <p>© All copyrights reserved</p>
      </div>
    </footer>
  );
}
