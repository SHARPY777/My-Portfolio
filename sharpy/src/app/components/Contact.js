"use client";
import React from "react";
import { MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm } from "react-hook-form";

function Contact() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (formData) => {
    window.location.href = `mailto:prasad.s.shelar@gmail.com?subject=${formData.subject}&body=${formData.body},${formData.message},(${formData.email})`;
  };
  return (
    <section  id="contact">
    <div className="h-screen flex relative flex-col text-center md:text-left md:text-row max-w-7xl justify-evenly mx-auto items-center">
      
      <h3 className="tracking-[20px] text-center uppercase text-white text-2xl ">
        Contact
      </h3>

      <div className="flex flex-col space-y-5 items-start justify-center">
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
              className="outline-none bg-slate-400/10 rounded-sm w-80  px-6 py-4  text-gray-500 placeholder-gray-500"
            />
            <input
              {...register("email")}
              placeholder="Email"
              type="email"
              className="outline-none bg-slate-400/10 rounded-sm w-80   px-6 py-4  text-gray-500 placeholder-gray-500"
            />
          </div>

          <input
            placeholder="Subject"
            {...register("subject")}
            className="outline-none bg-slate-400/10 rounded-sm w-80   px-6 py-4  text-gray-500 placeholder-gray-500"
            type="text"
          />

          <textarea
            {...register("message")}
            placeholder="Message"
            className="outline-none bg-slate-400/10 rounded-sm w-80   px-6 py-4  text-gray-500 placeholder-gray-500"
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
   </section>
  );
}

export default Contact;
