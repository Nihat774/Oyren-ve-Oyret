import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
const HomePage = lazy(() => import("../../pages/LoginPage"));
const CreateAccount = lazy(() => import("../../pages/CreateAccount"));
const AboutPage = lazy(()=>import('../../pages/About'))
const RegularPage = lazy(()=>import('../../pages/Regular'))
function MyRoutes() {
  const location = useLocation();
  return (
    <>
      <Suspense fallback="loading">
        <Routes location={location}>
          <Route path="/login" element={<HomePage />} />
          <Route path="/create" element={<CreateAccount />} />
          <Route path='about' element={<AboutPage/>} />
          <Route path='/şərt və qaydalar' element={<RegularPage/>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default MyRoutes;
