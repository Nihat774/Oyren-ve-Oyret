import React from "react";
import axios from "axios";
import useSWR from "swr";
import Loader from "../ui/Loader";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
interface Blog {
  slug: string;
  id: number;
  thumbnail: string;
  title: string;
  author_name: string;
  likes: number;
  reads: number;
}
const Blogs: React.FC = () => {
  const url = "https://oyrenoyret.koljan.net/public/api/posts";
  const location = useNavigate();
  const fetcher = (resurl: any) => axios.get(resurl).then((res) => res.data);
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) {
    console.log(error);
    return (
      <div className="text-white text-[1.2rem]">
        Məlumat bazasında xəta baş verdi. Yenidən cəhd edin.
      </div>
    );
  }

  // console.log(data)
  if (isLoading) return <Loader />;

  const item = {
    hidden: { x: 20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  };
  return (
    <>
      {data.data.map(({ id, thumbnail, title, slug, author_name }: Blog) => {
        return (
          <React.Fragment key={id}>
            <motion.div
              variants={item}
              onClick={() => location(`${"/blog/" + slug}`)}
              className="rounded-[20px] text-white  p-3 cursor-pointer md:hover:scale-105 xs:hover:scale-[1.04] duration-500 "
            >
              <div className=" h-[30vh]">
                <img
                  className="w-full h-full object-cover rounded-t-[35px]"
                  src={thumbnail}
                  alt="Picture"
                />
              </div>

              <div className=" bg-white text-black flex justify-between p-2  rounded-b-[35px]">
                <div className="flex gap-3 items-center  ">
                  <div className=" ">
                    <img
                      className="w-[50px] h-[50px] rounded-[10px] rounded-bl-[21px] object-cover"
                      src="/logo-dark.jpg"
                      alt="logo"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[1rem] w-[5vw] font-semibold lg:text-[1.4rem]">
                      {author_name}
                    </p>
                    <abbr title={title} className="no-underline">
                      <p className="text-stone-600 text-[1.1rem] w-[20vw] md:w-[7vw] line-clamp-1">
                        {title}
                      </p>
                    </abbr>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-2 px-2 ">
                  <div className="text-[0.8rem] flex gap-2">Oxundu : 46</div>
                  <div className="text-[0.8rem]  flex gap-2">
                    Bəyənildi : 115
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
