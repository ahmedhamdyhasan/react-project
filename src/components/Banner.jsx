
import { HiArrowNarrowRight, HiArrowNarrowLeft } from "react-icons/hi";
import { useState } from "react";
const Banner = () => {
  const [currentImg, setCurrentImg] = useState(0);
 
const data = [
  "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
  "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
  "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
  "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
];
  const previos = () => {
    setCurrentImg(currentImg === 0 ? 3 : (prev) => prev - 1);
  };

  const next = () => {
    setCurrentImg(currentImg === 3 ? 0 : (prev) => prev + 1);
  };
  return (
    // this section is an img slider for offers
    <div id="banner" className="w-full h-auto overflow-x-hidden pt-7  ">
      <div className="w-screen-h-[650px] relative  transition-transform duration-1000">
        <div
          style={{ transform: `translateX(-${currentImg * 100}vw)` }}
          className="w-[400vw] h-full flex  "
        >
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="ImgOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="ImgTwo"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="ImgThree"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[3]}
            alt="ImgFour"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={next}
            className=" w-14 h-12 border-[1px] border-gray-700 flex items-center
             justify-center hover:cursor-pointer hover:bg-gray-700
              hover:text-white active:bg-gray-900 duration-300"
          >
            <HiArrowNarrowLeft />
          
          </div>
          <div
            onClick={previos}
            className="w-14 h-12 border-[1px]
             border-gray-700 flex items-center justify-center
              hover:cursor-pointer hover:bg-gray-700 hover:text-white
               active:bg-gray-900 duration-300"
          >
            <HiArrowNarrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
