import React, { useContext } from "react";
import { addressTr, grups, TURKCE } from "../api/dataTr";
import { addressEng } from "../api/dataEng";
import { UserContext } from "../contexts/UserContext";
import { FaMobileScreen } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";

const ContactUs = () => {
  const { language } = useContext(UserContext);

  return (
    <div className="flex flex-col">
      <div className="flex justify-center items-center">
        <h4
          className=" text-3xl my-10 md:text-5xl leading-[58.09px] tracking-[1%] font-medium text-center "
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {language === TURKCE ? "Contact Us" : "Bize Ulaşın"}
        </h4>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center md:justify-between md:items-start md:ml-10 md:mr-10">
        <div className="flex flex-col text-center md:text-start">
          <h1 className="mt-5 mb-1 mr-5 text-2xl font-bold ">
            {language === TURKCE
              ? "UTA Foreign Trade Limited Company"
              : "UTA Dış Ticaret Limited Şirketi"}
          </h1>
          <div className="flex flex-col justify-center items-center text-center md:text-start md:justify-start md:items-start">
            <div className="flex flex-row gap-5">
              <FaLocationDot className="mt-1" />
              <p>
                {" "}
                {language === TURKCE ? addressEng.address : addressTr.address}
              </p>
            </div>

            <p className="md:ml-9">
              {" "}
              {language === TURKCE ? addressEng.pk : addressTr.pk}
            </p>
            <p className="md:ml-9">
              {" "}
              {language === TURKCE ? addressEng.city : addressTr.city}
            </p>
            <div className="flex flex-row gap-5">
              <MdCall className="mt-1" />
              <p> {language === TURKCE ? addressEng.tel1 : addressTr.tel1}</p>
            </div>
            <div className="flex flex-row gap-5">
              <FaMobileScreen className="mt-1" />
              <p> {language === TURKCE ? addressEng.tel2 : addressTr.tel2}</p>
            </div>
            <div className="flex flex-row gap-5">
              <IoIosMail className="mt-1" />
              <a
                className="cursor-pointer hover:bg-[#f7c75e] rounded-md"
                href={`mailto:${addressTr.mail}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {addressTr.mail}
              </a>
            </div>
          </div>
        </div>
        <div>
          <figure className="grid md:grid-cols-4 grid-cols-2 gap-8 md:gap-2 mt-10">
            {grups.map((grup, i) => (
              <div key={i} className="px-2 ">
                <img src={grup} className="w-30 h-auto" />
              </div>
            ))}
          </figure>
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="flex-grow">
          {" "}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d70170.60525225969!2d29.21095740731861!3d40.84793574371394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x14cac651cf76dd5d%3A0x603cd584ace373f7!2zVVRBIEdyb3VwLCBBeWRpbnRlcGUgTWFoLCBHw7x6aW4gU29rYcSfxLEsIFR1emxhL8Swc3RhbmJ1bA!3m2!1d40.8478352!2d29.293359799999998!4m5!1s0x14cac651cf76dd5d%3A0x603cd584ace373f7!2zQXlkxLFudGVwZSwgR8O8emluIFNva2HEn8SxIE5vOjMvMiwgMzQ3NDIgVHV6bGEvxLBzdGFuYnVs!3m2!1d40.8478352!2d29.293359799999998!5e1!3m2!1str!2str!4v1738870752636!5m2!1str!2str"
            className="w-full h-200 my-7"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
