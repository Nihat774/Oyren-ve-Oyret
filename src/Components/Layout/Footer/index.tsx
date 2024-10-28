import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="flex md:justify-end xs:justify-between gap-6 bg-gradient-custom text-white  px-7 py-2">
        <Link to={'/about'}>Haqqımızda</Link>
        <Link to={'/şərt və qaydalar'}>Şərt və Tələblər</Link>
      </div>
    </>
  );
}

export default Footer;
