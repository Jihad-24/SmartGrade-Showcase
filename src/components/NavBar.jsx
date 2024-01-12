// import logo from "../assets/lws-logo-en.svg";
import logo from "../assets/logo192.png";

const NavBar = () => {
  return (
    <div className="py-6">
      <div className="container mx-auto flex items-center justify-between gap-x-6">
        <a href="/" className="flex justify-center items-center leading-4">
          <img className="h-[40px] bg-red-200 rounded-full " src={logo} alt="Lws" /> <span className=" ml-1 font-serif">Lern <br />with Jihad</span>
        </a>
        <a className="px-5 py-2 bg-[#172227] rounded-[44px]" href="#">
          Get Admission
        </a>
      </div>
    </div>
  );
};

export default NavBar;
