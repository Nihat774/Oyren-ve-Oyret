
import ScrollAnimation from "../../Components/animations/ScrollAnimation";
import LoginForm from "../../ui/LoginForm";


function LoginPage() {
  return (
    <div className="h-full ">
      {/* Desktop */}

        {/* <div className="bg-gradient-custom  justify-evenly items-center h-full py-3 xs:hidden md:flex "> */}

      <ScrollAnimation>
        <div className="bg-gradient-custom justify-evenly items-center py-5 hidden md:flex flex-[4]">

          <div className="text-white flex flex-col">
            <p className=" text-[3rem] font-semibold">Öyrən və Öyrət</p>
            <p className="text-[1.8rem]">platformasına</p>
            <p className="text-[2.3rem]"> xoş gəlmisiniz!</p>
          </div>
          <LoginForm />
        </div>
      </ScrollAnimation>
      {/* phone */}

        <div className="xs:flex md:hidden bg-Respons-costum h-[74.7vh] justify-center  items-center">

      <ScrollAnimation>
        <div className="flex flex-[4] md:hidden bg-Respons-costum h-[74.7vh] justify-center  items-center">
          <LoginForm />
        </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default LoginPage;
