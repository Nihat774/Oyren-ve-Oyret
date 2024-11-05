import ScrollAnimation from "../../Components/animations/ScrollAnimation";
import LoginForm from "../../ui/LoginForm";

function LoginPage() {
  return (
    <>
      {/* Desktop */}
      <ScrollAnimation>
        <div className="bg-gradient-custom  justify-evenly items-center h-[76vh] py-4 xs:hidden md:flex ">
          <div className="text-white flex flex-col">
            <p className=" text-[3rem] font-semibold">Öyrən və Öyrət</p>
            <p className="text-[1.8rem]">platformasına</p>
            <p className="text-[2.3rem]"> xoş gəlmisiniz!</p>
          </div>
          <LoginForm />
        </div>
      </ScrollAnimation>
      {/* phone */}
      <ScrollAnimation>
        <div className="xs:flex md:hidden bg-Respons-costum h-[74.3vh] justify-center items-center">
          <LoginForm />
        </div>
      </ScrollAnimation>
    </>
  );
}

export default LoginPage;
