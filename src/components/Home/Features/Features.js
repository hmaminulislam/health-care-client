import React from 'react';
import { FaAmbulance, FaMedkit, FaRegHospital, FaStethoscope, FaWheelchair } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";

const Features = () => {
    return (
      <div className="px-5 sm:px-10 md:px-20 my-20">
        <h2 className="text-3xl font-semibold mb-8">Features</h2>
        <div className="grid gap-20 grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center">
            <span className="mr-5 border-2 border-emerald-700 bg-emerald-600 rounded-full p-5">
              <IoIosCall className="text-3xl text-white"></IoIosCall>
            </span>
            <div>
              <h4 className="text-xl font-semibold">Phone Services</h4>
              <p className="text-sm text-gray-600">
                Join us to become a member of partner program, benefit from a
                skyline brand and service. Business SMS gateway is a
                communication device for companies to reach their customers
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-5 border-2 border-emerald-700 bg-emerald-600 rounded-full p-5">
              <FaMedkit className="text-3xl text-white"></FaMedkit>
            </span>
            <div>
              <h4 className="text-xl font-semibold">
                Advanced Medical Facilities
              </h4>
              <p className="text-sm text-gray-600">
                The gold standard in the assessment of liver diseases is liver
                biopsy. However, thanks to the newly-devised Fibroscan
                technology, ultrasound waves are now used instead of biopsies in
                many liver diseases.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-5 border-2 border-emerald-700 bg-emerald-600 rounded-full p-5">
              <FaAmbulance className="text-3xl text-white"></FaAmbulance>
            </span>
            <div>
              <h4 className="text-xl font-semibold">24/7 Ambulance Services</h4>
              <p className="text-sm text-gray-600">
                Search Ambulance Services, Top Results From Trusted Resources.
                Search Ambulance Services, Get Expert Advice and Curated Content
                on Top10quest. Explore the Best Info Now.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-5 border-2 border-emerald-700 bg-emerald-600 rounded-full p-5">
              <FaStethoscope className="text-3xl text-white"></FaStethoscope>
            </span>
            <div>
              <h4 className="text-xl font-semibold">
                Excellent Ancillary Services
              </h4>
              <p className="text-sm text-gray-600">
                Adding ancillary services to your practice not only acts as an
                additional revenue stream, but it improves your patient care
                experience. It’s a win-win for both practitioners and patients
                alike.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-5 border-2 border-emerald-700 bg-emerald-600 rounded-full p-5">
              <FaRegHospital className="text-3xl text-white"></FaRegHospital>
            </span>
            <div>
              <h4 className="text-xl font-semibold">
                Developmental Specialist?
              </h4>
              <p className="text-sm text-gray-600">
                A developmental specialist is a medical professional that is an
                authority in assessing the physical, medical, or emotional
                development of an individual. A referral to a developmental
                specialist.
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className="mr-5 border-2 border-emerald-700 bg-emerald-600 rounded-full p-5">
              <FaWheelchair className="text-3xl text-white"></FaWheelchair>
            </span>
            <div>
              <h4 className="text-xl font-semibold">Social Services</h4>
              <p className="text-sm text-gray-600">
                You were meant to be an acknowledged leader in the field of
                clinical social work, drawing on your experience to build
                knowledge through the development and dissemination.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Features;