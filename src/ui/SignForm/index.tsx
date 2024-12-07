import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import { RegisterSchema } from "../../Validations/SampleSchema";
// import { Swiper, SwiperSlide } from "swiper/react";

function SignForm() {
  const [message, setMessage] = useState("");

  // Submit işləmə funksiyası
  function handleSubmit(e: any) {
    e.preventDefault();

    fetch("https://oyrenoyret.koljan.net/public/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: e.email, password: e.password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Giriş yapılamadı.");
        }
        return response.json();
      })
      .then((data) => {
        setMessage(
          `Giriş başarılı! Hoş geldiniz, ${data.user?.name || "Kullanıcı"}`
        );
        // Tokeni localStorage-a əlavə edin
        localStorage.setItem("authToken", data.token);
      })
      .catch((error) => {
        console.error("Giriş hatası:", error);
        setMessage("Giriş başarısız, bilgilerinizi kontrol edin.");
      });

    console.log("Token: ");
  }

  return (
    <>
      <div className="flex  gap-5 p-4 rounded-[25px] h-[65vh] w-[90%] md:w-fit md:h-fit md:rounded-[40px]  bg-neutral-400/50 backdrop-blur-lg">
        <div className="hidden md:flex h-[60vh] w-[27vw] rounded-[30px] p-3 justify-center bg-[url('/signFormImage.png')] bg-cover">
          <div className="">
            <div className="bg-neutral-400/50 h-[30vh] backdrop-blur-lg rounded-[40px] mt-5 text-center w-[20vw] p-5 flex flex-col justify-center">
              <p className="text-white text-[1.3rem]">
                Sizi yenidən görmək çox xoşdur
              </p>
            </div>
            <div className="h-[20vh] flex flex-col justify-end items-center">
              <div className="flex  bg-red  gap-3">
                <p className="w-[60px] rounded-[5px] h-[8px] bg-orange-600 backdrop-blur-lg "></p>
                <p className="w-[60px] rounded-[5px] h-[8px] bg-white backdrop-blur-lg "></p>
                <p className="w-[60px] rounded-[5px] h-[8px] bg-white backdrop-blur-lg "></p>
              </div>
            </div>
          </div>
        </div>

        <Formik
          initialValues={{
            text: "",
            password: "",
            repeatPassword: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={RegisterSchema}
        >
          <Form
            className="flex flex-col justify-evenly items-center w-full"
            onSubmit={(e) => handleSubmit(e)}
          >
            <legend className="text-[1.7rem] text-white ">Hesab Yaradın</legend>
            <label htmlFor="text">
              <Field
                type="text"
                name="text"
                placeholder="E-poçt"
                className="  md:text-[1.3rem] xs:text-[1.1rem] class-input"
              />
              <ErrorMessage
                name="text"
                component="div"
                render={(msg) => <div className="error-message">{msg}</div>}
              />
            </label>

            <label htmlFor="password">
              <Field
                type="password"
                name="password"
                placeholder="Şifrə"
                className="class-input md:text-[1.3rem] xs:text-[1.1rem]"
              />
              <ErrorMessage
                name="password"
                component="div"
                render={(msg) => <div className="error-message">{msg}</div>}
              />
            </label>

            <label htmlFor="repeatPassword">
              <Field
                type="password"
                name="repeatPassword"
                placeholder="Təkrar şifrə"
                className="class-input md:text-[1.3rem] xs:text-[1.1rem]"
              />
              <ErrorMessage
                name="repeatPassword"
                component="div"
                render={(msg) => <div className="error-message">{msg}</div>}
              />
            </label>
            <p className="text-red-600">{message}</p>
            <button type="submit" className="form-button">
              Növbəti
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default SignForm;
