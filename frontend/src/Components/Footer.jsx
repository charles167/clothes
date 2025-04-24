import React from "react";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <div className="mt-40">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
        {/* Logo and Description */}
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="Company Logo" />
          <p className="w-full md:w-2/3 text-gray-600">
            Historically, surnames evolved as a way to sort people into groups - by occupation,
            place of origin, clan affiliation, patronage, and parentage.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
            <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-1 text-gray-600" >
                <li>+2348160609012</li>
                <li>charles</li>

            </ul>

        </div>
        
        {/* More Sections Could Go Here (e.g., Contact Info or Social Media) */}
      </div>
      <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ crownngold.com - All Right Reserved.</p>

    </div>
  );
}

export default Footer;
 