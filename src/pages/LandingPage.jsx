import React from "react";
import gambar from "../assets/Doctor-PNG-Free-Download.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useParams } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LandingPage = () => {
  const [data, setData] = useState([]);
  const [img, setImg] = useState([]);
  const [loading, setLoading] = useState(true);
  const [more, setMore] = useState(false);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `https://fsw-api-grup4.herokuapp.com/api/v1/articles/`
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

  const Card = () => {
    return (
      <>
        {loading ? (
          <>
            <div className="my-5 mx-5">
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
            </div>
            <div className="my-5 mx-5">
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
            </div>
            <div className="my-5 mx-5">
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
            </div>
            <div className="my-5 mx-5">
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
            </div>
          </>
        ) : (
          data.data.slice(0, 4).map((data1) => {
            console.log(data1);
            return (
              <>
                <div className="w-full py-5 ">
                  <div className="flex rounded-md shadow-sm shadow-black mx-5">
                    <div>
                      <img
                        className="w-28 h-full rounded-tl-md rounded-bl-md"
                        src={data1.media_url}
                        alt="/"
                      />
                    </div>
                    <div className="grid grid-row-2 p-4 w-full h-full min-h-[100px]">
                      <p className="text-base mx-2">{data1.title} </p>
                      <NavLink to={`/detail/${data1.id}`}>
                        <p className="text-center text-blue-500">Read More</p>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </>
    );
  };

  const CardFull = () => {
    return (
      <>
        {loading ? (
          <>
            <div className="my-5 mx-5">
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
              <Skeleton style={{ lineHeight: "50px" }} height={30} />
            </div>
          </>
        ) : (
          data.data.map((data1) => {
            console.log(data1);
            return (
              <>
                <div className="w-full py-5 ">
                  <div className="flex rounded-md shadow-sm shadow-black mx-5">
                    <div>
                      <img
                        className="w-28 h-full rounded-tl-md rounded-bl-md"
                        src={data1.media_url}
                        alt="/"
                      />
                    </div>
                    <div className="grid grid-row-2 p-4 w-full h-full min-h-[100px]">
                      <p className="text-base mx-2">{data1.title} </p>
                      <NavLink to={`/detail/${data1.id}`}>
                        <p className="text-center text-blue-500">Read More</p>
                      </NavLink>
                    </div>
                  </div>
                </div>
              </>
            );
          })
        )}
      </>
    );
  };

  const _handleMore = () => {
    setMore(!more);
  };
  return (
    <div className="max-w-[1200px] mx-auto min-h-screen">
      <div className="grid grid-cols-2 mt-8">
        {more ? <CardFull /> : <Card />}
      </div>
      <div className="w-full">
        <p
          className="text-center text-blue-500 cursor-pointer font-medium"
          onClick={_handleMore}
        >
          {more ? <>Show Less</> : <>Read More</>}
        </p>
      </div>
      <div className="flex">
        <div className="grid grid-cols-2 mt-8" id="About">
          <p className="text-base font-medium my-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            corporis esse accusamus iure et. Similique incidunt facere
            voluptatum perferendis? Accusantium officiis reprehenderit sapiente
            consequatur maiores ullam vitae alias consequuntur illo! Harum vel
            fuga a quis nobis unde voluptas, vero voluptatibus tempora est atque
            commodi aperiam optio corporis delectus recusandae temporibus neque,
            distinctio nostrum fugit iure sed ad earum! Perspiciatis, possimus.
            Ipsam dignissimos beatae nesciunt totam rem vitae ratione possimus
            nulla sint officia maxime corrupti ea eaque sapiente doloribus
            doloremque nisi, cumque modi magni harum, optio maiores porro. Esse,
            rerum ea.
          </p>
          <img src={gambar} alt="" srcset="" className="mx-auto" />
        </div>
      </div>
      <div className="flex mb-8">
        <div className="grid grid-cols-2 mt-8" id="Contact">
          <img src={gambar} alt="" className="mx-auto" />
          <p className="text-base font-medium my-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
            corporis esse accusamus iure et. Similique incidunt facere
            voluptatum perferendis? Accusantium officiis reprehenderit sapiente
            consequatur maiores ullam vitae alias consequuntur illo! Harum vel
            fuga a quis nobis unde voluptas, vero voluptatibus tempora est atque
            commodi aperiam optio corporis delectus recusandae temporibus neque,
            distinctio nostrum fugit iure sed ad earum! Perspiciatis, possimus.
            Ipsam dignissimos beatae nesciunt totam rem vitae ratione possimus
            nulla sint officia maxime corrupti ea eaque sapiente doloribus
            doloremque nisi, cumque modi magni harum, optio maiores porro. Esse,
            rerum ea.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
