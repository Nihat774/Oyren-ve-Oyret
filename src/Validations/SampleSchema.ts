import * as Yup from "yup";
  const validationSchema = Yup.object({
    text: Yup.string().required("Email daxil etmək məcburidir!").email("Düzgün email adresi daxil edin!"),
    password: Yup.string().required("Şifrə daxil etmək məcburidir!").min(8,"Ən azı 8 simvol olmalıdır"),
    repeatPassword:Yup.string().required("Şifrə daxil etmək məcburidir!").min(8,"Ən azı 8 simvol olmalıdır")
  });
export default validationSchema;