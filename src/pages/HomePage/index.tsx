import React, { useEffect, useState } from "react";


function HomePage() {
  const url = "http://localhost:2030/cart";
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) =>setData(data));
  });
  return (
    <>
      <div>
        <div className="container mx-auto">
          <div className="py-7 ">
            <p className="text-white p-3 text-[1.4rem]">Hamısı</p>
            <div className="flex justify-center gap-5 py-7">
              <button className="cursor-pointer lg:p-3 p-2 rounded-[15px] bg-white text-black w-[36vw] lg:w-[15vw]">
                Bloglar
              </button>
              <button className="cursor-pointer lg:p-3 p-2 rounded-[15px] bg-neutral-800 text-white w-[36vw] lg:w-[15vw]">
                Anonim paylaşımlar
              </button>
            </div>
            <section className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">         
              {
             data?data.map(({id, image, blog, author, likes, reads }) => {
              return (
                <React.Fragment key={id}>
                  <div  className="rounded-[20px] text-white p-5 cursor-pointer hover:scale-105 duration-500">
                    <div className=" h-[30vh] ">
                      <img
                        className="w-full h-full object-cover rounded-t-[20px]"
                        src={image}
                        alt="Picture"
                      />
                    </div>

                    <div className=" bg-white text-black flex justify-between p-3 rounded-b-[20px]" >
                      <div className="flex gap-3 items-center p-2">
                        <div className="flex flex-col justify-center">
                          <img
                            className="lg:size-[70px] size-[50px] rounded-[10px] object-cover"
                            src="/logo-dark.jpg"
                            alt="logo"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <p className="text-[1rem] font-semibold lg:text-[1.6rem]">{author}</p>
                          <p className="text-stone-600 tetx-[1.4rem]">{blog}</p>
                        </div>
                      </div>
                      <div className="flex flex-col justify-center items-center gap-2 ">
                        <div className="text-[1rem] flex gap-2">Oxundu : <p className="py-1 rounded-[10px] w-[50px] bg-stone-400 text-center">{reads}</p></div>
                        <div className="text-[1rem] flex gap-2">Bəyənildi : <p className="py-1 rounded-[10px] w-[50px] bg-stone-400 text-center">{likes}</p></div>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              );
            }):"salam"
              }
              
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
