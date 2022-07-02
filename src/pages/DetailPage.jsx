import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const DetailPage = () => {
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://fsw-api-grup4.herokuapp.com/api/v1/articles/${id}`
      );
      const responseImg = await fetch(
        `https://res.cloudinary.com/alandrma/image/upload/v1/alodokter_media/q5wl3g9mfeip916t0h8y5kssv87h.jpg`
      );
      setData(await response.json());
      setImg(await responseImg.blob());
      setLoading(false);
    };
    getData();
  }, []);
  console.log(data);
  return (
    <div>
      {loading ? (
        <>
          <div className="max-w-[1200px] mx-auto my-auto min-h-[648px] grid grid-cols-2 mt-8 items-center">
            <div className="my-5 mx-5">
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
            </div>
            <div className="my-5 mx-5">
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="max-w-[1200px] mx-auto min-h-[648px]">
            {/* --------------------------------Btn-back */}
            <NavLink to={"/"}>
              <div className="flex items-center border-2 border-black rounded-lg w-fit p-1 mt-8">
                <AiOutlineArrowLeft className="ml-2" />
                <p className="mx-2">Back</p>
              </div>
            </NavLink>
            {/* --------------------------------End of btn-back  */}
            <div className="grid grid-cols-2 gap-8 items-center mt-8">
              <div>
                <img src={data.data.media_url} alt="" srcset="" />
              </div>
              <div className="">
                <p className="text-justify mb-10">{data.data.body}</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default DetailPage;
