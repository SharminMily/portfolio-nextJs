/* eslint-disable react/no-unknown-property */
'use client';

import Image from "next/image";

const ContactMe = () => {
  return (
    <div className="w-full my-20 px-4 sm:px-6 lg:px-20 mb-28">
      <section id="contact-section" className="w-full">
        <h1 className="text-3xl sm:text-4xl underline my-10 text-center text-cyan-400 font-semibold">
          Contact Me
        </h1>

        {/* -- Contact Info Cards -- */}
        <div
          data-aos="zoom-in"
          className="w-full flex flex-wrap justify-center gap-8 bg-[#0c0932] bg-opacity-60 rounded-md shadow-inner shadow-cyan-400 border border-cyan-400 p-6 sm:p-10"
        >
          {/*-- WhatsApp-- */}
          <div className="text-center w-[200px]">
            <Image height={100} width={100}
              className="w-12 rounded-xl mx-auto mb-2"
              src="https://i.ibb.co/dD506Dd/200-gif-cid-dda24d50hgfg0eelhctwq84m8pbs93owfo8mfh972ddwm52r-ep-v1-internal-gif-by-id-rid-200.gif"
              alt="WhatsApp"
            />
            <h1 className="text-cyan-400 font-semibold text-lg">WhatsApp</h1>
            <h3 className="text-sm text-white">+8801971867735</h3>
          </div>

          {/* Home */}
          <div className="text-center w-[200px]">
            <Image height={100} width={100}
              className="w-12 rounded-full mx-auto mb-2"
              src="https://i.ibb.co/fq1MR5j/200-gif-cid-dda24d50kfd6smyjsa8dhyqwnfl5m2brwuhd3mj7nuofp4wm-ep-v1-internal-gif-by-id-rid-200.gif"
              alt="Home"
            />
            <h1 className="text-cyan-400 font-semibold text-lg">Home</h1>
            <h3 className="text-sm text-white">Sylhet, Bangladesh</h3>
          </div>

          {/* Email */}
          <div className="text-center w-[200px]">
            <Image height={100} width={100}
              className="w-12 rounded-full mx-auto mb-2"
              src="https://i.ibb.co/b5FzD8w/200-gif-cid-dda24d5086lxo6nvewlbedtu7py1bu1pnek7io9i0vhdg1pa-ep-v1-internal-gif-by-id-rid-200.gif"
              alt="Email"
            />
            <h1 className="text-cyan-400 font-semibold text-lg">Email</h1>
            <h3 className="text-sm text-white break-words px-2 max-w-[180px] mx-auto">
              sharminakther5599@gmail.com
            </h3>
          </div>
        </div>

        {/* Contact Form & Image */}
        <div className="w-full mt-16">
          <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
            {/* Image */}
            <div className="w-full lg:w-1/2 flex justify-center">
              <Image height={100} width={100}
                src="https://i.ibb.co/J3Q6wVm/200-gif-cid-dda24d50t1e11bdcfz89642llrq5ve9guzpdv8ac02mqk4ae-ep-v1-internal-gif-by-id-rid-200.gif"
                alt="Contact"
                className="w-full max-w-[450px] border-2 border-black rounded-[60px_1px_80px_1px]"
              />
            </div>

            {/* Form */}
            <div className="w-full lg:w-1/2 bg-[#0c0932] bg-opacity-60 p-6 rounded-md shadow-inner shadow-cyan-400">
              <form className="space-y-4 w-full" role="form">
                {/* Name */}
                <div className="flex flex-col">
                  <label className="text-white mb-1">Name</label>
                  <input
                    className="px-3 py-2 rounded text-black"
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label className="text-white mb-1">Email</label>
                  <input
                    className="px-3 py-2 rounded text-black"
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label className="text-white mb-1">Message</label>
                  <textarea
                    className="px-3 py-2 rounded text-black"
                    name="message"
                    placeholder="Your Message"
                    rows={5}
                    required
                  ></textarea>
                </div>

                {/* Submit */}
                <input
                  className="text-white font-bold bg-cyan-400 py-2 w-full rounded hover:bg-cyan-500 transition duration-300 cursor-pointer"
                  type="submit"
                  value="Send"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactMe;
