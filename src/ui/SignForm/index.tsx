function SignForm() {
  return (
    <>
      <div className="flex gap-5 p-5 xs:rounded-[25px] xs:h-[60vh] xs:w-[90%] md:w-fit md:h-fit md:rounded-[85px]  bg-neutral-400/50 backdrop-blur-lg">
        
      <div className="xs:hidden md:flex h-[69.5vh] w-[27vw] p-3 rounded-[20%]  justify-center bg-[url('/signFormImage.png')] bg-cover">
          <div className="rounded-[40px]">
            <div className="bg-neutral-400/50 backdrop-blur-lg rounded-[40px] mt-5 text-center w-[20vw] p-5 h-[30vh] flex flex-col justify-center">
              <p className="text-white text-[1.3rem]">
              Sizi yenidən görmək 
              çox xoşdur
              </p>
             
            </div>
            <div className="h-[30vh] flex flex-col justify-end items-center">
              <div className="flex  bg-red  gap-3">
                <p className="w-[60px] rounded-[5px] h-[8px] bg-orange-600 backdrop-blur-lg "></p>
                <p className="w-[60px] rounded-[5px] h-[8px] bg-orange-600 backdrop-blur-lg "></p>
                <p className="w-[60px] rounded-[5px] h-[8px] bg-white backdrop-blur-lg "></p>
              </div>
            </div>
          </div>
        </div>

        <form className="flex flex-col justify-evenly items-center w-full">
          <legend className="text-[1.7rem] text-white">Hesab Yaradın</legend>
          <input
            type="text"
            className="px-4 py-3 md:w-[24vw] xs:w-[80%]  md:text-[1.3rem] xs:text-[1.1rem] rounded-[15px]"
            placeholder="E-poçt"
          />
          <input
            type="password"
            name=""
            id=""
            className=" md:w-[24vw] xs:w-[80%] px-4 py-3 md:text-[1.3rem] xs:text-[1.1rem] rounded-[15px]"
            placeholder="Şifrə"
          />
          <input
            type="password"
            name=""
            id=""
            className=" md:w-[24vw] xs:w-[80%] px-4 py-3 md:text-[1.3rem] xs:text-[1.1rem] rounded-[15px]"
            placeholder="Təkrar şifrə"
          />
          <button className="rounded-[10px] py-3 w-[120px] bg-black text-white">
            Növbəti
          </button>
        </form>
        
      </div>
    </>
  );
}

export default SignForm;
