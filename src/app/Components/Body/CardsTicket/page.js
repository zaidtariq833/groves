import React from "react";
import { Button } from "../../../helpers/Button";
import Image from "next/image";
import HawanianCity from "../../../../../public/assets/hawanian-city.jpeg";
import PalmTree from "../../../../../public/assets/palm-tree.png";
import GrovesStone from "../../../../../public/assets/groves-stone.png";
import GrovesPalmTable from "../../../../../public/assets/Riyadh-Season-The-Groves.png";
import "./CardsTicket.css"

export const CardsTicket = () => {
  const txtTicket = "Book General Access Ticket";
  return (
    <>
      <div>
        <h1 className="text-[#FAF9F6] font-custom-font-playfair ml-[110px] generalAccessTicket">
          Book General Access ticket and <span className="block"></span> enjoy
          the free attractions for free
        </h1>

        <div className="w-2/5 mt-4 ml-[110px] buttonTicket">
          <Button btnText={txtTicket} />
        </div>
      </div>

      <div className="flex justify-between items-center mr-[40px] gap-[40px] whitespace-nowrap mt-10 cardsOfImages">
        <div>
          <Image
            src={HawanianCity}
            alt="Hawanim Groves City"
            className="h-96 rounded-3xl imgCity"
          />
          <h1 className="text-[#fafafa] text-[2rem] text-center mt-2 font-custom-font-playfair">
            Hawanim <span className="block"></span> Groves City
          </h1>
        </div>

        <div>
          <Image
            src={GrovesStone}
            alt="Hawanian City"
            className="mt-1 rounded-3xl imgCity"
          />
          <div className="text-[#fafafa] text-[2rem]  text-center mt-2 font-custom-font-playfair">
            Little Krazy
          </div>
        </div>

        <div className="">
          <Image
            src={GrovesPalmTable}
            alt="Lucawanian City"
            className="h-96 rounded-3xl imgCity"
          />
          <div className="text-[#fafafa] text-[2rem] text-center mt-2 font-custom-font-playfair">
            Picnic Market
          </div>
        </div>

        <div>
          <Image
            src={PalmTree}
            alt="Lucawanian City"
            className="mt-5 rounded-3xl imgCity"
          />
          <div className="text-[#fafafa] text-[2rem] text-center mt-2 font-custom-font-playfair">
            Lucawanian <span className="block"></span> City
          </div>
        </div>
      </div>
    </>
  );
};
