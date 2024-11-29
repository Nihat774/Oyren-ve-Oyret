

import ScrollAnimation from "../../Components/animations/ScrollAnimation";
import Blogs from "../../Components/Blogs";
import { motion } from "framer-motion";
function HomePage() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.6,
        staggerChildren: 0.5,
      },
    },
  };
  return (
    <>
      <div>
        <ScrollAnimation>
          <div className=" px-5 md:min-h-[90vh] ">
            <div className="py-7 ">
              <p className="text-white p-3 text-[1.4rem]">Hamısı</p>
              <div></div>
              <div className="flex justify-center gap-5 py-7">
                <button className="cursor-pointer lg:p-3 p-2 rounded-[15px] bg-white text-black w-[36vw] lg:w-[15vw]">
                  Bloglar
                </button>
                <button className="cursor-pointer lg:p-3 p-2 rounded-[15px] bg-neutral-800 text-white w-[36vw] lg:w-[15vw]">
                  Anonim paylaşımlar
                </button>
              </div>
              <motion.div
                variants={container}
                initial="hidden"
                animate="visible"
                className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-7 xs:place-items-center"
              >
                <Blogs />
              </motion.div>
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </>
  );
}

export default HomePage;
