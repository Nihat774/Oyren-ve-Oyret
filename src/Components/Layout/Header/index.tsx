
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  let loc = useNavigate();
  return (
    <>
      <header
        className={`${
          pathname !== "/" ? "bg-gradient-custom " : "bg-neutral-900 "
        } sticky top-0 flex items-center justify-between  z-10 flex-1`}
      >
        <div
          className={`${
            pathname != "/" ? "flex" : "hidden"
          } absolute inset-0 bg-zinc-300/30 backdrop-blur-lg`}
        ></div>
        <div className=" flex justify-between py-3 w-full mx-6 relative z-20">
          <Link to={"/"} className="center-flex gap-2">
            <img
              src={`${pathname === "/login" ? "/logo.jpg" : "/logo-dark.jpg"}`}
              className="size-[50px] rounded-[15px]"
              alt="Logo"
            />
            <p className="text-white text-[1.2rem]">Öyrən və Öyrət</p>
          </Link>

          <div className="flex gap-5 items-center">
            <button
              className={`${pathname == "/login"?"flex":"hidden"}
              md:hover:bg-black md:hover:text-white  bg-white text-black header-button h-max`}
              onClick={() => loc("/register")}
            >
              Hesab yarat
            </button>
            <button
              className={`${
                pathname === "/login" ? "hidden md:flex" : "flex"
              } md:hover:bg-white  md:hover:text-neutral-900  bg-black text-white header-button h-max`}
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
