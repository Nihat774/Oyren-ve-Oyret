import { Swiper, SwiperSlide } from 'swiper/react';

const MySwiper = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation // Növbəti və əvvəlki düymələr üçün
      loop={true} // Sonsuz dövrə
    >
      <SwiperSlide>
      <div className="xs:hidden md:flex h-[59.7vh] w-[27vw] rounded-[30px] p-3 justify-center bg-[url('/signFormImage.png')] bg-cover">
          <div className="">
            <div className="bg-neutral-400/50 h-[30vh] backdrop-blur-lg rounded-[40px] mt-5 text-center w-[20vw] p-5 flex flex-col justify-center">
              <p className="text-white text-[1.3rem]">
                Sizi yenidən görmək çox xoşdur
              </p>
            </div>
            <div className="h-[20vh] flex flex-col justify-end items-center">
              <div className="flex  bg-red  gap-3">
                <p className="w-[60px] rounded-[5px] h-[8px] bg-orange-600 backdrop-blur-lg "></p>
                <p className="w-[60px] rounded-[5px] h-[8px] bg-white backdrop-blur-lg "></p>
                <p className="w-[60px] rounded-[5px] h-[8px] bg-white backdrop-blur-lg "></p>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div>
          <h2>Başqa bölmə</h2>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MySwiper;
