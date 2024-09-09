"use client";
import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (formData) => {
    const serviceID = 'service_6tu1vyv';
    const templateID = 'template_ohldcbe';
    const userID = 'Dg5txRD_G7cQOO0yR';

    emailjs.send(serviceID, templateID, formData, userID)
      .then(() => {
        toast.success("Email sent successfully!");
        reset(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.error("Failed to send email:", error); 
        toast.error("Failed to send email.");
      });
  };

  return (
    <section id="contact">
      <div className="h-screen flex relative flex-col text-center md:text-left md:text-row max-w-7xl justify-evenly mx-auto items-center mt-20">
        <h3 className="tracking-[20px] text-center uppercase text-white text-2xl">
          Contact
        </h3>

        <div className="flex flex-col space-y-5 items-start justify-center mb-60">
          <div className="space-y-5">
            <div className="flex items-center space-x-4">
              <EnvelopeIcon className="h-8 w-8 text-purple-400 animate-pulse" />
              <p className="text-xl">prasad.s.shelar@gmail.com</p>
            </div>

            <div className="flex items-center space-x-4">
              <MapPinIcon className="h-8 w-8 text-purple-400 animate-pulse" />
              <p className="text-xl">Nashik 422007</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-60 sm:w-full mx-auto"
          >
            <div className="space-y-2 flex flex-col md:flex">
            <input
                {...register("name")}
                placeholder="Name"
                type="text"
                className="outline-none bg-slate-400/10 rounded-sm w-full px-6 py-4 text-white placeholder-purple-500"
              />
              <input
                {...register("email")}
                placeholder="Email"
                type="email"
                className="outline-none bg-slate-400/10 rounded-sm w-full px-6 py-4 text-white placeholder-purple-500"
              />
            </div>

            <input
              placeholder="Subject"
              {...register("subject")}
              className="outline-none bg-slate-400/10 rounded-sm w-full px-6 py-4 text-white placeholder-purple-500"
              type="text"
            />

            <textarea
              {...register("message")}
              placeholder="Message"
              className="outline-none bg-slate-400/10 rounded-sm w-full px-6 py-4 text-white placeholder-purple-500"
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-indigo-500 hover:to-purple-600 px-4 py-3 rounded-lg font-bold text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Contact;
