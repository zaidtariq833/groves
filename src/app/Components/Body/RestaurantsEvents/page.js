import React from "react";
import { Button } from "@/app/helpers/Button";
import HawanianCity from "../../../../../public/assets/hawanian-city.jpeg";
import PalmTree from "../../../../../public/assets/palm-tree.png";
import GrovesStone from "../../../../../public/assets/groves-stone.png";
import GrovesPalmTable from "../../../../../public/assets/Riyadh-Season-The-Groves.png";
import Image from "next/image";
import "./Restaurants.css";

const RestaurantsEvents = () => {
  const txtBook = "Book Tickets";
  return (
    <div>
      <div className="flex gap-[10rem] items-center mainRes">
        <div>
          <h1 className="text-[#fafafa] font-custom-font-playfair text-[4rem] ml-[40px] curateExp">
            Curate Your <span className="block"></span> Experience
            <span className="block"></span> as you like
          </h1>
          <div className="mt-8 ml-[40px] ">
            <Button btnText={txtBook}></Button>
          </div>
        </div>
        <div className="CardsRes">
          <div className="flex justify-between items-center gap-[40px] whitespace-nowrap mt-10 relative right-[-80px]">
            <div>
              <Image
                src={GrovesStone}
                alt="Hawanian City"
                className="mt-1 rounded-3xl cardImgRes"
              />
              <div className="text-[#fafafa] text-[2rem]  text-center mt-2 font-custom-font-playfair">
                Restaurants
              </div>
            </div>

            <div className="">
              <Image
                src={GrovesPalmTable}
                alt="Lucawanian City"
                className="h-96 rounded-3xl cardImgRes"
              />
              <div className="text-[#fafafa] text-[2rem] text-center mt-2 font-custom-font-playfair">
                Experiences
              </div>
            </div>

            <div>
              <Image
                src={PalmTree}
                alt="Lucawanian City"
                className="mt-5 rounded-3xl cardImgRes"
              />
              <div className="text-[#fafafa] text-[2rem] text-center mt-2 font-custom-font-playfair">
                Events Plan
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantsEvents
