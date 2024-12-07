import { ErrorMessage, Field, Form, Formik } from "formik";
import validationSchema from "../../Validations/SampleSchema";
import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');



  const handleSubmit = (values:any) => {

    fetch('https://oyrenoyret.koljan.net/public/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: values.text, // Use the email from Formik
        password: values.password, // Use the password from Formik
      }),
      credentials: 'include', // Include credentials (cookies)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Login failed.');
        }
        return response.json();
      })
      .then((data) => {
        setMessage(`Login successful! Welcome, ${data.user?.name || 'User'}`);
      })
      .catch((error) => {
        console.error('Login error:', error);
        setMessage('Login failed, please check your credentials.');
      });
  };

  return (
    <>

      <div className="flex gap-5 p-5 xs:rounded-[25px] xs:h-[65vh] xs:w-[90%] md:w-fit md:rounded-[40px]  bg-neutral-400/50 backdrop-blur-lg">
        <div className="xs:hidden md:flex h-[62.5vh] w-[27vw] rounded-[30px] p-3 justify-center bg-[url('/signFormImage.png')] bg-cover">

      {/* <div className="flex gap-5 p-5 rounded-[25px] h-[65vh] w-[90%] md:w-fit md:h-fit md:rounded-[40px]  bg-neutral-400/50 backdrop-blur-lg">
        <div className="hidden md:flex h-[62.5vh] w-[27vw] rounded-[30px] p-3 justify-center bg-[url('/signFormImage.png')] bg-cover"> */}

          <div className="bg-neutral-400/50 h-[30vh] backdrop-blur-lg rounded-[40px] mt-5 text-center w-[20vw] p-5 flex flex-col justify-center">
            <p className="text-white text-[1.3rem]">
              Sizi yenidən görmək çox xoşdur
            </p>
          </div>
        </div>

        <Formik
          initialValues={{
            text: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className="flex flex-col justify-evenly items-center w-full">
            <legend className="text-[1.7rem] text-white ">Hesab Yaradın</legend>
            <label htmlFor="text">
              <Field
                type="text"
                name="text"
                value={email}
                placeholder="E-poçt"
                className="class-input"
                onChange={(e:any) => setEmail(e.target.value)}
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
                className="class-input"
                onChange={(e:any) => setPassword(e.target.value)}
              />
              <ErrorMessage
                name="password"
                component="div"
                render={(msg) => <div className="error-message">{msg}</div>}
              />
            </label>
            {message}
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
