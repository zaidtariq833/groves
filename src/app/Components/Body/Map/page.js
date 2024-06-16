import React from "react";
import MapLocationImg from "../../../../../public/assets/map-location.png";
import Image from "next/image";
import { Button } from "@/app/helpers/Button";
import "./MapLocation.css";

const MapLocation = () => {
  const openMap = "Open the Map";
  return (
    <div className="flex items-center justify-around mapLoc">
      <div>
        <Image
          src={MapLocationImg}
          className="w-96 rounded-3xl shadow-md bg-white mapGrove"
        />
      </div>
      <div className="grovesExp">
        <span className="tracking-wide text-[#fafafa]">
          EXPERIENCE THE GROVES
        </span>
        <h1 className="font-custom-font-playfair text-[#fafafa] text-[4rem] textExp">
          Find your place
        </h1>
        <div className="text-[#fafafa] tracking-wide textInter">
          Our interactive map will show you the way to the{" "}
          <span className="block"></span> shops and restaurants that you want to
          see
        </div>
        <div className="mt-8 w-8/12	whitespace-nowrap">
          <Button btnText={openMap} />
        </div>
      </div>
    </div>
  );
};

export default MapLocation;
