import React from "react";
import VidaVera from "../../../../../public/assets/vida-vera.jpg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import "./Cuisine.css"

const Cuisine = () => {
  return (
    <div className="bg-custom-gradient rounded-3xl">
      <div className="flex gap-[40px] px-10 cardsCuisine">
        <div
          className="rounded-3xl"
          style={{
            background:
              "linear-gradient(to right, #334014,#323E14, #313D13,#303C13, #2E3A13, #2C3712, #2B3512, #293212, #262F11 )",
          }}
        >
          <Image
            src={VidaVera}
            className="rounded-tl-3xl rounded-tr-3xl p-3"
            style={{
              borderTopLeftRadius: "40px",
              borderTopRightRadius: "40px",
            }}
          />
          <div className="flex items-center justify-between">
            <div className="py-6 px-2">
              <h1 className="text-[#fafafa] text-[2rem] font-custom-font-playfair ml-8">
                Vida Vera
              </h1>
              <span className="text-[#fafafa] tracking-widest font-sans text-md space-x-4 ml-8 px-4 rounded-3xl bg-[#AD8749]">
                100 SR PER GUEST
              </span>
            </div>
            <div>
              <FaArrowRight className="fa-solid fa-arrow-right text-[4rem] text-[#989D8D] pr-6" />
            </div>
          </div>
        </div>
        <div
          className="rounded-3xl"
          style={{
            background:
              "linear-gradient(to right, #334014,#323E14, #313D13,#303C13, #2E3A13, #2C3712, #2B3512, #293212, #262F11 )",
          }}
        >
          <Image
            src={VidaVera}
            className="rounded-tl-3xl rounded-tr-3xl p-3"
            style={{
              borderTopLeftRadius: "40px",
              borderTopRightRadius: "40px",
            }}
          />
          <div className="flex items-center justify-between">
            <div className="py-6 px-2">
              <h1 className="text-[#fafafa] text-[2rem] font-custom-font-playfair ml-8">
                Zama Zulu
              </h1>
              <span className="text-[#fafafa] tracking-widest font-sans text-md space-x-4 ml-8 px-4 rounded-3xl bg-[#AD8749]">
                100 SR PER GUEST
              </span>
            </div>
            <div>
              <FaArrowRight className="fa-solid fa-arrow-right text-[4rem] text-[#989D8D] pr-6" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-[40px] mt-8 px-10 cardsCuisine">
        <div
          className="rounded-3xl"
          style={{
            background:
              "linear-gradient(to right, #334014,#323E14, #313D13,#303C13, #2E3A13, #2C3712, #2B3512, #293212, #262F11 )",
          }}
        >
          <Image
            src={VidaVera}
            className="rounded-tl-3xl rounded-tr-3xl p-3 outline-none"
            style={{
              borderTopLeftRadius: "40px",
              borderTopRightRadius: "40px",
            }}
          />
          <div className="flex items-center justify-between">
            <div className="py-6 px-2">
              <h1 className="text-[#fafafa] text-[2rem] font-custom-font-playfair ml-8">
                Khawaja Yanni
              </h1>
              <span className="text-[#fafafa] tracking-widest font-sans text-md space-x-4 ml-8 px-4 rounded-3xl bg-[#AD8749]">
                100 SR PER GUEST
              </span>
            </div>
            <div>
              <FaArrowRight className="fa-solid fa-arrow-right text-[4rem] text-[#989D8D] pr-6" />{" "}
            </div>
          </div>
        </div>
        <div
          className="rounded-3xl"
          style={{
            background:
              "linear-gradient(to right, #334014,#323E14, #313D13,#303C13, #2E3A13, #2C3712, #2B3512, #293212, #262F11 )",
          }}
        >
          <Image
            src={VidaVera}
            className="rounded-tl-3xl rounded-tr-3xl p-3"
            style={{
              borderTopLeftRadius: "40px",
              borderTopRightRadius: "40px",
            }}
          />
          <div className="flex items-center justify-between">
            <div className="py-6 px-2">
              <h1 className="text-[#fafafa] text-[2rem] font-custom-font-playfair ml-8">
                Yamagata
              </h1>
              <span className="text-[#fafafa] tracking-widest font-sans text-md space-x-4 ml-8 px-4 rounded-3xl bg-[#AD8749]">
                100 SR PER GUEST
              </span>
            </div>
            <div>
              <FaArrowRight className="fa-solid fa-arrow-right text-[4rem] text-[#989D8D] pr-6" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cuisine
