import { Link, useLocation } from "react-router-dom";

function Footer() {
  const {pathname} = useLocation()
  return (
    <>
      <footer className={`${(pathname == '/')?"bg-neutral-900":"bg-black"} flex-1 flex md:justify-end justify-between gap-6  text-white  px-7 py-2`}>
        <Link to={'/about'}>Haqqımızda</Link>
        <Link to={'/sertler'}>Şərt və Tələblər</Link>
      </footer>
      <div className="flex flex-1 flex-col justify-center items-center text-white md:text-[1.4rem] text-[.9rem]">
        &copy; CopyRight 2024 Bütün müəllif hüquqları qorunur.
      </div>
    </>
  );
}

export default Footer;
