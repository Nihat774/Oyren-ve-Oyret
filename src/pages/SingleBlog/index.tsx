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
       <div className="container mx-auto">
       <div className="flex justify-between">

          <div className="flex flex-col justify-center w-[70vh] h-[70vh]">
            <img className="rounded-[10px]  object-cover" src={thumbnail} alt="" />
          </div>

          <div className="p-7 w-[50vw] flex flex-col justify-around">
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
