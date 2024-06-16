"use client";
import React from "react";
import { CardsTicket } from "../CardsTicket/page";
import { Cuisine } from "../Cuisine/page";
import { RestaurantsEvents } from "../RestaurantsEvents/page";
// import VideoGrove from "../../../../../public/assets/groves-video.mp4";
import { MapLocation } from "../Map/page";
import { Footer } from "../Footer/page";
import { FaArrowRight } from "react-icons/fa";
import "./UpperPost.css";

const page = () => {
  return (
    <div className="bg-custom-gradient">
      <div className="p-14">
        <h1 className="text-center text-[#FAF9F6] text-[2.95rem] font-custom-font-playfair endlessPossibilities">
          Mall Of: Endless Possibilities
        </h1>
        <h5 className="text-[#FAF9F6] text-center text-sm">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the <span className="block"></span>{" "}
          industry&apos;s standard dummy text ever since the 1500&apos;s, when an unknown
          printer took a galley <span className="block"></span>
          of type and scrambled it to make a type specimen book.
        </h5>
      </div>

      {/* <div>
        <video controls>
          <source src= {VideoGrove} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}

      <div
        className="block w-10/12 m-auto bg-custom-green rounded-3xl"
        style={{
          background:
            "linear-gradient(to right, #334014,#323E14, #313D13,#303C13, #2E3A13, #2C3712, #2B3512, #293212, #262F11 )",
        }}
      >
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="flex flex-col gap-4 p-10">
            <span className="text-[#FAF9F6] text-sm font-custom-font-playfair ">
              25 SR/GUEST
            </span>
            <div className="mt-2">
              <h1 className="text-[#FAF9F6] text-[1.5rem] sm:text-[2.5rem] font-custom-font-playfair">
                Get your General <span className="block sm:hidden"></span>
                Access Ticket
              </h1>

              <p class="text-[#FAF9F6] text-[1rem] accessTicketText">
                Lorem ipsum is simply dummy text of the printing and typesetting
                of the industry. Lorem <span class="block sm:hidden"></span>
                Ipsum has been industry&apos;s standard dummy text
              </p>
            </div>
          </div>
          <div>
            <FaArrowRight className="fa-solid fa-arrow-right text-[4rem] text-[#989D8D] pr-6 " />{" "}
          </div>
        </div>
      </div>

      <div className="pt-20">
        <CardsTicket />
      </div>

      <div className="pt-6">
        <h1 className="text-center text-[#FAF9F6] text-[2.95rem] font-custom-font-playfair">
          Experience the finest Cuisine
        </h1>
        <h5 className="text-[#FAF9F6] text-center text-sm">
          Lorem ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the <span className="block"></span>{" "}
          industry&apos;s standard dummy text ever since the 1500&apos;s, when an unknown
          printer took a galley <span className="block"></span>
          of type and scrambled it to make a type specimen book.
        </h5>
      </div>

      <div className="pt-16">
        <Cuisine />
      </div>

      <div className="pt-16">
        <RestaurantsEvents />
      </div>

      <div className="pt-16">
        <MapLocation />
      </div>

      <div className="pt-16">
        <Footer />
      </div>
    </div>
  );
};

export default page;
