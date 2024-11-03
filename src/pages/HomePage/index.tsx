
import Blogs from "../../Components/Blogs";
function HomePage() {
  
  return (
    <>
      <div>
        <div className="container mx-auto md:min-h-[90vh] ">
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
            <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7 xs:place-items-center">
              <Blogs/>

            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
