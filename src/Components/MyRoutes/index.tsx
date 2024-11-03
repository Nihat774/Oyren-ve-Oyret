import { lazy, Suspense } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Loader from "../../ui/Loader";
import { AnimatePresence } from "framer-motion";
const LoginPage = lazy(() => import("../../pages/LoginPage"));
const CreateAccount = lazy(() => import("../../pages/CreateAccount"));
const AboutPage = lazy(() => import("../../pages/About"));
const RegularPage = lazy(() => import("../../pages/Regular"));
const HomePage = lazy(() => import("../../pages/HomePage"));
const NotFoundPage = lazy(()=>import("../../pages/404NotFound"))
function MyRoutes() {
  const location = useLocation();
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AnimatePresence mode="wait">
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<CreateAccount />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="/sertler" element={<RegularPage />} />
            <Route path="*" element={<NotFoundPage/>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  );
}

export default MyRoutes;
