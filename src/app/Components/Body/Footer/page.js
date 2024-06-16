import React from "react";
import AppStore from "../../../../../public/assets/app-store.png";
// import Store from "../../../../../public/assets/app-store.png";
import Image from "next/image";
import GrovesLogo from "../../../../../public/assets/Groves-Logo.png";
import { FaInstagram, FaSnapchatGhost, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import AmericanExpress from "../../../../../public/assets/american-express.png";
import Visa from "../../../../../public/assets/visa.png";
import Mastercard from "../../../../../public/assets/mastercard.png";
// import PlayStore from "../../../../public/"
import "./Footer.css";

const Footer = () => {
  return (
    <div className="">
      <div className="w-full">
        <hr className="text-[#fafafa] w-full" />
      </div>

      <div className="flex items-center justify-around footerJoin">
        <h1 className="text-[#fafafa] text-[3rem] font-custom-font-playfair">
          Join us for an <span className="block"></span> unforgettable
          experience
        </h1>
        <div className="flex flex-col ">
          <h6 className="tracking-widest text-[#fafafa] text-[0.75rem] font-custom-font-roboto">
            DOWNLOAD THE GROVES APP
          </h6>
          <div className="flex w-36	gap-[2rem]">
            <Image src={AppStore} />
            <Image src={AppStore} />
          </div>
        </div>
      </div>
      <div className="flex justify-around footerInfo">
        <div className="flex flex-col gap-[20px] pt-20">
          <div>
            <span className="tracking-wider text-[#fafafa] font-custom-font-roboto">
              LOCATION
            </span>
          </div>
          <div>
            <h6 className="tracking-wider  text-[#fafafa] font-custom-font-roboto">
              Al-Hizam Park
            </h6>
            <h6 className="tracking-wider text-[#fafafa] font-custom-font-roboto">
              Al-Semairi, Yanbu Al Bahr 46455
            </h6>
            <h6 className="tracking-wider text-[#fafafa] font-custom-font-roboto">
              Saudi Arabia
            </h6>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] pt-20">
          <div>
            <span className="tracking-wider text-[#fafafa] font-custom-font-roboto">
              WORKING HOURS
            </span>
          </div>
          <div>
            <h6 className="tracking-wider text-[#fafafa] font-custom-font-roboto">
              Sun Until Thurs: 4PM
            </h6>
            <h6 className="tracking-wider text-[#fafafa] font-custom-font-roboto">
              Fri & Sat: 2:30PM
            </h6>
          </div>
          <div>
            <h6 className="tracking-wider text-[#fafafa] font-custom-font-roboto">
              Gates Close at:
            </h6>
            <h6 className="tracking-wider text-[#fafafa] font-custom-font-roboto">
              Sat Until Wed: 12:00AM
            </h6>
            <h6 className="tracking-wider text-[#fafafa] font-custom-font-roboto">
              Thurs & Fri: 12:30AM
            </h6>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] pt-20 font-custom-font-roboto">
          <div>
            <span className="tracking-wider text-[#fafafa] font-custom-font-roboto">
              GUEST SERVICE CALL
            </span>
          </div>
          <div>
            <h6 className="tracking-wider text-[#fafafa] font-custom-font-roboto">
              cc@thegroves-sa.com
            </h6>
            <h6 className="tracking-wider text-[#fafafa] font-custom-font-roboto">
              92001672
            </h6>
            <h6 className="tracking-wider text-[#fafafa] font-custom-font-roboto">
              Saudi Arabia
            </h6>
          </div>
          <div>
            <h6 className="tracking-wider text-[#fafafa] font-custom-font-roboto">
              +96655566313309
            </h6>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between px-16 mt-10 logosGrooves">
        <div>
          <Image src={GrovesLogo} className="w-96" />
        </div>

        <div className="">
          <ul className="flex items-center gap-[1.5rem]">
            <li>
              <a href="">
                <FaTiktok size={30} color="#929292" />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram size={30} color="#929292" />
              </a>
            </li>
            <li>
              <a href="">
                <FaXTwitter className="fax" size={30} />
              </a>
            </li>
            <li>
              <a href="">
                <FaSnapchatGhost size={30} color="#929292" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-between mt-6 conditionsAndPayments">
        <div className="flex items-center gap-[20px] ml-[90px] conditions">
          <span className="text-[#fafafa]">Terms & Conditions</span>
          <span className="text-[#fafafa]">Privacy Policy</span>
          <span className="text-[#fafafa]">
            @2023 The Groves for Entertainment
          </span>
        </div>

        <div className="flex justify-between items-center gap-[10px] relative right-[-20px] payMethods mr-[80px]">
          <Image src={Mastercard} className="w-10" />
          <Image src={Visa} className="w-10" />
          <Image src={AmericanExpress} className="w-10" />
        </div>
      </div>
    </div>
  );
};

export default Footer
