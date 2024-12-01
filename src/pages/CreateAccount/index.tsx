
import ScrollAnimation from "../../Components/animations/ScrollAnimation";
import SignForm from "../../ui/SignForm";

function SignPage() {
 
  return (
    <>
      {/* Desktop */}
      <ScrollAnimation>
        <div className="bg-gradient-custom  justify-evenly  items-center py-7 hidden md:flex flex-[4]">
          <div className="text-white flex flex-col">
            <p className=" text-[3rem] font-semibold">Öyrən və Öyrət</p>
            <p className="text-[1.8rem]">platformasına</p>
            <p className="text-[2.3rem]"> xoş gəlmisiniz!</p>
          </div>
          <SignForm />
        </div>
      </ScrollAnimation>
      {/* phone */}
      <ScrollAnimation>
        <div className="flex md:hidden bg-Respons-costum h-[74.2vh] justify-center items-center">
          <SignForm />
        </div>
      </ScrollAnimation>
    </>
  );
}

export default SignPage;
