import React from "react";

const ContactUs = () => {
  return (
    <div className="flex flex-col">
      <h3 className="mt-5 mb-1 mr-5 font-bold ml-5">Bize Ulaşın</h3>
      <div className="flex-grow">
        {" "}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d70170.60525225969!2d29.21095740731861!3d40.84793574371394!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x14cac651cf76dd5d%3A0x603cd584ace373f7!2zVVRBIEdyb3VwLCBBeWRpbnRlcGUgTWFoLCBHw7x6aW4gU29rYcSfxLEsIFR1emxhL8Swc3RhbmJ1bA!3m2!1d40.8478352!2d29.293359799999998!4m5!1s0x14cac651cf76dd5d%3A0x603cd584ace373f7!2zQXlkxLFudGVwZSwgR8O8emluIFNva2HEn8SxIE5vOjMvMiwgMzQ3NDIgVHV6bGEvxLBzdGFuYnVs!3m2!1d40.8478352!2d29.293359799999998!5e1!3m2!1str!2str!4v1738870752636!5m2!1str!2str"
          className="w-full h-100 my-7"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
