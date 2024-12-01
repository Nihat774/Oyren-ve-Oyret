
import ScrollAnimation from "../../Components/animations/ScrollAnimation";
import SignForm from "../../ui/SignForm";

function SignPage() {
 
  return (
    <div className="h-full">
      {/* Desktop */}
      <ScrollAnimation>
        <div className="bg-gradient-custom  justify-evenly h-full items-center py-6 xs:hidden md:flex flex-[3]">
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
        <div className="xs:flex md:hidden bg-Respons-costum h-[74.2vh] justify-center items-center">
          <SignForm />
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default SignPage;
