import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  let loc = useNavigate();
  return (
    <>
      <div
        className={`${
          pathname != "/"
            ? "bg-gradient-custom backdrop-blur-lg bg-slate-400/80"
            : "bg-neutral-900"
        } sticky z-50 top-0 `}
      >
        <div className="container mx-auto flex justify-between  py-3 ">
          <div className="center-flex gap-5">
            <img
              src={`${pathname == "/login" ? "/logo.jpg" : "/logo-dark.jpg"}`}
              className="size-[50px] rounded-[15px]"
              alt="Logo"
            />
            <Link to={"/"} className="text-white text-[1.2rem]">
              Öyrən və Öyrət
            </Link>
          </div>

 

          <div className="flex gap-5 items-center">
          <FontAwesomeIcon icon={faHouse} className="text-white text-[1.4rem] cursor-pointer" onClick={()=>loc('/')} />
            <button
              className={`${
                pathname == "/register" ||
                pathname == "/" ||
                pathname == "/about" ||
                pathname == "/sertler"
                  ? "hidden md:flex"
                  : "flex"
              } hover:bg-black hover:text-white  h-[50px] items-center justify-center md:h-[8vh] w-[120px] rounded-[13px] font-semibold bg-white text-black`}
              onClick={() => loc("/register")}
            >
              Hesab yarat
            </button>
            <button
              className={`${
                pathname == "/login" ? "hidden md:flex" : "flex"
              } hover:bg-white hover:font-bold hover:text-neutral-900 h-[50px] items-center justify-center md:h-[8vh] w-[120px] rounded-[13px] bg-black text-white`}
              onClick={() => loc("/login")}
            >
              Daxil ol
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
