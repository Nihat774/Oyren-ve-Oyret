import { Link, useLocation } from "react-router-dom";

function Footer() {
  const {pathname} = useLocation()
  return (
    <>
      <footer className="flex-1">
      <div className={`${(pathname == '/')?"bg-neutral-900":"bg-black"} flex-1 flex md:justify-end justify-between gap-6  text-white px-5 py-2`}>
        <Link to={'/about'}>Haqqımızda</Link>
        <Link to={'/sertler'}>Şərt və Tələblər</Link>
      </div>
      <div className="flex justify-center  text-white md:text-[1.4rem] text-[.9rem]">
        &copy; CopyRight 2024 Bütün müəllif hüquqları qorunur.
      </div>
      </footer>
    </>
  );
}

export default Footer;
