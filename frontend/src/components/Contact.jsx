import React from 'react';
import { FaAirbnb } from "react-icons/fa";
import juicon  from '../assets/jd_icon.jpeg'
import agoda  from '../assets/agoda_icon.jpeg'


const Contact = () => {
  return (
    <div className=" bg-[#af9a7d]">
      <div className="flex justify-around p-3">
        {/* Left Side */}
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-gray-800">Astro Agro Farm Stay</h1>
          <p className="text-xl text-white mt-2">“Where Comfort Meets Nature”</p>
        </div>

        {/* Right Side */}
        <div className="flex flex-col justify-center text-right">
          <p className="text-2xl font-semibold text-gray-800"> Dilip Khopade</p>
          <p className="text-xl  mt-2">Contact Me:8263841470</p>
          <p className="text-xl  mt-2">Contact Me:8983098891</p>

          <div className="mt-8 flex justify-center space-x-6 text-white">
        <a href="https://www.agoda.com/astro-agro-farm-stay/hotel/karjat-in.html?countryId=35&finalPriceView=1&isShowMobileAppPrice=false&cid=-1&numberOfBedrooms=&familyMode=false&adults=1&children=0&rooms=1&maxRooms=0&checkIn=2025-01-16&isCalendarCallout=false&childAges=&numberOfGuest=0&missingChildAges=false&travellerType=0&showReviewSubmissionEntry=false&currencyCode=INR&isFreeOccSearch=false&los=1&searchrequestid=6d1e1a24-6550-4f9e-ba43-f3ca38e215e6" target="_blank" rel="noopener noreferrer">
          {/* <FaAgoda className="text-3xl text-white hover:text-green-500" /> */}
          <img src={agoda} alt='just dial' className='h-8'/>
        </a>
        <a href="https://www.airbnb.co.in/rooms/1327280083659131490?adults=1&children=0&enable_m3_private_room=true&infants=0&pets=0&search_mode=regular_search&check_in=2025-01-10&check_out=2025-01-15&source_impression_id=p3_1736518411_P3eH2_tyIGnKGvJF&previous_page_section_name=1000&federated_search_id=e6866904-b773-406d-b361-9ff286717363" target="_blank" rel="noopener noreferrer">
          <FaAirbnb className="text-3xl text-white hover:text-red-500" />
        </a>
        <a href="https://www.justdial.com/Karjat/Astro-Agro-Farm-Stay-Near-Dolavali-Railway-Station-Kharvai-Khurd/9999P2141-2141-241225134423-U6C4_BZDET?auto=1&trkid=9987842060&term=astro%20agro" target="_blank" rel="noopener noreferrer">
          {/* <FaJustdial className="text-3xl text-white hover:text-blue-500" /> */}
          <img src={juicon} alt='just dial' className='h-8'/>
        </a>
      </div>
        </div>
      </div>

      {/* Links to Booking Platforms */}

    </div>
  );
};

export default Contact;
