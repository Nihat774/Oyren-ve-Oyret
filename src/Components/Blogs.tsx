import React from 'react';
import axios from 'axios';
import useSWR from 'swr';
import Loader from '../ui/Loader';
import {motion} from "framer-motion"
interface Blog{
    id:number;
    image:string;
    blog: string;
    author:string;
    likes:number;
    reads:number
}
const Blogs: React.FC = () => {
    const url = "https://faux-api.com/api/v1/blog_5522944561456351";

  const fetcher = (resurl:any) => axios.get(resurl).then(res=>res.data)
  const { data, error, isLoading } = useSWR(url, fetcher)
  if (error){
    console.log(error)
    return (<div className='text-white text-[1.2rem]'>Məlumat bazasında xəta baş verdi. Yenidən cəhd edin.</div>)
  }
  
  console.log(data)
  if(isLoading) return <Loader/>
  
  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
   <>
     {
              data.result.map(({ id, image, blog, author, likes, reads }:Blog) => {
                return (
                  <React.Fragment key={id}>
                    <motion.div  variants={item} className="item rounded-[20px] text-white  p-3 cursor-pointer md:hover:scale-105 xs:hover:scale-[1.04] duration-500 ">
                      <div className=" h-[30vh]  ">
                        <img
                          className="w-full h-full object-cover rounded-t-[20px]"
                          src={image}
                          alt="Picture"
                        />
                      </div>

                      <div className=" bg-white text-black flex justify-between p-3 rounded-b-[20px]">
                        <div className="flex gap-3 items-center p-2">
                          <div className="flex flex-col justify-center">
                            <img
                              className="lg:size-[70px] size-[50px] rounded-[10px] object-cover"
                              src="/logo-dark.jpg"
                              alt="logo"
                            />
                          </div>
                          <div className="flex flex-col gap-1">
                            <p className="text-[1rem] font-semibold lg:text-[1.6rem]">
                              {author}
                            </p>
                            <p className="text-stone-600 tetx-[1.4rem]">
                              {blog}
                            </p>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center items-center gap-2 ">
                          <div className="text-[1rem] flex gap-2">
                            Oxundu :{" "}
                            <p className="py-1 rounded-[10px] w-[50px] bg-stone-400 text-center">
                              {reads}
                            </p>
                          </div>
                          <div className="text-[1rem] flex gap-2">
                            Bəyənildi :{" "}
                            <p className="py-1 rounded-[10px] w-[50px] bg-stone-400 text-center">
                              {likes}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </React.Fragment>
                );
              })}
   </>
  );
};

export default Blogs;
