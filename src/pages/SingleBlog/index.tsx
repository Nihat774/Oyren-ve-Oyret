import axios from "axios";
import useSWR from "swr";
import Loader from "../../ui/Loader";
import { useParams } from "react-router-dom";
import React from "react";

function SingleBlog() {
  const { slug } = useParams();
  const url = `https://oyrenoyret.koljan.net/public/api/post/${slug}`;

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

  if (isLoading) return <Loader />;

  const {
    id,
    // slug: blogSlug,
    // author_name,
    thumbnail,
    content,
    description,
  } = data.data;

  return (
    <React.Fragment key={id}>
      <section className="min-h-[74.2vh]">
       <div className="px-5">
       <div className="flex md:flex-row flex-col justify-between">

          <div className="flex justify-between items-center w-[80vw] h-[40vh] md:h-[70vh] md:w-[50vw] ">
            <img className="rounded-[10px] md:w-[80%] md:h-[80%] object-cover" src={thumbnail} alt="ph0to" />
          </div>

          <div className="p-7 md:w-[50vw] flex flex-col justify-around">
             <div className="text-white text-[1.1rem]">{description}</div>
             <div className="text-white text-[1.1rem]">{content}</div>
          </div>
        </div>
       </div>
      </section>
    </React.Fragment>
  );
}

export default SingleBlog;
