import { ErrorMessage, Field, Form, Formik } from "formik";
import validationSchema from "../../Validations/SampleSchema";
import { useEffect, useState } from "react";
// import Swiper from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

function SignForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [csrfToken, setCsrfToken] = useState("");
  const [message, setMessage] = useState("");

  // CSRF tokenini almaq üçün useEffect
  useEffect(() => {
    fetch("https://oyrenoyret.koljan.net/public/csrf-token", {
      credentials: "include", // Cookie'leri göndərmək üçün
    })
      .then((response) => response.json())
      .then((data) => {
        setCsrfToken(data.csrf_token);
      })
      .catch((error) => {
        console.error("CSRF token alınamadı:", error);
        setMessage("CSRF token alınamadı.");
      });
  }, []);

  // Submit işləmə funksiyası
  function handleSubmit(e: any) {
    e.preventDefault();
    if (!csrfToken) {
      setMessage("CSRF tokeni yoxdur");
    }

    fetch("https://oyrenoyret.koljan.net/public/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRF-TOKEN": csrfToken, // CSRF tokeni ekle
      },
      body: JSON.stringify({ email, password, csrf_token: csrfToken }),
      credentials: "include", // Cookie'leri göndərmək üçün
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

    console.log("Token: " + csrfToken);
  }

  const [currentSlide, setCurrentSlide] = useState(1); // Hal-hazırda göstərilən slayd

  const handleButtonClick = () => {
    setCurrentSlide(2); // 2-ci slayd göstəriləcək
  };
  return (
    <>
      <div className="flex gap-5 p-5 xs:rounded-[25px] xs:h-[65vh] xs:w-[90%] md:w-fit md:h-fit md:rounded-[40px]  bg-neutral-400/50 backdrop-blur-lg">
        <Swiper
           slidesPerView={1}
           allowTouchMove={false} // Manuel keçidə icazə verilmir
        >
           {currentSlide === 1 && (
            <SwiperSlide>
            <div className="xs:hidden md:flex h-[59.7vh] w-[27vw] rounded-[30px] p-3 justify-center bg-[url('/signFormImage.png')] bg-cover">
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
          </SwiperSlide> )}

          {currentSlide === 2 && (
          <SwiperSlide>
             <div className="xs:hidden md:flex h-[59.7vh] w-[27vw] rounded-[30px] p-3 justify-center bg-[url('/signFormImage.png')] bg-cover">
              <div className="">
                <div className="bg-neutral-400/50 h-[30vh] backdrop-blur-lg rounded-[40px] mt-5 text-center w-[20vw] p-5 flex flex-col justify-center">
                  <p className="text-white text-[1.3rem]">
                    Sizi yenidən görmək çox xoşdur
                  </p>
                </div>
                <div className="h-[20vh] flex flex-col justify-end items-center">
                  <div className="flex  bg-red  gap-3">
                    <p className="w-[60px] rounded-[5px] h-[8px] bg-orange-600 backdrop-blur-lg "></p>
                    <p className="w-[60px] rounded-[5px] h-[8px] bg-orange-600 backdrop-blur-lg "></p>
                    <p className="w-[60px] rounded-[5px] h-[8px] bg-white backdrop-blur-lg "></p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        )}
        </Swiper>

        <Formik
          initialValues={{
            text: "",
            password: "",
            repeatPassword: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
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
                value={email}
                placeholder="E-poçt"
                className="  md:text-[1.3rem] xs:text-[1.1rem] class-input"
                onChange={(e: any) => setEmail(e.target.value)}
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
                value={password}
                placeholder="Şifrə"
                className="class-input md:text-[1.3rem] xs:text-[1.1rem]"
                onChange={(e: any) => setPassword(e.target.value)}
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
            {message}
            <button
              type="submit"
              className="form-button"
              onClick={handleButtonClick}
            >
              Növbəti
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default SignForm;
