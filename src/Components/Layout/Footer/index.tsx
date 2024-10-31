import { Link, useLocation } from "react-router-dom";

function Footer() {
  const {pathname} = useLocation()
  return (
    <>
      <div className={`${(pathname == '/')?"bg-neutral-900":"bg-gradient-custom"} flex md:justify-end xs:justify-between gap-6  text-white  px-7 py-2`}>
        <Link to={'/about'}>Haqqımızda</Link>
        <Link to={'/sertler'}>Şərt və Tələblər</Link>
      </div>
    </>
  );
}

export default Footer;
