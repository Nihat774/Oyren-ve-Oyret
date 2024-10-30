import { Link } from "react-router-dom";

function LoginForm() {
  return (
    <>
      <div className="flex gap-5 p-5 rounded-[25px] h-[60vh] w-[90%] md:w-fit md:h-fit md:rounded-[85px]  bg-neutral-400/50 backdrop-blur-lg">
        <form className="flex flex-col justify-evenly items-center">
          <legend className="text-[1.7rem] text-white center-flex">
            Hesaba giriş
          </legend>
          <input
            type="text"
            className="px-4 py-3 md:w-[24vw] xs:w-[90%]  text-[1.3rem] rounded-[15px]"
            placeholder="E-poçt"
          />
          <input
            type="password"
            name=""
            id=""
            className=" md:w-[24vw] xs:w-[90%] px-4 py-3 text-[1.3rem] rounded-[15px]"
            placeholder="Şifrə"
          />
          <Link to={"/"} className="text-white hover:text-red-600">
            Şifrənizi unutdunuz?
          </Link>
          <button className="rounded-[10px] py-3 w-[120px] bg-black text-white ">
            Daxil ol
          </button>
        </form>
        <div className="xs:hidden md:flex h-[69.5vh] w-[25vw] p-3 rounded-[20%]  justify-center bg-[url('/LoginForm-bg-image.png')] bg-cover">
          <div className="rounded-[40px]">
            <div className="bg-neutral-400/50 backdrop-blur-lg rounded-[40px] mt-5 text-center w-[20vw] p-5 h-[30vh] flex flex-col justify-center">
              <p className="text-white text-lg font-semibold">
                Öyrən və Öyrət ailəsinə xoş gəldiniz.
              </p>
              <p className="text-white mt-2 text-[1rem]">
                Sizi öz aramızda görməkdən məmnunluq duyuruq!
              </p>
            </div>
            <div className="h-[30vh] flex flex-col justify-end items-center">
              <div className="flex  bg-red  gap-3">
                <p className="w-[60px] rounded-[5px] h-[8px] bg-orange-600 backdrop-blur-lg "></p>
                <p className="w-[60px] rounded-[5px] h-[8px] bg-white backdrop-blur-lg "></p>
                <p className="w-[60px] rounded-[5px] h-[8px] bg-white backdrop-blur-lg "></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
