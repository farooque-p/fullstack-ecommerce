import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[2fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img className="mb-5 w-32" src={assets.logo} alt="footer logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            autem facilis alias repudiandae numquam accusamus eveniet incidunt
            odio dolorum, dolorem voluptas voluptatum fugit nihil ratione
            tempore asperiores consequuntur veniam facere.
          </p>
        </div>
        <div>
          <p className="text-3xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-3xl font-medium mb-5">GET-IN-TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-234-567-890</li>
            <li>contact@foreveryou.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          &copy; Copyright 2024 @ forever.com - All Rights Reservered.
        </p>
      </div>
    </div>
  );
};

export default Footer;
