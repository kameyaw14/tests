import React, { useState } from "react";
import { toast } from "react-toastify";
import { Oval } from "react-loader-spinner";
import NavButtons from "../components/NavigationBTNs";
import { motion } from "framer-motion";
import { SlideLeft } from "../utils/animation";

const ContactPage = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState("contact");

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Show the loader
    setResult("Sending...");
    const formData = new FormData(e.target);

    formData.append("access_key", "b516dc36-c946-4b73-9d45-b5ee7c950266");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        toast.success("Form Submitted Successfully");
        e.target.reset();
      } else {
        console.error("Error", data);
        setResult(data.message || "Error Submitting Form!");
        toast.error("Error Submitting Form!");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setResult("Network Error!");
      toast.error("Network Error!");
    } finally {
      setLoading(false); // Hide the loader after completion
    }
  };

  return (
    <div className="min-h-screen bg-black text-gray-300 py-10 px-4 flex justify-center items-center">
      <motion.div
        variants={SlideLeft(0)}
        initial="hidden"
        whileInView="visible"
        className="mt-20 max-w-4xl w-full bg-gray-800 rounded-lg shadow-lg p-8"
      >
        <motion.h1
          variants={SlideLeft(0)}
          initial="hidden"
          whileInView="visible"
          className="text-4xl font-semibold text-blue-400 mb-6 text-center"
        >
          Contact Me
        </motion.h1>
        <motion.p
          variants={SlideLeft(0)}
          initial="hidden"
          whileInView="visible"
          className="text-center mb-10"
        >
          Have a project in mind or just want to say hello? Fill out the form
          below or reach out via the contact details provided.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.form
            variants={SlideLeft(0)}
            initial="hidden"
            whileInView="visible"
            onSubmit={onSubmit}
            className="z-20 space-y-6"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-400"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-400"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-400"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-gray-200 border border-gray-600 focus:outline-none focus:border-blue-500"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-400 transition duration-300"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <Oval
                  height={24}
                  width={24}
                  color="#fff"
                  ariaLabel="loading"
                  strokeWidth={4}
                  strokeWidthSecondary={4}
                />
              ) : (
                "Send Message"
              )}
            </button>
          </motion.form>

          {/* Contact Details */}
          <motion.div
            variants={SlideLeft(0)}
            initial="hidden"
            whileInView="visible"
            className="z-20 space-y-4"
          >
            <div className="flex items-center">
              <span className="text-blue-400 text-xl">
                <i className="fas fa-phone-alt"></i>
              </span>
              <p className="ml-4">+233 123 456 789</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 text-xl">
                <i className="fas fa-envelope"></i>
              </span>
              <p className="ml-4">email@example.com</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 text-xl">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <p className="ml-4">Kumasi, Ghana</p>
            </div>
            <div className="flex items-center">
              <span className="text-blue-400 text-xl">
                <i className="fas fa-globe"></i>
              </span>
              <p className="ml-4">www.example.com</p>
            </div>
          </motion.div>
        </div>
        {result && (
          <p className="text-center mt-6 text-sm text-gray-400">{result}</p>
        )}
      </motion.div>
      {/* NavButtons */}
      <div className="">
        <NavButtons leftTo={"/portfolio"} page={page} />
      </div>
    </div>
  );
};

export default ContactPage;
