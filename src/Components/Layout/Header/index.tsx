
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  let loc = useNavigate();
  return (
    <>
 <header
  className={`${
    pathname !== "/"
      ? "bg-gradient-custom relative z-10" // gradient fon
      : "bg-neutral-900 relative z-10"
  } sticky top-0 flex items-center`}
>
  <div className={`${pathname != "/"?"flex":"hidden"} absolute inset-0 bg-zinc-300/30 backdrop-blur-lg`}></div>
  <div className="container mx-auto flex justify-between py-3 relative z-20"> 
    <Link to={'/'} className="center-flex gap-5">
      <img
        src={`${pathname === "/login" ? "/logo.jpg" : "/logo-dark.jpg"}`}
        className="size-[50px] rounded-[15px]"
        alt="Logo"
      />
      <p className="text-white text-[1.2rem]">Öyrən və Öyrət</p>
    </Link>

    <div className="flex gap-5 items-center">
      <button
        className={`${
          pathname === "/register" ||
          pathname === "/" ||
          pathname === "/about" ||
          pathname === "/sertler"
            ? "hidden md:flex"
            : "flex"
        } hover:bg-black hover:text-white h-max items-center justify-center md:h-[8vh] w-[120px] rounded-[13px] duration-500 font-semibold bg-white text-black`}
        onClick={() => loc("/register")}
      >
        Hesab yarat
      </button>
      <button
        className={`${
          pathname === "/login" ? "hidden md:flex" : "flex"
        } hover:bg-white font-bold hover:text-neutral-900 h-max items-center justify-center duration-500 md:h-[8vh] w-[120px] rounded-[13px] bg-black text-white`}
        onClick={() => loc("/login")}
      >
        Daxil ol
      </button>
    </div>
  </div>
</header>


    
    </>
  );
}

export default Header;
