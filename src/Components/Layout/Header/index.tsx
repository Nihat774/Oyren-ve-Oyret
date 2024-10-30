import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const {pathname} = useLocation()
  let loc = useNavigate();
  return (
    <>
      <div className="bg-gradient-custom sticky z-50 top-0">
        <div className="continer  flex justify-between px-5 py-3 backdrop-blur-lg bg-slate-400/30">
          <div className="center-flex gap-5">
            <img
              src="/logo-dark.jpg"
              className="size-[50px] rounded-[15px]"
              alt="Logo"
            />
            <Link to={'/'} className="text-white text-[1.2rem]">Öyrən və Öyrət</Link>
          </div>

          <div className="flex gap-5">
            <button
              className={`${(pathname== "/register")?"hidden md:flex":"flex"} h-[50px] items-center justify-center md:h-[8vh] w-[120px] rounded-[13px] font-semibold bg-white text-black`}
              onClick={() => loc("/register")}
            >
              Hesab yarat
            </button>
            <button className={`${(pathname =="/login")?"hidden md:flex":"flex"} h-[50px] items-center justify-center md:h-[8vh] w-[120px] rounded-[13px] bg-black text-white`}
            onClick={()=>loc('/login')}>
              Daxil ol
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
