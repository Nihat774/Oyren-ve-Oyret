import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const {pathname} = useLocation()
  let loc = useNavigate();
  return (
    <>
      <div className="bg-gradient-custom ">
        <div className="continer  flex justify-between px-5 py-3 backdrop-blur-lg bg-slate-400/30">
          <div className="flex items-center gap-5">
            <img
              src="/logo-dark.jpg"
              className="size-[50px] rounded-[15px]"
              alt="Logo"
            />
            <p className="text-white text-[1.2rem]">Öyrən və Öyrət</p>
          </div>

          <div className="flex gap-5">
            <button
              className={`${(pathname== "/create")?"xs:hidden md:flex":"flex"} xs:h-[50px] items-center justify-center md:h-[8vh] w-[120px] rounded-[13px] font-semibold bg-white text-black`}
              onClick={() => loc("/create")}
            >
              Hesab yarat
            </button>
            <button className={`${(pathname =="/login")?"xs:hidden md:flex":"xs:flex"} xs:h-[50px] items-center justify-center md:h-[8vh] w-[120px] rounded-[13px] bg-black text-white`}
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
