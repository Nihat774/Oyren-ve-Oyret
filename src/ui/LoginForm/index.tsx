import { ErrorMessage, Field, Form, Formik } from "formik";

import { useState } from "react";
import { LoginSchema } from "../../Validations/SampleSchema";

function LoginForm() {
  const [message, setMessage] = useState("");
  const handleSubmit = (values: any) => {
    console.log(values);

    fetch("https://oyrenoyret.koljan.net/public/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: values.text, // Use the email from Formik
        password: values.password, // Use the password from Formik
      })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Login failed.");
        }
        return response.json();
      })
      .then((data) => {
        // setMessage(`Login successful! Welcome, ${data.user?.name || "User"}`);
        alert(`Login successful! Welcome, ${data.user?.name || "User"}`)
        console.log(data)
        localStorage.setItem("token",data.token)
        
      })
      .catch((error) => {
        console.error("Login error:", error);
        setMessage("Login failed, please check your credentials.");
      });
  };

  return (
    <>
      <div className="flex gap-5 p-5 rounded-[25px] h-[65vh] w-[90%] md:w-fit md:rounded-[40px]  bg-neutral-400/50 backdrop-blur-lg">
        <div className="hidden md:flex h-[59vh] w-[27vw] rounded-[30px] p-3 justify-center bg-[url('/signFormImage.png')] bg-cover">
          {/* <div className="flex gap-5 p-5 rounded-[25px] h-[65vh] w-[90%] md:w-fit md:h-fit md:rounded-[40px]  bg-neutral-400/50 backdrop-blur-lg">
        <div className="hidden md:flex h-[62.5vh] w-[27vw] rounded-[30px] p-3 justify-center bg-[url('/signFormImage.png')] bg-cover"> */}

          <div className="bg-neutral-400/50 h-[28vh] backdrop-blur-lg rounded-[40px] mt-5 text-center w-[20vw] p-5 flex flex-col justify-center">
            <p className="text-white text-[1.3rem]">
              Sizi yenidən görmək çox xoşdur
            </p>
          </div>
        </div>

        <Formik
          initialValues={{
            text: "",
            password: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={LoginSchema}
        >
          <Form className="flex flex-col justify-evenly items-center w-full">
            <legend className="text-[1.7rem] text-white ">Hesab Yaradın</legend>
            <label htmlFor="text">
              <Field
                type="text"
                name="text"
                placeholder="E-poçt"
                className="class-input"
              />
              <ErrorMessage
                name="text"
                
                component="div"
                render={(msg) => (
                  <div className="error-message text-red-600">{msg}</div>
                )}
              />
            </label>

            <label htmlFor="password">
              <Field
                type="password"
                name="password"
                placeholder="Şifrə"
                className="class-input"
              />
              <ErrorMessage
                name="password"
                component="div"
                render={(msg) => <div className="error-message">{msg}</div>}
              />
            </label>
            <p className="text-red-600">{message}</p>
            <button type="submit" className="form-button">
              Daxil ol
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default LoginForm;
