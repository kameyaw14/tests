import React from "react";
import Title from "../components/Title/Title";
import Services_Data from "../assets/images/services_data";
import { useParams } from "react-router-dom";

const Service = () => {
  const { serviceId } = useParams();

  const service = Services_Data.find(
    (item) => item.s_no === serviceId.padStart(2, "0")
  );

  if (!service) {
    return (
      <div className="text-white text-center mt-10">Service not found</div>
    );
  }

  return (
    <div className="relative min-h-screen">
      {/* Original Background */}
      <div className="absolute inset-0 z-[-2] bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-10 text-white">
        {/* Title Section */}
        <div className="mb-10 text-center">
          <Title text1={service.s_name} text2={"Details"} />
        </div>

        {/* Service Description */}
        <div className="max-w-3xl mx-auto text-lg sm:text-xl leading-relaxed space-y-6">
          <p className="text-gray-300">{service.s_desc}</p>

          {/* Additional Info */}
          <div className="space-y-4 mt-8">
            <h3 className="text-xl font-semibold text-yellow-400">
              Technologies Used:
            </h3>
            <ul className="list-disc pl-5 text-gray-300">
              {service.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold text-yellow-400 mt-6">
              Example Projects:
            </h3>
            <ul className="list-disc pl-5 text-gray-300">
              {service.examples.map((example, index) => (
                <li key={index}>{example}</li>
              ))}
            </ul>
          </div>

          {/* Button */}
          {/* <div className="flex justify-center mt-8">
            <a
              href="#"
              className="bg-yellow-500 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
            >
              Learn More
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Service;
